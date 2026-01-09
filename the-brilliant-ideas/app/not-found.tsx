import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-hidden bg-[#ecf0f3]">
        {/* Decorative Neumorphic Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#ecf0f3] shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-[#ecf0f3] shadow-[15px_15px_45px_#d1d9e6,-15px_-15px_45px_#ffffff] animate-float pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          {/* 404 Number with Neumorphic Style */}
          <div className="mb-8">
            <div className="inline-block neu-inset rounded-3xl px-12 py-8 mb-6">
              <h1 className="text-8xl md:text-9xl font-black text-gradient">
                404
              </h1>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          {/* Neumorphic Icon */}
          <div className="mb-12 flex justify-center">
            <div className="neu rounded-full p-8 animate-float">
              <svg
                className="w-24 h-24 text-orange-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link href="/">
              <Button variant="primary" className="min-w-[200px]">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Back to Home</span>
                </span>
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="secondary" className="min-w-[200px]">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Us</span>
                </span>
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16">
            <div className="neu rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-heading mb-6">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/work"
                  className="text-body hover:text-orange-primary transition-colors font-medium"
                >
                  Our Work
                </Link>
                <Link
                  href="/services"
                  className="text-body hover:text-orange-primary transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="text-body hover:text-orange-primary transition-colors font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-body hover:text-orange-primary transition-colors font-medium"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
