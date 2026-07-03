'use client';

import dynamic from 'next/dynamic';

/** Loads the WebGL starfield only on the client, after hydration. */
const HeroStars = dynamic(() => import('./HeroStars'), { ssr: false });

export default HeroStars;
