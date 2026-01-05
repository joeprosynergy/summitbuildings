import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Loader2, Upload, Copy, RefreshCw, ChevronDown, ChevronUp, Cloud } from 'lucide-react';
import { toast } from 'sonner';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Import all images that need to be uploaded to Cloudinary
import budgetProUtility from '@/assets/budget-pro-utility.jpeg';
import budgetProUtility2 from '@/assets/budget-pro-utility-2.jpeg';
import budgetProUtility3 from '@/assets/budget-pro-utility-3.jpeg';
import budgetProLoftedBarn from '@/assets/budget-pro-lofted-barn.png';
import budgetProLoftedBarn2 from '@/assets/budget-pro-lofted-barn-2.jpeg';
import budgetProLoftedBarn3 from '@/assets/budget-pro-lofted-barn-3.jpeg';
import cabin1 from '@/assets/cabin-1.jpg';
import cabin2 from '@/assets/cabin-2.jpg';
import cabin3 from '@/assets/cabin-3.jpg';
import cabin4 from '@/assets/cabin-4.jpg';
import cabinShed from '@/assets/cabin-shed.jpg';
import carport from '@/assets/carport.jpeg';
import carport1 from '@/assets/carport-1.png';
import carport2 from '@/assets/carport-2.png';
import carport3 from '@/assets/carport-3.png';
import dormer from '@/assets/dormer.jpeg';
import economyShed1 from '@/assets/economy-shed-1.jpg';
import economyShed2 from '@/assets/economy-shed-2.jpg';
import economyShed3 from '@/assets/economy-shed-3.jpg';
import economyShed4 from '@/assets/economy-shed-4.jpg';
import economyShed6 from '@/assets/economy-shed-6.jpg';
import economyShed7 from '@/assets/economy-shed-7.jpg';
import economyShed8 from '@/assets/economy-shed-8.jpg';
import economyShed9 from '@/assets/economy-shed-9.jpg';
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
import proLoftedBarn from '@/assets/pro-lofted-barn.jpg';
import proUtility from '@/assets/pro-utility.webp';
import rvCover1 from '@/assets/rv-cover-1.jpg';
import rvCover2 from '@/assets/rv-cover-2.jpg';
import rvCover3 from '@/assets/rv-cover-3.jpg';
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
import miniBarn from '@/assets/mini-barn.jpeg';
import barnStyle from '@/assets/barn-style.jpg';
import modernShed from '@/assets/modern-shed.jpg';
import modernStyle from '@/assets/modern-style.jpg';
import utilityStyle from '@/assets/utility-style.webp';

const CLOUDINARY_CLOUD_NAME = 'dwhwbbbev';
const CLOUDINARY_FOLDER = 'summit-buildings';

interface ImageItem {
  name: string;
  localPath: string;
  publicId: string;
}

const imageList: ImageItem[] = [
  // Logo & Hero
  { name: 'summit-logo.png', localPath: summitLogo, publicId: 'summit-logo' },
  { name: 'hero-shed.jpg', localPath: heroShed, publicId: 'hero-shed' },
  
  // Budget Pro - Utility
  { name: 'budget-pro-utility.jpeg', localPath: budgetProUtility, publicId: 'budget-pro-utility' },
  { name: 'budget-pro-utility-2.jpeg', localPath: budgetProUtility2, publicId: 'budget-pro-utility-2' },
  { name: 'budget-pro-utility-3.jpeg', localPath: budgetProUtility3, publicId: 'budget-pro-utility-3' },
  
  // Budget Pro - Lofted Barn
  { name: 'budget-pro-lofted-barn.png', localPath: budgetProLoftedBarn, publicId: 'budget-pro-lofted-barn' },
  { name: 'budget-pro-lofted-barn-2.jpeg', localPath: budgetProLoftedBarn2, publicId: 'budget-pro-lofted-barn-2' },
  { name: 'budget-pro-lofted-barn-3.jpeg', localPath: budgetProLoftedBarn3, publicId: 'budget-pro-lofted-barn-3' },
  
  // Economy
  { name: 'economy.webp', localPath: economy, publicId: 'economy' },
  { name: 'economy-shed-1.jpg', localPath: economyShed1, publicId: 'economy-shed-1' },
  { name: 'economy-shed-2.jpg', localPath: economyShed2, publicId: 'economy-shed-2' },
  { name: 'economy-shed-3.jpg', localPath: economyShed3, publicId: 'economy-shed-3' },
  { name: 'economy-shed-4.jpg', localPath: economyShed4, publicId: 'economy-shed-4' },
  { name: 'economy-shed-6.jpg', localPath: economyShed6, publicId: 'economy-shed-6' },
  { name: 'economy-shed-7.jpg', localPath: economyShed7, publicId: 'economy-shed-7' },
  { name: 'economy-shed-8.jpg', localPath: economyShed8, publicId: 'economy-shed-8' },
  { name: 'economy-shed-9.jpg', localPath: economyShed9, publicId: 'economy-shed-9' },
  
  // Utility Shed
  { name: 'utility-shed.jpg', localPath: utilityShed, publicId: 'utility-shed' },
  { name: 'utility-shed-1.jpg', localPath: utilityShed1, publicId: 'utility-shed-1' },
  { name: 'utility-shed-2.jpg', localPath: utilityShed2, publicId: 'utility-shed-2' },
  { name: 'utility-shed-3.jpg', localPath: utilityShed3, publicId: 'utility-shed-3' },
  { name: 'utility-shed-4.jpg', localPath: utilityShed4, publicId: 'utility-shed-4' },
  
  // Side Utility
  { name: 'side-utility-shed.jpg', localPath: sideUtilityShed, publicId: 'side-utility-shed' },
  { name: 'side-utility-1.jpg', localPath: sideUtility1, publicId: 'side-utility-1' },
  { name: 'side-utility-2.jpg', localPath: sideUtility2, publicId: 'side-utility-2' },
  { name: 'side-utility-3.jpg', localPath: sideUtility3, publicId: 'side-utility-3' },
  { name: 'side-utility-4.jpg', localPath: sideUtility4, publicId: 'side-utility-4' },
  
  // Lofted Barn
  { name: 'lofted-barn.jpg', localPath: loftedBarn, publicId: 'lofted-barn' },
  { name: 'lofted-barn-1.jpg', localPath: loftedBarn1, publicId: 'lofted-barn-1' },
  { name: 'lofted-barn-2.jpg', localPath: loftedBarn2, publicId: 'lofted-barn-2' },
  { name: 'lofted-barn-3.jpg', localPath: loftedBarn3, publicId: 'lofted-barn-3' },
  { name: 'lofted-barn-4.jpg', localPath: loftedBarn4, publicId: 'lofted-barn-4' },
  
  // Side Lofted Barn
  { name: 'side-lofted-barn-1.jpg', localPath: sideLoftedBarn1, publicId: 'side-lofted-barn-1' },
  { name: 'side-lofted-barn-2.jpg', localPath: sideLoftedBarn2, publicId: 'side-lofted-barn-2' },
  { name: 'side-lofted-barn-3.jpg', localPath: sideLoftedBarn3, publicId: 'side-lofted-barn-3' },
  { name: 'side-lofted-barn-4.jpg', localPath: sideLoftedBarn4, publicId: 'side-lofted-barn-4' },
  
  // Pro Series
  { name: 'pro-utility.webp', localPath: proUtility, publicId: 'pro-utility' },
  { name: 'pro-lofted-barn.jpg', localPath: proLoftedBarn, publicId: 'pro-lofted-barn' },
  
  // Cabin
  { name: 'cabin-shed.jpg', localPath: cabinShed, publicId: 'cabin-shed' },
  { name: 'cabin-1.jpg', localPath: cabin1, publicId: 'cabin-1' },
  { name: 'cabin-2.jpg', localPath: cabin2, publicId: 'cabin-2' },
  { name: 'cabin-3.jpg', localPath: cabin3, publicId: 'cabin-3' },
  { name: 'cabin-4.jpg', localPath: cabin4, publicId: 'cabin-4' },
  
  // Garage
  { name: 'garage.webp', localPath: garageWebp, publicId: 'garage' },
  { name: 'garage-shed.jpg', localPath: garageShed, publicId: 'garage-shed' },
  { name: 'garage-1.jpg', localPath: garage1, publicId: 'garage-1' },
  { name: 'garage-2.jpg', localPath: garage2, publicId: 'garage-2' },
  { name: 'garage-3.jpg', localPath: garage3, publicId: 'garage-3' },
  { name: 'garage-4.jpg', localPath: garage4, publicId: 'garage-4' },
  
  // Carport
  { name: 'carport.jpeg', localPath: carport, publicId: 'carport' },
  { name: 'carport-1.png', localPath: carport1, publicId: 'carport-1' },
  { name: 'carport-2.png', localPath: carport2, publicId: 'carport-2' },
  { name: 'carport-3.png', localPath: carport3, publicId: 'carport-3' },
  
  // RV Cover
  { name: 'rv-cover-1.jpg', localPath: rvCover1, publicId: 'rv-cover-1' },
  { name: 'rv-cover-2.jpg', localPath: rvCover2, publicId: 'rv-cover-2' },
  { name: 'rv-cover-3.jpg', localPath: rvCover3, publicId: 'rv-cover-3' },
  
  // Style Images
  { name: 'barn-style.jpg', localPath: barnStyle, publicId: 'barn-style' },
  { name: 'modern-shed.jpg', localPath: modernShed, publicId: 'modern-shed' },
  { name: 'modern-style.jpg', localPath: modernStyle, publicId: 'modern-style' },
  { name: 'utility-style.webp', localPath: utilityStyle, publicId: 'utility-style' },
  
  // Other
  { name: 'dormer.jpeg', localPath: dormer, publicId: 'dormer' },
  { name: 'treated-garden-shed.jpg', localPath: treatedGardenShed, publicId: 'treated-garden-shed' },
  { name: 'mini-barn.jpeg', localPath: miniBarn, publicId: 'mini-barn' },
];

interface UploadStatus {
  status: 'pending' | 'uploading' | 'success' | 'error' | 'exists';
  url?: string;
  error?: string;
}

const AdminCloudinaryUpload = () => {
  const [uploadStatuses, setUploadStatuses] = useState<Record<string, UploadStatus>>({});
  const [isUploading, setIsUploading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [showUploaded, setShowUploaded] = useState(false);

  // Check if image exists in Cloudinary
  const checkImageExists = async (publicId: string): Promise<boolean> => {
    try {
      const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${CLOUDINARY_FOLDER}/${publicId}`;
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  // Check all images on mount
  const checkAllImages = async () => {
    setIsChecking(true);
    const statuses: Record<string, UploadStatus> = {};
    
    // Check in batches of 5 to avoid overwhelming the browser
    const batchSize = 5;
    for (let i = 0; i < imageList.length; i += batchSize) {
      const batch = imageList.slice(i, i + batchSize);
      const results = await Promise.all(
        batch.map(async (image) => {
          const exists = await checkImageExists(image.publicId);
          return { name: image.name, exists };
        })
      );
      
      results.forEach(({ name, exists }) => {
        statuses[name] = { 
          status: exists ? 'exists' : 'pending',
          url: exists ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${CLOUDINARY_FOLDER}/${imageList.find(i => i.name === name)?.publicId}` : undefined
        };
      });
      
      setUploadStatuses({ ...statuses });
    }
    
    setIsChecking(false);
    const pendingCount = Object.values(statuses).filter(s => s.status === 'pending').length;
    const existsCount = Object.values(statuses).filter(s => s.status === 'exists').length;
    toast.success(`Check complete: ${existsCount} already uploaded, ${pendingCount} pending`);
  };

  useEffect(() => {
    checkAllImages();
  }, []);

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
    
    // Only upload images that are pending (not already in Cloudinary)
    const pendingImages = imageList.filter(img => uploadStatuses[img.name]?.status === 'pending');
    
    if (pendingImages.length === 0) {
      toast.info('All images are already uploaded to Cloudinary!');
      setIsUploading(false);
      return;
    }

    // Upload images sequentially to avoid overwhelming the server
    for (const image of pendingImages) {
      setUploadStatuses(prev => ({
        ...prev,
        [image.name]: { status: 'uploading' }
      }));

      const result = await uploadImage(image);

      setUploadStatuses(prev => ({
        ...prev,
        [image.name]: {
          status: result.success ? 'exists' : 'error',
          url: result.url,
          error: result.error
        }
      }));

      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsUploading(false);
    toast.success('Upload complete! Check results below.');
  };

  const copyUrlMapping = () => {
    const successfulUploads = Object.entries(uploadStatuses)
      .filter(([_, status]) => (status.status === 'success' || status.status === 'exists') && status.url)
      .map(([name, status]) => {
        const publicId = imageList.find(img => img.name === name)?.publicId;
        return `  '${publicId}': '${status.url}',`;
      })
      .join('\n');

    const mapping = `export const cloudinaryImages = {\n${successfulUploads}\n};`;
    navigator.clipboard.writeText(mapping);
    toast.success('URL mapping copied to clipboard!');
  };

  const pendingImages = imageList.filter(img => uploadStatuses[img.name]?.status === 'pending');
  const uploadedImages = imageList.filter(img => uploadStatuses[img.name]?.status === 'exists' || uploadStatuses[img.name]?.status === 'success');
  const errorImages = imageList.filter(img => uploadStatuses[img.name]?.status === 'error');
  const uploadingImage = imageList.find(img => uploadStatuses[img.name]?.status === 'uploading');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cloudinary Image Upload</h1>
        <p className="text-muted-foreground mb-8">
          Manage {imageList.length} images for optimal CDN delivery
        </p>

        <div className="flex gap-4 mb-8 flex-wrap">
          <Button 
            onClick={checkAllImages} 
            disabled={isChecking || isUploading}
            variant="outline"
            size="lg"
          >
            {isChecking ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Checking...
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5 mr-2" />
                Check Status
              </>
            )}
          </Button>

          <Button 
            onClick={startUpload} 
            disabled={isUploading || isChecking || pendingImages.length === 0}
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
                Upload Pending ({pendingImages.length})
              </>
            )}
          </Button>

          {uploadedImages.length > 0 && (
            <Button onClick={copyUrlMapping} variant="outline" size="lg">
              <Copy className="w-5 h-5 mr-2" />
              Copy URL Mapping
            </Button>
          )}
        </div>

        {/* Status Summary */}
        <div className="mb-6 p-4 bg-muted rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">{pendingImages.length}</p>
            <p className="text-sm text-muted-foreground">Pending Upload</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{uploadedImages.length}</p>
            <p className="text-sm text-muted-foreground">In Cloudinary</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">{errorImages.length}</p>
            <p className="text-sm text-muted-foreground">Failed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{imageList.length}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
        </div>

        {/* Currently Uploading */}
        {uploadingImage && (
          <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary">
            <p className="font-medium flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading: {uploadingImage.name}
            </p>
          </div>
        )}

        {/* Pending Upload Section */}
        {pendingImages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-yellow-600" />
              Pending Upload ({pendingImages.length})
            </h2>
            <div className="space-y-2">
              {pendingImages.map((image) => (
                <ImageRow key={image.name} image={image} status={uploadStatuses[image.name]} />
              ))}
            </div>
          </div>
        )}

        {/* Error Section */}
        {errorImages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Failed ({errorImages.length})
            </h2>
            <div className="space-y-2">
              {errorImages.map((image) => (
                <ImageRow key={image.name} image={image} status={uploadStatuses[image.name]} />
              ))}
            </div>
          </div>
        )}

        {/* Already Uploaded Section (Collapsible) */}
        {uploadedImages.length > 0 && (
          <Collapsible open={showUploaded} onOpenChange={setShowUploaded}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between mb-4">
                <span className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-green-600" />
                  Already in Cloudinary ({uploadedImages.length})
                </span>
                {showUploaded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2">
                {uploadedImages.map((image) => (
                  <ImageRow key={image.name} image={image} status={uploadStatuses[image.name]} />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );
};

// Extracted component for image rows
const ImageRow = ({ image, status }: { image: ImageItem; status?: UploadStatus }) => (
  <div className="flex items-center gap-4 p-3 bg-card rounded-lg border">
    <div className="w-12 h-12 rounded overflow-hidden bg-muted flex-shrink-0">
      <img 
        src={image.localPath} 
        alt={image.name}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="flex-1 min-w-0">
      <p className="font-medium truncate">{image.name}</p>
      <p className="text-xs text-muted-foreground truncate">{image.publicId}</p>
      {status?.error && (
        <p className="text-xs text-red-600">{status.error}</p>
      )}
    </div>

    <div className="flex-shrink-0">
      {!status && <span className="text-muted-foreground text-sm">Checking...</span>}
      {status?.status === 'pending' && <span className="text-yellow-600 text-sm">Pending</span>}
      {status?.status === 'uploading' && <Loader2 className="w-5 h-5 animate-spin text-primary" />}
      {(status?.status === 'success' || status?.status === 'exists') && <CheckCircle className="w-5 h-5 text-green-600" />}
      {status?.status === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
    </div>
  </div>
);

export default AdminCloudinaryUpload;
