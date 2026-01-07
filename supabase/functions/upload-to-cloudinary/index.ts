import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const cloudName = Deno.env.get('CLOUDINARY_CLOUD_NAME');
    const apiKey = Deno.env.get('CLOUDINARY_API_KEY');
    const apiSecret = Deno.env.get('CLOUDINARY_API_SECRET');

    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error('Cloudinary credentials not configured');
    }

    const body = await req.json();
    const { imageBase64, imageUrl, publicId, folder } = body;

    // Support both base64 and URL uploads
    const fileData = imageBase64 || imageUrl;
    if (!fileData) {
      throw new Error('No image data provided. Send imageBase64 or imageUrl.');
    }

    if (!publicId) {
      throw new Error('publicId is required');
    }

    // Generate signature for upload
    const timestamp = Math.floor(Date.now() / 1000);
    const paramsToSign = folder 
      ? `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}`
      : `public_id=${publicId}&timestamp=${timestamp}`;
    
    // Create signature using Web Crypto API
    const encoder = new TextEncoder();
    const data = encoder.encode(paramsToSign + apiSecret);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', fileData);
    formData.append('public_id', publicId);
    formData.append('timestamp', timestamp.toString());
    formData.append('api_key', apiKey);
    formData.append('signature', signature);
    if (folder) {
      formData.append('folder', folder);
    }

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await uploadResponse.json();

    if (!uploadResponse.ok) {
      throw new Error(result.error?.message || 'Upload failed');
    }

    // Return success without exposing cloud name or secrets
    return new Response(
      JSON.stringify({ 
        success: true, 
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
        width: result.width,
        height: result.height
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    // Log error server-side only, don't expose details to client
    console.error('Cloudinary upload error:', errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});