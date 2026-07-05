'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
];

export default function Navbar({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // dark = floating over a dark cinematic hero, before any scroll
  const dark = theme === 'dark' && !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled || open ? 'bg-paper/95 shadow-[0_2px_20px_rgba(32,48,60,0.08)]' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-site flex h-16 items-center justify-between sm:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5" aria-label="The Brilliant Ideas — home">
            <Image
              src={dark ? '/white-logo.png' : '/logo-mark.png'}
              alt="The Brilliant Ideas logo"
              width={36}
              height={43}
              priority
            />
            <span className={`hidden font-display text-lg font-bold sm:block ${dark ? 'text-white' : 'text-ink'}`}>
              The Brilliant Ideas
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? dark
                          ? 'bg-white/15 text-white'
                          : 'bg-sunrise-faint text-sunrise-deep'
                        : dark
                          ? 'text-white/75 hover:text-white'
                          : 'text-ink-soft hover:text-sunrise-deep'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-3">
              <Link href="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
                Start a Project
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${dark ? 'text-white' : 'text-ink'}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-ink/5 bg-paper px-5 pb-6 pt-3 md:hidden">
            <ul className="space-y-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 font-semibold ${
                      pathname === link.href ? 'bg-sunrise-faint text-sunrise-deep' : 'text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-4 w-full">
              Start a Project
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
