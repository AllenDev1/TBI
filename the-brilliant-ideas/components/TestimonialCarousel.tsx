'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Testimonial } from '@/lib/testimonials';

/**
 * One voice at a time — a calm, manual carousel (no autoplay) so each
 * testimonial gets the whole stage. Height stays steady across slides, so
 * a short review and a long one both sit balanced in the same frame.
 */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;
  const startX = useRef<number | null>(null);

  const go = (i: number) => setIndex((i + count) % count);

  // gentle autoplay — pauses on hover/focus/touch, and never runs for
  // visitors who prefer reduced motion. (index in deps → a manual nav
  // gives the next slide a full interval before it moves on.)
  useEffect(() => {
    if (paused || count < 2) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => window.clearInterval(id);
  }, [paused, count, index]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* stage */}
      <div
        className="mx-auto max-w-xl overflow-hidden"
        role="group"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          if (startX.current !== null) {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (dx > 45) go(index - 1);
            else if (dx < -45) go(index + 1);
            startX.current = null;
          }
          setPaused(false);
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t, i) => (
            <figure
              key={i}
              aria-hidden={i !== index}
              className="flex w-full shrink-0 flex-col justify-center rounded-2xl border border-ink/10 bg-paper-warm p-7 text-left shadow-[0_1px_2px_rgba(34,48,58,0.04)] sm:p-8"
            >
              {/* a small string of prayer flags — gratitude, in place of a generic quote mark */}
              <svg aria-hidden viewBox="0 0 62 24" className="h-5 w-14">
                <path d="M2 5 Q 31 13, 60 5" stroke="#8B7355" strokeWidth="1.2" fill="none" />
                <path d="M8 6 h13 l-3 11 h-7 z" fill="#C9354E" />
                <path d="M25 8 h13 l-3 11 h-7 z" fill="#2E5EAA" />
                <path d="M42 6.5 h13 l-3 11 h-7 z" fill="#F2B705" />
              </svg>
              <blockquote
                lang={t.lang}
                className={`mt-6 font-display text-ink ${
                  t.lang
                    ? 'text-lg not-italic leading-[1.9] sm:text-xl'
                    : 'text-2xl italic leading-[1.4] sm:text-[1.75rem]'
                }`}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-start gap-3.5 border-t border-ink/10 pt-5">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-full object-cover object-top"
                  />
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-madder-faint font-display text-lg font-bold text-madder">
                    {t.name.charAt(0)}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="font-bold leading-tight text-ink">{t.name}</p>
                  <p className="mt-0.5 text-sm text-ink-faint">{t.role}</p>
                  {t.rating ? (
                    <div className="mt-1.5 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          viewBox="0 0 20 20"
                          aria-hidden
                          className={`h-3.5 w-3.5 ${s < t.rating! ? 'fill-madder' : 'fill-ink/15'}`}
                        >
                          <path d="M10 1.6l2.47 5 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.6z" />
                        </svg>
                      ))}
                    </div>
                  ) : null}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* controls — a quiet row of trail markers */}
      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition duration-300 ease-out hover:-translate-x-0.5 hover:border-madder hover:text-madder motion-reduce:hover:translate-x-0"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1} of ${count}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-madder' : 'w-2 bg-ink/20 hover:bg-ink/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition duration-300 ease-out hover:translate-x-0.5 hover:border-madder hover:text-madder motion-reduce:hover:translate-x-0"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
