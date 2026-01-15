import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Portfolio & Projects | The Brilliant Ideas Nepal",
  description: "Explore our portfolio of web design, mobile apps, and digital projects. See how we've helped businesses in Nepal achieve their digital goals with innovative solutions.",
  keywords: ["portfolio Nepal", "web design projects", "mobile app showcase", "digital agency portfolio", "The Brilliant Ideas work"],
  alternates: {
    canonical: 'https://thebrilliantideas.com/work',
  },
  openGraph: {
    title: "Portfolio & Projects - The Brilliant Ideas Nepal",
    description: "Explore our portfolio of successful digital projects including PixeryHub, JESTHA, NepaliNest, and The Brilliant Canvas.",
    url: "https://thebrilliantideas.com/work",
    type: "website",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
