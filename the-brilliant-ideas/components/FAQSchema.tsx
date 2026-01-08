import React from 'react';

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does The Brilliant Ideas offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Brilliant Ideas offers comprehensive digital services including web design and development, mobile app development, branding and identity design, UI/UX design, e-commerce solutions, digital marketing, and software development. We specialize in creating custom digital solutions for businesses in Nepal and beyond."
        }
      },
      {
        "@type": "Question",
        "name": "Where is The Brilliant Ideas located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Brilliant Ideas operates from two locations in Nepal: Biratnagar and Kathmandu. This allows us to serve clients across Nepal with local expertise and national reach."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does The Brilliant Ideas use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with modern technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, Flutter, React Native, and various CMS platforms. We choose the best technology stack based on your project requirements to ensure optimal performance, scalability, and maintainability."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to complete a web development project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while complex web applications or e-commerce platforms may take 8-16 weeks. We provide detailed timelines during the proposal phase and maintain transparent communication throughout the project."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after project completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 24/7 support and maintenance services to ensure your digital solutions continue to perform optimally. Our support packages include bug fixes, updates, security patches, performance monitoring, and technical assistance."
        }
      },
      {
        "@type": "Question",
        "name": "What makes The Brilliant Ideas different from other digital agencies in Nepal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine technical excellence with creative innovation, offering personalized solutions tailored to your business needs. Our team has extensive experience with cutting-edge technologies, we maintain 100% client satisfaction, and we're committed to delivering projects on time and within budget. We focus on building long-term partnerships rather than just completing projects."
        }
      },
      {
        "@type": "Question",
        "name": "Can The Brilliant Ideas help with branding and design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer comprehensive branding services including brand strategy, logo design, visual identity systems, brand guidelines, messaging, and all marketing collateral. Our design team creates cohesive brand experiences that resonate with your target audience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, while we're based in Nepal, we work with clients globally. We have experience collaborating with international teams and can adapt to different time zones, communication preferences, and project management styles."
        }
      },
      {
        "@type": "Question",
        "name": "What is your project process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process includes: 1) Discovery and strategy phase where we understand your goals, 2) Design phase with wireframes and mockups, 3) Development with regular updates, 4) Testing and quality assurance, 5) Launch and deployment, and 6) Ongoing support and optimization. We maintain transparent communication throughout."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with The Brilliant Ideas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is easy! Simply contact us through our website contact form, email us at info@thebrilliantideas.com, or reach out via our social media channels. We'll schedule a consultation to discuss your project requirements, goals, and budget, then provide a detailed proposal outlining our approach and timeline."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
