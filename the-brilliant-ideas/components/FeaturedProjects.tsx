import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import Image from 'next/image';

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with real-time inventory and payment integration.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-400 to-blue-600',
      icon: '🛒'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      tech: ['React Native', 'Firebase', 'Node.js'],
      gradient: 'from-green-400 to-green-600',
      icon: '💰'
    },
    {
      title: 'Brand Identity System',
      category: 'Branding & Design',
      description: 'Complete brand identity including logo, guidelines, and marketing materials.',
      tech: ['Figma', 'Illustrator', 'Photoshop'],
      gradient: 'from-purple-400 to-purple-600',
      icon: '🎨'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Analytics dashboard with real-time data visualization and reporting features.',
      tech: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
      gradient: 'from-orange-400 to-orange-600',
      icon: '📊'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'Full-featured food delivery platform with live tracking and payment gateway.',
      tech: ['Flutter', 'Firebase', 'Google Maps API'],
      gradient: 'from-red-400 to-red-600',
      icon: '🍕'
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Multi-channel marketing campaign achieving 300% ROI with targeted ads.',
      tech: ['Google Ads', 'Facebook Ads', 'Analytics'],
      gradient: 'from-pink-400 to-pink-600',
      icon: '📈'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-up mb-16">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our recent work and see how we've helped businesses achieve their digital goals."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group neu rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with Icon */}
              <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-8xl opacity-20 transform rotate-12">
                  {project.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <div className="text-white/80 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 shadow-inner"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full py-3 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Button variant="primary" href="/work">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
