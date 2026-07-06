import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import { Ridge, Laligurans, PrayerFlagLine } from '@/components/NepalArt';
import { SITE } from '@/lib/site';
import { TEAM, MASCOT } from '@/lib/team';

export const metadata: Metadata = {
  title: 'About Us: Our Story & Team',
  description:
    'Meet The Brilliant Ideas, a digital agency from Biratnagar and Kathmandu, Nepal. Our story, our values, and the team of designers, developers, and strategists behind our work.',
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: 'About The Brilliant Ideas, Digital Agency Team in Nepal',
    description:
      'Our story, our values, and the team of designers, developers, and strategists behind The Brilliant Ideas.',
    url: `${SITE.url}/about`,
    type: 'website',
  },
};

const VALUES = [
  {
    title: 'Steady as the Rhino',
    subtitle: 'Reliability',
    image: '/image-story/img5.webp',
    description:
      'The one-horned rhino of Chitwan moves with unstoppable purpose. So do we: deadlines kept, promises delivered, no surprises.',
  },
  {
    title: 'Bright as the Laligurans',
    subtitle: 'Creativity',
    image: '/image-story/laligurans-bloom.webp',
    description:
      'In spring, whole hillsides bloom red with rhododendron. Our work is made to stand out the same way, impossible to miss.',
  },
  {
    title: 'Bold as the Danphe',
    subtitle: 'Innovation',
    image: '/image-story/danphe-nepal.webp',
    description:
      'The Himalayan monal wears every colour without fear. We embrace new technologies and daring ideas just as freely.',
  },
  {
    title: 'Honest as the Mountains',
    subtitle: 'Integrity',
    image: '/image-story/mountain-path.webp',
    description:
      'The Himalayas do not pretend. We are transparent about scope, cost, and timelines, with our clients and with each other.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.url}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="pt-28 sm:pt-32">
        {/* Header */}
        <section className="container-site pb-16 text-center sm:pb-20">
          <Reveal>
            <p className="chapter justify-center">
              Our Story
              <span className="font-devanagari text-base normal-case tracking-normal text-ink-faint" lang="ne">
                · हाम्रो कथा
              </span>
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black text-ink sm:text-6xl">
              A small team from Nepal with mountain-sized ambition
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              The Brilliant Ideas began with a simple belief: world-class digital work can come
              from anywhere, even from the foothills of the Himalayas. Especially from there.
            </p>
          </Reveal>
        </section>

        {/* Story */}
        <section className="bg-paper-warm pb-20">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site grid items-center gap-12 pt-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">
                From Biratnagar to the world
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  We started in Biratnagar, in Hattkhola, Milanchok, and grew a second basecamp in
                  Kathmandu. From these two cities we serve clients across Nepal and beyond.
                </p>
                <p>
                  We specialise in web development, mobile apps, branding, and custom software. Our
                  team combines technical depth with creative instinct to build products that are
                  not just functional, but memorable.
                </p>
                <p>
                  Whether you are a startup taking your first step or an established business ready
                  to scale, we treat your idea like our own, because partnerships, like
                  friendships forged on a trail, last longest when both sides carry the load.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <Image
                src="/image-story/guanyin-hand.webp"
                alt="A serene figure cradled within a hand forming a mudra, a fine ink engraving of stillness and craft"
                width={736}
                height={1217}
                sizes="(min-width: 420px) 420px, 100vw"
                className="mx-auto h-auto w-full max-w-[420px]"
              />
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-paper pb-20">
          <Ridge fill="#FBF9F5" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-14">
            <Reveal className="max-w-2xl">
              <p className="chapter">What We Live By</p>
              <h2 className="mt-4 font-display text-3xl font-black text-ink sm:text-4xl">
                Values borrowed from the land itself
              </h2>
            </Reveal>
            <div className="mt-12 space-y-14 sm:space-y-20">
              {VALUES.map((value, i) => {
                const flip = i % 2 === 1;
                return (
                  <Reveal
                    key={value.title}
                    as="article"
                    className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12"
                  >
                    <div
                      className={`flex justify-center ${
                        flip ? 'sm:order-2 sm:justify-start' : 'sm:justify-end'
                      }`}
                    >
                      <Image
                        src={value.image}
                        alt={value.title}
                        width={1122}
                        height={1402}
                        className="h-auto w-full max-w-[340px] object-contain sm:max-w-[420px] lg:max-w-[480px]"
                      />
                    </div>
                    <div className={`text-center sm:text-left ${flip ? 'sm:order-1 sm:text-right' : ''}`}>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-laligurans">
                        {value.subtitle}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                        {value.title}
                      </h3>
                      <p
                        className={`mx-auto mt-4 max-w-md leading-relaxed text-ink-soft ${
                          flip ? 'sm:ml-auto sm:mr-0' : 'sm:mx-0'
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-paper-warm pb-20">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
              <Reveal className="max-w-2xl">
                <p className="chapter">The Basecamp Crew</p>
                <h2 className="mt-4 font-display text-3xl font-black text-ink sm:text-4xl">
                  Meet the team
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  The designers, developers, and strategists who carry every project to its summit.
                </p>
              </Reveal>
              <Reveal delay={120} className="flex justify-center lg:justify-end">
                <Image
                  src="/image-story/basecamp.webp"
                  alt="A small crew resting at a Himalayan basecamp with tents, a campfire, and prayer flags beneath misty peaks"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 448px) 448px, 100vw"
                  className="h-auto w-full max-w-md"
                />
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} delay={(i % 3) * 90} as="figure" className="h-full">
                  <TiltCard max={8} className="h-full">
                  <div className="group h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(34,48,58,0.10)]">
                    <div className="relative aspect-[4/3.4] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role} at The Brilliant Ideas`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <figcaption className="p-6">
                      <h3 className="font-display text-xl font-bold text-ink">{member.name}</h3>
                      <p className="mt-0.5 text-sm font-semibold text-sunrise-deep">{member.role}</p>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
                      {member.social && (
                        <div className="mt-4 flex gap-3">
                          {member.social.linkedin && (
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="text-ink-faint transition-colors hover:text-sunrise-deep">
                              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                          )}
                          {member.social.github && (
                            <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`} className="text-ink-faint transition-colors hover:text-sunrise-deep">
                              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                          )}
                          {member.social.instagram && (
                            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Instagram`} className="text-ink-faint transition-colors hover:text-sunrise-deep">
                              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                          )}
                          {member.social.twitter && (
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on X`} className="text-ink-faint transition-colors hover:text-sunrise-deep">
                              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </a>
                          )}
                          {member.social.facebook && (
                            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Facebook`} className="text-ink-faint transition-colors hover:text-sunrise-deep">
                              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                          )}
                        </div>
                      )}
                    </figcaption>
                  </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            {/* Scooby, the mascot */}
            <Reveal className="mt-12">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl border border-ink/10 bg-paper p-8 text-center sm:flex-row sm:text-left">
                <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-3xl">
                  <Image
                    src={MASCOT.image}
                    alt={`${MASCOT.name}, our ${MASCOT.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="144px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">{MASCOT.name} 🐾</h3>
                  <p className="mt-0.5 font-semibold text-sunrise-deep">{MASCOT.role}</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">{MASCOT.bio}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-paper-warm py-20">
          <Laligurans className="absolute -right-8 bottom-0 w-40 -scale-x-100 opacity-60 sm:w-52" />
          <div className="container-site relative z-10 text-center">
            <Reveal>
              <PrayerFlagLine className="mx-auto w-56" />
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Want to walk the trail with us?
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">Get In Touch</Link>
                <Link href="/work" className="btn-outline">View Our Work</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer closing={false} />
    </>
  );
}
