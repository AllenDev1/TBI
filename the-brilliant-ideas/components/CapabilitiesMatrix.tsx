import React from 'react';
import SectionHeading from './SectionHeading';

export default function CapabilitiesMatrix() {
  const capabilities = [
    {
      icon: '🌐',
      title: 'Web Solutions',
      items: [
        'Responsive Websites',
        'E-Commerce Platforms',
        'Progressive Web Apps',
        'CMS Development',
        'Web Portals',
        'API Development'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      items: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'App UI/UX Design',
        'App Maintenance',
        'App Store Optimization'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🎯',
      title: 'Branding',
      items: [
        'Logo Design',
        'Brand Identity',
        'Brand Guidelines',
        'Visual Design',
        'Print Materials',
        'Packaging Design'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      items: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns',
        'PPC Advertising',
        'Analytics & Reporting'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      items: [
        'Cloud Migration',
        'Server Management',
        'CI/CD Pipelines',
        'Container Orchestration',
        'Performance Monitoring',
        'Security & Compliance'
      ],
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: '🤖',
      title: 'Emerging Tech',
      items: [
        'AI Integration',
        'Machine Learning',
        'Blockchain Solutions',
        'IoT Applications',
        'AR/VR Experiences',
        'Chatbot Development'
      ],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const industries = [
    { name: 'E-Commerce', icon: '🛍️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Education', icon: '🎓' },
    { name: 'Finance', icon: '💰' },
    { name: 'Real Estate', icon: '🏢' },
    { name: 'Food & Beverage', icon: '🍔' },
    { name: 'Travel & Tourism', icon: '✈️' },
    { name: 'Entertainment', icon: '🎬' },
    { name: 'Logistics', icon: '🚚' },
    { name: 'Retail', icon: '🏪' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Non-Profit', icon: '❤️' }
  ];

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 blur-3xl opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-up mb-16">
          <SectionHeading
            title="What We Can Do For You"
            subtitle="Comprehensive digital solutions tailored to your business needs across all platforms."
          />
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group neu rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with Gradient */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${capability.color} text-white text-4xl mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                {capability.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {capability.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-3">
                {capability.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-600 animate-fade-in-up"
                    style={{ animationDelay: `${(index * 0.1) + (itemIndex * 0.05)}s` }}
                  >
                    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${capability.color} mt-2 flex-shrink-0`}></span>
                    <span className="group-hover:text-gray-800 transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative Gradient */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have experience working with clients across diverse industries, bringing specialized knowledge to every project.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="neu rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-default group animate-fade-in-up bg-white"
                style={{ animationDelay: `${0.9 + (index * 0.05)}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl neu bg-white">
            <span className="text-2xl">💡</span>
            <span className="text-gray-700 font-medium">
              Don't see your industry?
            </span>
            <a
              href="/contact"
              className="text-orange-600 font-bold hover:text-orange-700 transition-colors duration-300"
            >
              Let's talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
