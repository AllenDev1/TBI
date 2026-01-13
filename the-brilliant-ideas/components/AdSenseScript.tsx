'use client';

import { useEffect } from 'react';

export default function AdSenseScript() {
  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="adsbygoogle.js"]'
    );

    if (existingScript) {
      return;
    }

    // Create and append script manually to avoid Next.js Script attributes
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1949655614307812';
    script.async = true;
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
