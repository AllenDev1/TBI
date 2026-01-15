import React from 'react';
import SectionHeading from './SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import * as ProcessIcons from './ProcessIcons';

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'We dive deep into your business goals, target audience, and market landscape to build a solid foundation.',
      Icon: ProcessIcons.SearchIcon,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      details: ['Stakeholder interviews', 'Market analysis', 'Competitor research', 'Requirements gathering'],
      link: '/process/discovery'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Creating a comprehensive roadmap with clear milestones, timelines, and deliverables.',
      Icon: ProcessIcons.PlanningIcon,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      details: ['Project roadmap', 'Technology selection', 'Resource allocation', 'Timeline planning'],
      link: '/process/strategy'
    },
    {
      number: '03',
      title: 'Design & Prototype',
      description: 'Crafting intuitive user experiences and stunning visual designs that align with your brand.',
      Icon: ProcessIcons.DesignIcon,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      details: ['Wireframing', 'UI/UX design', 'Interactive prototypes', 'Design system'],
      link: '/process/design'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.',
      Icon: ProcessIcons.DevelopmentIcon,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      details: ['Agile development', 'Code reviews', 'Quality assurance', 'Performance optimization'],
      link: '/process/development'
    },
    {
      number: '05',
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure flawless functionality.',
      Icon: ProcessIcons.TestingIcon,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      details: ['Functional testing', 'Cross-browser testing', 'Security audits', 'Performance testing'],
      link: '/process/testing'
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing support to ensure your success in the digital space.',
      Icon: ProcessIcons.LaunchIcon,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      details: ['Deployment', 'Training & documentation', 'Performance monitoring', '24/7 support'],
      link: '/process/launch'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative Neomorphic Background Elements */}
      <div className="absolute top-10 sm:top-16 md:top-20 -right-20 sm:right-5 md:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 -left-20 sm:left-5 md:left-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 -right-20 sm:right-10 md:right-20 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-30"></div>
      <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 -left-20 sm:left-5 md:left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-40"></div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-up mb-12 md:mb-16">
          <SectionHeading
            title="Our Process"
            subtitle="A proven methodology that delivers exceptional results every time."
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Mobile/Tablet */}
          <div className="lg:hidden absolute left-6 md:left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full"></div>

          {/* Center Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-6 md:space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch lg:items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number Circle and Connector - Mobile/Tablet */}
                <div className="lg:hidden absolute left-0 top-8 flex items-center z-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl ring-4 ring-white">
                    <span className="text-white font-bold text-lg md:text-xl">{step.number}</span>
                  </div>
                  {/* Horizontal connector line */}
                  <div className="w-4 md:w-6 h-0.5 bg-orange-400"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 pl-16 md:pl-24 lg:pl-0 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                  <Link href={step.link} className="block">
                    <div className="neu rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all duration-500 group bg-white h-full overflow-hidden cursor-pointer">
                      {/* Image Section - Full Width on Mobile */}
                      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>

                        {/* Icon Badge on Image - Mobile/Tablet */}
                        <div className="lg:hidden absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <step.Icon className="w-7 h-7" color="#F97316" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 sm:p-6 md:p-8 flex flex-col">
                        {/* Title with Icon - Desktop */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 items-center justify-center">
                            <step.Icon className="w-7 h-7" color="#F97316" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-all duration-300">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-2">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                            >
                              <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                              <span className="leading-tight">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
              </div>

                {/* Center Icon - Desktop Only */}
                <div className="hidden lg:flex w-2/12 justify-center relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg ring-8 ring-gray-50 hover:scale-125 transition-all duration-500">
                    <step.Icon className="w-10 h-10" color="#FFFFFF" />
                  </div>
                </div>

                {/* Spacer - Desktop Only */}
                <div className={`hidden lg:block w-5/12 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  {/* Empty space for alternating layout */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20 lg:mt-24 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12">
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Let's discuss your project and see how we can bring your vision to life.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
