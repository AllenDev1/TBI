import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Work', href: '/work' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    Social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/the-brilliant-ideas' },
      { name: 'Instagram', href: 'https://www.instagram.com/the_brilliant_ideas/' },
      { name: 'Twitter', href: 'https://x.com/Allendev01' },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61566978404584' },
    ],
  };

  return (
    <footer className="mt-16 sm:mt-24 md:mt-32 py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section - Larger */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link href="/" className="text-2xl sm:text-3xl font-bold text-gradient inline-block mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300">
              The Brilliant Ideas
            </Link>
            <p className="text-body text-sm sm:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              Crafting brilliant digital experiences for forward-thinking brands.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Company Links */}
            <div className="text-center md:text-left">
              <h3 className="text-heading font-bold mb-3 sm:mb-4 text-base sm:text-lg">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body hover:text-orange-primary transition-colors duration-300 text-sm sm:text-base inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="text-heading font-bold mb-3 sm:mb-4 text-base sm:text-lg">Social</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.Social.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-orange-primary transition-colors duration-300 text-sm sm:text-base inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 sm:col-span-1 text-center md:text-left">
              <h3 className="text-heading font-bold mb-3 sm:mb-4 text-base sm:text-lg">Get In Touch</h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-body">
                <p>Biratnagar, Nepal</p>
                <p>Kathmandu, Nepal</p>
                <Link
                  href="/contact"
                  className="inline-block mt-3 sm:mt-4 px-5 sm:px-6 py-2 rounded-full neu text-orange-primary text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-gray-600 text-xs sm:text-sm order-2 md:order-1">
            © {currentYear} The Brilliant Ideas. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 order-1 md:order-2">
            <Link href="/privacy" className="text-gray-600 hover:text-orange-primary transition-colors text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-orange-primary transition-colors text-xs sm:text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
