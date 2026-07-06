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
import { Ridge } from '@/components/NepalArt';
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
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const { bg, fg } = project.brand;

  const links = [
    project.externalLink && { href: project.externalLink, label: 'Live Website', external: true },
    project.appLink && { href: project.appLink, label: 'Google Play', external: true },
    project.iosLink && { href: project.iosLink, label: 'App Store', external: true },
    project.apkLink && { href: project.apkLink, label: 'Download APK', download: true },
  ].filter(Boolean) as { href: string; label: string; external?: boolean; download?: boolean }[];

  const facts = [
    { label: 'Released', value: project.date },
    { label: 'Category', value: project.appMeta?.category },
    { label: 'Platform', value: project.tags.join(' · ') },
    { label: 'Developer', value: project.appMeta?.developer ?? 'The Brilliant Ideas' },
    { label: 'Language', value: project.appMeta?.language === 'EN' ? 'English' : project.appMeta?.language },
    { label: 'Size', value: project.appMeta?.size },
    { label: 'Age rating', value: project.appMeta?.ageRating },
  ].filter((f) => f.value) as { label: string; value: string }[];

  const heroShots = project.gallery.slice(0, 3);
  const heroIcon = project.frameIcon ?? project.appMeta?.icon;
  const marqueeLine = `${project.title} — ${project.tagline} · `;

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
        {/* ——— Hero: the project's own brand world ——— */}
        <section
          className="relative flex min-h-[min(92vh,940px)] items-center overflow-hidden"
          style={{ background: bg }}
        >
          {/* giant watermark title bleeding off the canvas */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[0.18em] left-0 select-none whitespace-nowrap font-display text-[19vw] font-black uppercase leading-none tracking-tight"
            style={{ WebkitTextStroke: `1px ${fg}`, color: 'transparent', opacity: 0.16 }}
          >
            {project.title}
          </div>

          <div className="container-site relative grid w-full items-center gap-14 pb-28 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
            <Reveal>
              <nav aria-label="Breadcrumb">
                <Link
                  href="/work"
                  className="text-sm font-semibold transition-opacity hover:opacity-100"
                  style={{ color: fg, opacity: 0.65 }}
                >
                  ← All work
                </Link>
              </nav>

              <p
                className="mt-8 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: fg, opacity: 0.6 }}
              >
                {project.date}
                <span className="font-devanagari ml-3 text-sm normal-case tracking-normal" lang="ne">
                  कथा
                </span>
              </p>

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
                className="mt-5 font-display text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl"
                style={{ color: fg }}
              >
                {project.title}
              </h1>
              <p className="mt-4 font-display text-xl italic sm:text-2xl" style={{ color: fg, opacity: 0.85 }}>
                {project.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
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

              <div className="mt-9 flex flex-wrap items-center gap-3">
                {links.map((link, i) =>
                  link.download ? (
                    <a
                      key={link.label}
                      href={link.href}
                      download
                      className="rounded-full border px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5"
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
                      className={
                        i === 0
                          ? 'rounded-full px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5'
                          : 'rounded-full border px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5'
                      }
                      style={i === 0 ? { background: fg, color: bg } : { borderColor: `${fg}59`, color: fg }}
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
                  <TiltCard max={5} scale={1.01} className="relative z-0 w-[36%] shrink-0 -rotate-[9deg] translate-y-7 -mr-[7%]">
                    <Image
                      src={heroShots[0]}
                      alt={`${project.title} screen 1`}
                      width={1320}
                      height={2868}
                      priority
                      className="w-full rounded-[1.4rem] shadow-[0_24px_60px_rgba(0,0,0,0.38)] ring-1 ring-white/20"
                      sizes="220px"
                    />
                  </TiltCard>
                  <TiltCard max={5} scale={1.02} className="relative z-10 w-[42%] shrink-0">
                    <Image
                      src={heroShots[1] ?? heroShots[0]}
                      alt={`${project.title} screen 2`}
                      width={1320}
                      height={2868}
                      priority
                      className="w-full rounded-[1.6rem] shadow-[0_36px_90px_rgba(0,0,0,0.5)] ring-1 ring-white/25"
                      sizes="260px"
                    />
                  </TiltCard>
                  <TiltCard max={5} scale={1.01} className="relative z-0 w-[36%] shrink-0 rotate-[9deg] translate-y-7 -ml-[7%]">
                    <Image
                      src={heroShots[2] ?? heroShots[0]}
                      alt={`${project.title} screen 3`}
                      width={1320}
                      height={2868}
                      priority
                      className="w-full rounded-[1.4rem] shadow-[0_24px_60px_rgba(0,0,0,0.38)] ring-1 ring-white/20"
                      sizes="220px"
                    />
                  </TiltCard>
                </div>
              ) : (
                <TiltCard max={4} scale={1.01} className="mx-auto w-full max-w-[600px] rotate-1">
                  <div
                    className="rounded-2xl p-2 shadow-[0_36px_90px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
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
              )}
            </Reveal>
          </div>
        </section>

        {/* ——— Kinetic marquee — the tagline in motion ——— */}
        <section className="bg-paper">
          <Ridge fill="#FBF9F5" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div aria-hidden className="overflow-hidden py-6 sm:py-8">
            <div className="flex w-max select-none animate-marquee motion-reduce:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <span
                  key={copy}
                  className="whitespace-nowrap pr-10 font-display text-6xl font-black uppercase leading-none tracking-tight sm:text-8xl"
                  style={{ WebkitTextStroke: `2px ${bg}`, color: 'transparent', opacity: 0.85 }}
                >
                  {marqueeLine.repeat(3)}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ——— The story + editorial facts ——— */}
        <section className="bg-paper py-16 sm:py-24">
          <div className="container-site grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint">The story</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
                {project.description}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{project.longDescription}</p>
              {links.length > 0 && (
                <div className="mt-9 flex flex-wrap gap-3">
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
              <dl className="border-t-2 border-ink/20">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
                  >
                    <dt className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-faint">
                      {fact.label}
                    </dt>
                    <dd className="text-right font-display text-lg font-bold text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ——— The screens — staggered editorial strip ——— */}
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
          <div className="container-site pt-12">
            <Reveal className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">In pictures</h2>
              <p className="font-display text-sm font-bold tracking-[0.2em] text-ink-faint">
                01 — {String(project.gallery.length).padStart(2, '0')}
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <div className="flex snap-x items-start gap-5 overflow-x-auto px-5 pb-8 sm:gap-8 sm:px-10 lg:px-16 [scrollbar-width:thin]">
              {project.gallery.map((src, i) => (
                <figure key={src} className={`shrink-0 snap-center ${i % 2 === 1 ? 'sm:mt-14' : ''}`}>
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={1320}
                    height={2868}
                    className="h-[380px] w-auto rounded-2xl border border-ink/10 shadow-[0_16px_40px_rgba(34,48,58,0.12)] transition-transform duration-500 hover:-translate-y-2 sm:h-[500px]"
                    sizes="400px"
                  />
                  <figcaption className="mt-3 text-xs font-semibold tracking-[0.25em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
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
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-paper/50">The showreel</p>
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

        {/* ——— Next story — full-bleed brand banner ——— */}
        <Link
          href={`/work/${next.slug}`}
          className="group relative block overflow-hidden"
          style={{ background: next.brand.bg }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[0.2em] right-0 select-none whitespace-nowrap font-display text-[14vw] font-black uppercase leading-none tracking-tight"
            style={{ WebkitTextStroke: `1px ${next.brand.fg}`, color: 'transparent', opacity: 0.12 }}
          >
            {next.title}
          </div>
          <div className="container-site relative flex items-center justify-between gap-8 py-16 sm:py-24">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: next.brand.fg, opacity: 0.6 }}
              >
                Next story
              </p>
              <h2
                className="mt-4 font-display text-4xl font-black tracking-tight transition-transform duration-500 group-hover:translate-x-3 sm:text-6xl lg:text-7xl"
                style={{ color: next.brand.fg }}
              >
                {next.title}
              </h2>
              <p className="mt-3 font-display text-lg italic sm:text-xl" style={{ color: next.brand.fg, opacity: 0.75 }}>
                {next.tagline}
              </p>
            </div>
            <span
              aria-hidden
              className="hidden font-display text-6xl font-black transition-transform duration-500 group-hover:translate-x-4 sm:block lg:text-8xl"
              style={{ color: next.brand.fg }}
            >
              →
            </span>
          </div>
        </Link>

        {/* ——— Signature — crafted in Nepal, held in Nepali craft ——— */}
        <section className="bg-paper-warm py-16 text-center sm:py-20">
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
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint">
                Crafted with pride in Nepal
                <span className="font-devanagari ml-3 text-sm normal-case tracking-normal" lang="ne">
                  नेपालमा निर्मित
                </span>
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Want something like this for your business?
              </h2>
              <Link href="/contact" className="btn-primary mt-8">
                Let&rsquo;s Talk
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer closing={false} />
    </>
  );
}
