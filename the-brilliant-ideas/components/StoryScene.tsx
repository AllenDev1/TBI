'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type StorySceneProps = {
  image: string;
  alt?: string;
  children: React.ReactNode;
  priority?: boolean;
  /** Total scroll distance of the scene; the extra beyond 100vh is the pinned time. */
  heightClass?: string;
};

/**
 * A pinned, full-viewport scrollytelling scene. The photo eases from a slight
 * zoom to rest while the caption fades up — all driven by scroll progress.
 */
export default function StoryScene({
  image,
  alt = '',
  children,
  priority = false,
  heightClass = 'h-[190vh]',
}: StorySceneProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.style.setProperty('--p', '1');
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 1;
      el.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className={`relative ${heightClass}`} style={{ '--p': 0 } as React.CSSProperties}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: 'scale(calc(1.16 - var(--p) * 0.16))' }}
        >
          <Image src={image} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
        </div>
        {/* cinematic grade */}
        <div className="absolute inset-0 bg-gradient-to-b from-himal-night/55 via-himal-night/10 to-himal-night/65" />

        <div
          className="absolute inset-0 flex items-center justify-center px-5"
          style={{
            opacity: 'calc(var(--p) * 4 - 0.2)',
            transform: 'translateY(calc(70px - min(70px, var(--p) * 220px)))',
          }}
        >
          <div className="max-w-4xl text-center">{children}</div>
        </div>
      </div>
    </section>
  );
}
