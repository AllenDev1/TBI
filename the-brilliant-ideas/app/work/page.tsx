'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkPage() {
  const projects = [
    {
      slug: 'pixeryhub',
      title: 'PixeryHub',
      tagline: 'Inspiring pixels for inspired people',
      description: 'A comprehensive platform offering free 4K/HD wallpapers, live backgrounds, and digital tools.',
      image: '/works/pixeryhub/image1.png',
      tags: ['Mobile App', 'Web App', 'Design Tools'],
      date: 'December 2024',
      externalLink: 'https://pixeryhub.com/',
      appLink: 'https://play.google.com/store/apps/details?id=com.pixeryhub.app',
    },
    {
      slug: 'brilliant-chess',
      title: 'The Brilliant Chess',
      tagline: 'Master the game, your way',
      description: 'A fully-featured chess game with online multiplayer, local play, and Bluetooth connectivity.',
      image: '/works/chess/1.png',
      tags: ['Mobile App', 'Game', 'Multiplayer'],
      date: 'January 2025',
    },
    {
      slug: 'jestha',
      title: 'JESTHA',
      tagline: "Nepal's voice of freedom",
      description: "Nepal's leading social media app designed to promote open dialogue and free expression.",
      image: '/works/Jestha.png',
      tags: ['Development', 'Mobile App'],
      date: 'April 2023',
      externalLink: 'https://jestha.com/',
    },
    {
      slug: 'nepalinest',
      title: 'NepaliNest',
      tagline: 'Your marketplace, reimagined',
      description: "Nepal's premier eCommerce platform offering diverse marketplace for new and used products.",
      image: '/works/nn/nn1.png',
      tags: ['Design', 'E-commerce'],
      date: 'April 2021',
      externalLink: 'https://www.nepalinest.com/',
    },
    {
      slug: 'the-brilliant-canvas',
      title: 'The Brilliant Canvas',
      tagline: 'Design in three dimensions',
      description: 'Cutting-edge t-shirt design website with immersive 3D visualization using Three.js.',
      image: '/works/tbc/tbc1.png',
      tags: ['Design', '3D Design'],
      date: 'April 2022',
      externalLink: 'https://thebrilliantcanvas.netlify.app/',
    },
  ];

  useEffect(() => {
    // Scroll animation logic
    const handleScroll = () => {
      const scrolled = window.scrollY;

      // Parallax effect for hero
      const hero = document.getElementById('hero-section');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = `${1 - scrolled / 600}`;
      }

      // Fade in project cards on scroll
      const projects = document.querySelectorAll('.project-card');
      projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;

        if (isVisible) {
          project.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <CursorGlow />

      {/* Hero Section - Apple Style */}
      <section
        id="hero-section"
        className="min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-[#ecf0f3] pt-20 sm:pt-24 md:pt-0"
      >
        {/* Decorative Neomorphic Background Elements */}
        <div className="absolute top-10 sm:top-16 md:top-20 -right-20 sm:right-5 md:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-60"></div>
        <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 -left-20 sm:left-5 md:left-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-60"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ecf0f3] z-10"></div>

        <div className="container mx-auto px-4 sm:px-5 md:px-6 text-center relative z-20">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 tracking-tight leading-none px-2">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed px-4">
              Crafting exceptional digital experiences
              <br className="hidden sm:block" />
              <span className="sm:inline block mt-1 sm:mt-0"> </span>
              <span className="text-gradient">that inspire and innovate</span>
            </p>

            {/* Scroll Indicator */}
            <div className="pt-8 sm:pt-10 md:pt-12 animate-bounce">
              <div className="w-5 h-8 sm:w-6 sm:h-10 mx-auto border-2 border-gray-400 rounded-full flex items-start justify-center p-1.5 sm:p-2">
                <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <main className="relative bg-[#ecf0f3]">
        {projects.map((project, index) => (
          <section
            key={project.slug}
            className={`project-card min-h-[90vh] sm:min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-5 md:px-6 relative overflow-hidden ${
              index % 2 === 0 ? 'bg-[#ecf0f3]' : 'bg-white'
            }`}
          >
            <div className="container mx-auto max-w-7xl">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>

                {/* Text Content */}
                <div className={`space-y-4 sm:space-y-5 md:space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Number Badge */}
                  <div className="inline-block">
                    <div className="neu rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 inline-flex items-center gap-2 sm:gap-2.5 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-500">{project.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-800 leading-tight tracking-tight">
                    {project.title}
                  </h2>

                  {/* Tagline */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gradient">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 pt-2 sm:pt-3 md:pt-4">
                    {project.tags.map((tag) => (
                      <div key={tag} className="neu-inset px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-orange-primary">{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 sm:pt-5 md:pt-6 flex flex-wrap gap-3 sm:gap-4">
                    <Link href={project.slug === 'brilliant-chess' ? '/brilliant-chess' : `/work/${project.slug}`}>
                      <div className="group inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-primary to-orange-glow text-white font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl active:scale-95 sm:hover:scale-105 transition-all duration-300">
                        <span>View Details</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>

                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl neu text-gray-800 font-semibold text-base sm:text-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300"
                      >
                        <span>Visit Live Site</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {project.appLink && (
                      <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl neu text-gray-800 font-semibold text-base sm:text-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626c.566.328.566 1.159 0 1.486l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                        </svg>
                        <span>Get App</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} mt-8 lg:mt-0`}>
                  <Link href={project.slug === 'brilliant-chess' ? '/brilliant-chess' : `/work/${project.slug}`}>
                    <div className="group relative overflow-visible py-8 sm:py-12">
                      {/* Special handling for chess project - show 3 mobile frames */}
                      {project.slug === 'brilliant-chess' ? (
                        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-4 sm:px-6 md:px-8">
                          {[1, 2, 3].map((num, idx) => (
                            <div
                              key={num}
                              className={`relative transition-all duration-700 ${
                                idx === 1
                                  ? 'scale-100 z-10'
                                  : 'scale-85 sm:scale-90 opacity-80'
                              } group-hover:scale-95 group-hover:opacity-100`}
                              style={{
                                transform: idx === 0
                                  ? 'rotate(-5deg)'
                                  : idx === 2
                                  ? 'rotate(5deg)'
                                  : 'rotate(0deg)'
                              }}
                            >
                              {/* Mobile Frame */}
                              <div className="rounded-[1.2rem] sm:rounded-[1.8rem] md:rounded-[2.2rem] p-1.5 sm:p-2 md:p-2.5 bg-black shadow-xl sm:shadow-2xl">
                                {/* Screen */}
                                <div className="rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black">
                                  <div className="relative aspect-[9/19.5] w-20 sm:w-32 md:w-40 lg:w-44">
                                    <Image
                                      src={`/works/chess/${num}.png`}
                                      alt={`${project.title} Screenshot ${num}`}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                      sizes="(max-width: 640px) 80px, (max-width: 768px) 130px, 180px"
                                      priority={index === 0}
                                    />
                                  </div>
                                </div>
                                {/* Notch */}
                                <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 w-10 sm:w-14 md:w-18 lg:w-20 h-2.5 sm:h-3.5 md:h-4 bg-black rounded-full"></div>

                                {/* Side buttons */}
                                <div className="absolute -right-0.5 top-12 sm:top-16 md:top-20 w-0.5 h-6 sm:h-8 md:h-10 bg-gray-700 rounded-l-sm"></div>
                                <div className="absolute -right-0.5 top-20 sm:top-26 md:top-32 w-0.5 h-8 sm:h-10 md:h-12 bg-gray-700 rounded-l-sm"></div>
                                <div className="absolute -left-0.5 top-14 sm:top-20 md:top-24 w-0.5 h-5 sm:h-6 md:h-7 bg-gray-700 rounded-r-sm"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Default layout for other projects
                        <>
                          <div className="neu rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 active:scale-[0.98] sm:hover:scale-[1.02] transition-all duration-700">
                            <div className="neu-inset rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 md:p-8">
                              <div className="relative aspect-[4/3] w-full">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-contain group-hover:scale-105 transition-transform duration-1000"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                  priority={index === 0}
                                />
                              </div>
                            </div>
                          </div>
                          {/* Gradient Glow */}
                          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-primary to-orange-glow opacity-0 group-hover:opacity-20 blur-2xl sm:blur-3xl transition-opacity duration-700 -z-10"></div>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className={`absolute top-10 sm:top-16 md:top-20 ${index % 2 === 0 ? '-right-20 sm:right-5 md:right-10' : '-left-20 sm:left-5 md:left-10'} w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-primary to-orange-glow opacity-5 blur-2xl sm:blur-3xl pointer-events-none`}></div>
          </section>
        ))}
      </main>

      <Footer />

      <style jsx global>{`
        .project-card {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
