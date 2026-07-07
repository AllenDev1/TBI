import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';
import { Ridge, PrayerFlagLine } from '@/components/NepalArt';

const NAV = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const SOCIAL = [
  {
    href: SITE.social.linkedin,
    label: 'LinkedIn',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    href: SITE.social.instagram,
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: SITE.social.facebook,
    label: 'Facebook',
    path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
  },
  {
    href: SITE.social.twitter,
    label: 'X (Twitter)',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
];

// Deterministic starfield (index-based, so server & client render identically —
// no hydration mismatch). Biased toward the upper "sky" of the footer.
const STARS = Array.from({ length: 32 }, (_, i) => ({
  top: `${4 + ((i * 47) % 42)}%`,
  left: `${(i * 271) % 97}%`,
  size: i % 5 === 0 ? 2.5 : i % 3 === 0 ? 1.75 : 1,
  delay: `${(i % 8) * 0.55}s`,
  warm: i % 11 === 4, // a couple of distant-lantern amber points
}));

export default function Footer({
  closing = true,
  sky = 'warm',
}: {
  closing?: boolean;
  /** Colour behind the night ridge — match the page's last section ('warm' = paper-warm, 'paper' = plain paper). */
  sky?: 'warm' | 'paper';
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* ═══ Closing band — a calm close (hidden on pages that already have a CTA) ═══ */}
      {closing && (
      <div className="bg-paper-warm">
        <div className="container-site flex flex-col items-center py-16 text-center sm:py-20">
          <Image
            src="/image-story/img6.webp"
            alt="A watercolor Buddha meditating beneath a Bodhi tree"
            width={1054}
            height={1492}
            sizes="270px"
            className="h-auto w-auto max-h-[300px] sm:max-h-[380px]"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 68% 76% at 50% 47%, black 42%, transparent 88%)',
              maskImage: 'radial-gradient(ellipse 68% 76% at 50% 47%, black 42%, transparent 88%)',
            }}
          />
          <h2 className="mt-8 font-display text-3xl font-black leading-[1.08] text-ink sm:text-4xl">
            Great work is <span className="italic text-laligurans">calm work.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
            Whatever you&rsquo;re building, we&rsquo;ll walk it with you, unhurried, considered, and
            made to last.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-ink-soft transition-colors [overflow-wrap:anywhere] hover:text-laligurans"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
      )}

      {/* ═══ Nightfall — the utility footer ═══ */}
      {/* the ridge's "sky" must match whatever the page ends on */}
      <div className={closing || sky === 'warm' ? 'bg-paper-warm' : 'bg-paper'}>
        <Ridge fill="#16222C" className="block h-16 sm:h-24" />
      </div>
      <div className="relative overflow-hidden bg-himal-night text-himal-snow">
        {/* nightfall at the summit — a quiet starlit sky with a low moon */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {STARS.map((st, i) => (
            <span
              key={i}
              className="star absolute rounded-full"
              style={{
                top: st.top,
                left: st.left,
                width: `${st.size}px`,
                height: `${st.size}px`,
                animationDelay: st.delay,
                background: st.warm ? 'rgba(255,196,140,0.95)' : 'rgba(255,255,255,0.9)',
                boxShadow: st.warm ? '0 0 7px rgba(255,180,120,0.75)' : undefined,
              }}
            />
          ))}
        </div>
        <div className="container-site relative z-10 pt-14 sm:pt-16">
          {/* brand + social */}
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="group flex items-center gap-3" aria-label="The Brilliant Ideas — home">
              <span className="relative inline-flex">
                <span
                  aria-hidden
                  className="absolute inset-0 -m-2 rounded-full bg-[radial-gradient(circle,rgba(255,182,122,0.3),transparent_70%)] blur-md"
                />
                <Image src="/white-logo.webp" alt="The Brilliant Ideas logo" width={44} height={44} className="relative" />
              </span>
              <span className="font-display text-xl font-bold text-white">The Brilliant Ideas</span>
            </Link>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-himal-mist transition duration-300 ease-out hover:-translate-y-0.5 hover:border-sunrise-bright hover:text-sunrise-bright motion-reduce:hover:translate-y-0"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* columns */}
          <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="max-w-sm leading-relaxed text-himal-mist">
                A digital agency from the land of the Himalayas, building websites, apps, and brands
                that carry your story to the summit.
              </p>
              <PrayerFlagLine className="mt-6 w-52" />
            </div>

            <nav aria-label="Footer">
              <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-himal-mist/70">
                <span aria-hidden className="h-1 w-1 rounded-full bg-madder-bright" />
                Explore
              </h2>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-himal-snow transition-colors hover:text-sunrise-bright"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-himal-mist/70">
                <span aria-hidden className="h-1 w-1 rounded-full bg-madder-bright" />
                Find Us
              </h2>
              <ul className="mt-4 space-y-2.5 text-himal-mist">
                {SITE.offices.map((office) => (
                  <li key={office.city}>
                    <span className="text-himal-snow">{office.city}</span> — {office.address}
                  </li>
                ))}
                <li>
                  <a href={`mailto:${SITE.email}`} className="transition-colors [overflow-wrap:anywhere] hover:text-sunrise-bright">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* a quiet line before the valley */}
        <div className="container-site relative z-10 mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-sm text-himal-mist sm:flex-row">
          <p>© {year} The Brilliant Ideas. All rights reserved.</p>
          <p>Proudly crafted in Nepal 🇳🇵</p>
        </div>

        {/* the Kathmandu valley at dusk — temples, stupas, the Buddha, the Himalaya —
            the last chapter of the journey, sitting on the very edge of the page */}
        <Image
          src="/image-story/nepal-skyline.webp"
          alt=""
          aria-hidden="true"
          width={2000}
          height={363}
          sizes="100vw"
          loading="lazy"
          className="relative z-[1] mt-8 w-full select-none sm:mt-10"
        />
      </div>
    </footer>
  );
}
