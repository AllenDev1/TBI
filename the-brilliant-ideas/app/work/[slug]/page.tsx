import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  client?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  gallery?: string[];
}

const projects: Record<string, Project> = {
  'pixeryhub': {
    slug: 'pixeryhub',
    title: 'PixeryHub',
    description: 'Inspiring pixels for inspired people - A comprehensive platform offering free 4K/HD wallpapers, live backgrounds, and essential digital tools for mobile and desktop users.',
    image: '/works/pixeryhub/image1.png',
    tags: ['Mobile App', 'Web App', 'Design Tools'],
    date: 'December 2024',
    client: 'Internal Project',
    duration: '4 months',
    challenge: 'Limited access to high-quality, inspiring digital backgrounds and the lack of a unified platform offering both premium wallpapers and complementary digital tools without registration barriers.',
    solution: 'Developed a cross-platform application featuring free unlimited downloads of 4K/HD wallpapers, animated/live wallpapers, and integrated digital tools including image/video compression and QR code generation. Implemented daily content updates across 12+ categories with dark/light mode support and one-click downloads.',
    results: [
      'Achieved 12,450+ app ratings with 4.8/5 average rating',
      'Daily wallpaper updates across 12+ categories',
      'One-click download with no registration required',
      'Successfully democratized access to premium digital aesthetics',
      'Integrated multiple complementary tools (compression, QR generator)'
    ],
    technologies: ['React Native', 'Node.js', 'Responsive Design', 'Cross-platform Development', 'Dark/Light Mode', 'Image Optimization'],
    gallery: ['/works/pixeryhub/image1.png', '/works/pixeryhub/image2.png', '/works/pixeryhub/image3.png', '/works/pixeryhub/image4.png']
  },
  'jestha': {
    slug: 'jestha',
    title: 'JESTHA',
    description: "Nepal's leading social media app designed to promote open dialogue and free expression.",
    image: '/works/Jestha.png',
    tags: ['Development', 'Mobile App', 'Social Media'],
    date: 'April 2023',
    client: 'Jestha',
    duration: '6 months',
    challenge: 'Creating a social media platform that balances free speech with responsible content moderation, while providing a vibrant space for users to connect and share diverse viewpoints.',
    solution: 'We built a dynamic social media app with age-appropriate content filters for users 18+, implementing thoughtful moderation tools that uphold free expression while maintaining a respectful and safe environment.',
    results: [
      "Launched Nepal's leading social media platform",
      'Implemented age-appropriate content filtering system',
      'Created platform for open dialogue and free expression',
      'Built dynamic and interactive online community'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'AWS'],
    gallery: ['/works/Jestha.png', '/works/whiteLogo-j.png', '/works/jestha-m.png', '/works/j1.png', '/works/j2.png']
  },
  'nepalinest': {
    slug: 'nepalinest',
    title: 'NepaliNest',
    description: "Nepal's premier eCommerce platform offering diverse marketplace for new and used products.",
    image: '/works/nn/nn1.png',
    tags: ['Design', 'Development', 'E-commerce'],
    date: 'April 2021',
    client: 'NepaliNest',
    duration: '5 months',
    challenge: 'Building a comprehensive eCommerce platform that caters to both new and used products across extensive categories, providing seamless shopping experience for Nepalese consumers.',
    solution: 'We created a user-friendly marketplace with robust category selection, intuitive interface, and comprehensive product catalog that accommodates all preferences and budgets from electronics to collectibles.',
    results: [
      'Launched comprehensive multi-category marketplace',
      'Enabled both new and used product listings',
      'Created seamless shopping experience',
      'Became go-to eCommerce site for Nepalese consumers'
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'Payment Gateway', 'AWS'],
    gallery: ['/works/nn/nn1.png', '/works/nn/nn2.png', '/works/nn/nn3.png', '/works/nn/nn4.png']
  },
  'the-brilliant-canvas': {
    slug: 'the-brilliant-canvas',
    title: 'The Brilliant Canvas',
    description: 'Cutting-edge t-shirt design website with immersive 3D visualization using Three.js.',
    image: '/works/tbc/tbc1.png',
    tags: ['Design', '3D Design', 'E-commerce'],
    date: 'April 2022',
    client: 'The Brilliant Canvas',
    duration: '4 months',
    challenge: 'Creating a revolutionary t-shirt design experience that allows users to view and interact with custom designs in stunning 3D detail while maintaining high performance.',
    solution: 'We leveraged Three.js to build an immersive 3D design platform with state-of-the-art visualization, enabling customers to create, customize, and interact with t-shirt designs in real-time 3D.',
    results: [
      'Launched innovative 3D t-shirt design platform',
      'Integrated advanced Three.js visualization technology',
      'Created intuitive design interface with high-quality rendering',
      'Revolutionized custom t-shirt design experience'
    ],
    technologies: ['Three.js', 'React', 'Node.js', 'WebGL', 'Blender'],
    gallery: ['/works/tbc/tbc1.png', '/works/tbc/TBC2.png', '/works/tbc/tbc3.png', '/works/tbc/tbc4.png']
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: 'Project Not Found - The Brilliant Ideas',
    };
  }

  return {
    title: `${project.title} - Case Study | The Brilliant Ideas`,
    description: project.description,
    keywords: [...project.tags, project.title, 'case study', 'portfolio', 'Nepal', 'digital agency'],
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.description,
      images: [project.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-heading">Project Not Found</h1>
            <p className="text-body mb-8">The project you're looking for doesn't exist.</p>
            <Button variant="primary" href="/work">Back to Work</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 animate-fade-in-up">
            <ol className="flex items-center gap-2 text-sm text-body">
              <li><Link href="/" className="hover:text-orange-primary transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/work" className="hover:text-orange-primary transition-colors">Work</Link></li>
              <li>/</li>
              <li className="text-heading font-medium">{project.title}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm font-medium rounded-xl text-orange-primary neu-inset">
                  {tag}
                </span>
              ))}
              <span className="text-sm text-muted">{project.date}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-heading">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-body leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="neu rounded-3xl overflow-hidden">
              <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {project.client && (
              <div className="neu p-6 rounded-2xl">
                <h3 className="text-sm font-semibold text-orange-primary uppercase tracking-wider mb-2">Client</h3>
                <p className="text-heading font-medium">{project.client}</p>
              </div>
            )}
            {project.duration && (
              <div className="neu p-6 rounded-2xl">
                <h3 className="text-sm font-semibold text-orange-primary uppercase tracking-wider mb-2">Duration</h3>
                <p className="text-heading font-medium">{project.duration}</p>
              </div>
            )}
            {project.technologies && (
              <div className="neu p-6 rounded-2xl">
                <h3 className="text-sm font-semibold text-orange-primary uppercase tracking-wider mb-2">Technologies</h3>
                <p className="text-heading font-medium">{project.technologies.slice(0, 2).join(', ')}</p>
              </div>
            )}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {project.challenge && (
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold mb-6 text-heading">The Challenge</h2>
                <div className="neu p-8 rounded-2xl">
                  <p className="text-body leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </div>
              </div>
            )}
            {project.solution && (
              <div className="animate-slide-in-right">
                <h2 className="text-3xl font-bold mb-6 text-heading">Our Solution</h2>
                <div className="neu p-8 rounded-2xl">
                  <p className="text-body leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="mb-20 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-heading text-center">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="neu p-6 rounded-2xl flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-body leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mb-20 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-heading text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.slice(1).map((img, index) => (
                  <div key={index} className="neu rounded-2xl overflow-hidden">
                    <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={img}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-20 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-heading text-center">Technologies Used</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {project.technologies.map((tech) => (
                  <div key={tech} className="neu px-6 py-4 rounded-xl">
                    <span className="text-heading font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="neu rounded-3xl p-12 md:p-16 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-body mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create something brilliant together. Get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Start Your Project
              </Button>
              <Button variant="glass" href="/work">
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
