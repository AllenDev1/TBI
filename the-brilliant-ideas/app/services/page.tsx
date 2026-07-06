import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { Ridge, PrayerFlagLine } from '@/components/NepalArt';
import { SITE, SERVICES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services: Web, Apps, Branding & SEO',
  description:
    'Web design and development, mobile apps, branding, UI/UX, digital marketing, and custom software. Full-service digital agency services from Nepal by The Brilliant Ideas.',
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
  { step: 'Discovery', text: 'We listen first. Your goals, your users, your market. The map is drawn before the trek begins.' },
  { step: 'Strategy', text: 'We chart the route: scope, milestones, technology choices, and a plan you can hold us to.' },
  { step: 'Design', text: 'Wireframes become interfaces. Every screen is crafted, reviewed, and refined with you.' },
  { step: 'Development', text: 'Clean, modern code, built for speed, security, and search engines from day one.' },
  { step: 'Testing', text: 'Every path is walked before launch. Devices, browsers, edge cases. Nothing is left to luck.' },
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
                  From the first sketch of a logo to a full software platform. Everything your
                  business needs, under one roof in Nepal.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className="flex justify-center lg:justify-end">
              <Image
                src="/image-story/danphe-flight.webp"
                alt="A danphe, the Himalayan monal, in flight with its wings spread"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 520px) 520px, 100vw"
                className="h-auto w-full max-w-[520px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="bg-paper-warm pb-20">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site space-y-16 pt-14 sm:space-y-24">
            {SERVICES.map((service, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={service.slug}
                  as="article"
                  className="grid items-center gap-8 sm:grid-cols-2 sm:gap-14"
                >
                  <div
                    className={`flex justify-center ${
                      flip ? 'sm:order-2 sm:justify-start' : 'sm:justify-end'
                    }`}
                  >
                    <div className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[440px]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 440px"
                      />
                    </div>
                  </div>
                  <div className={`text-center sm:text-left ${flip ? 'sm:order-1 sm:text-right' : ''}`}>
                    <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                      {service.title}
                    </h2>
                    <p
                      className={`mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-soft ${
                        flip ? 'sm:ml-auto sm:mr-0' : 'sm:mx-0'
                      }`}
                    >
                      {service.short}
                    </p>
                    <p
                      className={`mx-auto mt-4 max-w-md text-sm italic text-ink-faint ${
                        flip ? 'sm:ml-auto sm:mr-0' : 'sm:mx-0'
                      }`}
                    >
                      {service.story}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="bg-paper pb-20">
          <Ridge fill="#FBF9F5" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
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
              <Reveal delay={150} className="hidden justify-end lg:flex">
                <Image
                  src="/image-story/craftsman-hands.webp"
                  alt="The hands of a Newari woodcarver shaping an intricate lattice panel"
                  width={1122}
                  height={1402}
                  sizes="300px"
                  className="h-auto w-full max-w-[300px]"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 66% 66% at 50% 50%, black 48%, transparent 84%)',
                    maskImage: 'radial-gradient(ellipse 66% 66% at 50% 50%, black 48%, transparent 84%)',
                  }}
                />
              </Reveal>
            </div>

            {/* The trek route — the silk trail runs down the centre,
                the milestones make camp on alternating sides. */}
            <ol className="mt-14 grid items-center gap-x-6 gap-y-10 md:grid-cols-[1fr_clamp(260px,32vw,440px)_1fr] md:gap-x-8 md:gap-y-4">
              {/* the winding silk route */}
              <li
                className="hidden md:block md:h-full"
                style={{ gridColumn: '2', gridRow: '1 / span 3' }}
                aria-hidden="true"
              >
                <Image
                  src="/image-story/img1.webp"
                  alt=""
                  width={1023}
                  height={1537}
                  sizes="(min-width: 768px) 440px, 1px"
                  className="h-full w-full object-cover object-center"
                />
              </li>

              {PROCESS.map((phase, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal
                    key={phase.step}
                    delay={i * 60}
                    as="li"
                    className={`flex flex-col ${
                      left
                        ? 'md:col-start-1 md:items-end md:text-right'
                        : 'md:col-start-3 md:items-start md:text-left'
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-madder font-display text-sm font-bold text-paper">
                      {i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink">{phase.step}</h3>
                    <p className="mt-1.5 max-w-xs leading-relaxed text-ink-soft">{phase.text}</p>
                  </Reveal>
                );
              })}
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
                Tell us where you want to go, and we&rsquo;ll recommend the route, free of charge.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Talk to Us
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer closing={false} />
    </>
  );
}
