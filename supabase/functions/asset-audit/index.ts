import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AssetInfo {
  path: string;
  usedIn: string[];
}

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  format: string;
  bytes: number;
  created_at: string;
}

interface AuditResult {
  path: string;
  usedIn: string[];
  status: 'uploaded' | 'not_uploaded' | 'external';
  cloudinaryUrl?: string;
  cloudinaryPublicId?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const cloudName = Deno.env.get('CLOUDINARY_CLOUD_NAME');
    const apiKey = Deno.env.get('CLOUDINARY_API_KEY');
    const apiSecret = Deno.env.get('CLOUDINARY_API_SECRET');

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Missing Cloudinary credentials');
      return new Response(
        JSON.stringify({ error: 'Cloudinary credentials not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { assets } = await req.json() as { assets: AssetInfo[] };

    if (!assets || !Array.isArray(assets)) {
      return new Response(
        JSON.stringify({ error: 'Assets array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch all Cloudinary resources
    const authString = btoa(`${apiKey}:${apiSecret}`);
    const cloudinaryResources: CloudinaryResource[] = [];
    let nextCursor: string | undefined;

    // Paginate through all resources
    do {
      const url = new URL(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image`);
      url.searchParams.set('max_results', '500');
      if (nextCursor) {
        url.searchParams.set('next_cursor', nextCursor);
      }

      const response = await fetch(url.toString(), {
        headers: {
          'Authorization': `Basic ${authString}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Cloudinary API error:', errorText);
        throw new Error(`Cloudinary API error: ${response.status}`);
      }

      const data = await response.json();
      cloudinaryResources.push(...(data.resources || []));
      nextCursor = data.next_cursor;
    } while (nextCursor);

    console.log(`Fetched ${cloudinaryResources.length} Cloudinary resources`);

    // Create a map of Cloudinary resources by public_id for quick lookup
    const cloudinaryMap = new Map<string, CloudinaryResource>();
    cloudinaryResources.forEach(resource => {
      cloudinaryMap.set(resource.public_id, resource);
      // Also add without folder prefix for matching
      const baseName = resource.public_id.split('/').pop() || '';
      cloudinaryMap.set(baseName, resource);
    });

    // Classify each asset
    const results: AuditResult[] = assets.map(asset => {
      const { path, usedIn } = asset;

      // Check if external URL
      if (path.startsWith('http://') || path.startsWith('https://')) {
        const isCloudinary = path.includes('cloudinary.com') || path.includes('res.cloudinary.com');
        return {
          path,
          usedIn,
          status: isCloudinary ? 'uploaded' : 'external',
          cloudinaryUrl: isCloudinary ? path : undefined,
        } as AuditResult;
      }

      // Extract filename without extension for matching
      const fileName = path.split('/').pop() || '';
      const fileNameWithoutExt = fileName.replace(/\.[^.]+$/, '');

      // Check various matching patterns
      const matchingResource = 
        cloudinaryMap.get(fileNameWithoutExt) ||
        cloudinaryMap.get(fileName) ||
        cloudinaryMap.get(`summit-sheds/${fileNameWithoutExt}`) ||
        cloudinaryMap.get(`assets/${fileNameWithoutExt}`);

      if (matchingResource) {
        return {
          path,
          usedIn,
          status: 'uploaded',
          cloudinaryUrl: matchingResource.secure_url,
          cloudinaryPublicId: matchingResource.public_id,
        } as AuditResult;
      }

      return {
        path,
        usedIn,
        status: 'not_uploaded',
      } as AuditResult;
    });

    // Sort: not_uploaded first, then external, then uploaded
    const statusOrder = { not_uploaded: 0, external: 1, uploaded: 2 };
    results.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

    return new Response(
      JSON.stringify({ 
        results,
        cloudinaryCount: cloudinaryResources.length,
        summary: {
          uploaded: results.filter(r => r.status === 'uploaded').length,
          not_uploaded: results.filter(r => r.status === 'not_uploaded').length,
          external: results.filter(r => r.status === 'external').length,
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    console.error('Asset audit error:', error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
