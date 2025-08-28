import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  className = '',
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
}) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? children : fallback}
    </div>
  );
};

export default LazySection;