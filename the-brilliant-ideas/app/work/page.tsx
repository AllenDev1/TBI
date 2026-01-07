import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkPage() {
  const projects = [
    {
      slug: 'pixeryhub',
      title: 'PixeryHub',
      description: 'Inspiring pixels for inspired people - A comprehensive platform offering free 4K/HD wallpapers, live backgrounds, and digital tools.',
      image: '/works/pixeryhub/image1.png',
      tags: ['Mobile App', 'Web App', 'Design Tools'],
      date: 'December 2024',
    },
    {
      slug: 'jestha',
      title: 'JESTHA',
      description: "Nepal's leading social media app designed to promote open dialogue and free expression.",
      image: '/works/Jestha.png',
      tags: ['Development', 'Mobile App'],
      date: 'April 2023',
    },
    {
      slug: 'nepalinest',
      title: 'NepaliNest',
      description: "Nepal's premier eCommerce platform offering diverse marketplace for new and used products.",
      image: '/works/nn/nn1.png',
      tags: ['Design', 'E-commerce'],
      date: 'April 2021',
    },
    {
      slug: 'the-brilliant-canvas',
      title: 'The Brilliant Canvas',
      description: 'Cutting-edge t-shirt design website with immersive 3D visualization using Three.js.',
      image: '/works/tbc/tbc1.png',
      tags: ['Design', '3D Design'],
      date: 'April 2022',
    },
  ];


  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Neumorphic Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="animate-fade-in-up mb-16">
            <SectionHeading
              title="Our Work"
              subtitle="Explore our portfolio of successful projects that showcase our creative excellence and technical expertise."
            />
          </div>

          {/* Projects Grid - Creative Layout */}
          <div className="space-y-12">
            {/* First Project - Large Featured */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href={`/work/${projects[0].slug}`} className="group block">
                <div className="neu rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-96 lg:h-[500px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={projects[0].image}
                        alt={projects[0].title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-sm text-orange-primary font-semibold">{projects[0].date}</span>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">
                        {projects[0].title}
                      </h2>
                      <p className="text-body text-lg mb-6 leading-relaxed">
                        {projects[0].description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {projects[0].tags.map((tag) => (
                          <span key={tag} className="px-4 py-2 text-sm font-medium rounded-xl text-orange-primary neu-inset">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Remaining Projects - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(1).map((project, index) => (
                <div
                  key={project.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Link href={`/work/${project.slug}`} className="group block h-full">
                    <div className="neu rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 h-full flex flex-col">
                      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                        />
                        <div className="absolute top-6 right-6">
                          <span className="px-4 py-2 rounded-xl neu text-xs font-semibold text-body backdrop-blur-sm">
                            {project.date}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-3xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-body mb-6 leading-relaxed flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-2 text-xs font-medium rounded-lg text-orange-primary neu-inset">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
