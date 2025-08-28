// Performance utilities

// Preload critical resources
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get connection speed
export const getConnectionSpeed = (): string => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  return connection?.effectiveType || 'unknown';
};

// Preload critical resources on page load
export const preloadCriticalResources = () => {
  const criticalImages = [
    'https://www.allgsmtips.com/wp-content/uploads/2015/10/free-cell-phone-repair-2-990x500.jpg',
    'https://as2.ftcdn.net/v2/jpg/01/07/50/01/1000_F_107500164_rwndmChhmlkuzaLOdorIzSwCxLNTjg2R.jpg'
  ];
  
  // Only preload on fast connections
  const connectionSpeed = getConnectionSpeed();
  if (connectionSpeed === '4g' || connectionSpeed === 'unknown') {
    preloadImages(criticalImages);
  }
};