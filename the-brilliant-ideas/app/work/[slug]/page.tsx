import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import FramedShot from '@/components/FramedShot';
import TiltCard from '@/components/TiltCard';
import { TrailFlags } from '@/components/ExpeditionCard';
import { Ridge, PrayerFlagLine } from '@/components/NepalArt';
import { SITE } from '@/lib/site';
import { PROJECTS, getProject } from '@/lib/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title}: ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `${SITE.url}/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | The Brilliant Ideas`,
      description: project.description,
      url: `${SITE.url}/work/${project.slug}`,
      type: 'article',
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextIdx = (idx + 1) % PROJECTS.length;
  const next = PROJECTS[nextIdx];
  const { bg, fg } = project.brand;

  const expeditionNo = String(idx + 1).padStart(2, '0');
  const nextNo = String(nextIdx + 1).padStart(2, '0');

  const links = [
    project.externalLink && { href: project.externalLink, label: 'Live Website', external: true },
    project.appLink && { href: project.appLink, label: 'Google Play', external: true },
    project.iosLink && { href: project.iosLink, label: 'App Store', external: true },
    project.apkLink && { href: project.apkLink, label: 'Download APK', download: true },
  ].filter(Boolean) as { href: string; label: string; external?: boolean; download?: boolean }[];

  // Field notes — the same facts as before, kept honest (nothing invented),
  // relabelled to read like a colophon rather than an app-store info bar.
  const fieldNotes = [
    { label: 'Launch', value: project.date },
    { label: 'Platform', value: project.tags.join(' · ') },
    { label: 'Field', value: project.appMeta?.category },
    { label: 'Studio', value: project.appMeta?.developer ?? 'The Brilliant Ideas' },
    { label: 'Language', value: project.appMeta?.language === 'EN' ? 'English' : project.appMeta?.language },
    { label: 'Weight', value: project.appMeta?.size },
    { label: 'Rating', value: project.appMeta?.ageRating },
  ].filter((f) => f.value) as { label: string; value: string }[];

  const heroShots = project.gallery.slice(0, 3);
  const heroIcon = project.frameIcon ?? project.appMeta?.icon;

  // the soft handcrafted wash laid over each brand-coloured panel, so the
  // solid fills read as painted paper rather than flat digital blocks
  const washStyle: React.CSSProperties = {
    background: `radial-gradient(62% 58% at 13% 10%, ${fg}12, transparent 52%), radial-gradient(140% 132% at 50% 0%, transparent 60%, rgba(9,14,20,0.18) 100%)`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE.url}/work/${project.slug}` },
    ],
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `${SITE.url}${project.image}`,
    dateCreated: String(project.year),
    creator: { '@id': `${SITE.url}/#organization` },
    ...(project.externalLink ? { url: project.externalLink } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <Navbar theme="dark" />

      <main>
        {/* ——— Hero — the project's own brand world, painted onto paper ——— */}
        <section
          className="relative flex min-h-[min(92vh,940px)] items-center overflow-hidden"
          style={{ background: bg }}
        >
          {/* watercolor wash + faint grain — handcrafted, not a flat fill */}
          <span aria-hidden className="pointer-events-none absolute inset-0" style={washStyle} />
          <span aria-hidden className="card-grain pointer-events-none absolute inset-0" />
          {/* giant watermark title bleeding off the canvas */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[0.18em] left-0 select-none whitespace-nowrap font-display text-[19vw] font-black uppercase leading-none tracking-tight"
            style={{ WebkitTextStroke: `1px ${fg}`, color: 'transparent', opacity: 0.13 }}
          >
            {project.title}
          </div>

          <div className="container-site relative grid w-full items-center gap-14 pb-28 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
            <Reveal>
              <nav aria-label="Breadcrumb">
                <Link
                  href="/work"
                  className="text-sm font-semibold transition-opacity hover:opacity-100"
                  style={{ color: fg, opacity: 0.6 }}
                >
                  ← The Expedition Log
                </Link>
              </nav>

              {/* editorial masthead line: EXPEDITION 01 — APRIL 2023 */}
              <p
                className="mt-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em]"
                style={{ color: fg, opacity: 0.72 }}
              >
                Expedition {expeditionNo}
                <span aria-hidden className="h-px w-8" style={{ background: `${fg}66` }} />
                {project.date}
              </p>
              <TrailFlags className="mt-4 h-4 w-[68px]" color={fg} />

              {heroIcon && (
                <Image
                  src={heroIcon}
                  alt={`${project.title} logo`}
                  width={824}
                  height={824}
                  priority
                  className="mt-7 h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              )}

              <h1
                className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl"
                style={{ color: fg }}
              >
                {project.title}
              </h1>
              <p className="mt-5 font-display text-xl italic sm:text-2xl" style={{ color: fg, opacity: 0.85 }}>
                {project.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3.5 py-1.5 text-xs font-semibold"
                    style={{ borderColor: `${fg}40`, color: fg, backgroundColor: `${fg}12` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                {links.map((link, i) =>
                  link.download ? (
                    <a
                      key={link.label}
                      href={link.href}
                      download
                      className="rounded-full border px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                      style={{ borderColor: `${fg}59`, color: fg }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                      style={i === 0 ? { background: fg, color: bg, borderColor: fg } : { borderColor: `${fg}59`, color: fg }}
                    >
                      {link.label}
                    </a>
                  ),
                )}
                {links.length === 0 && (
                  <span
                    className="rounded-full border px-5 py-2.5 text-sm font-semibold"
                    style={{ borderColor: `${fg}40`, color: fg, opacity: 0.8 }}
                  >
                    In the making — coming soon
                  </span>
                )}
              </div>
            </Reveal>

            {/* the work itself: fanned screens (apps) or a tilted canvas (web) */}
            <Reveal delay={150}>
              {project.frame === 'window' ? (
                <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center pt-4">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-2 left-1/2 h-12 w-[68%] -translate-x-1/2 rounded-[50%] bg-black/30 blur-2xl"
                  />
                  <TiltCard max={5} scale={1.01} className="relative z-10 w-[36%] shrink-0 -rotate-[10deg] translate-y-8 -mr-[9%]">
                    <Image
                      src={heroShots[0]}
                      alt={`${project.title} screen 1`}
                      width={1320}
                      height={2868}
                      priority
                      className="w-full rounded-[1.4rem] shadow-[0_24px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/15"
                      sizes="220px"
                    />
                  </TiltCard>
                  <TiltCard max={5} scale={1.02} className="relative z-20 w-[44%] shrink-0">
                    <Image
                      src={heroShots[1] ?? heroShots[0]}
                      alt={`${project.title} screen 2`}
                      width={1320}
                      height={2868}
                      priority
                      className="w-full rounded-[1.6rem] shadow-[0_40px_96px_rgba(0,0,0,0.52)] ring-1 ring-white/25"
                      sizes="280px"
                    />
                  </TiltCard>
                  <TiltCard max={5} scale={1.01} className="relative z-10 w-[36%] shrink-0 rotate-[10deg] translate-y-8 -ml-[9%]">
                    <Image
                      src={heroShots[2] ?? heroShots[0]}
                      alt={`${project.title} screen 3`}
                      width={1320}
                      height={2868}
                      priority
                      className="w-full rounded-[1.4rem] shadow-[0_24px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/15"
                      sizes="220px"
                    />
                  </TiltCard>
                </div>
              ) : (
                <div className="relative mx-auto w-full max-w-[600px]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-5 left-1/2 h-12 w-[82%] -translate-x-1/2 rounded-[50%] bg-black/25 blur-2xl"
                  />
                  <TiltCard max={4} scale={1.01} className="relative rotate-1">
                    <div
                      className="rounded-2xl p-2 shadow-[0_40px_96px_rgba(0,0,0,0.46)] ring-1 ring-white/15"
                      style={{ background: `${fg}14` }}
                    >
                      <div className="flex items-center gap-1.5 px-3 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: `${fg}4D` }} />
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: `${fg}33` }} />
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: `${fg}26` }} />
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                        <Image
                          src={project.image}
                          alt={`${project.title} website`}
                          fill
                          priority
                          className="object-cover object-top"
                          sizes="(min-width: 1024px) 600px, 90vw"
                        />
                      </div>
                    </div>
                  </TiltCard>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* ——— Chapter divider — a quiet breath between the cover and the story ——— */}
        <section className="bg-paper">
          {/* overlaps 1px DOWN into the paper (not up) so the paper mountains fully
              cover the hero's wash-darkened bottom edge — otherwise it peeks as a line */}
          <Ridge fill="#FBF9F5" className="relative z-10 h-14 -translate-y-[calc(100%-1px)] sm:h-20" />
          <Reveal className="container-site flex flex-col items-center pt-6 text-center sm:pt-10">
            <TrailFlags className="h-5 w-24" color="#A62B44" />
            <p className="mt-5 max-w-xl font-display text-xl italic leading-relaxed text-ink-soft sm:text-2xl">
              &ldquo;{project.tagline}&rdquo;
            </p>
            <span className="font-devanagari mt-4 text-sm text-ink-faint" lang="ne">
              कथा — the story
            </span>
          </Reveal>
        </section>

        {/* ——— The story + field notes ——— */}
        <section className="bg-paper py-16 sm:py-24">
          <div className="container-site grid gap-14 lg:grid-cols-[1.55fr_1fr] lg:gap-24">
            <Reveal as="article">
              <p className="chapter">
                The Story
                <span className="font-devanagari text-base normal-case tracking-normal text-ink-faint" lang="ne">
                  · कथा
                </span>
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-black leading-[1.12] text-ink sm:text-[2.6rem]">
                {project.description}
              </h2>
              <div className="mt-8 max-w-2xl text-lg leading-[1.85] text-ink-soft">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.72] first-letter:text-laligurans">
                  {project.longDescription}
                </p>
              </div>
              {links.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3">
                  {links.map((link, i) =>
                    link.download ? (
                      <a key={link.label} href={link.href} download className="btn-outline">
                        {link.label}
                      </a>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={i === 0 ? 'btn-primary' : 'btn-outline'}
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              )}
            </Reveal>

            <Reveal delay={120}>
              <aside className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-ink/10 bg-paper-warm p-7 shadow-[0_1px_2px_rgba(34,48,58,0.04)] sm:p-8">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-faint">Field Notes</p>
                    <TrailFlags className="h-3.5 w-14" color="#8B897F" />
                  </div>
                  <dl className="mt-6 border-t border-ink/15">
                    {fieldNotes.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3.5"
                      >
                        <dt className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                          {fact.label}
                        </dt>
                        <dd className="text-right font-display text-base font-bold text-ink">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* ——— Plates — the screens as printed editorial photographs ——— */}
        <section className="bg-paper-warm pb-16 sm:pb-24">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          {/* dhaka weave running edge to edge — fabric trim on the gallery */}
          <div
            aria-hidden
            className="h-8 w-full sm:h-10"
            style={{
              backgroundImage: 'url(/image-story/dhaka-band.webp)',
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
            }}
          />
          <div className="container-site pt-14">
            <Reveal className="flex items-end justify-between gap-6">
              <div>
                <p className="chapter">
                  In Pictures
                  <span className="font-devanagari text-base normal-case tracking-normal text-ink-faint" lang="ne">
                    · तस्बिरहरू
                  </span>
                </p>
                <h2 className="mt-4 font-display text-3xl font-black text-ink sm:text-4xl">From the field</h2>
              </div>
              <p className="font-display text-sm font-bold tracking-[0.2em] text-ink-faint">
                01 — {String(project.gallery.length).padStart(2, '0')}
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <div className="flex snap-x items-start gap-7 overflow-x-auto px-5 pb-10 pt-4 sm:gap-10 sm:px-10 lg:px-16 [scrollbar-width:thin]">
              {project.gallery.map((src, i) => (
                <figure
                  key={src}
                  className={`shrink-0 snap-center ${i % 2 === 1 ? 'sm:mt-16' : ''}`}
                  style={{ transform: `rotate(${i % 2 === 1 ? -0.8 : 0.8}deg)` }}
                >
                  <div className="rounded-[1.1rem] border border-ink/10 bg-paper p-2.5 shadow-[0_22px_54px_-26px_rgba(34,48,58,0.5)] transition-transform duration-500 ease-out hover:-translate-y-2 motion-reduce:hover:translate-y-0">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={1320}
                      height={2868}
                      className="h-[360px] w-auto rounded-[0.7rem] sm:h-[480px]"
                      sizes="400px"
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-faint">
                    Plate {String(i + 1).padStart(2, '0')}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ——— Cinema — the promo film ——— */}
        {project.video && (
          <section className="bg-himal-night py-16 sm:py-24">
            <div className="container-site">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-paper/50">The Showreel</p>
                <h2 className="mt-3 font-display text-3xl font-black text-paper sm:text-4xl">Watch it move</h2>
              </Reveal>
              <Reveal delay={120} className="mt-10 flex justify-center">
                <video
                  controls
                  preload="metadata"
                  className="max-h-[75vh] w-auto rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Reveal>
            </div>
          </section>
        )}

        {/* ——— Next expedition — turning the page of the journal ——— */}
        <Link
          href={`/work/${next.slug}`}
          className="group relative block overflow-hidden"
          style={{ background: next.brand.bg }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(62% 58% at 13% 10%, ${next.brand.fg}12, transparent 52%), radial-gradient(140% 132% at 50% 0%, transparent 60%, rgba(9,14,20,0.18) 100%)`,
            }}
          />
          <span aria-hidden className="card-grain pointer-events-none absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[0.2em] right-0 select-none whitespace-nowrap font-display text-[14vw] font-black uppercase leading-none tracking-tight"
            style={{ WebkitTextStroke: `1px ${next.brand.fg}`, color: 'transparent', opacity: 0.12 }}
          >
            {next.title}
          </div>
          <div className="container-site relative flex items-center justify-between gap-8 py-20 sm:py-28">
            <div>
              <p
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em]"
                style={{ color: next.brand.fg, opacity: 0.7 }}
              >
                Next Expedition
                <span aria-hidden className="h-px w-8" style={{ background: `${next.brand.fg}66` }} />
                {nextNo}
              </p>
              <TrailFlags className="mt-4 h-4 w-[68px]" color={next.brand.fg} />
              <h2
                className="mt-5 font-display text-4xl font-black leading-[0.98] tracking-tight transition-transform duration-500 group-hover:translate-x-3 motion-reduce:group-hover:translate-x-0 sm:text-6xl lg:text-7xl"
                style={{ color: next.brand.fg }}
              >
                {next.title}
              </h2>
              <p className="mt-4 font-display text-lg italic sm:text-xl" style={{ color: next.brand.fg, opacity: 0.75 }}>
                {next.tagline}
              </p>
            </div>
            <span
              aria-hidden
              className="hidden shrink-0 font-display text-6xl font-black transition-transform duration-500 group-hover:translate-x-4 motion-reduce:group-hover:translate-x-0 sm:block lg:text-8xl"
              style={{ color: next.brand.fg }}
            >
              →
            </span>
          </div>
        </Link>

        {/* ——— The closing — crafted in Nepal, an invitation to begin ——— */}
        <section className="bg-paper-warm py-20 text-center sm:py-28">
          <div className="container-site">
            <Reveal>
              {heroIcon ? (
                <FramedShot
                  src={project.frameShot ?? project.image}
                  icon={heroIcon}
                  alt={`${project.title} logo held inside a carved Newari window`}
                  frame="window"
                  className="mx-auto w-full max-w-[240px]"
                />
              ) : (
                <Image
                  src="/image-story/stupa-eyes.webp"
                  alt="The painted eyes of Boudhanath stupa beneath prayer flags"
                  width={1122}
                  height={1402}
                  sizes="280px"
                  className="mx-auto h-auto w-full max-w-[280px]"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 62% 60% at 50% 48%, black 45%, transparent 82%)',
                    maskImage: 'radial-gradient(ellipse 62% 60% at 50% 48%, black 45%, transparent 82%)',
                  }}
                />
              )}
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint">
                Crafted with pride in Nepal
                <span className="font-devanagari ml-3 text-sm normal-case tracking-normal" lang="ne">
                  नेपालमा निर्मित
                </span>
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-black leading-[1.08] text-ink sm:text-[2.7rem]">
                Every great idea deserves
                <span className="block italic text-laligurans">a first step.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                Tell us where you want to go, and we&rsquo;ll help you find the route.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Start the conversation
              </Link>
              <PrayerFlagLine className="mx-auto mt-12 w-52" />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer closing={false} />
    </>
  );
}
