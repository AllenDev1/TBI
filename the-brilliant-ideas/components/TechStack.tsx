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
    'lg:col-span-2 lg:row-span-2', // Frontend - large
    'lg:col-span-1', // Backend
    'lg:col-span-1', // Mobile
    'lg:col-span-2', // Cloud & DevOps - wide
    'lg:col-span-1', // Design & Tools
    'lg:col-span-1', // Database
    'lg:col-span-1', // CMS & E-commerce
    'lg:col-span-1', // Testing & Quality
  ];

  const gradients = [
    'from-blue-50 via-white to-cyan-50',
    'from-purple-50 via-white to-pink-50',
    'from-orange-50 via-white to-yellow-50',
    'from-green-50 via-white to-emerald-50',
    'from-pink-50 via-white to-rose-50',
    'from-indigo-50 via-white to-purple-50',
    'from-teal-50 via-white to-cyan-50',
    'from-red-50 via-white to-orange-50',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

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
              className={`${cardSizes[categoryIndex]} group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradients[categoryIndex]} p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl active:scale-[0.98] sm:hover:scale-[1.02] animate-fade-in-up border border-white/50`}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Decorative Corner Element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-xl">
                      <div className="w-5 h-5 bg-white rounded" style={{
                        maskImage: 'radial-gradient(circle, transparent 30%, black 30%)',
                        WebkitMaskImage: 'radial-gradient(circle, transparent 30%, black 30%)'
                      }}></div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {tech.category}
                  </h3>
                  <div className="ml-auto text-xs font-semibold text-gray-400 bg-white/60 px-3 py-1 rounded-full">
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
                        className="group/tech relative flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md active:scale-95 sm:hover:scale-105 transition-all duration-300 border border-gray-100/50"
                        style={{
                          animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.03)}s`
                        }}
                      >
                        {/* Icon with glow effect */}
                        <div className="relative flex-shrink-0">
                          <div
                            className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover/tech:opacity-60 transition-opacity duration-300"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <div className="relative group-hover/tech:rotate-12 transition-transform duration-300">
                            <Logo className="w-5 h-5" color={item.color} />
                          </div>
                        </div>

                        {/* Tech name */}
                        <span className="text-sm font-medium text-gray-700 group-hover/tech:text-gray-900 transition-colors whitespace-nowrap">
                          {item.name}
                        </span>

                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/tech:translate-x-[200%] transition-transform duration-700"></div>
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
            { value: '50+', label: 'Technologies', gradient: 'from-blue-500 to-cyan-500', icon: '⚡' },
            { value: '8', label: 'Categories', gradient: 'from-purple-500 to-pink-500', icon: '📦' },
            { value: '100%', label: 'Modern Stack', gradient: 'from-orange-500 to-red-500', icon: '🚀' },
            { value: '∞', label: 'Possibilities', gradient: 'from-green-500 to-emerald-500', icon: '✨' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group text-center p-6 rounded-2xl bg-white overflow-hidden hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
