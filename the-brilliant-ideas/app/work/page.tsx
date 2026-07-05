import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import { Ridge, PrayerFlagLine } from '@/components/NepalArt';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Our Work: Projects & Case Studies',
  description:
    'Explore projects by The Brilliant Ideas: The Brilliant Chess, PixeryHub, JESTHA, NepaliNest, and more. Websites, mobile apps, and products built in Nepal.',
  alternates: { canonical: `${SITE.url}/work` },
  openGraph: {
    title: 'Our Work | The Brilliant Ideas',
    description:
      'Websites, mobile apps, and digital products built in Nepal by The Brilliant Ideas.',
    url: `${SITE.url}/work`,
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work` },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="pt-28 sm:pt-32">
        {/* Header */}
        <section className="container-site pb-16 text-center sm:pb-20">
          <Reveal>
            <p className="chapter justify-center">The Expedition Log</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black text-ink sm:text-6xl">
              Every project is a peak we&rsquo;ve climbed
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Apps, platforms, and products, each one a journey with its own story. Here are some
              of the summits so far.
            </p>
          </Reveal>
        </section>

        {/* Projects */}
        <section className="bg-paper-warm pb-20">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site space-y-10 pt-14">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} as="article">
                <TiltCard max={3} scale={1.005}>
                <Link
                  href={`/work/${project.slug}`}
                  className={`group grid items-center gap-8 rounded-3xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(34,48,58,0.10)] sm:p-9 lg:grid-cols-2 lg:gap-14 ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-warm">
                    <Image
                      src={project.image}
                      alt={`${project.title}: ${project.tagline}`}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-sunrise-deep">
                      {project.date}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-black text-ink sm:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 font-display text-lg italic text-laligurans">{project.tagline}</p>
                    <p className="mt-4 leading-relaxed text-ink-soft">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-sunrise-faint px-3.5 py-1.5 text-xs font-semibold text-sunrise-deep">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-sunrise-deep">
                      Read the case study
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-paper-warm py-20 text-center">
          <div className="container-site">
            <Reveal>
              <PrayerFlagLine className="mx-auto w-56" />
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Your project could be the next entry in this log
              </h2>
              <Link href="/contact" className="btn-primary mt-8">
                Start Your Project
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
