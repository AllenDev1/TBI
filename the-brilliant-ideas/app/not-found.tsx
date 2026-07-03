import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container-site flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
        <Image
          src="/image-story/img5.png"
          alt="A one-horned rhino carrying the temples and mountains of Nepal on its back"
          width={1122}
          height={1402}
          className="h-auto w-64 sm:w-80"
        />
        <h1 className="mt-8 font-display text-4xl font-black text-ink sm:text-5xl">
          You&rsquo;ve wandered off the trail
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink-soft">
          Even the rhino doesn&rsquo;t carry this page. Let&rsquo;s get you back to basecamp.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
