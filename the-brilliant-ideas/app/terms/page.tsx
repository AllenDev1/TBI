import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for using The Brilliant Ideas website and services.',
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container-site max-w-3xl pb-20 pt-28 sm:pt-32">
        <h1 className="font-display text-4xl font-black text-ink">Terms of Service</h1>
        <p className="mt-3 text-ink-faint">Last updated: July 2026</p>

        <div className="mt-8 space-y-8 leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Use of this website</h2>
            <p className="mt-3">
              By accessing thebrilliantideas.com you agree to use it lawfully and not to attempt to
              disrupt, damage, or gain unauthorized access to the site or its services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Intellectual property</h2>
            <p className="mt-3">
              All content on this site — including text, graphics, logos, illustrations, and
              project imagery — is the property of The Brilliant Ideas or its clients and is
              protected by applicable copyright and trademark law. You may not reproduce it without
              written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Services and proposals</h2>
            <p className="mt-3">
              Information on this website is provided for general purposes and does not constitute
              a binding offer. Project engagements are governed by individual written agreements
              covering scope, timeline, and payment terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Downloads</h2>
            <p className="mt-3">
              Files offered for download (such as our app APKs) are provided as-is. While we take
              care to keep them safe, you download and install them at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Limitation of liability</h2>
            <p className="mt-3">
              The Brilliant Ideas is not liable for any indirect or consequential damages arising
              from the use of this website or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms? Email{' '}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-sunrise-deep hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
