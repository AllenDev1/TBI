'use client';

import React, { useEffect, useRef } from 'react';

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  /** Scroll speed multiplier: positive lags behind the scroll, negative moves ahead */
  speed?: number;
};

/** Depth layer that shifts with the page scroll, giving the hero real parallax. */
export default function ParallaxLayer({ children, className = '', speed = 0.3 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Only meaningful near the top of the page (the hero)
      const y = Math.min(window.scrollY, window.innerHeight * 1.5);
      el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
