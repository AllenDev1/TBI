import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
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
    title: `${project.title} — ${project.tagline}`,
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

  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

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
      <Navbar />

      <main className="pt-28 sm:pt-32">
        {/* Header */}
        <section className="container-site pb-14">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-ink-faint">
              <Link href="/work" className="hover:text-sunrise-deep">← Back to all work</Link>
            </nav>
            <p className="chapter mt-6">{project.date}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black text-ink sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 font-display text-xl italic text-laligurans sm:text-2xl">
              {project.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sunrise-faint px-3.5 py-1.5 text-xs font-semibold text-sunrise-deep">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Story + links */}
        <section className="bg-paper-warm pb-16">
          <Ridge fill="#F4EEE3" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site grid gap-10 pt-12 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">The story</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{project.longDescription}</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-3xl border border-ink/10 bg-paper p-7">
                <h2 className="font-display text-lg font-bold text-ink">Visit the project</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {project.externalLink && (
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                      Live Website
                    </a>
                  )}
                  {project.appLink && (
                    <a href={project.appLink} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                      Google Play Store
                    </a>
                  )}
                  {project.apkLink && (
                    <a href={project.apkLink} download className="btn-outline w-full">
                      Download APK
                    </a>
                  )}
                  {!project.externalLink && !project.appLink && !project.apkLink && (
                    <p className="text-ink-soft">Ask us for a live demo — we&rsquo;d love to show you around.</p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery — screenshots get added here */}
        <section className="bg-paper-warm pb-16">
          <div className="container-site">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">In pictures</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 2) * 100} as="figure">
                  <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper p-4">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            {project.video && (
              <Reveal className="mt-8">
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper p-4">
                  <video controls preload="metadata" className="mx-auto max-h-[70vh] w-auto rounded-xl">
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* More work */}
        <section className="bg-paper pb-16">
          <Ridge fill="#FBF9F5" className="-mt-px h-14 -translate-y-full sm:h-20" />
          <div className="container-site pt-12">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">More from the expedition log</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 100} as="article">
                  <Link
                    href={`/work/${other.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(34,48,58,0.10)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-paper-warm">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-ink">{other.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{other.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-paper-warm py-16 text-center">
          <div className="container-site">
            <Reveal>
              <PrayerFlagLine className="mx-auto w-56" />
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-black text-ink">
                Want something like this for your business?
              </h2>
              <Link href="/contact" className="btn-primary mt-8">Let&rsquo;s Talk</Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
