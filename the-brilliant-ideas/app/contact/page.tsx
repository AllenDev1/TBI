import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { Ridge } from '@/components/NepalArt';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us: Start Your Project',
  description:
    'Get in touch with The Brilliant Ideas, a digital agency in Biratnagar and Kathmandu, Nepal. Email info@thebrilliantideas.com to start your project.',
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: 'Contact The Brilliant Ideas',
    description:
      'Start your project with The Brilliant Ideas. Offices in Biratnagar and Kathmandu, Nepal.',
    url: `${SITE.url}/contact`,
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE.url}/contact` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly do you respond to inquiries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We reply to every message within one business day, usually much faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is The Brilliant Ideas located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have offices in Biratnagar (Hattkhola, Milanchok) and Kathmandu (Battishputtali, Rammandir Marga), Nepal. We work with clients across Nepal and internationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work remotely with clients around the world, alongside our clients in Nepal.',
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="pt-28 sm:pt-32">
        {/* Header */}
        <section className="container-site relative pb-24 text-center sm:pb-28">
          <Reveal>
            <p className="chapter justify-center">Begin Your Chapter</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black text-ink sm:text-6xl">
              Every journey starts with hello
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Tell us about your idea. Whether it&rsquo;s a rough sketch or a full plan, we&rsquo;ll
              help you find the path forward, with no obligation and no jargon.
            </p>
          </Reveal>
        </section>

        {/* Form + info */}
        <section className="bg-paper-warm pb-24">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site grid gap-10 pt-14 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            {/* the form */}
            <Reveal>
              <div className="rounded-3xl border border-ink/10 bg-paper p-7 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
                <p className="mt-1.5 text-ink-soft">We reply within one business day.</p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* contact details — one calm panel */}
            <Reveal delay={140}>
              <div className="lg:sticky lg:top-28">
                <Image
                  src="/image-story/lantern-doorway.webp"
                  alt="A brass lantern glowing beside an open, carved wooden doorway at dusk, an invitation inward"
                  width={1122}
                  height={1402}
                  sizes="320px"
                  className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[320px]"
                />
                <div className="mt-6 rounded-3xl border border-ink/10 bg-paper p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      Write to us
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-2 inline-block font-display text-xl font-bold text-ink transition-colors hover:text-madder"
                    >
                      {SITE.email}
                    </a>
                  </div>

                  <div className="mt-7 border-t border-ink/10 pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      Our basecamps
                    </p>
                    <ul className="mt-4 space-y-4">
                      {SITE.offices.map((office) => (
                        <li key={office.city}>
                          <p className="font-display font-bold text-ink">{office.city}</p>
                          <p className="text-sm leading-relaxed text-ink-soft">
                            {office.address}, {office.country}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-ink/10 pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      Office hours
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      Sunday to Friday · 10:00&nbsp;AM to 6:00&nbsp;PM (NPT)
                      <br />
                      The mountains rest on Saturdays, and so do we.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
