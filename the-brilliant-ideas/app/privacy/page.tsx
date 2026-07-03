import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How The Brilliant Ideas collects, uses, and protects your personal information.',
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="container-site max-w-3xl pb-20 pt-28 sm:pt-32">
        <h1 className="font-display text-4xl font-black text-ink">Privacy Policy</h1>
        <p className="mt-3 text-ink-faint">Last updated: July 2026</p>

        <div className="mt-8 space-y-8 leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Information we collect</h2>
            <p className="mt-3">
              When you contact us through our website, we collect the information you provide:
              your name, email address, company name, and the details of your message. We also use
              analytics tools (Google Analytics and Microsoft Clarity) that collect anonymous usage
              data such as pages visited, device type, and approximate location, to help us improve
              the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">How we use your information</h2>
            <p className="mt-3">
              We use your contact information solely to respond to your inquiry and discuss your
              project. We do not sell, rent, or share your personal information with third parties
              for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Cookies and advertising</h2>
            <p className="mt-3">
              This site may display advertisements served by Google AdSense, which uses cookies to
              show relevant ads. You can control ad personalization through your Google account
              settings or opt out of personalized advertising at adssettings.google.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Data security</h2>
            <p className="mt-3">
              Messages sent through our contact form are transmitted securely and protected by
              Google reCAPTCHA to prevent abuse. We retain inquiry data only as long as needed to
              serve you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Your rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal data at any
              time by emailing us at{' '}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-sunrise-deep hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Reach us at {SITE.email} or {SITE.phone}. Our offices are
              in Biratnagar and Kathmandu, Nepal.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
