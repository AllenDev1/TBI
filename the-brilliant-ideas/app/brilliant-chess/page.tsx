import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ChessHero from './components/ChessHero';
import ChessFeatures from './components/ChessFeatures';
import ChessGameModes from './components/ChessGameModes';
import ChessCTA from './components/ChessCTA';

export const metadata: Metadata = {
  title: "Play Chess Online Free - Multiplayer, Bluetooth & Local | The Brilliant Chess",
  description: "Free online chess game with multiplayer, Bluetooth, and local modes. Complete chess rules, no ads, no registration. Play chess anytime, anywhere on iOS & Android.",
  alternates: {
    canonical: 'https://thebrilliantideas.com/brilliant-chess',
    languages: {
      'en-US': 'https://thebrilliantideas.com/brilliant-chess',
    },
  },
  category: "Games",
  applicationName: "The Brilliant Chess",
  appleWebApp: {
    capable: true,
    title: "The Brilliant Chess",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: "The Brilliant Chess - Free Online Multiplayer Chess Game",
    description: "Play chess online with friends, locally, or via Bluetooth. Complete rules, no ads, 100% free. Available on iOS & Android.",
    url: "https://thebrilliantideas.com/brilliant-chess",
    type: "website",
    locale: "en_US",
    siteName: "The Brilliant Ideas",
    images: [
      {
        url: "/works/chess/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Brilliant Chess - Free Online Multiplayer Chess Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brilliant Chess - Free Online Chess Game",
    description: "Play chess online with multiplayer, Bluetooth & local modes. Complete rules, no ads, 100% free.",
    creator: "@Allendev01",
    images: ["/works/chess/og-image.jpg"],
    site: "@Allendev01",
  },
  keywords: [
    // Primary keywords
    "chess game",
    "online chess",
    "play chess online",
    "free chess game",
    "chess app",

    // Feature-based keywords
    "multiplayer chess",
    "chess online multiplayer",
    "bluetooth chess",
    "local chess game",
    "offline chess",
    "chess app free",

    // Platform keywords
    "mobile chess",
    "chess app android",
    "chess app ios",
    "react native chess",

    // Long-tail keywords
    "chess game no registration",
    "free chess no ads",
    "chess with friends",
    "online chess with room codes",
    "two player chess",
    "peer to peer chess",

    // Branded
    "brilliant chess",
    "the brilliant chess"
  ],
};

export default function BrilliantChessPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "The Brilliant Chess",
    "applicationCategory": "GameApplication",
    "applicationSubCategory": "Board Game",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "description": "A fully-featured free chess game supporting online multiplayer, local play, and Bluetooth connectivity. Play chess with complete rules implementation including castling, en passant, and checkmate detection.",
    "author": {
      "@type": "Organization",
      "name": "The Brilliant Ideas",
      "url": "https://thebrilliantideas.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Brilliant Ideas",
      "url": "https://thebrilliantideas.com"
    },
    "image": "https://thebrilliantideas.com/works/chess/icon.png",
    "screenshot": [
      "https://thebrilliantideas.com/works/chess/1.png",
      "https://thebrilliantideas.com/works/chess/2.png",
      "https://thebrilliantideas.com/works/chess/3.png"
    ],
    "downloadUrl": "https://thebrilliantideas.com/works/chess/the-brilliant-chess.apk",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Online multiplayer with room codes",
      "Local two-player pass-and-play mode",
      "Bluetooth peer-to-peer connectivity",
      "Complete chess rules implementation",
      "Check, checkmate, and stalemate detection",
      "Castling (kingside and queenside)",
      "En passant captures",
      "Pawn promotion",
      "Move history tracking",
      "Real-time move synchronization",
      "No registration required",
      "No ads or subscriptions",
      "Free and open source"
    ],
    "keywords": "chess game, online chess, multiplayer chess, bluetooth chess, free chess app, chess online, mobile chess",
    "inLanguage": "en",
    "datePublished": "2025-01-01",
    "releaseNotes": "Initial release with online multiplayer, local, and Bluetooth modes"
  };

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
        "name": "The Brilliant Chess",
        "item": "https://thebrilliantideas.com/brilliant-chess"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is The Brilliant Chess free to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Brilliant Chess is 100% free with no ads, no subscriptions, and no hidden costs. It's also open source."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play chess online with friends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Brilliant Chess supports online multiplayer. Create a room with a simple code and share it with your friend to play together from anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can play locally on the same device (pass-and-play) or via Bluetooth with nearby players without any internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "What chess rules are implemented?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Brilliant Chess includes all official chess rules: all piece movements, castling (kingside and queenside), en passant, pawn promotion, check, checkmate, and stalemate detection."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account or registration is required. Simply download the app and start playing immediately."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Brilliant Chess - Free Online Multiplayer Chess Game",
    "description": "Play chess online with multiplayer, Bluetooth & local modes. Complete rules, no ads, 100% free.",
    "url": "https://thebrilliantideas.com/brilliant-chess",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "The Brilliant Ideas",
      "url": "https://thebrilliantideas.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <CursorGlow />
      <main role="main" aria-label="The Brilliant Chess application">
        <ChessHero />
        <ChessFeatures />
        <ChessCTA />
      </main>
      <Footer />
    </>
  );
}
