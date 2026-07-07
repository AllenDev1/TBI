import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import { CardChrome, TrailFlags } from '@/components/ExpeditionCard';
import ParallaxLayer from '@/components/ParallaxLayer';
import ProjectVisual from '@/components/ProjectVisual';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';
import { TESTIMONIALS } from '@/lib/testimonials';
import TestimonialCarousel from '@/components/TestimonialCarousel';

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

        {/* ═══════ HERO — the branch descends from the top, over the words ═══════ */}
        {/* the illustration is anchored to the TOP of the screen, so its top flowers
            are always visible (never cropped); it's large, a little left of centre,
            and hangs down over the words that sit in the lower half. */}
        <section className="relative h-[100svh] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-[85%] sm:-translate-x-[115%] lg:-translate-x-[143%]">
            <ParallaxLayer speed={0.05} className="flex justify-center">
              <div className="origin-top animate-pendulum motion-reduce:animate-none">
                <Image
                  src="/image-story/hero-lantern.webp"
                  alt="An ink-wash laligurans branch in full bloom with a carved wooden pagoda lantern hanging from it"
                  width={850}
                  height={1500}
                  priority
                  sizes="(min-width: 1024px) 680px, (min-width: 640px) 560px, 96vw"
                  className="h-[min(52vh,440px)] w-auto sm:h-[min(62vh,640px)] lg:h-[min(70vh,800px)]"
                />
              </div>
            </ParallaxLayer>
          </div>

          <div className="container-site relative z-10 flex h-full flex-col items-center justify-end pb-[12vh] text-center sm:pb-[15vh]">
            <div className="hero-rise">
              <p className="font-devanagari text-base font-medium text-laligurans sm:text-lg" lang="ne">
                नमस्ते
              </p>
              <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink-faint sm:text-xs sm:tracking-[0.3em]">
                The Brilliant Ideas · Digital Agency · Nepal
              </p>
            </div>
            <div className="hero-rise" style={{ animationDelay: '120ms' }}>
              <h1 className="mx-auto mt-3 max-w-4xl font-display text-4xl font-black leading-[1.03] text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
                Brilliant ideas,{' '}
                <span className="italic text-laligurans">quietly crafted.</span>
              </h1>
            </div>
            <div className="hero-rise" style={{ animationDelay: '240ms' }}>
              <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-soft sm:text-xl">
                Websites, apps, and brands, built with Himalayan patience and care.
              </p>
            </div>
            <div className="hero-rise" style={{ animationDelay: '360ms' }}>
              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a project
                </Link>
                <Link href="/work" className="btn-outline">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THE JOURNEY — the silk road ═══════ */}
        <section className="relative mx-auto max-w-[1728px] overflow-hidden py-24 sm:py-32 lg:py-0">
          <div className="container-site grid items-center gap-10 lg:min-h-[82vh] lg:grid-cols-2 lg:gap-6">
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
        <section className="relative mx-auto max-w-[1728px] overflow-hidden py-24 sm:py-32 lg:py-0">
          <div className="container-site grid items-center gap-10 lg:min-h-[82vh] lg:grid-cols-2 lg:gap-6">
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
        <section className="py-20 sm:py-28">
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
                className="group relative block overflow-hidden rounded-[2rem] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_36px_80px_-32px_rgba(34,48,58,0.4)] motion-reduce:hover:translate-y-0"
                style={{ background: flagship.brand.bg, boxShadow: '0 18px 50px -30px rgba(34,48,58,0.35)' }}
              >
                <CardChrome
                  title={flagship.title}
                  fg={flagship.brand.fg}
                  watermarkClass="text-[6rem] sm:text-[10rem]"
                />
                <div className="relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.28em]"
                      style={{ color: flagship.brand.fg, opacity: 0.62 }}
                    >
                      Expedition 01 · {flagship.date}
                    </p>
                    <TrailFlags className="mt-3 h-4 w-[68px]" color={flagship.brand.fg} />
                    {flagship.frameIcon && (
                      <Image
                        src={flagship.frameIcon}
                        alt=""
                        aria-hidden
                        width={824}
                        height={824}
                        className="mt-6 h-12 w-12 object-contain sm:h-14 sm:w-14"
                      />
                    )}
                    <h3
                      className="mt-5 font-display text-[2rem] font-black leading-[1.0] tracking-tight sm:text-[3.3rem]"
                      style={{ color: flagship.brand.fg }}
                    >
                      {flagship.title}
                    </h3>
                    <p
                      className="mt-4 font-display text-lg italic sm:text-xl"
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
                      <span className="relative">
                        Explore the journey
                        <span
                          aria-hidden
                          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                        />
                      </span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none"
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
                      className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-shadow duration-300 hover:shadow-[0_30px_66px_-30px_rgba(34,48,58,0.36)] sm:p-8"
                      style={{ background: project.brand.bg, boxShadow: '0 14px 40px -28px rgba(34,48,58,0.32)' }}
                    >
                      <CardChrome
                        title={project.title}
                        fg={project.brand.fg}
                        watermarkClass="text-[4.5rem] sm:text-[6rem]"
                        frameClass="inset-2.5 rounded-[1.15rem]"
                      />
                      <div className="relative flex items-center justify-between gap-4">
                        <p
                          className="text-[0.7rem] font-semibold uppercase tracking-[0.24em]"
                          style={{ color: project.brand.fg, opacity: 0.6 }}
                        >
                          Expedition {String(i + 2).padStart(2, '0')}
                        </p>
                        <span className="text-sm font-semibold" style={{ color: project.brand.fg, opacity: 0.5 }}>
                          {project.year}
                        </span>
                      </div>
                      <h3
                        className="relative mt-3 font-display text-[1.7rem] font-bold leading-[1.02] tracking-tight"
                        style={{ color: project.brand.fg }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="relative mt-2 font-display italic"
                        style={{ color: project.brand.fg, opacity: 0.8 }}
                      >
                        {project.tagline}
                      </p>
                      <div className="relative mt-8 flex flex-1 items-end">
                        <ProjectVisual project={project} className="max-w-[380px]" />
                      </div>
                      <span
                        className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: project.brand.fg }}
                      >
                        <span className="relative">
                          Explore the journey
                          <span
                            aria-hidden
                            className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                          />
                        </span>
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
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

        {/* ═══════ WHAT CLIENTS SAY ═══════ */}
        <section className="py-20 sm:py-28">
          <div className="container-site">
            <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-10 lg:gap-16">
              <Reveal className="flex justify-center sm:justify-start">
                <Image
                  src="/image-story/namaste.webp"
                  alt=""
                  aria-hidden
                  width={620}
                  height={778}
                  sizes="(min-width: 1024px) 220px, 180px"
                  loading="lazy"
                  className="h-44 w-auto sm:h-52 lg:h-60"
                />
              </Reveal>
              <Reveal delay={120} className="text-center sm:text-left">
                <p className="chapter justify-center sm:justify-start">Voices from the Trail</p>
                <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
                  Kind words from fellow travelers
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft sm:mx-0">
                  Stories gathered along the way, from the people who walked this journey with us.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-12">
              <TestimonialCarousel items={TESTIMONIALS} />
            </Reveal>
          </div>
        </section>

        {/* ═══════ BEGIN ═══════ */}
        <section className="pb-24 pt-8 sm:pb-28 sm:pt-12">
          <div className="container-site text-center">
            <Reveal className="mb-6 flex justify-center sm:mb-8">
              <Image
                src="/image-story/begin-story.webp"
                alt="A lone trekker beneath a line of prayer flags, watching the sun rise over the Himalaya"
                width={1090}
                height={832}
                sizes="(min-width: 768px) 768px, 92vw"
                className="h-auto w-full max-w-3xl"
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
