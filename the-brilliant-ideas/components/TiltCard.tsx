'use client';

import React, { useRef } from 'react';

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees */
  max?: number;
  /** Scale applied while hovered */
  scale?: number;
};

/**
 * Mouse-tracking 3D tilt. The card rotates in perspective toward the cursor
 * and lifts slightly, with children preserved in 3D space.
 */
export default function TiltCard({ children, className = '', max = 8, scale = 1.02 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(${scale})`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d] motion-reduce:!transform-none ${className}`}
    >
      {children}
    </div>
  );
}
