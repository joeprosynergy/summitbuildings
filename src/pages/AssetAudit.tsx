import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, Upload, CheckCircle, XCircle, ExternalLink, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Known assets from src/assets directory
const KNOWN_ASSETS = [
  { path: "src/assets/animal-shelter-1.jpg", usedIn: ["AnimalShelters.tsx"] },
  { path: "src/assets/animal-shelter-2.jpg", usedIn: ["AnimalShelters.tsx"] },
  { path: "src/assets/barn-cabin-1.jpg", usedIn: ["BarnCabin.tsx"] },
  { path: "src/assets/barn-cabin-2.jpg", usedIn: ["BarnCabin.tsx"] },
  { path: "src/assets/barn-cabin-3.jpg", usedIn: ["BarnCabin.tsx"] },
  { path: "src/assets/barn-cabin-4.jpg", usedIn: ["BarnCabin.tsx"] },
  { path: "src/assets/barn-cabin-5.jpg", usedIn: ["BarnCabin.tsx"] },
  { path: "src/assets/barn-style.jpg", usedIn: ["StylesBarn.tsx"] },
  { path: "src/assets/budget-pro-lofted-barn.png", usedIn: ["BudgetProLoftedBarn.tsx"] },
  { path: "src/assets/budget-pro-lofted-barn-2.jpeg", usedIn: ["BudgetProLoftedBarn.tsx"] },
  { path: "src/assets/budget-pro-lofted-barn-3.jpeg", usedIn: ["BudgetProLoftedBarn.tsx"] },
  { path: "src/assets/budget-pro-utility.jpeg", usedIn: ["BudgetProUtility.tsx"] },
  { path: "src/assets/budget-pro-utility.webp", usedIn: ["BudgetProUtility.tsx"] },
  { path: "src/assets/budget-pro-utility-2.jpeg", usedIn: ["BudgetProUtility.tsx"] },
  { path: "src/assets/budget-pro-utility-3.jpeg", usedIn: ["BudgetProUtility.tsx"] },
  { path: "src/assets/cabin-1.jpg", usedIn: ["Cabin.tsx"] },
  { path: "src/assets/cabin-2.jpg", usedIn: ["Cabin.tsx"] },
  { path: "src/assets/cabin-3.jpg", usedIn: ["Cabin.tsx"] },
  { path: "src/assets/cabin-4.jpg", usedIn: ["Cabin.tsx"] },
  { path: "src/assets/cabin-shed.jpg", usedIn: ["DeluxeStorageCabins.tsx"] },
  { path: "src/assets/carport.jpeg", usedIn: ["GaragesCarports.tsx"] },
  { path: "src/assets/carport-1.png", usedIn: ["Carports.tsx"] },
  { path: "src/assets/carport-2.png", usedIn: ["Carports.tsx"] },
  { path: "src/assets/carport-3.png", usedIn: ["Carports.tsx"] },
  { path: "src/assets/chicken-coop-1.jpg", usedIn: ["AnimalShelters.tsx"] },
  { path: "src/assets/chicken-coop-2.jpg", usedIn: ["AnimalShelters.tsx"] },
  { path: "src/assets/dog-kennel-1.jpg", usedIn: ["AnimalShelters.tsx"] },
  { path: "src/assets/dog-kennel-2.jpg", usedIn: ["AnimalShelters.tsx"] },
  { path: "src/assets/dormer.jpeg", usedIn: ["Components"] },
  { path: "src/assets/economy.webp", usedIn: ["BasicStorage.tsx"] },
  { path: "src/assets/economy-shed-1.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-2.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-3.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-4.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-6.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-7.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-8.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/economy-shed-9.jpg", usedIn: ["EconomyShed.tsx"] },
  { path: "src/assets/garage.webp", usedIn: ["GaragesCarports.tsx"] },
  { path: "src/assets/garage-1.jpg", usedIn: ["Garage.tsx"] },
  { path: "src/assets/garage-2.jpg", usedIn: ["Garage.tsx"] },
  { path: "src/assets/garage-3.jpg", usedIn: ["Garage.tsx"] },
  { path: "src/assets/garage-4.jpg", usedIn: ["Garage.tsx"] },
  { path: "src/assets/garage-shed.jpg", usedIn: ["Components"] },
  { path: "src/assets/greenhouse-1.jpg", usedIn: ["Greenhouse.tsx"] },
  { path: "src/assets/greenhouse-2.jpg", usedIn: ["Greenhouse.tsx"] },
  { path: "src/assets/greenhouse-3.jpg", usedIn: ["Greenhouse.tsx"] },
  { path: "src/assets/greenhouse-4.jpg", usedIn: ["Greenhouse.tsx"] },
  { path: "src/assets/hero-shed.jpg", usedIn: ["Hero.tsx"] },
  { path: "src/assets/lofted-barn.jpg", usedIn: ["BasicStorage.tsx"] },
  { path: "src/assets/lofted-barn-1.jpg", usedIn: ["ProLoftedBarn.tsx"] },
  { path: "src/assets/lofted-barn-2.jpg", usedIn: ["ProLoftedBarn.tsx"] },
  { path: "src/assets/lofted-barn-3.jpg", usedIn: ["ProLoftedBarn.tsx"] },
  { path: "src/assets/lofted-barn-4.jpg", usedIn: ["ProLoftedBarn.tsx"] },
  { path: "src/assets/mini-barn.jpeg", usedIn: ["Components"] },
  { path: "src/assets/modern-shed.jpg", usedIn: ["DeluxeStorageCabins.tsx"] },
  { path: "src/assets/modern-shed-1.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-2.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-3.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-4.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-5.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-6.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-7.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-8.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-9.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-shed-10.jpg", usedIn: ["ModernShed.tsx"] },
  { path: "src/assets/modern-style.jpg", usedIn: ["StylesModern.tsx"] },
  { path: "src/assets/pro-lofted-barn.jpg", usedIn: ["DeluxeStorageCabins.tsx"] },
  { path: "src/assets/pro-utility.webp", usedIn: ["DeluxeStorageCabins.tsx"] },
  { path: "src/assets/rv-cover-1.jpg", usedIn: ["Carports.tsx"] },
  { path: "src/assets/rv-cover-2.jpg", usedIn: ["Carports.tsx"] },
  { path: "src/assets/rv-cover-3.jpg", usedIn: ["Carports.tsx"] },
  { path: "src/assets/side-lofted-barn-1.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-lofted-barn-2.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-lofted-barn-3.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-lofted-barn-4.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-utility-1.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-utility-2.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-utility-3.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-utility-4.jpg", usedIn: ["Components"] },
  { path: "src/assets/side-utility-shed.jpg", usedIn: ["Components"] },
  { path: "src/assets/summit-logo.png", usedIn: ["Header.tsx", "Footer.tsx"] },
  { path: "src/assets/treated-garden-shed.jpg", usedIn: ["Components"] },
  { path: "src/assets/utility-shed.jpg", usedIn: ["BasicStorage.tsx"] },
  { path: "src/assets/utility-shed-1.jpg", usedIn: ["UtilityShed.tsx"] },
  { path: "src/assets/utility-shed-2.jpg", usedIn: ["UtilityShed.tsx"] },
  { path: "src/assets/utility-shed-3.jpg", usedIn: ["UtilityShed.tsx"] },
  { path: "src/assets/utility-shed-4.jpg", usedIn: ["UtilityShed.tsx"] },
  { path: "src/assets/utility-style.webp", usedIn: ["StylesUtility.tsx"] },
];

interface AuditResult {
  path: string;
  usedIn: string[];
  status: 'uploaded' | 'not_uploaded' | 'external';
  cloudinaryUrl?: string;
  cloudinaryPublicId?: string;
}

interface AuditSummary {
  uploaded: number;
  not_uploaded: number;
  external: number;
}

export default function AssetAudit() {
  const [results, setResults] = useState<AuditResult[]>([]);
  const [summary, setSummary] = useState<AuditSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadingPaths, setUploadingPaths] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const runAudit = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('asset-audit', {
        body: { assets: KNOWN_ASSETS },
      });

      if (error) throw error;

      setResults(data.results);
      setSummary(data.summary);
      toast({
        title: "Audit Complete",
        description: `Found ${data.results.length} assets. ${data.summary.not_uploaded} need uploading.`,
      });
    } catch (error) {
      console.error('Audit error:', error);
      toast({
        title: "Audit Failed",
        description: error instanceof Error ? error.message : "Failed to run audit",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadAsset = async (result: AuditResult) => {
    setUploadingPaths(prev => new Set(prev).add(result.path));
    
    try {
      // For local assets, we need to fetch them first
      const fileName = result.path.split('/').pop() || '';
      const publicId = fileName.replace(/\.[^.]+$/, '');
      
      // Import the asset dynamically
      const assetModule = await import(`../${result.path.replace('src/', '')}`);
      const assetUrl = assetModule.default;
      
      const { data, error } = await supabase.functions.invoke('upload-to-cloudinary', {
        body: {
          imageUrl: assetUrl,
          folder: 'summit-sheds',
          publicId,
        },
      });

      if (error) throw error;

      toast({
        title: "Upload Successful",
        description: `${fileName} uploaded to Cloudinary`,
      });

      // Refresh the audit
      await runAudit();
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Failed to upload asset",
        variant: "destructive",
      });
    } finally {
      setUploadingPaths(prev => {
        const next = new Set(prev);
        next.delete(result.path);
        return next;
      });
    }
  };

  const getStatusBadge = (status: AuditResult['status']) => {
    switch (status) {
      case 'uploaded':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20"><CheckCircle className="w-3 h-3 mr-1" /> Uploaded</Badge>;
      case 'not_uploaded':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" /> Not Uploaded</Badge>;
      case 'external':
        return <Badge variant="secondary"><ExternalLink className="w-3 h-3 mr-1" /> External</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Asset Audit</h1>
            <p className="text-muted-foreground mt-1">Track and manage Cloudinary asset uploads</p>
          </div>
          <Button onClick={runAudit} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <RefreshCw className="w-4 h-4 mr-2" />}
            Run Audit
          </Button>
        </div>

        {summary && (
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Uploaded</CardDescription>
                <CardTitle className="text-2xl text-green-600">{summary.uploaded}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Not Uploaded</CardDescription>
                <CardTitle className="text-2xl text-destructive">{summary.not_uploaded}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>External</CardDescription>
                <CardTitle className="text-2xl text-muted-foreground">{summary.external}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Assets ({results.length})</CardTitle>
            <CardDescription>
              {results.length === 0 
                ? "Click 'Run Audit' to scan assets" 
                : "Assets sorted by upload status"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>No audit results yet. Click "Run Audit" to start.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset Path</TableHead>
                    <TableHead>Used In</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.path}>
                      <TableCell className="font-mono text-xs max-w-[300px] truncate" title={result.path}>
                        {result.path}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {result.usedIn.join(', ')}
                      </TableCell>
                      <TableCell>{getStatusBadge(result.status)}</TableCell>
                      <TableCell className="text-right">
                        {result.status === 'not_uploaded' && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => uploadAsset(result)}
                            disabled={uploadingPaths.has(result.path)}
                          >
                            {uploadingPaths.has(result.path) ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <><Upload className="w-4 h-4 mr-1" /> Upload</>
                            )}
                          </Button>
                        )}
                        {result.status === 'uploaded' && result.cloudinaryUrl && (
                          <a 
                            href={result.cloudinaryUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                          >
                            View
                          </a>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
