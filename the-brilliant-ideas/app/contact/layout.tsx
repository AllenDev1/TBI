import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | The Brilliant Ideas Nepal",
  description: "Contact The Brilliant Ideas for web design, mobile app development, branding, and digital marketing services in Nepal. Offices in Biratnagar and Kathmandu. Let's discuss your project today.",
  keywords: ["contact digital agency Nepal", "web development inquiry", "contact The Brilliant Ideas", "Biratnagar agency", "Kathmandu digital services"],
  alternates: {
    canonical: 'https://thebrilliantideas.com/contact',
  },
  openGraph: {
    title: "Contact The Brilliant Ideas - Digital Agency Nepal",
    description: "Get in touch with our team in Biratnagar and Kathmandu. Let's discuss your web, mobile, and branding needs.",
    url: "https://thebrilliantideas.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
