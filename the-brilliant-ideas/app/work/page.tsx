import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import ProjectVisual from '@/components/ProjectVisual';
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
        <section className="container-site pb-16 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="text-center lg:text-left">
              <Reveal>
                <p className="chapter justify-center lg:justify-start">The Expedition Log</p>
                <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black text-ink sm:text-6xl lg:mx-0">
                  Every project is a peak
                  <span className="block italic text-laligurans">we&rsquo;ve climbed.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
                  Apps, platforms, and products, each one a journey with its own story. Here are
                  some of the summits so far.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className="flex justify-center lg:justify-end">
              <Image
                src="/image-story/img4.webp"
                alt="A danphe in flight, its wings and tail carrying the stupas, temples, waterfalls, and mountains of Nepal"
                width={1114}
                height={1412}
                priority
                sizes="(min-width: 480px) 480px, 90vw"
                className="h-auto w-full max-w-[480px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Projects — each card is a doorway into that project's brand world */}
        <section className="bg-paper-warm pb-20">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site space-y-8 pt-14 sm:space-y-10">
            {PROJECTS.map((project, i) => {
              const { bg, fg } = project.brand;
              return (
                <Reveal key={project.slug} as="article">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group relative block overflow-hidden rounded-[2rem] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_34px_80px_-30px_rgba(34,48,58,0.42)] motion-reduce:hover:translate-y-0"
                    style={{ background: bg }}
                  >
                    {/* watermark title bleeding off the tile */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-[0.16em] right-0 select-none whitespace-nowrap font-display text-[7rem] font-black uppercase leading-none tracking-tight sm:text-[11rem]"
                      style={{ WebkitTextStroke: `1px ${fg}`, color: 'transparent', opacity: 0.12 }}
                    >
                      {project.title}
                    </div>

                    <div
                      className={`relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 ${
                        i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                      }`}
                    >
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.28em]"
                          style={{ color: fg, opacity: 0.6 }}
                        >
                          {String(i + 1).padStart(2, '0')} · {project.date}
                        </p>
                        {project.frameIcon && (
                          <Image
                            src={project.frameIcon}
                            alt=""
                            aria-hidden
                            width={824}
                            height={824}
                            className="mt-6 h-12 w-12 object-contain sm:h-14 sm:w-14"
                          />
                        )}
                        <h2
                          className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl"
                          style={{ color: fg }}
                        >
                          {project.title}
                        </h2>
                        <p className="mt-2 font-display text-lg italic sm:text-xl" style={{ color: fg, opacity: 0.85 }}>
                          {project.tagline}
                        </p>
                        <p className="mt-4 max-w-md leading-relaxed" style={{ color: fg, opacity: 0.75 }}>
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border px-3.5 py-1.5 text-xs font-semibold"
                              style={{ borderColor: `${fg}40`, color: fg, backgroundColor: `${fg}14` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span
                          className="mt-7 inline-flex items-center gap-2 font-semibold"
                          style={{ color: fg }}
                        >
                          Read the story
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>

                      {/* the work itself: mini fan of screens, or a browser card */}
                      <ProjectVisual
                        project={project}
                        priority={i === 0}
                        className={project.frame === 'window' ? 'max-w-[460px]' : 'max-w-[520px]'}
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
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

      <Footer closing={false} />
    </>
  );
}
