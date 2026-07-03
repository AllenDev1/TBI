import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import { Ridge, PrayerFlagLine } from '@/components/NepalArt';
import { SITE, SERVICES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — Web, Apps, Branding & SEO',
  description:
    'Web design and development, mobile apps, branding, UI/UX, digital marketing, and custom software — full-service digital agency services from Nepal by The Brilliant Ideas.',
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: 'Services | The Brilliant Ideas',
    description:
      'Web design and development, mobile apps, branding, UI/UX, digital marketing, and custom software from Nepal.',
    url: `${SITE.url}/services`,
    type: 'website',
  },
};

const PROCESS = [
  { step: 'Discovery', text: 'We listen first. Your goals, your users, your market — the map is drawn before the trek begins.' },
  { step: 'Strategy', text: 'We chart the route: scope, milestones, technology choices, and a plan you can hold us to.' },
  { step: 'Design', text: 'Wireframes become interfaces. Every screen is crafted, reviewed, and refined with you.' },
  { step: 'Development', text: 'Clean, modern code — built for speed, security, and search engines from day one.' },
  { step: 'Testing', text: 'Every path is walked before launch. Devices, browsers, edge cases — nothing is left to luck.' },
  { step: 'Launch & Beyond', text: 'We plant the flag together, then stay on as your guide for growth and support.' },
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SERVICES.map((service, i) => ({
    '@type': 'Service',
    position: i + 1,
    name: service.title,
    description: service.short,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: 'Nepal',
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="pt-28 sm:pt-32">
        {/* Header */}
        <section className="container-site pb-16 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="text-center lg:text-left">
              <Reveal>
                <p className="chapter justify-center lg:justify-start">What We Do</p>
                <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black text-ink sm:text-6xl lg:mx-0">
                  Ideas take
                  <span className="block italic text-laligurans">flight here.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
                  From the first sketch of a logo to a full software platform — everything your
                  business needs, under one roof in Nepal.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className="flex justify-center lg:justify-end">
              <Image
                src="/image-story/img4.png"
                alt="A danphe in flight, its wings carrying the stupas, temples, and mountains of Nepal"
                width={1114}
                height={1412}
                priority
                className="h-auto w-full max-w-[460px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="bg-himal-snow pb-20">
          <Ridge fill="#EEF3F7" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site grid gap-6 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90} as="article" className="h-full">
                <TiltCard max={10} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-8 shadow-[0_6px_24px_rgba(32,48,60,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(32,48,60,0.14)]">
                  <span className="font-display text-4xl font-black text-sunrise/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-ink">{service.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{service.short}</p>
                  <p className="mt-5 border-t border-dashed border-ink/10 pt-4 text-sm italic text-ink-faint">
                    {service.story}
                  </p>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-paper pb-20">
          <Ridge fill="#FAF6EF" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-14">
            <Reveal className="max-w-2xl">
              <p className="chapter">How We Work</p>
              <h2 className="mt-4 font-display text-3xl font-black text-ink sm:text-4xl">
                The route we take, every time
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Like any good expedition, a project succeeds on preparation. This is the path we
                walk with every client.
              </p>
            </Reveal>

            <ol className="relative mt-12 space-y-8 border-l-2 border-dashed border-sunrise/30 pl-8 sm:pl-10">
              {PROCESS.map((phase, i) => (
                <Reveal key={phase.step} delay={i * 80} as="li">
                  <div className="relative">
                    <span className="absolute -left-[46px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-sunrise text-xs font-bold text-white sm:-left-[54px]">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink">{phase.step}</h3>
                    <p className="mt-1.5 max-w-2xl leading-relaxed text-ink-soft">{phase.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-paper-warm py-20 text-center">
          <div className="container-site">
            <Reveal>
              <PrayerFlagLine className="mx-auto w-56" />
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Not sure which trail fits your idea?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
                Tell us where you want to go — we&rsquo;ll recommend the route, free of charge.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Talk to Us
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
