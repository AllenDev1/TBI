import React from 'react';
import Image from 'next/image';

/**
 * Hand-crafted SVG scenery of Nepal used across the site:
 * Himalayan ridgelines, the danphe (Himalayan monal — national bird),
 * laligurans (rhododendron — national flower), the one-horned rhino
 * of Chitwan, and prayer flags.
 */

/* ------------------------------------------------------------------ */
/* Prayer flags — blue, white, red, green, yellow                      */
/* ------------------------------------------------------------------ */

export function PrayerFlagStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`prayer-flags ${className}`} aria-hidden="true">
      <span style={{ background: '#2E5EAA' }} />
      <span style={{ background: '#EDEDED' }} />
      <span style={{ background: '#C9354E' }} />
      <span style={{ background: '#2F6B4F' }} />
      <span style={{ background: '#F2B705' }} />
    </div>
  );
}

export function PrayerFlagLine({ className = '' }: { className?: string }) {
  const colors = ['#2E5EAA', '#EDEDED', '#C9354E', '#2F6B4F', '#F2B705'];
  return (
    <svg viewBox="0 0 400 46" className={className} aria-hidden="true" fill="none">
      <path d="M0 8 Q 100 30, 200 22 T 400 8" stroke="#8B7355" strokeWidth="1.5" fill="none" />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 20 + i * 38;
        // approximate y on the hanging curve
        const t = x / 400;
        const y = 8 + Math.sin(t * Math.PI) * 16 + (t > 0.5 ? (1 - t) * 6 : t * 6);
        return (
          <path
            key={i}
            d={`M${x} ${y} h20 l-4 14 h-12 z`}
            fill={colors[i % 5]}
            className="animate-flutter"
            style={{ transformOrigin: `${x + 10}px ${y}px`, animationDelay: `${i * 0.25}s` }}
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Danphe — the Himalayan monal, Nepal's national bird                  */
/* ------------------------------------------------------------------ */

export function Danphe({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true" fill="none">
      {/* body */}
      <path
        d="M30 34 C 40 24, 58 22, 68 28 C 76 33, 78 40, 72 44 C 62 50, 44 48, 36 42 C 32 39, 29 37, 30 34 Z"
        fill="#1D5F8A"
      />
      {/* iridescent back */}
      <path d="M38 30 C 48 24, 60 24, 66 29 C 58 27, 46 28, 38 30 Z" fill="#2E9E7E" />
      {/* head + crest */}
      <circle cx="74" cy="28" r="6.5" fill="#164C6F" />
      <path d="M76 22 C 78 17, 82 15, 84 16 C 81 18, 80 21, 79 23 Z" fill="#2E9E7E" />
      <circle cx="76.5" cy="27" r="1.2" fill="#FFFFFF" />
      {/* beak */}
      <path d="M80 29 L 87 31 L 80 32.5 Z" fill="#C2570C" />
      {/* chestnut tail feathers */}
      <path d="M32 36 C 20 30, 10 30, 2 36 C 12 38, 20 40, 30 41 Z" fill="#B4551F" />
      <path d="M33 40 C 22 38, 12 40, 6 46 C 16 46, 24 45, 32 44 Z" fill="#8F3E14" />
      {/* wing */}
      <path d="M42 32 C 50 28, 60 29, 64 33 C 58 38, 48 39, 42 36 Z" fill="#7A3CA3" opacity="0.85" />
      {/* legs tucked in flight */}
      <path d="M56 46 l3 4 M62 45 l3 4" stroke="#C2570C" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Simple far-away bird marks for skies */
export function BirdMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 14" className={className} aria-hidden="true" fill="none">
      <path d="M2 10 C 8 4, 14 4, 20 9 C 26 4, 32 4, 38 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Laligurans — rhododendron, Nepal's national flower                   */
/* ------------------------------------------------------------------ */

function Blossom({ x, y, r, fill }: { x: number; y: number; r: number; fill: string }) {
  const petals = Array.from({ length: 5 }).map((_, i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    const px = x + Math.cos(angle) * r * 0.75;
    const py = y + Math.sin(angle) * r * 0.75;
    return <circle key={i} cx={px} cy={py} r={r * 0.62} fill={fill} />;
  });
  return (
    <g>
      {petals}
      <circle cx={x} cy={y} r={r * 0.34} fill="#F2B705" />
    </g>
  );
}

export function Laligurans({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 140" className={className} aria-hidden="true" fill="none">
      {/* branch */}
      <path d="M20 132 C 50 110, 70 84, 84 58 C 92 44, 100 36, 112 30" stroke="#5B4632" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M62 96 C 74 92, 84 92, 94 96 M 84 58 C 94 58, 102 62, 108 68" stroke="#5B4632" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* leaves */}
      <path d="M60 98 C 46 92, 40 80, 44 70 C 56 74, 62 84, 60 98 Z" fill="#2F6B4F" />
      <path d="M96 98 C 108 90, 120 90, 128 98 C 118 106, 104 106, 96 98 Z" fill="#3B7D5E" />
      <path d="M108 68 C 118 58, 130 56, 138 60 C 132 72, 118 76, 108 68 Z" fill="#2F6B4F" />
      {/* blossoms */}
      <Blossom x={112} y={28} r={13} fill="#C9354E" />
      <Blossom x={86} y={52} r={15} fill="#B62B45" />
      <Blossom x={128} y={52} r={11} fill="#D9506A" />
      <Blossom x={104} y={78} r={12} fill="#C9354E" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* One-horned rhino — the guardian of Chitwan                           */
/* ------------------------------------------------------------------ */

export function Rhino({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 120" className={className} aria-hidden="true" fill="none">
      {/* grass */}
      <path d="M8 112 q4 -14 2 -22 M16 112 q6 -10 4 -20 M204 112 q-4 -12 -2 -20 M212 112 q-6 -10 -4 -18" stroke="#2F6B4F" strokeWidth="2.5" strokeLinecap="round" />
      {/* body */}
      <path
        d="M52 60 C 56 42, 78 32, 104 32 C 128 32, 148 38, 158 48 C 166 42, 176 40, 182 44 C 190 38, 200 40, 204 46 L 196 54 C 200 60, 198 68, 192 72 C 190 84, 180 92, 166 96 L 164 108 L 150 108 L 148 98 L 112 98 L 110 108 L 96 108 L 94 96 C 74 94, 54 84, 52 60 Z"
        fill="#6B7A85"
      />
      {/* armour folds */}
      <path d="M96 34 C 94 54, 94 76, 96 96 M136 34 C 138 54, 138 76, 136 96 M158 50 C 156 64, 156 78, 160 90" stroke="#55636D" strokeWidth="2.5" fill="none" />
      {/* head */}
      <path
        d="M182 44 C 194 44, 206 52, 210 62 C 214 70, 212 78, 206 82 L 196 84 C 188 86, 180 82, 176 74 C 172 64, 174 50, 182 44 Z"
        fill="#5E6D78"
      />
      {/* the single horn */}
      <path d="M206 60 C 214 54, 220 46, 221 38 C 214 42, 207 48, 202 56 Z" fill="#3E4A52" />
      {/* ear */}
      <path d="M184 40 C 182 32, 186 26, 192 26 C 192 32, 190 38, 186 42 Z" fill="#55636D" />
      {/* eye */}
      <circle cx="192" cy="60" r="2.2" fill="#20303C" />
      {/* mouth line */}
      <path d="M206 76 C 202 79, 198 80, 194 80" stroke="#3E4A52" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Mountain ridgeline section dividers                                  */
/* ------------------------------------------------------------------ */

export function Ridge({
  className = '',
  fill = '#FBF9F5',
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className={`block w-full ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 110 L0 74 L 96 44 L 180 70 L 290 22 L 372 58 L 470 30 L 560 66 L 680 12 L 790 58 L 880 34 L 990 70 L 1090 26 L 1190 62 L 1290 40 L 1380 68 L 1440 50 L 1440 110 Z"
        fill={fill}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hero panorama — dawn over the Himalayas                              */
/* ------------------------------------------------------------------ */

export function HeroScene({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* real Himalayan alpenglow */}
      <Image
        src="/hero-himalaya.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-kenburns object-cover object-[center_76%] motion-reduce:animate-none"
      />

      {/* warm grade so the photo sits in the site's palette */}
      <div className="absolute inset-0 bg-sunrise/10 mix-blend-overlay" />

      {/* scrims: readable navbar up top, seamless blend into the paper page below */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-paper/90 via-paper/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-paper via-paper/70 to-transparent" />

      {/* distant birds over the peaks */}
      <BirdMark className="absolute left-[12%] top-[24%] w-8 text-white/70 animate-soar-slow" />
      <BirdMark className="absolute right-[20%] top-[18%] w-6 text-white/60 animate-soar" />
    </div>
  );
}
