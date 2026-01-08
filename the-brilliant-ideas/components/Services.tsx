import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Branding & Identity',
      description: 'Craft distinctive brand identities that capture your essence and resonate with your audience.',
    },
    {
      number: '02',
      title: 'Web Design',
      description: 'Beautiful, user-centric designs combining stunning aesthetics with intuitive functionality.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Robust, scalable solutions built with cutting-edge technologies and best practices.',
    },
    {
      number: '04',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      number: '05',
      title: 'Digital Strategy',
      description: 'Data-driven strategies aligned with your business goals for measurable results.',
    },
    {
      number: '06',
      title: 'Digital Marketing',
      description: 'Comprehensive marketing solutions to amplify your brand and drive conversions.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-up mb-16">
          <SectionHeading
            title="What We Do"
            subtitle="Comprehensive digital services to transform your business and elevate your brand."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group neu neu-hover rounded-3xl p-8 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Button variant="primary" href="/services">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
