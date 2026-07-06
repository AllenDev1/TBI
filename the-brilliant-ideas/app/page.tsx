import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import ParallaxLayer from '@/components/ParallaxLayer';
import ProjectVisual from '@/components/ProjectVisual';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';
import { TEAM } from '@/lib/team';

export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
};

const CRAFTS = ['Web', 'Apps', 'Brand', 'UX', 'Growth', 'Software'];

export default function HomePage() {
  const [flagship, ...others] = PROJECTS;
  const featured = others.slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-paper">
        {/* crawlable summary — the visuals carry the page */}
        <p className="sr-only">{SITE.description}</p>

        {/* ═══════ HERO — the lantern on the laligurans branch ═══════ */}
        <section className="relative min-h-[min(92vh,980px)] overflow-hidden">
          <div className="container-site grid min-h-[min(92vh,980px)] items-center gap-6 pb-16 pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-20">
            <div className="order-2 lg:relative lg:z-10 lg:order-1">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint">
                  The Brilliant Ideas · Digital Agency · Nepal
                </p>
              </Reveal>
              <Reveal delay={150}>
                <h1 className="mt-6 font-display text-4xl font-black leading-[1.04] text-ink sm:text-6xl xl:text-7xl">
                  Brilliant ideas,{' '}
                  <span className="italic text-laligurans">quietly crafted.</span>
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                  Websites, apps, and brands, built with Himalayan patience and care.
                </p>
              </Reveal>
              <Reveal delay={450}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start a project
                  </Link>
                  <Link href="/work" className="btn-outline">
                    See our work
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* the lantern hangs from the top of the page and sways —
                flipped so the branch grows in from, and off, the right edge of the screen */}
            {/* the branch must grow in from, and off, the right edge at every size —
                a cut branch floating mid-air breaks the illusion */}
            <div className="pointer-events-none order-1 -mr-5 -mt-6 flex justify-end sm:-mr-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-0 lg:mt-0 lg:items-center">
              <ParallaxLayer speed={0.06}>
                <div className="origin-top animate-pendulum motion-reduce:animate-none">
                  <Image
                    src="/image-story/image3.webp"
                    alt="A laligurans branch in bloom with a small wooden pagoda lantern hanging from it"
                    width={1023}
                    height={1537}
                    priority
                    sizes="(min-width: 1024px) 760px, (min-width: 640px) 60vw, 96vw"
                    className="w-[96vw] max-w-[520px] -scale-x-100 translate-x-2 sm:h-[86vh] sm:max-h-[760px] sm:w-auto sm:max-w-none lg:h-[104vh] lg:max-h-[1120px] lg:translate-x-0"
                  />
                </div>
              </ParallaxLayer>
            </div>
          </div>
        </section>

        {/* ═══════ THE JOURNEY — the silk road ═══════ */}
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-0">
          <div className="container-site grid items-center gap-10 lg:min-h-[92vh] lg:grid-cols-2 lg:gap-6">
            <Reveal className="pointer-events-none flex justify-center lg:absolute lg:inset-y-0 lg:left-0 lg:z-0 lg:items-center lg:justify-start">
              <ParallaxLayer speed={0.03}>
                <Image
                  src="/image-story/mountain-path.webp"
                  alt="A watercolor of a stone Himalayan footpath winding past a small stupa and prayer flags toward a misty snow peak"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 1024px) 840px, 70vw"
                  className="h-auto w-[86vw] max-w-[430px] sm:h-[80vh] sm:max-h-[780px] sm:w-auto sm:max-w-none lg:h-[98vh] lg:max-h-[1040px]"
                />
              </ParallaxLayer>
            </Reveal>

            <div className="relative z-10 text-center lg:col-start-2 lg:pr-8 lg:text-left">
              <Reveal>
                <h2 className="font-display text-4xl font-black leading-[1.06] text-ink sm:text-5xl xl:text-6xl">
                  Every project
                  <span className="block">is a journey.</span>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft sm:flex-nowrap sm:gap-x-3 sm:whitespace-nowrap sm:text-sm sm:tracking-[0.16em] lg:justify-start">
                  {CRAFTS.map((craft, i) => (
                    <li key={craft} className="flex items-center gap-2.5 sm:gap-3">
                      {i > 0 && <span className="text-laligurans">·</span>}
                      {craft}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={300}>
                <Link
                  href="/services"
                  className="mt-9 inline-flex items-center gap-2 border-b border-ink/25 pb-1 font-semibold text-ink transition-colors hover:border-laligurans hover:text-laligurans"
                >
                  What we do
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════ THE CRAFT — the temple roof ═══════ */}
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-0">
          <div className="container-site grid items-center gap-10 lg:min-h-[92vh] lg:grid-cols-2 lg:gap-6">
            <div className="relative z-10 text-center lg:col-start-1 lg:pr-8 lg:text-left">
              <Reveal>
                <h2 className="font-display text-4xl font-black leading-[1.06] text-ink sm:text-5xl xl:text-6xl">
                  Crafted
                  <span className="block italic text-laligurans">with devotion.</span>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mx-auto mt-7 max-w-sm text-lg leading-relaxed text-ink-soft lg:mx-0">
                  Down to the smallest bell.
                </p>
              </Reveal>
            </div>
            <Reveal delay={100} className="pointer-events-none flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:z-0 lg:items-center lg:justify-end">
              <ParallaxLayer speed={0.03}>
                <Image
                  src="/image-story/prayer-wheel.webp"
                  alt="A watercolor of a brass Nepali prayer wheel in a carved wooden shrine, strung with weathered prayer flags"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 1024px) 810px, 70vw"
                  className="h-auto w-[84vw] max-w-[420px] sm:h-[76vh] sm:max-h-[740px] sm:w-auto sm:max-w-none lg:h-[96vh] lg:max-h-[1010px]"
                />
              </ParallaxLayer>
            </Reveal>
          </div>
        </section>

        {/* ═══════ SELECTED WORK ═══════ */}
        <section className="py-24 sm:py-32">
          <div className="container-site">
            <Reveal className="flex items-end justify-between">
              <h2 className="font-display text-3xl font-black text-ink sm:text-5xl">Selected work</h2>
              <Link
                href="/work"
                className="hidden shrink-0 items-center gap-2 font-semibold text-sunrise-deep hover:underline sm:inline-flex"
              >
                All projects
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Reveal>

            {/* flagship — the work we lead with */}
            <Reveal className="mt-12" as="article">
              <Link
                href={`/work/${flagship.slug}`}
                className="group relative block overflow-hidden rounded-[2rem] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(34,48,58,0.25)]"
                style={{ background: flagship.brand.bg }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-[0.16em] right-0 select-none whitespace-nowrap font-display text-[6rem] font-black uppercase leading-none tracking-tight sm:text-[10rem]"
                  style={{ WebkitTextStroke: `1px ${flagship.brand.fg}`, color: 'transparent', opacity: 0.12 }}
                >
                  {flagship.title}
                </div>
                <div className="relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
                  <div>
                    <span
                      className="inline-block rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{
                        borderColor: `${flagship.brand.fg}40`,
                        color: flagship.brand.fg,
                        backgroundColor: `${flagship.brand.fg}14`,
                      }}
                    >
                      Flagship product
                    </span>
                    {flagship.frameIcon && (
                      <Image
                        src={flagship.frameIcon}
                        alt=""
                        aria-hidden
                        width={824}
                        height={824}
                        className="mt-7 h-12 w-12 object-contain sm:h-14 sm:w-14"
                      />
                    )}
                    <h3
                      className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl"
                      style={{ color: flagship.brand.fg }}
                    >
                      {flagship.title}
                    </h3>
                    <p
                      className="mt-2 font-display text-lg italic sm:text-xl"
                      style={{ color: flagship.brand.fg, opacity: 0.85 }}
                    >
                      {flagship.tagline}
                    </p>
                    <p className="mt-4 max-w-md leading-relaxed" style={{ color: flagship.brand.fg, opacity: 0.75 }}>
                      {flagship.description}
                    </p>
                    <span
                      className="mt-7 inline-flex items-center gap-2 font-semibold"
                      style={{ color: flagship.brand.fg }}
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
                  <ProjectVisual project={flagship} className="max-w-[460px]" />
                </div>
              </Link>
            </Reveal>

            {/* the rest of the summits */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {featured.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 2) * 120} as="article">
                  <TiltCard max={3} scale={1.005} className="h-full">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(34,48,58,0.22)] sm:p-8"
                      style={{ background: project.brand.bg }}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3
                          className="font-display text-2xl font-bold tracking-tight"
                          style={{ color: project.brand.fg }}
                        >
                          {project.title}
                        </h3>
                        <span className="text-sm font-semibold" style={{ color: project.brand.fg, opacity: 0.55 }}>
                          {project.year}
                        </span>
                      </div>
                      <p
                        className="mt-1 font-display italic"
                        style={{ color: project.brand.fg, opacity: 0.8 }}
                      >
                        {project.tagline}
                      </p>
                      <div className="mt-8 flex flex-1 items-end">
                        <ProjectVisual project={project} className="max-w-[380px]" />
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 text-center sm:hidden">
              <Link href="/work" className="btn-outline">
                All projects
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ═══════ THE CREW ═══════ */}
        <section className="py-20 sm:py-28">
          <div className="container-site">
            <Reveal>
              <h2 className="text-center font-display text-3xl font-black text-ink sm:text-5xl">The basecamp crew</h2>
            </Reveal>
            <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] sm:justify-center sm:overflow-visible sm:pb-0">
              {TEAM.slice(0, 6).map((member, i) => (
                <Reveal key={member.name} delay={i * 80} className="shrink-0 snap-center">
                  <TiltCard max={10}>
                    <div className="group w-36 sm:w-40">
                      <div className="relative aspect-[3/3.6] overflow-hidden rounded-2xl">
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role} at The Brilliant Ideas`}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="160px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-himal-night/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <p className="absolute bottom-2.5 left-0 right-0 px-2 text-center text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {member.role}
                        </p>
                      </div>
                      <p className="mt-2.5 text-center text-sm font-bold text-ink">{member.name.split(' ')[0]}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 text-center">
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-sunrise-deep hover:underline">
                Meet everyone
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ═══════ BEGIN ═══════ */}
        <section className="py-28 sm:py-40">
          <div className="container-site text-center">
            <Reveal className="mb-10 flex justify-center sm:mb-12">
              <Image
                src="/image-story/begin-story.webp"
                alt="A lone trekker beneath a line of prayer flags, watching the sun rise over the Himalaya"
                width={1122}
                height={1402}
                sizes="(min-width: 576px) 576px, 100vw"
                className="h-auto w-full max-w-xl"
              />
            </Reveal>
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-black leading-[1.06] text-ink sm:text-6xl">
                Let&rsquo;s begin
                <span className="block italic text-laligurans">your story.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Start the conversation
                </Link>
                <a href={`mailto:${SITE.email}`} className="font-semibold text-ink-soft transition-colors [overflow-wrap:anywhere] hover:text-laligurans">
                  {SITE.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer closing={false} sky="paper" />
    </>
  );
}
