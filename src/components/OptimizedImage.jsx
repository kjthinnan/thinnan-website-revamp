import { useState, useEffect } from 'react';
import useImageLoader from '../hooks/useImageLoader';

/**
 * OptimizedImage component for better image loading performance
 * Improves Core Web Vitals metrics (LCP, CLS) and SEO
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text (important for SEO)
 * @param {string} props.className - CSS classes
 * @param {string} props.placeholder - Optional placeholder image
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {string} props.loading - Loading strategy ('lazy' or 'eager')
 * @param {Object} props.style - Additional inline styles
 * @returns {JSX.Element} - Optimized image component
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholder = '',
  width,
  height,
  loading = 'lazy',
  style = {},
  ...rest
}) => {
  const { src: imageSrc, isLoaded, error } = useImageLoader(src, placeholder);
  const [aspectRatio, setAspectRatio] = useState(height && width ? width / height : null);

  // Calculate and set aspect ratio if not provided
  useEffect(() => {
    if (!aspectRatio && src) {
      const img = new Image();
      img.onload = () => {
        setAspectRatio(img.width / img.height);
      };
      img.src = src;
    }
  }, [src, aspectRatio]);

  // Prepare inline styles to prevent layout shift
  const imageStyle = {
    ...style,
    opacity: isLoaded ? 1 : 0.5,
    transition: 'opacity 0.3s ease-in-out',
  };

  // If we have dimensions, add them to prevent layout shift
  if (width && height) {
    imageStyle.aspectRatio = `${width} / ${height}`;
  } else if (aspectRatio) {
    imageStyle.aspectRatio = aspectRatio;
  }

  return (
    <div className={`relative ${className}`} style={{ overflow: 'hidden' }}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        style={imageStyle}
        onError={(e) => {
          // Fallback to placeholder if available
          if (placeholder && e.target.src !== placeholder) {
            e.target.src = placeholder;
          }
        }}
        {...rest}
      />
      
      {/* Show loading indicator or error state */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <span className="text-red-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 