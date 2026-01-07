import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: "The Brilliant Ideas - Premium Digital Agency",
  description: "Creative digital agency specializing in branding, web design, development, and digital strategy.",
  keywords: ["digital agency", "web design", "branding", "development", "creative agency"],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
