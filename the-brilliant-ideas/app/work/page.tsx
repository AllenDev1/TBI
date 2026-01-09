'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
    },
    {
      slug: 'jestha',
      title: 'JESTHA',
      tagline: "Nepal's voice of freedom",
      description: "Nepal's leading social media app designed to promote open dialogue and free expression.",
      image: '/works/Jestha.png',
      tags: ['Development', 'Mobile App'],
      date: 'April 2023',
    },
    {
      slug: 'nepalinest',
      title: 'NepaliNest',
      tagline: 'Your marketplace, reimagined',
      description: "Nepal's premier eCommerce platform offering diverse marketplace for new and used products.",
      image: '/works/nn/nn1.png',
      tags: ['Design', 'E-commerce'],
      date: 'April 2021',
    },
    {
      slug: 'the-brilliant-canvas',
      title: 'The Brilliant Canvas',
      tagline: 'Design in three dimensions',
      description: 'Cutting-edge t-shirt design website with immersive 3D visualization using Three.js.',
      image: '/works/tbc/tbc1.png',
      tags: ['Design', '3D Design'],
      date: 'April 2022',
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

      {/* Hero Section - Apple Style */}
      <section
        id="hero-section"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#ecf0f3]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ecf0f3] z-10"></div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 tracking-tight leading-none">
              Our Work
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences
              <br />
              <span className="text-gradient">that inspire and innovate</span>
            </p>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <div className="w-6 h-10 mx-auto border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
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
            className={`project-card min-h-screen flex items-center justify-center py-24 px-4 md:px-6 relative overflow-hidden ${
              index % 2 === 0 ? 'bg-[#ecf0f3]' : 'bg-white'
            }`}
          >
            <div className="container mx-auto max-w-7xl">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>

                {/* Text Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Number Badge */}
                  <div className="inline-block">
                    <div className="neu rounded-2xl px-6 py-3 inline-flex items-center gap-3">
                      <span className="text-4xl font-black text-gradient">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold text-gray-500">{project.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight tracking-tight">
                    {project.title}
                  </h2>

                  {/* Tagline */}
                  <p className="text-2xl md:text-3xl font-semibold text-gradient">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.tags.map((tag) => (
                      <div key={tag} className="neu-inset px-5 py-2 rounded-full">
                        <span className="text-sm font-semibold text-orange-primary">{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Link href={`/work/${project.slug}`}>
                      <div className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-primary to-orange-glow text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <span>View Project</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Link href={`/work/${project.slug}`}>
                    <div className="group relative">
                      {/* Neumorphic Frame */}
                      <div className="neu rounded-3xl p-8 hover:scale-[1.02] transition-all duration-700">
                        <div className="neu-inset rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white p-8">
                          <div className="relative aspect-[4/3] w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-1000"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Gradient Glow */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-orange-primary to-orange-glow opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 -z-10"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className={`absolute top-20 ${index % 2 === 0 ? 'right-10' : 'left-10'} w-96 h-96 rounded-full bg-gradient-to-br from-orange-primary to-orange-glow opacity-5 blur-3xl pointer-events-none`}></div>
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
