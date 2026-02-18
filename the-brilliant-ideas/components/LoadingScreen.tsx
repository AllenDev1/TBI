'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading screen on route change
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#ecf0f3]">
      <div className="text-center">
        {/* Logo or Brand Name with Neumorphic effect */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="text-gray-800">The Brilliant</span>
            <span className="text-gradient ml-2">Ideas</span>
          </h1>
        </div>

        {/* Neumorphic Loading Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full neu animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-[#ecf0f3] flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-orange-primary border-r-orange-glow animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          Loading amazing experiences...
        </p>
      </div>
    </div>
  );
}
