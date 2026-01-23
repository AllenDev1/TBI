import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ChessHero from './components/ChessHero';
import ChessFeatures from './components/ChessFeatures';
import ChessGameModes from './components/ChessGameModes';
import ChessCTA from './components/ChessCTA';

export const metadata: Metadata = {
  title: "The Brilliant Chess - Free Multiplayer Chess Game",
  description: "Play chess online, locally, or via Bluetooth with The Brilliant Chess. A fully-featured chess game supporting online multiplayer, local play, and Bluetooth connectivity. Built with React Native and Expo.",
  alternates: {
    canonical: 'https://thebrilliantideas.com/brilliant-chess',
  },
  openGraph: {
    title: "The Brilliant Chess - Free Multiplayer Chess Game",
    description: "Play chess online, locally, or via Bluetooth. Complete chess rules implementation with multiple game modes.",
    url: "https://thebrilliantideas.com/brilliant-chess",
    type: "website",
    images: [
      {
        url: "/brilliant-chess-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Brilliant Chess Game",
      },
    ],
  },
  keywords: [
    "chess game",
    "online chess",
    "multiplayer chess",
    "bluetooth chess",
    "mobile chess",
    "chess app",
    "react native chess",
    "free chess game",
    "chess online",
    "brilliant chess"
  ],
};

export default function BrilliantChessPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "The Brilliant Chess",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A fully-featured chess game supporting online multiplayer, local play, and Bluetooth connectivity. Built with React Native and Expo.",
    "author": {
      "@type": "Organization",
      "name": "The Brilliant Ideas"
    },
    "screenshot": "https://thebrilliantideas.com/brilliant-chess-screenshot.jpg",
    "featureList": [
      "Online multiplayer with room codes",
      "Local two-player mode",
      "Bluetooth peer-to-peer play",
      "Complete chess rules implementation",
      "Check, checkmate, and stalemate detection",
      "Castling and en passant support",
      "Move history tracking",
      "Real-time move synchronization"
    ]
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
      <Navbar />
      <CursorGlow />
      <ChessHero />
      <ChessFeatures />
      <ChessCTA />
      <Footer />
    </>
  );
}
