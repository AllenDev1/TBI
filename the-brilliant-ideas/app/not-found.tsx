import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container-site flex min-h-[80vh] flex-col items-center justify-center pb-28 pt-36 text-center sm:pb-36 sm:pt-40">
        <Image
          src="/image-story/img7.webp"
          alt="A snow leopard adorned with Nepali patterns, prowling between a stupa and a pagoda temple"
          width={1086}
          height={1448}
          sizes="(min-width: 640px) 320px, 256px"
          className="h-auto w-64 sm:w-80"
        />
        <h1 className="mt-10 font-display text-4xl font-black text-ink sm:text-5xl">
          You&rsquo;ve wandered off the trail
        </h1>
        <p className="mt-5 max-w-md text-lg text-ink-soft">
          This page is as elusive as the snow leopard. Let&rsquo;s get you back to basecamp.
        </p>
        <Link href="/" className="btn-primary mt-10">
          Back to Home
        </Link>
        <p className="mt-8 text-sm text-ink-faint">
          Or pick up the trail at{' '}
          <Link href="/work" className="font-semibold text-ink-soft underline-offset-4 transition-colors hover:text-laligurans hover:underline">
            Our Work
          </Link>
          {' · '}
          <Link href="/services" className="font-semibold text-ink-soft underline-offset-4 transition-colors hover:text-laligurans hover:underline">
            Services
          </Link>
          {' · '}
          <Link href="/contact" className="font-semibold text-ink-soft underline-offset-4 transition-colors hover:text-laligurans hover:underline">
            Contact
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
