import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'The Brilliant Ideas — Web, App & Software Agency in Nepal',
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
    title: 'The Brilliant Ideas — Web, App & Software Agency in Nepal',
    description: SITE.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Brilliant Ideas — Digital Agency from Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brilliant Ideas — Web, App & Software Agency in Nepal',
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
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: SITE.offices.map((office) => ({
    '@type': 'PostalAddress',
    addressLocality: office.city,
    streetAddress: office.address,
    addressCountry: 'NP',
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
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
        <meta name="google-adsense-account" content="ca-pub-1949655614307812" />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} font-body`}>
        <SmoothScroll />
        {children}

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BSN1533EQ4" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BSN1533EQ4');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
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
