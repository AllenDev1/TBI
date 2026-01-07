import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

export default function ServicesPage() {
  const services = [
    {
      id: 'branding',
      title: 'Branding & Identity',
      description: 'We craft distinctive brand identities that capture the essence of your business and resonate with your target audience.',
      features: [
        'Brand Strategy & Positioning',
        'Logo Design & Visual Identity',
        'Brand Guidelines & Style Guides',
        'Brand Messaging & Voice',
        'Packaging Design',
        'Brand Collateral',
      ],
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Beautiful, user-centric designs that combine stunning aesthetics with intuitive functionality for exceptional digital experiences.',
      features: [
        'UI/UX Design',
        'Responsive Web Design',
        'Interactive Prototypes',
        'Design Systems',
        'User Research & Testing',
        'Wireframing & Mockups',
      ],
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Robust, scalable solutions built with cutting-edge technologies, best practices, and a focus on performance and security.',
      features: [
        'Custom Web Applications',
        'E-commerce Development',
        'CMS Integration',
        'API Development',
        'Progressive Web Apps',
        'Performance Optimization',
      ],
    },
    {
      id: 'motion',
      title: 'Motion Design',
      description: 'Engaging animations and interactive experiences that bring your digital presence to life and captivate your audience.',
      features: [
        'Animation & Motion Graphics',
        'Micro-interactions',
        'Video Production',
        'Interactive Experiences',
        'Motion Branding',
        '3D Visualization',
      ],
    },
    {
      id: 'strategy',
      title: 'Digital Strategy',
      description: 'Data-driven strategies that align with your business goals, ensuring measurable results and sustainable growth.',
      features: [
        'Digital Transformation',
        'Customer Journey Mapping',
        'Content Strategy',
        'Analytics & Insights',
        'Conversion Optimization',
        'Growth Strategy',
      ],
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Comprehensive marketing solutions designed to amplify your brand, reach your target audience, and drive conversions.',
      features: [
        'SEO & SEM',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Paid Advertising',
        'Marketing Automation',
      ],
    },
  ];

  const process = [
    {
      phase: 'Discovery',
      description: 'We start by understanding your business, goals, challenges, and target audience through comprehensive research and analysis.',
    },
    {
      phase: 'Strategy',
      description: 'Based on insights, we develop a tailored strategy that aligns with your objectives and positions you for success.',
    },
    {
      phase: 'Design',
      description: 'Our creative team brings the strategy to life with stunning designs that capture your brand essence and engage users.',
    },
    {
      phase: 'Development',
      description: 'We build robust, scalable solutions using the latest technologies and best practices in web development.',
    },
    {
      phase: 'Testing',
      description: 'Rigorous testing ensures everything works flawlessly across devices, browsers, and real-world scenarios.',
    },
    {
      phase: 'Launch',
      description: 'We ensure a smooth launch and provide ongoing support to keep your digital presence thriving and evolving.',
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
          {/* Header */}
          <div className="animate-fade-in-up">
            <SectionHeading
              title="Our Services"
              subtitle="End-to-end digital solutions tailored to your unique needs and business goals."
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <GlassCard
                key={service.id}
                className={`flex flex-col group hover:scale-105 transition-all duration-500 ${
                  index % 3 === 0 ? 'animate-slide-in-left' :
                  index % 3 === 1 ? 'animate-fade-in-scale' :
                  'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="relative mb-4">
                  <div className="absolute -top-4 -left-4 text-7xl font-bold text-orange-primary opacity-10 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-heading relative z-10 group-hover:text-orange-primary transition-colors duration-300" id={service.id}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-body mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-orange-primary uppercase tracking-wider">What We Offer</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-body group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${fIndex * 50}ms` }}
                      >
                        <span className="text-orange-primary mt-0.5 text-base">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Process Section */}
          <section className="mb-24">
            <SectionHeading
              title="How We Work"
              subtitle="Our proven process ensures exceptional results at every stage of your project."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div
                  key={step.phase}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <GlassCard className="group hover:scale-105 transition-all duration-500 h-full">
                    <div className="relative">
                      <div className="text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-heading group-hover:text-orange-primary transition-colors duration-300">{step.phase}</h3>
                    <p className="text-body text-sm leading-relaxed">{step.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-24">
            <SectionHeading
              title="Why Choose Us"
              subtitle="What sets us apart and makes us the right partner for your digital success."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard className="group hover:scale-105 transition-all duration-500 animate-slide-in-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl neu flex items-center justify-center text-orange-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    01
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Expert Team</h3>
                    <p className="text-body leading-relaxed">
                      Our multidisciplinary team brings together decades of combined experience in design, development, and digital strategy.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="group hover:scale-105 transition-all duration-500 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl neu flex items-center justify-center text-orange-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    02
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Proven Results</h3>
                    <p className="text-body leading-relaxed">
                      We've helped dozens of companies achieve their digital goals with measurable improvements in engagement and conversions.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="group hover:scale-105 transition-all duration-500 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl neu flex items-center justify-center text-orange-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    03
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Agile Approach</h3>
                    <p className="text-body leading-relaxed">
                      We work in iterative sprints, ensuring flexibility, transparency, and the ability to adapt to your evolving needs.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="group hover:scale-105 transition-all duration-500 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl neu flex items-center justify-center text-orange-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    04
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-orange-primary transition-colors duration-300">Long-term Partnership</h3>
                    <p className="text-body leading-relaxed">
                      We're not just vendors—we're partners invested in your long-term success with ongoing support and optimization.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* CTA */}
          <div className="neu rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your digital goals.
            </p>
            <Button variant="primary" href="/contact">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
