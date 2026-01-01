import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Loader2, Upload, Copy } from 'lucide-react';
import { toast } from 'sonner';

// Import all images
import budgetProUtility from '@/assets/budget-pro-utility.webp';
import cabin1 from '@/assets/cabin-1.jpg';
import cabin2 from '@/assets/cabin-2.jpg';
import cabin3 from '@/assets/cabin-3.jpg';
import cabin4 from '@/assets/cabin-4.jpg';
import cabinShed from '@/assets/cabin-shed.jpg';
import carport from '@/assets/carport.jpeg';
import dormer from '@/assets/dormer.jpeg';
import economyShed1 from '@/assets/economy-shed-1.jpg';
import economyShed2 from '@/assets/economy-shed-2.jpg';
import economyShed3 from '@/assets/economy-shed-3.jpg';
import economyShed4 from '@/assets/economy-shed-4.jpg';
import economy from '@/assets/economy.webp';
import garage1 from '@/assets/garage-1.jpg';
import garage2 from '@/assets/garage-2.jpg';
import garage3 from '@/assets/garage-3.jpg';
import garage4 from '@/assets/garage-4.jpg';
import garageShed from '@/assets/garage-shed.jpg';
import garageWebp from '@/assets/garage.webp';
import heroShed from '@/assets/hero-shed.jpg';
import loftedBarn1 from '@/assets/lofted-barn-1.jpg';
import loftedBarn2 from '@/assets/lofted-barn-2.jpg';
import loftedBarn3 from '@/assets/lofted-barn-3.jpg';
import loftedBarn4 from '@/assets/lofted-barn-4.jpg';
import loftedBarn from '@/assets/lofted-barn.jpg';
import miniBarn from '@/assets/mini-barn.jpeg';
import proLoftedBarn from '@/assets/pro-lofted-barn.jpg';
import proUtility from '@/assets/pro-utility.webp';
import sideLoftedBarn1 from '@/assets/side-lofted-barn-1.jpg';
import sideLoftedBarn2 from '@/assets/side-lofted-barn-2.jpg';
import sideLoftedBarn3 from '@/assets/side-lofted-barn-3.jpg';
import sideLoftedBarn4 from '@/assets/side-lofted-barn-4.jpg';
import sideUtility1 from '@/assets/side-utility-1.jpg';
import sideUtility2 from '@/assets/side-utility-2.jpg';
import sideUtility3 from '@/assets/side-utility-3.jpg';
import sideUtility4 from '@/assets/side-utility-4.jpg';
import sideUtilityShed from '@/assets/side-utility-shed.jpg';
import summitLogo from '@/assets/summit-logo.png';
import treatedGardenShed from '@/assets/treated-garden-shed.jpg';
import utilityShed1 from '@/assets/utility-shed-1.jpg';
import utilityShed2 from '@/assets/utility-shed-2.jpg';
import utilityShed3 from '@/assets/utility-shed-3.jpg';
import utilityShed4 from '@/assets/utility-shed-4.jpg';
import utilityShed from '@/assets/utility-shed.jpg';

interface ImageItem {
  name: string;
  localPath: string;
  publicId: string;
}

const imageList: ImageItem[] = [
  { name: 'budget-pro-utility.webp', localPath: budgetProUtility, publicId: 'budget-pro-utility' },
  { name: 'cabin-1.jpg', localPath: cabin1, publicId: 'cabin-1' },
  { name: 'cabin-2.jpg', localPath: cabin2, publicId: 'cabin-2' },
  { name: 'cabin-3.jpg', localPath: cabin3, publicId: 'cabin-3' },
  { name: 'cabin-4.jpg', localPath: cabin4, publicId: 'cabin-4' },
  { name: 'cabin-shed.jpg', localPath: cabinShed, publicId: 'cabin-shed' },
  { name: 'carport.jpeg', localPath: carport, publicId: 'carport' },
  { name: 'dormer.jpeg', localPath: dormer, publicId: 'dormer' },
  { name: 'economy-shed-1.jpg', localPath: economyShed1, publicId: 'economy-shed-1' },
  { name: 'economy-shed-2.jpg', localPath: economyShed2, publicId: 'economy-shed-2' },
  { name: 'economy-shed-3.jpg', localPath: economyShed3, publicId: 'economy-shed-3' },
  { name: 'economy-shed-4.jpg', localPath: economyShed4, publicId: 'economy-shed-4' },
  { name: 'economy.webp', localPath: economy, publicId: 'economy' },
  { name: 'garage-1.jpg', localPath: garage1, publicId: 'garage-1' },
  { name: 'garage-2.jpg', localPath: garage2, publicId: 'garage-2' },
  { name: 'garage-3.jpg', localPath: garage3, publicId: 'garage-3' },
  { name: 'garage-4.jpg', localPath: garage4, publicId: 'garage-4' },
  { name: 'garage-shed.jpg', localPath: garageShed, publicId: 'garage-shed' },
  { name: 'garage.webp', localPath: garageWebp, publicId: 'garage' },
  { name: 'hero-shed.jpg', localPath: heroShed, publicId: 'hero-shed' },
  { name: 'lofted-barn-1.jpg', localPath: loftedBarn1, publicId: 'lofted-barn-1' },
  { name: 'lofted-barn-2.jpg', localPath: loftedBarn2, publicId: 'lofted-barn-2' },
  { name: 'lofted-barn-3.jpg', localPath: loftedBarn3, publicId: 'lofted-barn-3' },
  { name: 'lofted-barn-4.jpg', localPath: loftedBarn4, publicId: 'lofted-barn-4' },
  { name: 'lofted-barn.jpg', localPath: loftedBarn, publicId: 'lofted-barn' },
  { name: 'mini-barn.jpeg', localPath: miniBarn, publicId: 'mini-barn' },
  { name: 'pro-lofted-barn.jpg', localPath: proLoftedBarn, publicId: 'pro-lofted-barn' },
  { name: 'pro-utility.webp', localPath: proUtility, publicId: 'pro-utility' },
  { name: 'side-lofted-barn-1.jpg', localPath: sideLoftedBarn1, publicId: 'side-lofted-barn-1' },
  { name: 'side-lofted-barn-2.jpg', localPath: sideLoftedBarn2, publicId: 'side-lofted-barn-2' },
  { name: 'side-lofted-barn-3.jpg', localPath: sideLoftedBarn3, publicId: 'side-lofted-barn-3' },
  { name: 'side-lofted-barn-4.jpg', localPath: sideLoftedBarn4, publicId: 'side-lofted-barn-4' },
  { name: 'side-utility-1.jpg', localPath: sideUtility1, publicId: 'side-utility-1' },
  { name: 'side-utility-2.jpg', localPath: sideUtility2, publicId: 'side-utility-2' },
  { name: 'side-utility-3.jpg', localPath: sideUtility3, publicId: 'side-utility-3' },
  { name: 'side-utility-4.jpg', localPath: sideUtility4, publicId: 'side-utility-4' },
  { name: 'side-utility-shed.jpg', localPath: sideUtilityShed, publicId: 'side-utility-shed' },
  { name: 'summit-logo.png', localPath: summitLogo, publicId: 'summit-logo' },
  { name: 'treated-garden-shed.jpg', localPath: treatedGardenShed, publicId: 'treated-garden-shed' },
  { name: 'utility-shed-1.jpg', localPath: utilityShed1, publicId: 'utility-shed-1' },
  { name: 'utility-shed-2.jpg', localPath: utilityShed2, publicId: 'utility-shed-2' },
  { name: 'utility-shed-3.jpg', localPath: utilityShed3, publicId: 'utility-shed-3' },
  { name: 'utility-shed-4.jpg', localPath: utilityShed4, publicId: 'utility-shed-4' },
  { name: 'utility-shed.jpg', localPath: utilityShed, publicId: 'utility-shed' },
];

interface UploadStatus {
  status: 'pending' | 'uploading' | 'success' | 'error';
  url?: string;
  error?: string;
}

const AdminCloudinaryUpload = () => {
  const [uploadStatuses, setUploadStatuses] = useState<Record<string, UploadStatus>>({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const convertImageToBase64 = async (imagePath: string): Promise<string> => {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const uploadImage = async (image: ImageItem): Promise<{ success: boolean; url?: string; error?: string }> => {
    try {
      const base64 = await convertImageToBase64(image.localPath);
      
      const { data, error } = await supabase.functions.invoke('upload-to-cloudinary', {
        body: {
          imageBase64: base64,
          publicId: image.publicId,
          folder: 'summit-buildings'
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.success) {
        throw new Error(data.error || 'Upload failed');
      }

      return { success: true, url: data.url };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      return { success: false, error: errorMessage };
    }
  };

  const startUpload = async () => {
    setIsUploading(true);
    setUploadComplete(false);
    
    // Initialize all statuses to pending
    const initialStatuses: Record<string, UploadStatus> = {};
    imageList.forEach(img => {
      initialStatuses[img.name] = { status: 'pending' };
    });
    setUploadStatuses(initialStatuses);

    // Upload images sequentially to avoid overwhelming the server
    for (const image of imageList) {
      setUploadStatuses(prev => ({
        ...prev,
        [image.name]: { status: 'uploading' }
      }));

      const result = await uploadImage(image);

      setUploadStatuses(prev => ({
        ...prev,
        [image.name]: {
          status: result.success ? 'success' : 'error',
          url: result.url,
          error: result.error
        }
      }));

      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsUploading(false);
    setUploadComplete(true);
    toast.success('Upload complete! Check results below.');
  };

  const copyUrlMapping = () => {
    const successfulUploads = Object.entries(uploadStatuses)
      .filter(([_, status]) => status.status === 'success' && status.url)
      .map(([name, status]) => {
        const publicId = imageList.find(img => img.name === name)?.publicId;
        return `  '${publicId}': '${status.url}',`;
      })
      .join('\n');

    const mapping = `export const cloudinaryImages = {\n${successfulUploads}\n};`;
    navigator.clipboard.writeText(mapping);
    toast.success('URL mapping copied to clipboard!');
  };

  const successCount = Object.values(uploadStatuses).filter(s => s.status === 'success').length;
  const errorCount = Object.values(uploadStatuses).filter(s => s.status === 'error').length;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cloudinary Image Upload</h1>
        <p className="text-muted-foreground mb-8">
          Upload all {imageList.length} images to Cloudinary
        </p>

        <div className="flex gap-4 mb-8">
          <Button 
            onClick={startUpload} 
            disabled={isUploading}
            size="lg"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5 mr-2" />
                Start Upload
              </>
            )}
          </Button>

          {uploadComplete && successCount > 0 && (
            <Button onClick={copyUrlMapping} variant="outline" size="lg">
              <Copy className="w-5 h-5 mr-2" />
              Copy URL Mapping
            </Button>
          )}
        </div>

        {Object.keys(uploadStatuses).length > 0 && (
          <div className="mb-6 p-4 bg-muted rounded-lg">
            <p className="font-medium">
              Progress: {successCount + errorCount} / {imageList.length}
              {successCount > 0 && <span className="text-green-600 ml-4">✓ {successCount} success</span>}
              {errorCount > 0 && <span className="text-red-600 ml-4">✗ {errorCount} failed</span>}
            </p>
          </div>
        )}

        <div className="space-y-2">
          {imageList.map((image) => {
            const status = uploadStatuses[image.name];
            return (
              <div 
                key={image.name}
                className="flex items-center gap-4 p-3 bg-card rounded-lg border"
              >
                <div className="w-12 h-12 rounded overflow-hidden bg-muted flex-shrink-0">
                  <img 
                    src={image.localPath} 
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{image.name}</p>
                  {status?.url && (
                    <p className="text-xs text-muted-foreground truncate">{status.url}</p>
                  )}
                  {status?.error && (
                    <p className="text-xs text-red-600">{status.error}</p>
                  )}
                </div>

                <div className="flex-shrink-0">
                  {!status && <span className="text-muted-foreground text-sm">Waiting</span>}
                  {status?.status === 'pending' && <span className="text-muted-foreground text-sm">Pending</span>}
                  {status?.status === 'uploading' && <Loader2 className="w-5 h-5 animate-spin text-primary" />}
                  {status?.status === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {status?.status === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminCloudinaryUpload;
