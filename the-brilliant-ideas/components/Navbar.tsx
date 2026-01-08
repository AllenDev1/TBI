'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      {/* Bottom Dock Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="neu px-6 py-4 rounded-[32px] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href="/" className="relative group mr-4">
              <span className="text-xl font-black tracking-tight">
                <span className="text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-glow group-hover:to-orange-primary transition-all duration-300">
                  The Brilliant
                </span>
                <span className="text-gradient ml-1">Ideas</span>
              </span>
            </Link>

            <div className="w-px h-8 bg-gray-300 mx-2"></div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'neu-inset text-orange-primary scale-95'
                      : 'text-gray-700 hover:text-orange-primary hover:scale-105'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 px-6 py-3 bg-gradient-to-r from-orange-primary to-orange-glow rounded-2xl font-semibold text-white shadow-lg hover:shadow-orange-glow/50 hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Bottom Right */}
      <button
        className="lg:hidden fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full neu hover:scale-105 transition-all shadow-xl flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 relative">
          <span
            className={`block absolute left-0 w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
            }`}
          ></span>
          <span
            className={`block absolute left-0 w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block absolute left-0 w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed bottom-28 right-8 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="neu rounded-3xl p-6 space-y-2 min-w-[200px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-5 py-3 rounded-xl font-medium transition-all duration-300 text-center ${
                  isActive
                    ? 'neu-inset text-orange-primary'
                    : 'text-gray-700 hover:text-orange-primary hover:neu-inset'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="block mt-4 px-6 py-3 bg-gradient-to-r from-orange-primary to-orange-glow rounded-xl font-semibold text-white text-center hover:shadow-lg hover:shadow-orange-glow/50 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </>
  );
}
