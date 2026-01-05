// Cloudinary configuration for Summit Portable Buildings
// All images are served from Cloudinary for optimal delivery
// Auto-upload feature: images are automatically uploaded on first use

import { supabase } from '@/integrations/supabase/client';

const CLOUDINARY_CLOUD_NAME = 'dwhwbbbev';
const CLOUDINARY_FOLDER = 'summit-buildings';

// Cache for tracking upload status
const uploadCache = new Map<string, string>();

// Helper function to construct Cloudinary URL
export const getCloudinaryUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
  format?: string;
}) => {
  const { width, height, quality = 'auto', format = 'auto' } = options || {};
  
  let transforms = `f_${format},q_${quality}`;
  if (width) transforms += `,w_${width}`;
  if (height) transforms += `,h_${height}`;
  
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${CLOUDINARY_FOLDER}/${publicId}`;
};

// Check if image exists in Cloudinary
export const checkCloudinaryImage = async (publicId: string): Promise<boolean> => {
  try {
    const url = getCloudinaryUrl(publicId);
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Auto-upload image to Cloudinary if not already there
export const autoUploadToCloudinary = async (
  localImagePath: string,
  publicId: string
): Promise<string> => {
  // Check cache first
  if (uploadCache.has(publicId)) {
    return uploadCache.get(publicId)!;
  }

  const cloudinaryUrl = getCloudinaryUrl(publicId);
  
  // Check if already in Cloudinary
  const exists = await checkCloudinaryImage(publicId);
  if (exists) {
    uploadCache.set(publicId, cloudinaryUrl);
    return cloudinaryUrl;
  }

  // Upload to Cloudinary via edge function
  try {
    // Fetch the local image
    const response = await fetch(localImagePath);
    const blob = await response.blob();
    
    // Convert to base64
    const reader = new FileReader();
    const base64Promise = new Promise<string>((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
    const base64 = await base64Promise;

    // Upload via edge function
    const { data, error } = await supabase.functions.invoke('upload-to-cloudinary', {
      body: {
        imageBase64: base64,
        publicId: publicId,
        folder: CLOUDINARY_FOLDER,
      },
    });

    if (error) {
      console.error('Cloudinary upload failed:', error);
      return localImagePath; // Fallback to local
    }

    uploadCache.set(publicId, data.url);
    return data.url;
  } catch (err) {
    console.error('Auto-upload error:', err);
    return localImagePath; // Fallback to local
  }
};

// Get image URL with auto-upload capability
// Returns Cloudinary URL, falls back to local if upload fails
export const getImageUrl = (publicId: string, localFallback?: string): string => {
  // For SSR/initial render, always return Cloudinary URL
  // The image will load from Cloudinary if it exists there
  return getCloudinaryUrl(publicId);
};

// Hook-friendly version for React components that handles auto-upload
export const useCloudinaryImage = (publicId: string, localPath: string) => {
  // Return Cloudinary URL directly - images should already be uploaded
  // If not, the component will show the broken image which signals to run the upload
  return getCloudinaryUrl(publicId);
};

// All image public IDs used in the site
// When adding new images, add them here first, then upload via /admin/cloudinary-upload
export const IMAGES = {
  // Logo
  summitLogo: 'summit-logo',
  
  // Hero
  heroShed: 'hero-shed',
  
  // Budget Pro - Utility
  budgetProUtility: 'budget-pro-utility',
  budgetProUtility2: 'budget-pro-utility-2',
  budgetProUtility3: 'budget-pro-utility-3',
  
  // Budget Pro - Lofted Barn
  budgetProLoftedBarn: 'budget-pro-lofted-barn',
  budgetProLoftedBarn2: 'budget-pro-lofted-barn-2',
  budgetProLoftedBarn3: 'budget-pro-lofted-barn-3',
  
  // Economy
  economy: 'economy',
  economyShed1: 'economy-shed-1',
  economyShed2: 'economy-shed-2',
  economyShed3: 'economy-shed-3',
  economyShed4: 'economy-shed-4',
  economyShed6: 'economy-shed-6',
  economyShed7: 'economy-shed-7',
  economyShed8: 'economy-shed-8',
  economyShed9: 'economy-shed-9',
  
  // Utility Shed
  utilityShed: 'utility-shed',
  utilityShed1: 'utility-shed-1',
  utilityShed2: 'utility-shed-2',
  utilityShed3: 'utility-shed-3',
  utilityShed4: 'utility-shed-4',
  
  // Side Utility
  sideUtilityShed: 'side-utility-shed',
  sideUtility1: 'side-utility-1',
  sideUtility2: 'side-utility-2',
  sideUtility3: 'side-utility-3',
  sideUtility4: 'side-utility-4',
  
  // Lofted Barn
  loftedBarn: 'lofted-barn',
  loftedBarn1: 'lofted-barn-1',
  loftedBarn2: 'lofted-barn-2',
  loftedBarn3: 'lofted-barn-3',
  loftedBarn4: 'lofted-barn-4',
  
  // Side Lofted Barn
  sideLoftedBarn1: 'side-lofted-barn-1',
  sideLoftedBarn2: 'side-lofted-barn-2',
  sideLoftedBarn3: 'side-lofted-barn-3',
  sideLoftedBarn4: 'side-lofted-barn-4',
  
  // Pro Utility
  proUtility: 'pro-utility',
  
  // Pro Lofted Barn
  proLoftedBarn: 'pro-lofted-barn',
  
  // Cabin
  cabinShed: 'cabin-shed',
  cabin1: 'cabin-1',
  cabin2: 'cabin-2',
  cabin3: 'cabin-3',
  cabin4: 'cabin-4',
  
  // Garage
  garage: 'garage',
  garageShed: 'garage-shed',
  garage1: 'garage-1',
  garage2: 'garage-2',
  garage3: 'garage-3',
  garage4: 'garage-4',
  
  // Carport
  carport: 'carport',
  carport1: 'carport-1',
  carport2: 'carport-2',
  carport3: 'carport-3',
  
  // RV Cover
  rvCover1: 'rv-cover-1',
  rvCover2: 'rv-cover-2',
  rvCover3: 'rv-cover-3',
  
  // Other
  dormer: 'dormer',
  treatedGardenShed: 'treated-garden-shed',
  miniBarn: 'mini-barn',
  
  // Style Images
  barnStyle: 'barn-style',
  modernStyle: 'modern-style',
} as const;

// Pre-built URLs for convenience
export const cloudinaryImages = {
  // Logo
  summitLogo: getCloudinaryUrl(IMAGES.summitLogo),
  
  // Hero
  heroShed: getCloudinaryUrl(IMAGES.heroShed),
  
  // Budget Pro - Utility
  budgetProUtility: getCloudinaryUrl(IMAGES.budgetProUtility),
  budgetProUtility2: getCloudinaryUrl(IMAGES.budgetProUtility2),
  budgetProUtility3: getCloudinaryUrl(IMAGES.budgetProUtility3),
  
  // Budget Pro - Lofted Barn
  budgetProLoftedBarn: getCloudinaryUrl(IMAGES.budgetProLoftedBarn),
  budgetProLoftedBarn2: getCloudinaryUrl(IMAGES.budgetProLoftedBarn2),
  budgetProLoftedBarn3: getCloudinaryUrl(IMAGES.budgetProLoftedBarn3),
  
  // Economy
  economy: getCloudinaryUrl(IMAGES.economy),
  economyShed1: getCloudinaryUrl(IMAGES.economyShed1),
  economyShed2: getCloudinaryUrl(IMAGES.economyShed2),
  economyShed3: getCloudinaryUrl(IMAGES.economyShed3),
  economyShed4: getCloudinaryUrl(IMAGES.economyShed4),
  economyShed6: getCloudinaryUrl(IMAGES.economyShed6),
  economyShed7: getCloudinaryUrl(IMAGES.economyShed7),
  economyShed8: getCloudinaryUrl(IMAGES.economyShed8),
  economyShed9: getCloudinaryUrl(IMAGES.economyShed9),
  
  // Utility Shed
  utilityShed: getCloudinaryUrl(IMAGES.utilityShed),
  utilityShed1: getCloudinaryUrl(IMAGES.utilityShed1),
  utilityShed2: getCloudinaryUrl(IMAGES.utilityShed2),
  utilityShed3: getCloudinaryUrl(IMAGES.utilityShed3),
  utilityShed4: getCloudinaryUrl(IMAGES.utilityShed4),
  
  // Side Utility
  sideUtilityShed: getCloudinaryUrl(IMAGES.sideUtilityShed),
  sideUtility1: getCloudinaryUrl(IMAGES.sideUtility1),
  sideUtility2: getCloudinaryUrl(IMAGES.sideUtility2),
  sideUtility3: getCloudinaryUrl(IMAGES.sideUtility3),
  sideUtility4: getCloudinaryUrl(IMAGES.sideUtility4),
  
  // Lofted Barn
  loftedBarn: getCloudinaryUrl(IMAGES.loftedBarn),
  loftedBarn1: getCloudinaryUrl(IMAGES.loftedBarn1),
  loftedBarn2: getCloudinaryUrl(IMAGES.loftedBarn2),
  loftedBarn3: getCloudinaryUrl(IMAGES.loftedBarn3),
  loftedBarn4: getCloudinaryUrl(IMAGES.loftedBarn4),
  
  // Side Lofted Barn
  sideLoftedBarn1: getCloudinaryUrl(IMAGES.sideLoftedBarn1),
  sideLoftedBarn2: getCloudinaryUrl(IMAGES.sideLoftedBarn2),
  sideLoftedBarn3: getCloudinaryUrl(IMAGES.sideLoftedBarn3),
  sideLoftedBarn4: getCloudinaryUrl(IMAGES.sideLoftedBarn4),
  
  // Pro Utility
  proUtility: getCloudinaryUrl(IMAGES.proUtility),
  
  // Pro Lofted Barn
  proLoftedBarn: getCloudinaryUrl(IMAGES.proLoftedBarn),
  
  // Cabin
  cabinShed: getCloudinaryUrl(IMAGES.cabinShed),
  cabin1: getCloudinaryUrl(IMAGES.cabin1),
  cabin2: getCloudinaryUrl(IMAGES.cabin2),
  cabin3: getCloudinaryUrl(IMAGES.cabin3),
  cabin4: getCloudinaryUrl(IMAGES.cabin4),
  
  // Garage
  garage: getCloudinaryUrl(IMAGES.garage),
  garageShed: getCloudinaryUrl(IMAGES.garageShed),
  garage1: getCloudinaryUrl(IMAGES.garage1),
  garage2: getCloudinaryUrl(IMAGES.garage2),
  garage3: getCloudinaryUrl(IMAGES.garage3),
  garage4: getCloudinaryUrl(IMAGES.garage4),
  
  // Carport
  carport: getCloudinaryUrl(IMAGES.carport),
  carport1: getCloudinaryUrl(IMAGES.carport1),
  carport2: getCloudinaryUrl(IMAGES.carport2),
  carport3: getCloudinaryUrl(IMAGES.carport3),
  
  // RV Cover
  rvCover1: getCloudinaryUrl(IMAGES.rvCover1),
  rvCover2: getCloudinaryUrl(IMAGES.rvCover2),
  rvCover3: getCloudinaryUrl(IMAGES.rvCover3),
  
  // Other
  dormer: getCloudinaryUrl(IMAGES.dormer),
  treatedGardenShed: getCloudinaryUrl(IMAGES.treatedGardenShed),
  miniBarn: getCloudinaryUrl(IMAGES.miniBarn),
  
  // Style Images
  barnStyle: getCloudinaryUrl(IMAGES.barnStyle),
  modernStyle: getCloudinaryUrl(IMAGES.modernStyle),
};
