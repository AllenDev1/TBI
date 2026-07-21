import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';
import { SERVICE_DETAILS } from '@/lib/service-details';

// Real last-substantial-change dates per page. `new Date()` on every build
// tells Google "everything changed today" forever, which teaches it to
// ignore the signal entirely. Bump a date only when its page truly changes.
const LAST_MODIFIED = {
  home: new Date('2026-07-21'),
  about: new Date('2026-07-10'),
  services: new Date('2026-07-21'),
  work: new Date('2026-07-10'),
  contact: new Date('2026-07-10'),
  legal: new Date('2026-07-01'),
  serviceDetail: new Date('2026-07-21'),
  projects: new Date('2026-07-10'),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: LAST_MODIFIED.home, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: LAST_MODIFIED.about, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified: LAST_MODIFIED.services, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/work`, lastModified: LAST_MODIFIED.work, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/contact`, lastModified: LAST_MODIFIED.contact, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/privacy`, lastModified: LAST_MODIFIED.legal, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE.url}/terms`, lastModified: LAST_MODIFIED.legal, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_DETAILS.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: LAST_MODIFIED.serviceDetail,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.url}/work/${project.slug}`,
    lastModified: LAST_MODIFIED.projects,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
