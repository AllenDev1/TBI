'use client';

import { useState } from 'react';

const gameModes = [
  {
    title: "Online Multiplayer",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    description: "Play with anyone, anywhere in the world",
    features: [
      "Create or join rooms with simple codes",
      "Real-time move synchronization",
      "No account or registration required",
      "Automatic player color assignment",
      "Connection status indicators"
    ]
  },
  {
    title: "Local Mode",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
    description: "Two players on the same device",
    features: [
      "Pass-and-play style gameplay",
      "Perfect for face-to-face games",
      "No internet connection needed",
      "Instant game start",
      "Great for practice and teaching"
    ]
  },
  {
    title: "Bluetooth Mode",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
    description: "Peer-to-peer play with nearby players",
    features: [
      "Direct phone-to-phone connection",
      "No internet required",
      "Low latency gameplay",
      "Host or join games easily",
      "Privacy-focused local connection"
    ]
  }
];

export default function ChessGameModes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-white via-[#fafafa] to-white relative overflow-hidden">
      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ecf0f3] to-transparent pointer-events-none" />

      {/* Dramatic background with chess pattern */}
      <div className="absolute inset-0">
        {/* Large chess pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(45deg, #9a3412 25%, transparent 25%), linear-gradient(-45deg, #9a3412 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #9a3412 75%), linear-gradient(-45deg, transparent 75%, #9a3412 75%)`,
          backgroundSize: '120px 120px',
          backgroundPosition: '0 0, 0 60px, 60px -60px, -60px 0px'
        }} />

        {/* Dramatic gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] bg-orange-200/30 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-orange-100/30 rounded-full blur-[140px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-[100px]" />
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#ecf0f3] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - More dramatic */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 space-y-4 sm:space-y-6 md:space-y-8 px-4">
            <div className="inline-block neu px-4 py-2 sm:px-8 sm:py-3">
              <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Choose Your Arena
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.95] sm:leading-[0.9] tracking-tight">
              <span className="block text-gray-900 mb-2 sm:mb-3 md:mb-4">Three Ways to</span>
              <span className="block text-gradient text-[1.15em] sm:text-[1.2em] relative inline-block">
                Play Chess
                <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 right-0 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 blur-sm" />
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
              Master the board on <span className="text-gradient font-semibold">your terms</span>. Every mode, a different challenge.
            </p>
          </div>

          {/* Game Modes Grid - Dramatic neu cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4">
            {gameModes.map((mode, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Subtle outer glow on hover */}
                <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-br ${mode.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none`} />

                {/* Main card with neumorphic effect */}
                <div className={`relative neu p-6 sm:p-8 md:p-10 h-full flex flex-col transition-all duration-500 cursor-pointer ${
                  hoveredIndex === index ? 'scale-105 shadow-2xl' : ''
                }`}>
                  {/* Gradient accent bar - subtle */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${mode.gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Icon with neumorphic container */}
                  <div className="mb-6 sm:mb-8">
                    <div className="relative inline-block">
                      <div className={`neu p-3 sm:p-4 md:p-5 inline-block`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white bg-gradient-to-br ${mode.gradient} rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3`}>
                          {mode.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title with subtle effect */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight transition-colors duration-300">
                    {mode.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 sm:space-y-5 flex-grow">
                    <h4 className="text-[10px] sm:text-xs font-bold text-orange-600 uppercase tracking-[0.2em] sm:tracking-[0.25em] flex items-center gap-2">
                      <div className={`w-6 sm:w-8 h-[2px] bg-gradient-to-r ${mode.gradient}`} />
                      Features
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {mode.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2 sm:space-x-3 text-gray-700">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br ${mode.gradient} flex items-center justify-center`}>
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm sm:text-base leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
