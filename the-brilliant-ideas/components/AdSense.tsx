'use client';

import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  adLayout?: string;
  style?: React.CSSProperties;
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  adLayout,
  style = { display: 'block' }
}: AdSenseProps) {
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    // Only load ads in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Prevent duplicate ad loading
    if (adRef.current) {
      return;
    }

    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        adRef.current = true;
      }
    } catch (err) {
      // Silently fail in development
      if (process.env.NODE_ENV === 'production') {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  // Show placeholder in development
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className="neu rounded-3xl p-6 bg-white">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm font-medium">
            📢 AdSense Ad Placeholder
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Ad Slot: {adSlot}
          </p>
          <p className="text-gray-400 text-xs">
            (Ads only display in production)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="neu rounded-3xl p-6 bg-white">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-1949655614307812"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
        {...(adLayout && { 'data-ad-layout-key': adLayout })}
      />
    </div>
  );
}
