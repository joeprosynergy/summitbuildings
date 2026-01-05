import React from 'react';
import { useAutoCloudinaryUpload } from '@/hooks/useAutoCloudinaryUpload';

interface CloudinaryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

/**
 * CloudinaryImage - Automatically uploads images to Cloudinary on first use
 * and serves them from Cloudinary CDN.
 * 
 * Usage:
 * ```tsx
 * import myImage from '@/assets/my-image.jpg';
 * 
 * <CloudinaryImage src={myImage} alt="My image" className="w-full" />
 * ```
 * 
 * The image will be:
 * 1. Checked if it exists in Cloudinary
 * 2. If not, automatically uploaded
 * 3. Served from Cloudinary CDN with auto format/quality optimization
 */
export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  ...props
}) => {
  const { src: cloudinarySrc, isLoading, error } = useAutoCloudinaryUpload(src);

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div 
        className={`animate-pulse bg-muted ${className}`}
        style={{ aspectRatio: props.width && props.height ? `${props.width}/${props.height}` : 'auto' }}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  return (
    <img
      src={cloudinarySrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        // If Cloudinary fails, fallback to original src
        if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        } else if (e.currentTarget.src !== src) {
          e.currentTarget.src = src;
        }
      }}
      {...props}
    />
  );
};

export default CloudinaryImage;
