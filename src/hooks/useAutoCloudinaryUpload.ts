import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const CLOUDINARY_CLOUD_NAME = 'dwhwbbbev';
const CLOUDINARY_FOLDER = 'summit-buildings';

// Global cache to prevent duplicate uploads across components
const uploadedImages = new Map<string, string>();
const uploadingPromises = new Map<string, Promise<string>>();

// Generate a public ID from the image path
const getPublicIdFromPath = (imagePath: string): string => {
  // Extract filename without extension
  const filename = imagePath.split('/').pop() || imagePath;
  const nameWithoutExt = filename.replace(/\.[^.]+$/, '');
  // Clean up the name to be URL-safe
  return nameWithoutExt.replace(/[^a-zA-Z0-9-_]/g, '-');
};

// Get Cloudinary URL
const getCloudinaryUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${CLOUDINARY_FOLDER}/${publicId}`;
};

// Check if image exists in Cloudinary
const checkImageExists = async (publicId: string): Promise<boolean> => {
  try {
    const url = getCloudinaryUrl(publicId);
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Upload image to Cloudinary
const uploadToCloudinary = async (localPath: string, publicId: string): Promise<string> => {
  try {
    // Fetch the local image
    const response = await fetch(localPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch local image: ${localPath}`);
    }
    const blob = await response.blob();
    
    // Convert to base64
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    // Upload via edge function
    const { data, error } = await supabase.functions.invoke('upload-to-cloudinary', {
      body: {
        imageBase64: base64,
        publicId: publicId,
        folder: CLOUDINARY_FOLDER,
      },
    });

    if (error) {
      console.error('Cloudinary upload error:', error);
      throw error;
    }

    console.log(`✅ Auto-uploaded to Cloudinary: ${publicId}`);
    return data.url;
  } catch (err) {
    console.error('Upload failed:', err);
    throw err;
  }
};

/**
 * Hook that automatically uploads an image to Cloudinary on first use
 * and returns the Cloudinary URL for serving.
 * 
 * @param localImageSrc - The local image source (imported image or path)
 * @returns { src: string, isLoading: boolean, error: string | null }
 */
export const useAutoCloudinaryUpload = (localImageSrc: string) => {
  const [src, setSrc] = useState<string>(localImageSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!localImageSrc) {
      setIsLoading(false);
      return;
    }

    const publicId = getPublicIdFromPath(localImageSrc);
    const cloudinaryUrl = getCloudinaryUrl(publicId);

    // Check if already uploaded in this session
    if (uploadedImages.has(publicId)) {
      setSrc(uploadedImages.get(publicId)!);
      setIsLoading(false);
      return;
    }

    // Check if upload is already in progress
    if (uploadingPromises.has(publicId)) {
      uploadingPromises.get(publicId)!.then((url) => {
        setSrc(url);
        setIsLoading(false);
      }).catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
      return;
    }

    // Start the upload process
    const uploadProcess = async () => {
      try {
        // First check if it already exists in Cloudinary
        const exists = await checkImageExists(publicId);
        
        if (exists) {
          uploadedImages.set(publicId, cloudinaryUrl);
          setSrc(cloudinaryUrl);
          setIsLoading(false);
          return cloudinaryUrl;
        }

        // Upload to Cloudinary
        const promise = uploadToCloudinary(localImageSrc, publicId);
        uploadingPromises.set(publicId, promise);
        
        const url = await promise;
        uploadedImages.set(publicId, url);
        uploadingPromises.delete(publicId);
        setSrc(url);
        setIsLoading(false);
        return url;
      } catch (err) {
        uploadingPromises.delete(publicId);
        // Fallback to local image on error
        console.warn(`Cloudinary upload failed, using local: ${localImageSrc}`);
        setSrc(localImageSrc);
        setError(err instanceof Error ? err.message : 'Upload failed');
        setIsLoading(false);
        return localImageSrc;
      }
    };

    uploadProcess();
  }, [localImageSrc]);

  return { src, isLoading, error };
};

/**
 * Simple function to get Cloudinary URL for an already-uploaded image
 */
export const getCloudinaryImageUrl = (publicId: string) => getCloudinaryUrl(publicId);
