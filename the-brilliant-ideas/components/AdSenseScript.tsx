'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function AdSenseScript() {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1949655614307812"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
