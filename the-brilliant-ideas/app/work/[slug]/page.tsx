'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  client?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  gallery?: string[];
  video?: string;
}

const projects: Record<string, Project> = {
  'pixeryhub': {
    slug: 'pixeryhub',
    title: 'PixeryHub',
    description: 'Inspiring pixels for inspired people - A comprehensive platform offering free 4K/HD wallpapers, live backgrounds, and essential digital tools for mobile and desktop users.',
    image: '/works/pixeryhub/image1.png',
    tags: ['Mobile App', 'Web App', 'Design Tools'],
    date: 'December 2024',
    client: 'Internal Project',
    duration: '4 months',
    video: '/works/pixeryhub/789615515.760498_pixeryhub_compressed.mp4',
    challenge: 'Limited access to high-quality, inspiring digital backgrounds and the lack of a unified platform offering both premium wallpapers and complementary digital tools without registration barriers.',
    solution: 'Developed a cross-platform application featuring free unlimited downloads of 4K/HD wallpapers, animated/live wallpapers, and integrated digital tools including image/video compression and QR code generation. Implemented daily content updates across 12+ categories with dark/light mode support and one-click downloads.',
    results: [
      'Achieved 12,450+ app ratings with 4.8/5 average rating',
      'Daily wallpaper updates across 12+ categories',
      'One-click download with no registration required',
      'Successfully democratized access to premium digital aesthetics',
      'Integrated multiple complementary tools (compression, QR generator)'
    ],
    technologies: ['React Native', 'Node.js', 'Responsive Design', 'Cross-platform Development', 'Dark/Light Mode', 'Image Optimization'],
    gallery: ['/works/pixeryhub/image1.png', '/works/pixeryhub/image2.png', '/works/pixeryhub/image3.png', '/works/pixeryhub/image4.png']
  },
  'jestha': {
    slug: 'jestha',
    title: 'JESTHA',
    description: "Nepal's leading social media app designed to promote open dialogue and free expression.",
    image: '/works/Jestha.png',
    tags: ['Development', 'Mobile App', 'Social Media'],
    date: 'April 2023',
    client: 'Jestha',
    duration: '6 months',
    challenge: 'Creating a social media platform that balances free speech with responsible content moderation, while providing a vibrant space for users to connect and share diverse viewpoints.',
    solution: 'We built a dynamic social media app with age-appropriate content filters for users 18+, implementing thoughtful moderation tools that uphold free expression while maintaining a respectful and safe environment.',
    results: [
      "Launched Nepal's leading social media platform",
      'Implemented age-appropriate content filtering system',
      'Created platform for open dialogue and free expression',
      'Built dynamic and interactive online community'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'AWS'],
    gallery: ['/works/Jestha.png', '/works/whiteLogo-j.png', '/works/jestha-m.png', '/works/j1.png', '/works/j2.png']
  },
  'nepalinest': {
    slug: 'nepalinest',
    title: 'NepaliNest',
    description: "Nepal's premier eCommerce platform offering diverse marketplace for new and used products.",
    image: '/works/nn/nn1.png',
    tags: ['Design', 'Development', 'E-commerce'],
    date: 'April 2021',
    client: 'NepaliNest',
    duration: '5 months',
    challenge: 'Building a comprehensive eCommerce platform that caters to both new and used products across extensive categories, providing seamless shopping experience for Nepalese consumers.',
    solution: 'We created a user-friendly marketplace with robust category selection, intuitive interface, and comprehensive product catalog that accommodates all preferences and budgets from electronics to collectibles.',
    results: [
      'Launched comprehensive multi-category marketplace',
      'Enabled both new and used product listings',
      'Created seamless shopping experience',
      'Became go-to eCommerce site for Nepalese consumers'
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'Payment Gateway', 'AWS'],
    gallery: ['/works/nn/nn1.png', '/works/nn/nn2.png', '/works/nn/nn3.png', '/works/nn/nn4.png']
  },
  'the-brilliant-canvas': {
    slug: 'the-brilliant-canvas',
    title: 'The Brilliant Canvas',
    description: 'Cutting-edge t-shirt design website with immersive 3D visualization using Three.js.',
    image: '/works/tbc/tbc1.png',
    tags: ['Design', '3D Design', 'E-commerce'],
    date: 'April 2022',
    client: 'The Brilliant Canvas',
    duration: '4 months',
    challenge: 'Creating a revolutionary t-shirt design experience that allows users to view and interact with custom designs in stunning 3D detail while maintaining high performance.',
    solution: 'We leveraged Three.js to build an immersive 3D design platform with state-of-the-art visualization, enabling customers to create, customize, and interact with t-shirt designs in real-time 3D.',
    results: [
      'Launched innovative 3D t-shirt design platform',
      'Integrated advanced Three.js visualization technology',
      'Created intuitive design interface with high-quality rendering',
      'Revolutionized custom t-shirt design experience'
    ],
    technologies: ['Three.js', 'React', 'Node.js', 'WebGL', 'Blender'],
    gallery: ['/works/tbc/tbc1.png', '/works/tbc/TBC2.png', '/works/tbc/tbc3.png', '/works/tbc/tbc4.png']
  },
  'chess': {
    slug: 'chess',
    title: 'Chess',
    description: 'Interactive chess platform with engaging gameplay and modern design.',
    image: '/chess/promo.mp4',
    tags: ['Game', 'Web App', 'Interactive'],
    date: 'January 2025',
    video: '/chess/promo.mp4',
    challenge: 'Creating an engaging and intuitive chess platform that appeals to both beginners and experienced players.',
    solution: 'Developed a modern chess platform with smooth animations, intuitive controls, and an engaging user experience.',
    results: [
      'Launched interactive chess platform',
      'Implemented smooth gameplay mechanics',
      'Created intuitive user interface',
      'Enhanced player engagement'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Chess Logic'],
    gallery: ['/chess/promo.mp4']
  }
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [project, setProject] = React.useState<Project | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setProject(projects[resolvedParams.slug] || null);
    });
  }, [params]);

  useEffect(() => {
    if (!project) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      // Simple fade in for sections
      const sections = document.querySelectorAll('.fade-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [project]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#ecf0f3]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Loading...</h1>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <CursorGlow />

      {/* Hero Section */}
      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Neumorphic Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="animate-fade-in-up mb-8">
            <SectionHeading
              title={project.title}
              subtitle={project.description}
            />
          </div>

          {/* Tags & Meta Info */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="neu px-5 py-2 rounded-full text-sm font-semibold text-orange-primary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              {project.client && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Client</p>
                  <p className="text-base font-semibold text-gray-800">{project.client}</p>
                </div>
              )}
              {project.duration && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-base font-semibold text-gray-800">{project.duration}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Year</p>
                <p className="text-base font-semibold text-gray-800">{project.date}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <section className="fade-section mb-12">
            <div className="neu rounded-3xl overflow-hidden">
              <div className="relative h-[500px] md:h-[700px] bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 md:p-12"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Video Section */}
          {project.video && (
            <section className="fade-section mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-8">
                See it in action
              </h2>

              <div className="neu rounded-3xl overflow-hidden">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8">
                  <video
                    className="w-full h-auto rounded-2xl"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </section>
          )}

          {/* Challenge & Solution */}
          <section className="fade-section mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.challenge && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">
                    The Challenge
                  </h2>
                  <div className="neu rounded-2xl p-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              )}
              {project.solution && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">
                    Our Solution
                  </h2>
                  <div className="neu rounded-2xl p-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <section className="fade-section mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-8">
                Results
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="neu rounded-2xl p-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-primary to-orange-glow flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 1 && (
            <section className="fade-section mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-8">
                Gallery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.slice(1).map((img, index) => (
                  <div key={index} className="neu rounded-2xl overflow-hidden">
                    <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={img}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <section className="fade-section mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-8">
                Technologies
              </h2>

              <div className="flex flex-wrap justify-center gap-3">
                {project.technologies.map((tech) => (
                  <div key={tech} className="neu px-6 py-3 rounded-xl">
                    <span className="text-base font-semibold text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="neu rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Start Your Project
              </Button>
              <Button variant="glass" href="/work">
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .fade-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
