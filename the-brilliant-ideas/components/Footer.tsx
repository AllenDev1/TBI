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
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/89926801/' },
      { name: 'Instagram', href: 'https://www.instagram.com/the_brilliant_ideas/' },
      { name: 'Twitter', href: 'https://x.com/Allendev01' },
      { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61566978404584' },
    ],
  };

  return (
    <footer className="mt-32 py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section - Larger */}
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold text-gradient inline-block mb-4 hover:scale-105 transition-transform duration-300">
              The Brilliant Ideas
            </Link>
            <p className="text-body text-sm leading-relaxed max-w-xs">
              Crafting brilliant digital experiences for forward-thinking brands.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-heading font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-3">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body hover:text-orange-primary transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-heading font-bold mb-4 text-lg">Social</h3>
              <ul className="space-y-3">
                {footerLinks.Social.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-orange-primary transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-heading font-bold mb-4 text-lg">Get In Touch</h3>
              <div className="space-y-3 text-sm text-body">
                <p>Biratnagar, Nepal</p>
                <p>Kathmandu, Nepal</p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 px-6 py-2 rounded-full neu text-orange-primary font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {currentYear} The Brilliant Ideas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted hover:text-orange-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted hover:text-orange-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
