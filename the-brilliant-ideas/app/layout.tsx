import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import AdSenseScript from "@/components/AdSenseScript";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-geist-sans',
  display: 'swap', // Optimize font loading for better performance
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebrilliantideas.com'),
  title: {
    default: "The Brilliant Ideas - Leading Digital Agency in Nepal | Web Design & Development",
    template: "%s | The Brilliant Ideas"
  },
  description: "Premier digital agency in Nepal specializing in cutting-edge web design, mobile app development, branding, and digital marketing. Transform your business with innovative solutions from Biratnagar and Kathmandu.",
  keywords: [
    "digital agency Nepal",
    "web design Nepal",
    "web development Nepal",
    "mobile app development Nepal",
    "branding agency Nepal",
    "UI/UX design Nepal",
    "digital marketing Nepal",
    "software development Nepal",
    "Biratnagar web design",
    "Kathmandu digital agency",
    "Nepal tech agency",
    "creative agency Nepal",
    "e-commerce development Nepal",
    "React development Nepal",
    "Next.js development Nepal",
    "custom web applications Nepal"
  ],
  authors: [{ name: "The Brilliant Ideas", url: "https://thebrilliantideas.com" }],
  creator: "The Brilliant Ideas",
  publisher: "The Brilliant Ideas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebrilliantideas.com",
    siteName: "The Brilliant Ideas",
    title: "The Brilliant Ideas - Leading Digital Agency in Nepal",
    description: "Premier digital agency in Nepal specializing in cutting-edge web design, mobile app development, branding, and digital marketing. Transform your business with innovative solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Brilliant Ideas - Digital Agency Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brilliant Ideas - Leading Digital Agency in Nepal",
    description: "Premier digital agency in Nepal specializing in cutting-edge web design, mobile app development, branding, and digital marketing.",
    creator: "@Allendev01",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: 'https://thebrilliantideas.com',
  },
  verification: {
    // TODO: Replace with actual Google Search Console verification code
    // Get your verification code from: https://search.google.com/search-console
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BSN1533EQ4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BSN1533EQ4');
            `,
          }}
        />

        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-1949655614307812" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll />
        <LoadingScreen />
        {children}
        <ScrollToTop />
        <AdSenseScript />
      </body>
    </html>
  );
}
