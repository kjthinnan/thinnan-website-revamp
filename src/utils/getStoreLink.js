// Utility function to get the appropriate app store link based on user's device
export const getStoreLink = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'https://apps.apple.com/fi/app/thinnan/id6502411893';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'https://play.google.com/store/apps/details?id=com.jathikka.thinaan&hl=en';
  }

  // Default fallback (could be web version or universal link)
  return 'https://apps.apple.com/fi/app/thinnan/id6502411893';
};

// Function to handle the redirect
export const handleAppDownload = (e) => {
  if (e) e.preventDefault();
  window.open(getStoreLink(), '_blank');
};

