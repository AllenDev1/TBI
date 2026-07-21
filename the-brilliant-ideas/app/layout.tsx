import type { Metadata } from 'next';
import { Fraunces, Inter, Noto_Serif_Devanagari } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollTop from '@/components/ScrollTop';
import { SITE } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// For the small Devanagari accent words (नमस्ते, कथा …) — a serif that
// sits naturally beside Fraunces.
const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['500', '700'],
  variable: '--font-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'The Brilliant Ideas: Web, App & Software Agency in Nepal',
    template: '%s | The Brilliant Ideas',
  },
  description: SITE.description,
  keywords: [
    'digital agency Nepal',
    'web design Nepal',
    'web development Nepal',
    'mobile app development Nepal',
    'software company Nepal',
    'branding agency Nepal',
    'UI/UX design Nepal',
    'SEO Nepal',
    'Biratnagar web design',
    'Kathmandu digital agency',
    'Next.js development Nepal',
    'e-commerce development Nepal',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'The Brilliant Ideas: Web, App & Software Agency in Nepal',
    description: SITE.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Brilliant Ideas, Digital Agency from Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brilliant Ideas: Web, App & Software Agency in Nepal',
    description: SITE.description,
    creator: '@Allendev01',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  // ProfessionalService (a LocalBusiness subtype) alongside Organization gives
  // Google the local-search signals a plain Organization lacks — geo, areaServed —
  // which matter for "digital agency Biratnagar / Kathmandu" queries.
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.description,
  email: SITE.email,
  priceRange: '$$',
  areaServed: { '@type': 'Country', name: 'Nepal' },
  address: SITE.offices.map((office) => ({
    '@type': 'PostalAddress',
    addressLocality: office.city,
    streetAddress: office.address,
    addressCountry: 'NP',
  })),
  location: SITE.offices.map((office) => ({
    '@type': 'Place',
    name: `${SITE.name} — ${office.city}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: office.city,
      streetAddress: office.address,
      addressCountry: 'NP',
    },
    geo: { '@type': 'GeoCoordinates', latitude: office.lat, longitude: office.lng },
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'customer service',
    availableLanguage: ['English', 'Nepali'],
  },
  sameAs: Object.values(SITE.social),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': `${SITE.url}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} ${notoDevanagari.variable} font-body`}>
        <SmoothScroll />
        {children}
        <ScrollTop />

        {/* Google Analytics — lazyOnload keeps ~160 KiB of gtag.js off the
            critical path; pageview still fires once the page is idle */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BSN1533EQ4" strategy="lazyOnload" />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BSN1533EQ4');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vj5zjfq98f");
          `}
        </Script>
      </body>
    </html>
  );
}
