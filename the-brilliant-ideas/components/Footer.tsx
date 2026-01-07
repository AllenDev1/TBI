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
    Services: [
      { name: 'Branding', href: '/services#branding' },
      { name: 'Web Design', href: '/services#web-design' },
      { name: 'Development', href: '/services#development' },
      { name: 'Strategy', href: '/services#strategy' },
    ],
    Social: [
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'Dribbble', href: 'https://dribbble.com' },
    ],
  };

  return (
    <footer className="neu mt-32 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-gradient inline-block mb-4">
              The Brilliant Ideas
            </Link>
            <p className="text-body text-sm">
              Crafting brilliant digital experiences for forward-thinking brands.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-heading font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body hover:text-orange-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
