import React from 'react';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us - Meet Our Team | The Brilliant Ideas Nepal",
  description: "Learn about The Brilliant Ideas, a leading digital agency in Nepal. Meet our expert team of designers, developers, and strategists based in Biratnagar and Kathmandu. Discover our values, approach, and commitment to excellence.",
  alternates: {
    canonical: 'https://thebrilliantideas.com/about',
  },
  openGraph: {
    title: "About The Brilliant Ideas - Digital Agency Team Nepal",
    description: "Meet our expert team of designers, developers, and strategists. Learn about our values, approach, and commitment to digital excellence in Nepal.",
    url: "https://thebrilliantideas.com/about",
    type: "website",
  },
};

export default function AboutPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://thebrilliantideas.com/about"
      }
    ]
  };

  const stats = [
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Technologies Mastered' },
    { number: '∞', label: 'Creative Solutions' },
  ];

  const team = [
    {
      name: 'Scooby',
      role: 'Chief Happiness Officer (CHO)',
      image: '/team/scooby.jpg',
      bio: 'Spreading tail-wagging joy and keeping morale high, one belly rub at a time!',
      social: {
        instagram: 'https://www.instagram.com/scooby_tbi/',
      }
    },
    {
      name: 'Narayan Dev',
      role: 'Founder / CEO',
      image: '/team/narayan.jpg',
      bio: 'Leading our creative vision with 15+ years in brand design and strategy.',
      social: {
        linkedin: 'https://www.linkedin.com/in/narayan-dev',
        instagram: 'https://www.instagram.com/allend3v/',
        twitter: 'https://twitter.com/Allendev01',
        github: 'https://github.com/AllenDev1',
      }
    },
    {
      name: 'Sarthak Mainali',
      role: 'Executive Director',
      image: '/team/sarthak.png',
      bio: 'Driving strategic initiatives and business development.',
      social: {
        instagram: 'https://www.instagram.com/sarthakmainali/',
        linkedin: 'https://www.linkedin.com/in/sarthak-mainali-020984324/',
        facebook: 'https://www.facebook.com/sarthakMainali8?mibextid=ZbWKwL',
      }
    },
    {
      name: 'Bishnu Dev',
      role: 'Tech Lead',
      image: '/team/bishnu.jpeg',
      bio: 'Building robust, scalable solutions with cutting-edge technologies.',
      social: {
        linkedin: 'https://www.linkedin.com/in/bishnu-dev/',
        github: 'https://github.com/bordernone',
        twitter: 'https://twitter.com/bishnudev1234',
        instagram: 'https://www.instagram.com/bishnu.dev_/',
      }
    },
    {
      name: 'Sukhchandra Sharma',
      role: 'Full Stack Developer',
      image: '/team/sukhisir.jpg',
      bio: 'Building end-to-end solutions with modern web technologies.',
      social: {
        linkedin: 'https://www.linkedin.com/in/sukhchandra/',
        instagram: 'https://www.instagram.com/sukhisharma123/',
        github: 'https://github.com/SukhiSharma123',
      }
    },
    {
      name: 'Roshan Pokhrel',
      role: 'Frontend Developer',
      image: '/team/roshan.png',
      bio: 'Crafting beautiful, user-centric experiences that make an impact.',
      social: {
        linkedin: 'https://www.linkedin.com/in/iamrowshan/',
        instagram: 'https://www.instagram.com/_.rowshan/',
        github: 'https://github.com/Roshan-ops',
      }
    },
    {
      name: 'Ujjwal Dev',
      role: 'Graphic Designer',
      image: '/team/ujjwal.jpeg',
      bio: 'Creating stunning visuals and brand identities.',
      social: {
        instagram: 'https://www.instagram.com/ujjwaldev02/',
        facebook: 'https://www.facebook.com/ujjwal.dev.161?mibextid=LQQJ4d',
        linkedin: 'https://www.linkedin.com/in/ujjwal-dev-214725199/',
      }
    },
    {
      name: 'Yana Chaudhary',
      role: 'Social Media Manager',
      image: '/team/yana.jpg',
      bio: 'Managing social presence and engaging with our community.',
      social: {
        instagram: 'https://www.instagram.com/that_kid_yana/',
        linkedin: 'https://www.linkedin.com/in/yana-chaudhary/',
      }
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We set the highest standards for our work and constantly push boundaries to deliver exceptional results.',
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex challenges in unique ways.',
    },
    {
      title: 'Collaboration',
      description: 'We believe the best results come from working closely with our clients as true partners.',
    },
    {
      title: 'Integrity',
      description: 'We&apos;re transparent, honest, and committed to doing what&apos;s right for our clients and their users.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Neumorphic Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-float pointer-events-none"></div>
        <div className="absolute bottom-60 right-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float-delay pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="animate-fade-in-up">
            <SectionHeading
              title="About Us"
              subtitle="We're a passionate team of designers, developers, and strategists dedicated to creating brilliant digital experiences."
            />
          </div>

          {/* Story Section */}
          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold mb-6 text-heading">
                  Building Brilliant Digital Solutions in Nepal
                </h2>
                <div className="space-y-4 text-body leading-relaxed">
                  <p>
                    The Brilliant Ideas is a leading tech agency based in Nepal, dedicated to delivering cutting-edge technology solutions that transform businesses. From our offices in Biratnagar and Kathmandu, we serve clients across Nepal and beyond.
                  </p>
                  <p>
                    We specialize in software development, web applications, mobile apps, and digital transformation services. Our team combines technical expertise with creative innovation to build solutions that are not just functional, but exceptional.
                  </p>
                  <p>
                    Whether you're a startup looking to make your mark or an established business ready to scale, we're here to turn your ideas into reality. We don't just build software—we build partnerships that drive success.
                  </p>
                </div>
              </div>
              <div className="neu rounded-2xl overflow-hidden animate-slide-in-right">
                <div className="relative h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="neu-inset rounded-3xl p-8 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <p className="text-body font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section className="mb-24">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide everything we do and define who we are."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <GlassCard className="group hover:scale-105 transition-all duration-500 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl neu flex items-center justify-center text-orange-primary font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-heading group-hover:text-orange-primary transition-colors duration-300">{value.title}</h3>
                        <p className="text-body leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-24">
            <SectionHeading
              title="Meet the Team"
              subtitle="The talented individuals behind our creative excellence and technical expertise."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="animate-fade-in-up w-full max-w-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GlassCard className="text-center group hover:scale-105 transition-all duration-500 h-full">
                    <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden neu group-hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] transition-shadow duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        sizes="160px"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-heading group-hover:text-orange-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-orange-primary mb-3 text-sm font-semibold">{member.role}</p>
                    <p className="text-body text-sm leading-relaxed mb-4">{member.bio}</p>
                    {member.social && (
                      <div className="flex justify-center gap-3 mt-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                          </a>
                        )}
                        {member.social.facebook && (
                          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                          </a>
                        )}
                      </div>
                    )}
                  </GlassCard>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-24">
            <SectionHeading
              title="Our Approach"
              subtitle="How we work with clients to deliver exceptional results."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-slide-in-left">
                <GlassCard className="group hover:scale-105 transition-all duration-500 h-full">
                  <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">01</div>
                  <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Strategic Thinking</h3>
                  <p className="text-body leading-relaxed">
                    Every project starts with deep research and strategic planning. We take time to understand your business, market, and audience before designing solutions.
                  </p>
                </GlassCard>
              </div>
              <div className="animate-fade-in-scale" style={{ animationDelay: '0.15s' }}>
                <GlassCard className="group hover:scale-105 transition-all duration-500 h-full">
                  <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">02</div>
                  <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Creative Excellence</h3>
                  <p className="text-body leading-relaxed">
                    Our design team brings your brand to life with stunning visuals and engaging experiences that capture attention and drive action.
                  </p>
                </GlassCard>
              </div>
              <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <GlassCard className="group hover:scale-105 transition-all duration-500 h-full">
                  <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">03</div>
                  <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Technical Expertise</h3>
                  <p className="text-body leading-relaxed">
                    We build robust, scalable solutions using the latest technologies and best practices, ensuring your digital presence performs flawlessly.
                  </p>
                </GlassCard>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="neu rounded-3xl p-12 md:p-16 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-body mb-8 max-w-2xl mx-auto leading-relaxed">
              Interested in partnering with us? We'd love to hear about your project and explore how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Get In Touch
              </Button>
              <Button variant="glass" href="/work">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
