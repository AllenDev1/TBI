import React from 'react';
import SectionHeading from './SectionHeading';
import * as TechLogos from './TechLogos';

export default function TechStack() {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', Logo: TechLogos.ReactLogo, color: '#61DAFB' },
        { name: 'Next.js', Logo: TechLogos.NextJsLogo, color: '#000000' },
        { name: 'Vue', Logo: TechLogos.VueLogo, color: '#4FC08D' },
        { name: 'Angular', Logo: TechLogos.AngularLogo, color: '#DD0031' },
        { name: 'TypeScript', Logo: TechLogos.TypeScriptLogo, color: '#3178C6' },
        { name: 'Tailwind', Logo: TechLogos.TailwindLogo, color: '#06B6D4' },
        { name: 'Svelte', Logo: TechLogos.SvelteLogo, color: '#FF3E00' },
        { name: 'Bootstrap', Logo: TechLogos.BootstrapLogo, color: '#7952B3' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', Logo: TechLogos.NodeJsLogo, color: '#339933' },
        { name: 'Python', Logo: TechLogos.PythonLogo, color: '#3776AB' },
        { name: 'PHP', Logo: TechLogos.PHPLogo, color: '#777BB4' },
        { name: 'Laravel', Logo: TechLogos.LaravelLogo, color: '#FF2D20' },
        { name: 'Java', Logo: TechLogos.JavaLogo, color: '#007396' },
        { name: 'Django', Logo: TechLogos.DjangoLogo, color: '#092E20' },
        { name: 'NestJS', Logo: TechLogos.NestJSLogo, color: '#E0234E' },
        { name: 'GraphQL', Logo: TechLogos.GraphQLLogo, color: '#E10098' },
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'React Native', Logo: TechLogos.ReactNativeLogo, color: '#61DAFB' },
        { name: 'Flutter', Logo: TechLogos.FlutterLogo, color: '#02569B' },
        { name: 'Swift', Logo: TechLogos.SwiftLogo, color: '#F05138' },
        { name: 'Kotlin', Logo: TechLogos.KotlinLogo, color: '#7F52FF' },
        { name: 'Android', Logo: TechLogos.AndroidLogo, color: '#3DDC84' },
        { name: 'iOS', Logo: TechLogos.iOSLogo, color: '#000000' },
        { name: 'Ionic', Logo: TechLogos.IonicLogo, color: '#3880FF' },
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', Logo: TechLogos.AWSLogo, color: '#FF9900' },
        { name: 'Azure', Logo: TechLogos.AzureLogo, color: '#0078D4' },
        { name: 'Docker', Logo: TechLogos.DockerLogo, color: '#2496ED' },
        { name: 'Kubernetes', Logo: TechLogos.KubernetesLogo, color: '#326CE5' },
        { name: 'Firebase', Logo: TechLogos.FirebaseLogo, color: '#FFCA28' },
        { name: 'Vercel', Logo: TechLogos.VercelLogo, color: '#000000' },
        { name: 'GitHub', Logo: TechLogos.GitHubLogo, color: '#181717' },
        { name: 'GitLab', Logo: TechLogos.GitLabLogo, color: '#FC6D26' },
      ]
    },
    {
      category: 'Design & Tools',
      items: [
        { name: 'Figma', Logo: TechLogos.FigmaLogo, color: '#F24E1E' },
        { name: 'Adobe XD', Logo: TechLogos.AdobeXDLogo, color: '#FF61F6' },
        { name: 'Photoshop', Logo: TechLogos.PhotoshopLogo, color: '#31A8FF' },
        { name: 'Illustrator', Logo: TechLogos.IllustratorLogo, color: '#FF9A00' },
        { name: 'Sketch', Logo: TechLogos.SketchLogo, color: '#F7B500' },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', Logo: TechLogos.MongoDBLogo, color: '#47A248' },
        { name: 'PostgreSQL', Logo: TechLogos.PostgreSQLLogo, color: '#4169E1' },
        { name: 'MySQL', Logo: TechLogos.MySQLLogo, color: '#4479A1' },
        { name: 'Redis', Logo: TechLogos.RedisLogo, color: '#DC382D' },
        { name: 'Supabase', Logo: TechLogos.SupabaseLogo, color: '#3ECF8E' },
        { name: 'Elasticsearch', Logo: TechLogos.ElasticsearchLogo, color: '#005571' },
        { name: 'SQLite', Logo: TechLogos.SQLiteLogo, color: '#003B57' },
      ]
    },
    {
      category: 'CMS & E-commerce',
      items: [
        { name: 'WordPress', Logo: TechLogos.WordPressLogo, color: '#21759B' },
        { name: 'Shopify', Logo: TechLogos.ShopifyLogo, color: '#7AB55C' },
        { name: 'WooCommerce', Logo: TechLogos.WooCommerceLogo, color: '#96588A' },
        { name: 'Strapi', Logo: TechLogos.StrapiLogo, color: '#2F2E8B' },
      ]
    },
    {
      category: 'Testing & Quality',
      items: [
        { name: 'Jest', Logo: TechLogos.JestLogo, color: '#C21325' },
        { name: 'Cypress', Logo: TechLogos.CypressLogo, color: '#17202C' },
        { name: 'Playwright', Logo: TechLogos.PlaywrightLogo, color: '#2EAD33' },
      ]
    }
  ];

  // Define card sizes for bento box layout
  const cardSizes = [
    'sm:col-span-2 lg:col-span-2', // Frontend - wide
    'sm:col-span-1 lg:col-span-1', // Backend
    'sm:col-span-1 lg:col-span-1', // Mobile
    'sm:col-span-2 lg:col-span-2', // Cloud & DevOps - wide
    'sm:col-span-1 lg:col-span-1', // Design & Tools
    'sm:col-span-1 lg:col-span-1', // Database
    'sm:col-span-2 lg:col-span-2', // CMS & E-commerce - full width
    'sm:col-span-2 lg:col-span-2', // Testing & Quality - full width
  ];

  const gradients = [
    'from-gray-50 via-white to-gray-50/50',
    'from-white via-gray-50 to-white',
    'from-gray-50 via-white to-gray-50/50',
    'from-white via-gray-50 to-white',
    'from-gray-50 via-white to-gray-50/50',
    'from-white via-gray-50 to-white',
    'from-gray-50 via-white to-gray-50/50',
    'from-white via-gray-50 to-white',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative Neomorphic Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-50"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-30" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="animate-fade-in-up mb-8 sm:mb-12 md:mb-16 text-center">
          <SectionHeading
            title="Powered by Modern Technology"
            subtitle="We leverage cutting-edge tools and frameworks to build scalable, performant solutions."
          />
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 auto-rows-auto">
          {technologies.map((tech, categoryIndex) => (
            <div
              key={tech.category}
              className={`${cardSizes[categoryIndex]} group relative rounded-3xl bg-gray-50 p-6 sm:p-8 transition-all duration-500 neu hover:shadow-xl active:scale-[0.98] animate-fade-in-up`}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 bg-white rounded" style={{
                      maskImage: 'radial-gradient(circle, transparent 30%, black 30%)',
                      WebkitMaskImage: 'radial-gradient(circle, transparent 30%, black 30%)'
                    }}></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {tech.category}
                  </h3>
                  <div className="ml-auto text-xs font-semibold text-gray-500 neu-inset px-3 py-1 rounded-full">
                    {tech.items.length}
                  </div>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => {
                    const { Logo } = item;
                    return (
                      <div
                        key={item.name}
                        className="group/tech flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] hover:shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] active:scale-95 transition-all duration-300"
                        style={{
                          animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.03)}s`
                        }}
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 group-hover/tech:scale-110 transition-transform duration-300">
                          <Logo className="w-5 h-5" color={item.color} />
                        </div>

                        {/* Tech name */}
                        <span className="text-sm font-medium text-gray-700 group-hover/tech:text-orange-600 transition-colors whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '50+', label: 'Technologies' },
            { value: '8', label: 'Categories' },
            { value: '100%', label: 'Modern Stack' },
            { value: '∞', label: 'Possibilities' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-gray-50 neu hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
