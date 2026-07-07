import React from 'react';

/**
 * Shared "expedition journal" chrome for every project card (homepage flagship,
 * homepage featured grid, and the work-list). Purely decorative layers that sit
 * *behind* the card content: a faint paper grain, a thin inked inner frame, and
 * the oversized project-name watermark bleeding off the tile. All three card
 * surfaces include this so they read as pages from the same handcrafted log.
 */
export function CardChrome({
  title,
  fg,
  watermarkClass = 'text-[7rem] sm:text-[11rem]',
  frameClass = 'inset-3 rounded-[1.5rem] sm:inset-4',
}: {
  title: string;
  /** The project's readable foreground colour. */
  fg: string;
  watermarkClass?: string;
  frameClass?: string;
}) {
  return (
    <>
      {/* organic wash — a faint watercolor bloom pooling in one corner and a soft
          inky settling around the edges, so the flat brand fill gains depth and
          irregularity without another illustration */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(72% 68% at 14% 14%, ${fg}14, transparent 46%), radial-gradient(135% 130% at 50% 6%, transparent 58%, rgba(9,14,20,0.2) 100%)`,
        }}
      />
      {/* faint hand-made paper grain over the brand ground */}
      <span aria-hidden className="card-grain pointer-events-none absolute inset-0" />
      {/* thin, warm, almost-invisible inner frame — a paper margin, not a UI line */}
      <span
        aria-hidden
        className={`pointer-events-none absolute ${frameClass}`}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(246,240,229,0.09)' }}
      />
      {/* oversized project name, ghosted, bleeding off the corner */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -bottom-[0.16em] right-0 select-none whitespace-nowrap font-display font-black uppercase leading-none tracking-tight ${watermarkClass}`}
        style={{ WebkitTextStroke: `1px ${fg}`, color: 'transparent', opacity: 0.1 }}
      >
        {title}
      </span>
    </>
  );
}

/**
 * A tiny strand of prayer flags, drawn in the current text colour so it takes
 * each project's own brand foreground. The single subtle motif per card.
 */
export function TrailFlags({ className = '', color }: { className?: string; color?: string }) {
  // the five colours of the wind horse: blue, white, red, green, yellow
  const flags: [number, number, string][] = [
    [5, 4.5, '#2E5EAA'],
    [19, 6.5, '#EDEDED'],
    [33, 7.5, '#C9354E'],
    [47, 6.5, '#2F6B4F'],
    [61, 4.5, '#F2B705'],
  ];
  return (
    <svg
      viewBox="0 0 74 18"
      className={className}
      style={color ? { color } : undefined}
      aria-hidden
      fill="none"
    >
      <path d="M2 4 Q 37 11, 72 4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {flags.map(([x, y, fill], i) => (
        <path key={i} d={`M${x} ${y} h11 l-2.5 9 h-6 z`} fill={fill} opacity="0.9" />
      ))}
    </svg>
  );
}
