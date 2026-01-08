import React from 'react';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog - Digital Marketing & Web Development Insights | Nepal",
  description: "Expert insights on web development, digital marketing, branding, and technology trends in Nepal. Learn from The Brilliant Ideas team's experience in building successful digital products.",
  alternates: {
    canonical: 'https://thebrilliantideas.com/blog',
  },
  openGraph: {
    title: "Blog - Digital Insights from The Brilliant Ideas Nepal",
    description: "Expert insights on web development, digital marketing, branding, and technology trends.",
    url: "https://thebrilliantideas.com/blog",
    type: "website",
  },
};

// Blog posts data
const blogPosts = [
  {
    slug: "web-development-trends-2026-nepal",
    title: "Top Web Development Trends in Nepal for 2026",
    excerpt: "Discover the latest web development trends shaping Nepal's digital landscape, from AI integration to progressive web apps.",
    category: "Web Development",
    author: "Yana Chaudhary",
    date: "2026-01-08",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
  },
  {
    slug: "seo-guide-nepali-businesses",
    title: "The Complete SEO Guide for Nepali Businesses in 2026",
    excerpt: "Master local SEO strategies to rank higher in Google searches and attract more customers in Nepal's competitive digital market.",
    category: "SEO",
    author: "Yana Chaudhary",
    date: "2026-01-06",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80"
  },
  {
    slug: "mobile-app-development-best-practices",
    title: "Mobile App Development Best Practices for Startups",
    excerpt: "Learn essential mobile app development strategies that can help your startup succeed in the competitive app marketplace.",
    category: "Mobile Development",
    author: "Yana Chaudhary",
    date: "2026-01-04",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
  },
  {
    slug: "brand-identity-design-nepal",
    title: "Creating a Strong Brand Identity for Your Nepali Business",
    excerpt: "A comprehensive guide to building memorable brand identities that resonate with Nepali audiences and stand out in the market.",
    category: "Branding",
    author: "Yana Chaudhary",
    date: "2026-01-02",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    slug: "nextjs-vs-react-comparison-2026",
    title: "Next.js vs React: Which Framework Should You Choose in 2026?",
    excerpt: "An in-depth comparison of Next.js and React to help you make the right choice for your next web development project.",
    category: "Web Development",
    author: "Yana Chaudhary",
    date: "2025-12-28",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    slug: "social-media-marketing-strategies-nepal",
    title: "Social Media Marketing Strategies That Work in Nepal",
    excerpt: "Discover proven social media marketing tactics tailored for the Nepali market to boost engagement and drive conversions.",
    category: "Digital Marketing",
    author: "Yana Chaudhary",
    date: "2025-12-25",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
  {
    slug: "ui-ux-design-principles-2026",
    title: "Essential UI/UX Design Principles Every Designer Should Know",
    excerpt: "Master the fundamental UI/UX design principles that create intuitive, user-friendly digital experiences.",
    category: "Design",
    author: "Yana Chaudhary",
    date: "2025-12-22",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
  },
  {
    slug: "ecommerce-development-nepal-guide",
    title: "E-commerce Development Guide for Nepali Entrepreneurs",
    excerpt: "Everything you need to know about building a successful e-commerce platform in Nepal, from planning to launch.",
    category: "Web Development",
    author: "Yana Chaudhary",
    date: "2025-12-20",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    slug: "content-marketing-strategies-2026",
    title: "Content Marketing Strategies to Grow Your Business in 2026",
    excerpt: "Learn how to create compelling content that attracts, engages, and converts your target audience.",
    category: "Digital Marketing",
    author: "Yana Chaudhary",
    date: "2025-12-18",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    slug: "progressive-web-apps-future",
    title: "Why Progressive Web Apps Are the Future of Mobile",
    excerpt: "Explore how PWAs combine the best of web and mobile apps to deliver superior user experiences.",
    category: "Mobile Development",
    author: "Yana Chaudhary",
    date: "2025-12-15",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    slug: "typography-web-design-guide",
    title: "The Ultimate Guide to Typography in Web Design",
    excerpt: "Master the art of typography to create beautiful, readable, and effective web designs.",
    category: "Design",
    author: "Yana Chaudhary",
    date: "2025-12-12",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1524668951403-d44b28200ce0?w=800&q=80"
  },
  {
    slug: "digital-transformation-nepali-businesses",
    title: "Digital Transformation: A Guide for Nepali Businesses",
    excerpt: "How traditional Nepali businesses can successfully navigate digital transformation and thrive online.",
    category: "Business Strategy",
    author: "Yana Chaudhary",
    date: "2025-12-10",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    slug: "color-psychology-branding",
    title: "Color Psychology in Branding: Choosing the Right Palette",
    excerpt: "Understand how colors influence customer perception and make strategic color choices for your brand.",
    category: "Branding",
    author: "Yana Chaudhary",
    date: "2025-12-08",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80"
  },
  {
    slug: "website-performance-optimization",
    title: "Website Performance Optimization: Speed Up Your Site",
    excerpt: "Learn proven techniques to dramatically improve your website's loading speed and Core Web Vitals scores.",
    category: "Web Development",
    author: "Yana Chaudhary",
    date: "2025-12-05",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    slug: "instagram-marketing-small-business",
    title: "Instagram Marketing Tips for Small Businesses in Nepal",
    excerpt: "Practical Instagram marketing strategies to help small Nepali businesses grow their audience and sales.",
    category: "Digital Marketing",
    author: "Yana Chaudhary",
    date: "2025-12-02",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
  }
];

export default function BlogPage() {
  // Blog collection schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Brilliant Ideas Blog",
    "description": "Expert insights on web development, digital marketing, branding, and technology trends in Nepal",
    "url": "https://thebrilliantideas.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "The Brilliant Ideas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thebrilliantideas.com/logo.png"
      }
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thebrilliantideas.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://thebrilliantideas.com/blog"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="animate-fade-in-up mb-16">
            <SectionHeading
              title="Blog"
              subtitle="Expert insights, tips, and trends in web development, design, and digital marketing from Nepal's leading digital agency."
            />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlassCard className="h-full flex flex-col hover:scale-105 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 neu px-4 py-2 rounded-full">
                      <span className="text-xs font-semibold text-orange-primary">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-heading group-hover:text-orange-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-body text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs text-gray-600 font-medium">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>

                    <time className="text-xs text-gray-500 mt-2" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-24">
            <div className="neu rounded-3xl p-6 sm:p-8 md:p-12 lg:p-20 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="text-left">
                  <div className="inline-block neu-inset px-4 py-2 rounded-full mb-4 md:mb-6">
                    <span className="text-xs sm:text-sm font-semibold text-orange-primary">Ready to Transform?</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-heading leading-tight">
                    Let's Build Something
                    <span className="text-gradient block">Brilliant Together</span>
                  </h2>
                  <p className="text-base sm:text-lg text-body mb-6 md:mb-8 leading-relaxed">
                    From innovative web solutions to powerful mobile apps, we bring your digital vision to life with cutting-edge technology and creative excellence.
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl neu flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-heading text-xs sm:text-sm mb-1">Expert Team</h3>
                        <p className="text-xs text-gray-600">15+ years experience</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl neu flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-heading text-xs sm:text-sm mb-1">Fast Delivery</h3>
                        <p className="text-xs text-gray-600">On-time projects</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl neu flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-heading text-xs sm:text-sm mb-1">Great Value</h3>
                        <p className="text-xs text-gray-600">Competitive pricing</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl neu flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-heading text-xs sm:text-sm mb-1">24/7 Support</h3>
                        <p className="text-xs text-gray-600">Always available</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                    >
                      Start Your Project
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full neu text-gray-700 text-sm sm:text-base font-semibold hover:text-orange-primary hover:scale-105 transition-all duration-300"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>

                {/* Right Content - Stats */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
                  <div className="neu-inset rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 sm:mb-2">24/7</div>
                    <p className="text-xs sm:text-sm text-body font-medium">Support Available</p>
                  </div>
                  <div className="neu-inset rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 sm:mb-2">100%</div>
                    <p className="text-xs sm:text-sm text-body font-medium">Client Satisfaction</p>
                  </div>
                  <div className="neu-inset rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 sm:mb-2">50+</div>
                    <p className="text-xs sm:text-sm text-body font-medium">Technologies Mastered</p>
                  </div>
                  <div className="neu-inset rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 sm:mb-2">∞</div>
                    <p className="text-xs sm:text-sm text-body font-medium">Creative Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
