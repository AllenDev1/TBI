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

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              // Bento-style varied sizes
              const isFeatured = index === 0;
              const isWide = index === 1;

              return (
                <Link
                  key={project.title}
                  href={`/work/${project.slug}`}
                  className={`group animate-fade-in-up ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' :
                    isWide ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`neu neu-hover rounded-3xl transition-all duration-700 hover:scale-[1.02] h-full ${
                    isFeatured ? 'min-h-[600px]' : 'min-h-[400px]'
                  }`}>
                    {/* Content Container */}
                    <div className="relative h-full flex flex-col p-8">
                      {/* Top Section - Number & Date */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Number Badge */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                            {(index + 1).toString().padStart(2, '0')}
                          </div>
                        </div>

                        {/* Date Badge */}
                        <div className="neu px-4 py-2 rounded-full">
                          <span className="text-xs font-semibold text-orange-600">{project.date}</span>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className={`relative flex-1 mb-6 rounded-2xl overflow-hidden ${
                        isFeatured ? 'min-h-[300px]' : 'min-h-[180px]'
                      }`}>
                        {/* Neumorphic Image Frame */}
                        <div className="neu-inset h-full w-full bg-gradient-to-br from-gray-50 to-white p-6 group-hover:neu transition-all duration-500">
                          <div className="relative h-full w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>

                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 via-transparent to-transparent group-hover:from-orange-500/10 transition-all duration-700 pointer-events-none"></div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className={`font-bold text-gray-800 leading-tight group-hover:text-gradient transition-all duration-300 ${
                          isFeatured ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'
                        }`}>
                          {project.title}
                        </h3>

                        <p className={`text-gray-600 leading-relaxed ${
                          isFeatured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <div
                            key={tag}
                            className="neu-inset px-3 py-1.5 rounded-full hover:neu transition-all duration-300"
                          >
                            <span className="text-xs font-semibold text-orange-600">{tag}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Arrow */}
                      <div className="mt-6 flex items-center justify-end">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
