import React from 'react';
import Image from 'next/image';

type FramedShotProps = {
  /** The screenshot / artwork to display inside the frame */
  src: string;
  alt: string;
  frame: 'window' | 'thangka';
  /** When set, the window shows this app icon on a lit shrine backdrop
   *  instead of a screenshot — like an idol in a niche. */
  icon?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Displays a project screenshot inside a piece of Nepali craft:
 *
 * - `window`  — a carved Newari window (ankhijhyal); the opening is
 *   transparent, so the shot sits *behind* the woodwork and is revealed
 *   through the arch. Best for mobile / portrait shots.
 * - `thangka` — a silk-brocade thangka scroll; the shot lies on the blank
 *   canvas with a multiply blend so the paper grain warms it. Best for
 *   web / landscape shots.
 *
 * Insets are measured from the artwork files (per-mille of the frame box).
 */
const FRAMES = {
  window: {
    image: '/image-story/newari-frame.webp',
    width: 1024,
    height: 1536,
    alt: 'an intricately carved wooden Newari window',
    // opening: x 308–717, y 505–1027 of 1024×1536
    inset: { top: '32.9%', right: '30%', bottom: '33.1%', left: '30.1%' },
    blend: undefined,
    shotOnTop: false,
  },
  thangka: {
    image: '/image-story/thangka-frame.webp',
    width: 1024,
    height: 1536,
    alt: 'a silk-brocade thangka scroll',
    // blank canvas: x 335–740, y 350–935 of 1024×1536 (+ breathing room)
    inset: { top: '24.5%', right: '29.5%', bottom: '41%', left: '34.5%' },
    blend: undefined,
    shotOnTop: true,
  },
};

export default function FramedShot({ src, alt, frame, icon, className = '', priority = false }: FramedShotProps) {
  const f = FRAMES[frame];

  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: `${f.width} / ${f.height}` }}
    >
      {/* inside the frame's opening: an enshrined app icon, or the shot */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: f.inset.top,
          right: f.inset.right,
          bottom: f.inset.bottom,
          left: f.inset.left,
          zIndex: f.shotOnTop ? 10 : 0,
          mixBlendMode: f.blend,
        }}
      >
        {icon && frame === 'window' ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative aspect-square w-[58%]">
              <Image src={icon} alt={alt} fill className="object-contain" sizes="220px" />
            </div>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className={frame === 'window' ? 'object-cover object-top' : 'object-contain'}
            sizes="380px"
          />
        )}
      </div>

      {/* the craft itself */}
      <Image
        src={f.image}
        alt={f.alt}
        fill
        priority={priority}
        className="relative object-contain"
        style={{ zIndex: f.shotOnTop ? 0 : 10 }}
        sizes="(min-width: 640px) 520px, 90vw"
      />
    </div>
  );
}
