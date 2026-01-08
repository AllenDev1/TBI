import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  const services = [
    {
      title: 'Branding',
      description: 'Crafting memorable brand identities that resonate with your audience and stand out in the market.',
    },
    {
      title: 'Web Design',
      description: 'Beautiful, user-centric designs that combine aesthetics with functionality for exceptional experiences.',
    },
    {
      title: 'Development',
      description: 'Robust, scalable solutions built with cutting-edge technologies and best practices.',
    },
    {
      title: 'Motion Design',
      description: 'Engaging animations and interactive experiences that bring your digital presence to life.',
    },
    {
      title: 'Strategy',
      description: 'Data-driven digital strategies that align with your business goals and drive measurable results.',
    },
    {
      title: 'Marketing',
      description: 'Comprehensive digital marketing solutions to amplify your brand and reach your target audience.',
    },
  ];

  const featuredProjects = [
    {
      title: 'FinTech Revolution',
      description: 'Complete brand identity and web platform for a next-gen financial services company.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Branding', 'Web Design', 'Development'],
    },
    {
      title: 'EcoLife Wellness',
      description: 'E-commerce platform and brand strategy for sustainable wellness products.',
      image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800&q=80',
      tags: ['Strategy', 'Development', 'Marketing'],
    },
    {
      title: 'Urban Spaces',
      description: 'Digital experience for a modern real estate and architecture firm.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      tags: ['Web Design', 'Motion', 'Branding'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We dive deep into your brand, audience, and goals to understand what makes you unique.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our creative team crafts stunning designs that capture your vision and engage your audience.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'We bring designs to life with clean code, robust architecture, and seamless functionality.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We ensure a smooth launch and provide ongoing support to keep your digital presence thriving.',
    },
  ];

  const testimonials = [
    {
      quote: 'The Brilliant Ideas transformed our digital presence completely. Their creative approach and technical expertise exceeded all our expectations.',
      author: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
      quote: 'Working with this team was an absolute pleasure. They understood our vision and delivered a product that perfectly captures our brand essence.',
      author: 'Michael Chen',
      role: 'Founder',
      company: 'Urban Ventures',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
    {
      quote: 'Their strategic insights and creative execution helped us achieve a 300% increase in engagement. Simply brilliant!',
      author: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GreenLife Co',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    },
  ];

  const trustedLogos = [
    'TechFlow', 'UrbanVentures', 'GreenLife', 'NextGen', 'Innovate', 'FutureScale'
  ];

  return (
    <>
      <CursorGlow />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-4 md:px-6 lg:px-12 pt-24 pb-24 relative overflow-hidden">
          {/* Neomorphic Circle Elements - Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 w-96 h-96 rounded-full animate-float-delay bg-white shadow-[16px_16px_32px_#d1d9e6,-16px_-16px_32px_#ffffff] opacity-30"></div>
            <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full animate-pulse-slow bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] opacity-40"></div>
            <div className="absolute top-1/3 right-10 w-48 h-48 rounded-full animate-float bg-white shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] opacity-50"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-800">
                  Creating
                  <span className="block font-light text-gray-700">Better Digital</span>
                  <span className="text-gradient block">Experiences</span>
                </h1>

                <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                  We craft exceptional digital solutions that bring your vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
                  <Button variant="primary" href="/contact">
                    What We Do
                  </Button>
                  <Button variant="glass" href="/work">
                    View Works
                  </Button>
                </div>
              </div>

              {/* Right Side - Floating Visual Elements */}
              <div className="relative h-[500px] md:h-[600px] hidden lg:block">
                {/* Browser Window Mockup */}
                <div className="absolute top-0 left-10 w-72 xl:w-80 neu p-1 rounded-2xl animate-float">
                  <div className="bg-gray-100 rounded-t-xl px-3 py-2 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-white p-4 rounded-b-xl">
                    <div className="h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1.5"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6 mb-1.5"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>

                {/* Mobile Phone Mockup */}
                <div className="absolute top-20 right-20 w-28 neu p-2 rounded-[2rem] animate-float-delay z-10">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-16 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Color Palette Card */}
                <div className="absolute bottom-40 left-0 neu p-4 rounded-2xl w-48 animate-pulse-slow">
                  <div className="text-xs font-semibold text-gray-600 mb-2">Brand Colors</div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 shadow-md"></div>
                    <div className="w-10 h-10 rounded-lg bg-gray-800 shadow-md"></div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 shadow-md"></div>
                  </div>
                </div>

                {/* Analytics Card */}
                <div className="absolute bottom-0 right-10 w-56 neu p-4 rounded-2xl animate-float">
                  <div className="text-xs font-semibold text-gray-600 mb-2">Performance</div>
                  <div className="flex items-end gap-1.5 h-16">
                    <div className="w-full bg-gradient-to-t from-orange-400 to-orange-300 rounded-t" style={{height: '45%'}}></div>
                    <div className="w-full bg-gradient-to-t from-orange-400 to-orange-300 rounded-t" style={{height: '70%'}}></div>
                    <div className="w-full bg-gradient-to-t from-orange-400 to-orange-300 rounded-t" style={{height: '90%'}}></div>
                    <div className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t shadow-lg" style={{height: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Trusted By Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto">
            <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {trustedLogos.map((logo) => (
                <div key={logo} className="text-gray-400 hover:text-orange-primary transition-colors text-xl font-semibold">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <SectionHeading
              title="What We Do"
              subtitle="From strategy to execution, we deliver end-to-end digital solutions that drive results."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <GlassCard key={service.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <SectionHeading
              title="Our Process"
              subtitle="A proven methodology that ensures exceptional results, every time."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <GlassCard key={step.number}>
                  <div className="text-5xl font-bold text-gradient mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="neu rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
              {/* Decorative neomorphic circles */}
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gray-100 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] opacity-40"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gray-100 shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] opacity-30"></div>
              <div className="absolute top-1/4 -right-10 w-48 h-48 rounded-full bg-gray-100 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] opacity-50"></div>
              <div className="absolute bottom-1/3 -left-12 w-56 h-56 rounded-full bg-gray-100 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] opacity-35"></div>

              <div className="relative z-10">
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 mb-6">
                  <span className="text-sm font-semibold text-orange-600">Let&apos;s Work Together</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-heading leading-tight">
                  Ready to Create Something
                  <br />
                  <span className="text-gradient inline-block mt-2"> Brilliant</span>?
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s collaborate to bring your vision to life. Get in touch and let&apos;s start building something amazing together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="primary" href="/contact" className="orange-glow text-lg px-8 py-4">
                    Let&apos;s Talk
                  </Button>
                  <Button variant="glass" href="/work" className="text-lg px-8 py-4">
                    View Our Work
                  </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies worldwide</p>
                  <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
                    <span className="hover:text-orange-primary transition-colors">TechFlow</span>
                    <span className="hover:text-orange-primary transition-colors">UrbanVentures</span>
                    <span className="hover:text-orange-primary transition-colors">GreenLife</span>
                    <span className="hover:text-orange-primary transition-colors">NextGen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
