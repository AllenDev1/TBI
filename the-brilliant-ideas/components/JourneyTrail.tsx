'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * The silk-road ribbon: a fabric-patterned trail that winds down the story
 * sections. A stitched line draws itself as the reader scrolls, and a danphe
 * rides along the path — the traveler of the tale.
 *
 * Mount inside a `position: relative` container; it fills the parent.
 */

// Normalized waypoints [x fraction, y fraction] — tuned so the ribbon hugs
// the edge where chapter text sits and crosses the page behind opaque cards.
const WAYPOINTS: Array<[number, number]> = [
  [0.5, 0],
  [0.78, 0.07],
  [0.84, 0.19],
  [0.28, 0.37],
  [0.8, 0.55],
  [0.22, 0.72],
  [0.62, 0.87],
  [0.5, 0.975],
];

function buildPath(w: number, h: number): string {
  const pts = WAYPOINTS.map(([fx, fy]) => [fx * w, fy * h]);
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x1, y1] = pts[i - 1];
    const [x2, y2] = pts[i];
    const cy = (y2 - y1) * 0.55;
    d += ` C ${x1.toFixed(1)} ${(y1 + cy).toFixed(1)}, ${x2.toFixed(1)} ${(y2 - cy).toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return d;
}

function PatternBlossom({ x, y, r }: { x: number; y: number; r: number }) {
  const petals = Array.from({ length: 5 }).map((_, i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    return (
      <circle
        key={i}
        cx={x + Math.cos(angle) * r * 0.75}
        cy={y + Math.sin(angle) * r * 0.75}
        r={r * 0.6}
        fill="#C9354E"
      />
    );
  });
  return (
    <g opacity="0.9">
      {petals}
      <circle cx={x} cy={y} r={r * 0.32} fill="#F2B705" />
    </g>
  );
}

export default function JourneyTrail() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const riderRef = useRef<SVGGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    const path = progressRef.current;
    if (!el || !path || !size.h) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = path.getTotalLength();
    path.style.strokeDasharray = `${total}`;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const raw = (window.innerHeight * 0.62 - rect.top) / rect.height;
      const progress = reduced ? 1 : Math.min(1, Math.max(0.015, raw));
      path.style.strokeDashoffset = `${total * (1 - progress)}`;

      const rider = riderRef.current;
      if (rider) {
        const at = total * progress;
        const pt = path.getPointAtLength(at);
        const ahead = path.getPointAtLength(Math.min(total, at + 2));
        let angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
        let flip = 1;
        if (angle > 90 || angle < -90) {
          angle += 180;
          flip = -1;
        }
        rider.setAttribute(
          'transform',
          `translate(${pt.x.toFixed(1)}, ${pt.y.toFixed(1)}) rotate(${(angle * 0.4).toFixed(1)}) scale(${flip}, 1)`
        );
      }
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
  }, [size]);

  const { w, h } = size;
  const d = w && h ? buildPath(w, h) : '';
  const ribbonWidth = Math.max(64, Math.min(w * 0.13, 150));

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {d && (
        <svg width={w} height={h} className="absolute inset-0">
          <defs>
            {/* Dhaka-textile weave for the ribbon */}
            <pattern id="trail-weave" patternUnits="userSpaceOnUse" width="220" height="220">
              <rect width="220" height="220" fill="#1C5A66" />
              <path
                d="M0 36 Q 27 24, 55 36 T 110 36 T 165 36 T 220 36 M0 116 Q 27 104, 55 116 T 110 116 T 165 116 T 220 116 M0 196 Q 27 184, 55 196 T 110 196 T 165 196 T 220 196"
                stroke="#2E7D8A"
                strokeWidth="2.5"
                fill="none"
              />
              <path
                d="M0 76 Q 27 66, 55 76 T 110 76 T 165 76 T 220 76 M0 156 Q 27 146, 55 156 T 110 156 T 165 156 T 220 156"
                stroke="#24707C"
                strokeWidth="1.8"
                fill="none"
              />
              <PatternBlossom x={55} y={58} r={13} />
              <PatternBlossom x={165} y={138} r={15} />
              <PatternBlossom x={20} y={188} r={10} />
              <circle cx="110" cy="96" r="2.5" fill="#F2B705" opacity="0.8" />
              <circle cx="200" cy="36" r="2.5" fill="#FB923C" opacity="0.7" />
              <circle cx="30" cy="116" r="2.5" fill="#FB923C" opacity="0.7" />
              <circle cx="140" cy="206" r="2.5" fill="#F2B705" opacity="0.8" />
            </pattern>
            <filter id="trail-shadow" x="-20%" y="-5%" width="140%" height="110%">
              <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#20303C" floodOpacity="0.28" />
            </filter>
          </defs>

          {/* chestnut selvage edge + soft shadow for the paper-cut depth */}
          <path
            d={d}
            fill="none"
            stroke="#8F3E14"
            strokeWidth={ribbonWidth + 12}
            strokeLinecap="round"
            filter="url(#trail-shadow)"
          />
          {/* the woven fabric */}
          <path d={d} fill="none" stroke="url(#trail-weave)" strokeWidth={ribbonWidth} strokeLinecap="round" />
          {/* faint stitching along the whole road */}
          <path
            d={d}
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.45"
            strokeWidth="3"
            strokeDasharray="1 14"
            strokeLinecap="round"
          />
          {/* the golden thread that draws itself as you scroll */}
          <path
            ref={progressRef}
            d={d}
            fill="none"
            stroke="#F2B705"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 6px rgba(242,183,5,0.55))' }}
          />

          {/* milestone stones at each bend */}
          {WAYPOINTS.slice(1, -1).map(([fx, fy], i) => (
            <g key={i}>
              <circle cx={fx * w} cy={fy * h} r="10" fill="#FFFFFF" stroke="#F97316" strokeWidth="3.5" />
              <circle cx={fx * w} cy={fy * h} r="3" fill="#C2570C" />
            </g>
          ))}

          {/* summit flag where the trail ends */}
          <g transform={`translate(${(0.5 * w).toFixed(1)}, ${(0.975 * h).toFixed(1)})`}>
            <line x1="0" y1="0" x2="0" y2="-48" stroke="#5B4632" strokeWidth="4" strokeLinecap="round" />
            <path d="M2 -48 L 36 -39 L 2 -29 Z" fill="#C9354E" />
            <circle cx="0" cy="0" r="7" fill="#F97316" stroke="#FFFFFF" strokeWidth="3" />
          </g>

          {/* the danphe rides the trail */}
          <g ref={riderRef}>
            <g transform="translate(-26, -34) scale(0.44)">
              {/* compact danphe (mirrors components/NepalArt.tsx) */}
              <path
                d="M30 34 C 40 24, 58 22, 68 28 C 76 33, 78 40, 72 44 C 62 50, 44 48, 36 42 C 32 39, 29 37, 30 34 Z"
                fill="#1D5F8A"
              />
              <path d="M38 30 C 48 24, 60 24, 66 29 C 58 27, 46 28, 38 30 Z" fill="#2E9E7E" />
              <circle cx="74" cy="28" r="6.5" fill="#164C6F" />
              <path d="M76 22 C 78 17, 82 15, 84 16 C 81 18, 80 21, 79 23 Z" fill="#2E9E7E" />
              <circle cx="76.5" cy="27" r="1.2" fill="#FFFFFF" />
              <path d="M80 29 L 87 31 L 80 32.5 Z" fill="#C2570C" />
              <path d="M32 36 C 20 30, 10 30, 2 36 C 12 38, 20 40, 30 41 Z" fill="#B4551F" />
              <path d="M33 40 C 22 38, 12 40, 6 46 C 16 46, 24 45, 32 44 Z" fill="#8F3E14" />
              <path d="M42 32 C 50 28, 60 29, 64 33 C 58 38, 48 39, 42 36 Z" fill="#7A3CA3" opacity="0.85" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}
