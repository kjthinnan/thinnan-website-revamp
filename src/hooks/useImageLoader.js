import { useState, useEffect } from 'react';

/**
 * Custom hook for optimized image loading
 * Helps improve Core Web Vitals metrics like LCP (Largest Contentful Paint)
 * 
 * @param {string} src - The image source URL
 * @param {string} placeholder - Optional placeholder image to show while loading
 * @returns {Object} - Image loading state and source
 */
const useImageLoader = (src, placeholder = '') => {
  const [imageSource, setImageSource] = useState(placeholder || src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setError(null);

    // Skip loading if src is the same as placeholder
    if (src === placeholder) {
      setIsLoaded(true);
      return;
    }

    const image = new Image();
    image.src = src;
    
    image.onload = () => {
      setImageSource(src);
      setIsLoaded(true);
    };
    
    image.onerror = (err) => {
      setError(err);
      // Keep placeholder if loading fails
      if (placeholder) {
        setImageSource(placeholder);
      }
    };

    // Clean up
    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src, placeholder]);

  return { src: imageSource, isLoaded, error };
};

export default useImageLoader; 