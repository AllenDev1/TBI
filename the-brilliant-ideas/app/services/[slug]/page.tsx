import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import ProjectVisual from '@/components/ProjectVisual';
import { CardChrome } from '@/components/ExpeditionCard';
import { Ridge, PrayerFlagLine } from '@/components/NepalArt';
import { SITE, SERVICES } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';
import { SERVICE_DETAILS, getServiceDetail } from '@/lib/service-details';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
    alternates: { canonical: `${SITE.url}/services/${detail.slug}` },
    openGraph: {
      title: `${detail.seoTitle} | ${SITE.name}`,
      description: detail.seoDescription,
      url: `${SITE.url}/services/${detail.slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  const service = SERVICES.find((s) => s.slug === detail.slug);
  const related = detail.relatedProjects
    .map((s) => PROJECTS.find((p) => p.slug === s))
    .filter(Boolean) as (typeof PROJECTS)[number][];
  const others = SERVICES.filter((s) => s.slug !== detail.slug);

  // every closing is two sentences: a quiet observation, then the invitation —
  // split so the invitation gets the site's italic accent treatment
  const closingBreak = detail.closing.indexOf('. ') + 1;
  const closingLead = detail.closing.slice(0, closingBreak);
  const closingAccent = detail.closing.slice(closingBreak + 1);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: detail.seoTitle,
    description: detail.seoDescription,
    url: `${SITE.url}/services/${detail.slug}`,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: 'Nepal',
    serviceType: service?.title,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
      { '@type': 'ListItem', position: 3, name: service?.title ?? detail.seoTitle, item: `${SITE.url}/services/${detail.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="pt-28 sm:pt-32">
        {/* ═══ Header ═══ */}
        <section className="container-site pb-16 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div className="text-center lg:text-left">
              <Reveal>
                <nav aria-label="Breadcrumb" className="chapter justify-center lg:justify-start">
                  <Link href="/services" className="transition-colors hover:text-laligurans">
                    Services
                  </Link>
                  <span aria-hidden>·</span>
                  <span className="normal-case tracking-normal">{service?.title}</span>
                </nav>
                <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black leading-[1.05] text-ink sm:text-5xl lg:mx-0 lg:text-6xl">
                  {detail.h1}{' '}
                  <span className="block italic text-laligurans">{detail.h1Accent}</span>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
                  {detail.intro[0]}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
                  <Link href="/contact" className="btn-primary">
                    Start a project
                  </Link>
                  <Link href="/work" className="btn-outline">
                    See our work
                  </Link>
                </div>
              </Reveal>
            </div>
            {service && (
              <Reveal delay={150} className="flex justify-center lg:justify-end">
                <div className="relative aspect-[4/5] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px]">
                  <Image
                    src={detail.heroImage ?? service.image}
                    alt={detail.heroAlt ?? service.alt}
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 420px"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ═══ The story — the rest of the intro ═══ */}
        <section className="bg-paper-warm pb-16 sm:pb-20">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-12">
            <Reveal className="mx-auto max-w-3xl space-y-5 text-center">
              {detail.intro.slice(1).map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </Reveal>
          </div>

          {/* What we deliver */}
          <div className="container-site pt-14 sm:pt-16">
            <Reveal className="text-center">
              <p className="chapter justify-center">What We Deliver</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Everything this trail includes
              </h2>
            </Reveal>
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {detail.deliverables.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} as="article" className="card-note rounded-2xl p-6 text-left">
                  <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Why us ═══ */}
        <section className="bg-paper pb-16 sm:pb-20">
          <Ridge fill="#FBF9F5" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-12">
            <Reveal className="text-center">
              <p className="chapter justify-center">Why The Brilliant Ideas</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Why climb with us
              </h2>
            </Reveal>
            <div className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
              {detail.whyUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Related work ═══ */}
        {related.length > 0 && (
          <section className="bg-paper-warm pb-16 sm:pb-20">
            <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
            <div className="container-site pt-12">
              <Reveal className="text-center">
                <p className="chapter justify-center">Proof of Work</p>
                <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                  Expeditions we&rsquo;ve completed
                </h2>
              </Reveal>
              {/* same expedition-journal tiles as the homepage & work list —
                  brand ground, chrome, fanned shots — never raw screenshots */}
              <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
                {related.map((project, i) => {
                  const expeditionNo = String(
                    PROJECTS.findIndex((p) => p.slug === project.slug) + 1
                  ).padStart(2, '0');
                  return (
                    <Reveal key={project.slug} delay={i * 100} as="article">
                      <TiltCard max={3} scale={1.005} className="h-full">
                        <Link
                          href={`/work/${project.slug}`}
                          className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-shadow duration-300 hover:shadow-[0_30px_66px_-30px_rgba(34,48,58,0.36)] sm:p-7"
                          style={{ background: project.brand.bg, boxShadow: '0 14px 40px -28px rgba(34,48,58,0.32)' }}
                        >
                          <CardChrome
                            title={project.title}
                            fg={project.brand.fg}
                            watermarkClass="text-[3.6rem] sm:text-[4.5rem]"
                            frameClass="inset-2.5 rounded-[1.15rem]"
                          />
                          <div className="relative flex items-center justify-between gap-4">
                            <p
                              className="text-[0.7rem] font-semibold uppercase tracking-[0.24em]"
                              style={{ color: project.brand.fg, opacity: 0.6 }}
                            >
                              Expedition {expeditionNo}
                            </p>
                            <span className="text-sm font-semibold" style={{ color: project.brand.fg, opacity: 0.5 }}>
                              {project.year}
                            </span>
                          </div>
                          <h3
                            className="relative mt-3 font-display text-[1.5rem] font-bold leading-[1.02] tracking-tight"
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
                            <ProjectVisual project={project} className="max-w-[300px]" />
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
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ═══ FAQs ═══ */}
        <section className="bg-paper pb-16 sm:pb-20">
          <Ridge fill="#FBF9F5" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-12">
            <Reveal className="text-center">
              <p className="chapter justify-center">
                Questions
                <span className="font-devanagari text-base normal-case tracking-normal text-ink-faint" lang="ne">
                  · प्रश्नहरू
                </span>
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black text-ink sm:text-4xl">
                Asked around the campfire
              </h2>
            </Reveal>
            <div className="mx-auto mt-10 max-w-3xl space-y-4">
              {detail.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 50}>
                  <details className="card-note group rounded-2xl p-6">
                    <summary className="cursor-pointer list-none font-display text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-4">
                        {faq.q}
                        <span
                          aria-hidden
                          className="mt-1 text-laligurans transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-ink-soft">{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Other services ═══ */}
        {/* generous bottom padding — the next section's ridge translates up
            into this space and must not crowd the links */}
        <section className="bg-paper pb-28 sm:pb-36">
          <div className="container-site">
            <Reveal className="mx-auto max-w-4xl border-t border-ink/10 pt-10 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                Other trails we guide
              </h2>
              <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="font-semibold text-ink-soft transition-colors hover:text-laligurans"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="bg-paper-warm pb-20 text-center">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-14">
            <Reveal>
              <PrayerFlagLine className="mx-auto w-56" />
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-black leading-[1.1] text-ink sm:text-4xl">
                {closingLead}
                <span className="block italic text-laligurans">{closingAccent}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
                Tell us where you want to go, and we&rsquo;ll map the route, free of charge.
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
