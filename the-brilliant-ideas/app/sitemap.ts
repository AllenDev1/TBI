import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebrilliantideas.com'

  // Blog posts
  const blogPosts = [
    { slug: 'web-development-trends-2026-nepal', date: '2026-01-08' },
    { slug: 'seo-guide-nepali-businesses', date: '2026-01-06' },
    { slug: 'mobile-app-development-best-practices', date: '2026-01-04' },
    { slug: 'brand-identity-design-nepal', date: '2026-01-02' },
    { slug: 'nextjs-vs-react-comparison-2026', date: '2025-12-28' },
    { slug: 'social-media-marketing-strategies-nepal', date: '2025-12-25' },
    { slug: 'ui-ux-design-principles-2026', date: '2025-12-22' },
    { slug: 'ecommerce-development-nepal-guide', date: '2025-12-20' },
    { slug: 'content-marketing-strategies-2026', date: '2025-12-18' },
    { slug: 'progressive-web-apps-future', date: '2025-12-15' },
    { slug: 'typography-web-design-guide', date: '2025-12-12' },
    { slug: 'digital-transformation-nepali-businesses', date: '2025-12-10' },
    { slug: 'color-psychology-branding', date: '2025-12-08' },
    { slug: 'website-performance-optimization', date: '2025-12-05' },
    { slug: 'instagram-marketing-small-business', date: '2025-12-02' },
  ];

  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Work/Portfolio projects
  const workProjects = [
    { slug: 'pixeryhub', date: '2024-12-01' },
    { slug: 'jestha', date: '2023-04-01' },
    { slug: 'nepalinest', date: '2021-04-01' },
    { slug: 'the-brilliant-canvas', date: '2022-04-01' },
  ];

  const workUrls = workProjects.map(project => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Process pages
  const processPages = [
    'discovery',
    'strategy',
    'design',
    'development',
    'testing',
    'launch',
  ];

  const processUrls = processPages.map(page => ({
    url: `${baseUrl}/process/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
    ...workUrls,
    ...processUrls,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
