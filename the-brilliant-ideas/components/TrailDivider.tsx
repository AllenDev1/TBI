import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ParallaxLayer from '@/components/ParallaxLayer';

/**
 * The trail between chapters — a winding Himalayan footpath (stupa, prayer
 * flags, pines) that connects one section to the next, so the page reads as
 * one continuous journey rather than separate pages. Purely decorative.
 */
export default function TrailDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`container-site ${className}`} aria-hidden="true">
      <Reveal className="flex justify-center">
        <ParallaxLayer speed={0.04} className="w-full max-w-3xl">
          <Image
            src="/image-story/trail-path.webp"
            alt=""
            width={1800}
            height={294}
            sizes="(min-width: 1024px) 760px, 88vw"
            loading="lazy"
            className="h-auto w-full [-webkit-mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]"
          />
        </ParallaxLayer>
      </Reveal>
    </div>
  );
}
