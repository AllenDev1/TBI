import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const services = [
    {
      title: 'Branding',
      description: 'Crafting memorable brand identities that resonate with your audience and stand out in the market.',
      icon: '🎨',
    },
    {
      title: 'Web Design',
      description: 'Beautiful, user-centric designs that combine aesthetics with functionality for exceptional experiences.',
      icon: '✨',
    },
    {
      title: 'Development',
      description: 'Robust, scalable solutions built with cutting-edge technologies and best practices.',
      icon: '⚡',
    },
    {
      title: 'Motion Design',
      description: 'Engaging animations and interactive experiences that bring your digital presence to life.',
      icon: '🎬',
    },
    {
      title: 'Strategy',
      description: 'Data-driven digital strategies that align with your business goals and drive measurable results.',
      icon: '🎯',
    },
    {
      title: 'Marketing',
      description: 'Comprehensive digital marketing solutions to amplify your brand and reach your target audience.',
      icon: '📈',
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
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 relative overflow-hidden">
          {/* Decorative Circle Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full animate-float bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]"></div>
            <div className="absolute bottom-32 right-20 w-80 h-80 rounded-full animate-float-delay bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full animate-pulse-slow bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full animate-float bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]"></div>
            <div className="absolute top-1/4 right-1/3 w-20 h-20 rounded-full animate-pulse-slow bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]"></div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gray-800 animate-fade-in-up">
              We Create
              <span className="text-gradient inline-block animate-gradient"> Brilliant </span>
              <br />
              Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              A premium creative agency crafting exceptional brands, websites, and digital strategies for forward-thinking companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Button variant="primary" href="/contact">
                Start Your Project
              </Button>
              <Button variant="glass" href="/work">
                View Our Work
              </Button>
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
              {services.map((service) => (
                <GlassCard key={service.title}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <SectionHeading
              title="Featured Work"
              subtitle="A showcase of recent projects that demonstrate our creative excellence and technical expertise."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" href="/work">
                View All Projects
              </Button>
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

        {/* Testimonials Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <SectionHeading
              title="Client Success Stories"
              subtitle="Don't just take our word for it—hear from the clients we've helped succeed."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="neu rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-heading">
                Ready to Create Something
                <span className="text-gradient"> Brilliant</span>?
              </h2>
              <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate to bring your vision to life. Get in touch and let&apos;s start building something amazing together.
              </p>
              <Button variant="primary" href="/contact" className="orange-glow">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
