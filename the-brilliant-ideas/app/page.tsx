import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CursorGlow from '@/components/CursorGlow';
import FAQSchema from '@/components/FAQSchema';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "Home - Digital Agency Nepal | Web & Mobile App Development",
  description: "The Brilliant Ideas is Nepal's leading digital agency offering web design, mobile app development, branding, and digital marketing services in Biratnagar and Kathmandu. Transform your business with cutting-edge solutions.",
  alternates: {
    canonical: 'https://thebrilliantideas.com',
  },
  openGraph: {
    title: "The Brilliant Ideas - Premier Digital Agency in Nepal",
    description: "Leading digital agency in Nepal offering web design, mobile app development, branding, and digital marketing services.",
    url: "https://thebrilliantideas.com",
    type: "website",
  },
};

export default function HomePage() {
  // Organization and LocalBusiness schema combined
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "The Brilliant Ideas",
    "legalName": "The Brilliant Ideas",
    "url": "https://thebrilliantideas.com",
    "logo": "https://thebrilliantideas.com/logo.png",
    "foundingDate": "2021",
    "founders": [
      {
        "@type": "Person",
        "name": "Narayan Dev",
        "jobTitle": "Founder & CEO"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Biratnagar",
      "addressLocality": "Biratnagar",
      "addressRegion": "Koshi Pradesh",
      "postalCode": "56613",
      "addressCountry": "NP"
    },
    "telephone": "+977-9800000000",
    "email": "info@thebrilliantideas.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@thebrilliantideas.com",
        "availableLanguage": ["English", "Nepali"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/89926801/",
      "https://www.instagram.com/the_brilliant_ideas/",
      "https://x.com/Allendev01",
      "https://www.facebook.com/profile.php?id=61566978404584"
    ],
    "description": "Premier digital agency in Nepal specializing in web design, mobile app development, branding, and digital marketing.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nepal"
      },
      {
        "@type": "City",
        "name": "Biratnagar"
      },
      {
        "@type": "City",
        "name": "Kathmandu"
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "description": "Professional web design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding",
            "description": "Brand identity and design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, SEM, and social media marketing"
          }
        }
      ]
    }
  };

  // WebSite schema with search action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Brilliant Ideas",
    "url": "https://thebrilliantideas.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thebrilliantideas.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQSchema />
      <Navbar />
      <CursorGlow />
      <Hero />
      <Services />
      <CTASection />
      <Footer />
    </>
  );
}
