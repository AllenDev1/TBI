'use client';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Complete Chess Rules",
    description: "Full implementation of all chess rules including castling, en passant, pawn promotion, check, checkmate, and stalemate detection."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Real-time Sync",
    description: "Lightning-fast move synchronization across all game modes. Experience seamless gameplay whether online or via Bluetooth."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Optimized",
    description: "Built with React Native and Expo for smooth performance on both iOS and Android devices."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "No Account Required",
    description: "Jump straight into a game without signing up. Create or join rooms with simple room codes."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Move History",
    description: "Track every move with complete game history. Review your strategy and learn from each game."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Open Source",
    description: "Fully open-source and available on GitHub. Contribute, customize, or learn from the codebase."
  }
];

export default function ChessFeatures() {
  return (
    <section id="features" className="py-32 bg-[#ecf0f3] relative overflow-hidden">
      {/* Subtle chess pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(45deg, #9a3412 25%, transparent 25%), linear-gradient(-45deg, #9a3412 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #9a3412 75%), linear-gradient(-45deg, transparent 75%, #9a3412 75%)`,
        backgroundSize: '140px 140px',
        backgroundPosition: '0 0, 0 70px, 70px -70px, -70px 0px'
      }} />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] animate-float-delay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6 px-4">
            <div className="inline-block neu px-4 py-2 sm:px-8 sm:py-3">
              <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="text-gray-900">Powerful Features for</span>
              <span className="block text-gradient mt-1 sm:mt-2">
                Chess Enthusiasts
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Everything you need for an exceptional chess experience, whether you're playing casually or competitively.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group neu p-4 sm:p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/50 transition-all duration-500 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chess Rules Highlight */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 neu p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-white to-gray-50/50 mx-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-block neu px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6">
                  <span className="text-orange-600 font-bold text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                    Complete Implementation
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Every Chess Rule,<br />
                  <span className="text-gradient">Perfectly Implemented</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Experience authentic chess gameplay with every rule properly implemented and validated.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "All piece movements (Pawn, Knight, Bishop, Rook, Queen, King)",
                    "Castling (kingside and queenside)",
                    "En passant captures",
                    "Pawn promotion",
                    "Check and checkmate detection",
                    "Stalemate and draw conditions"
                  ].map((rule, i) => (
                    <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="neu-inset p-4 sm:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-orange-600 font-semibold">Valid Moves Highlighted</span>
                  </div>
                  <div className="grid grid-cols-8 gap-0.5 sm:gap-1 rounded-lg overflow-hidden">
                    {Array.from({ length: 64 }).map((_, i) => {
                      const row = Math.floor(i / 8);
                      const col = i % 8;
                      const isLight = (row + col) % 2 === 0;
                      const isHighlighted = [18, 26, 34].includes(i); // Sample highlighted squares

                      return (
                        <div
                          key={i}
                          className={`aspect-square flex items-center justify-center text-sm sm:text-base md:text-lg ${
                            isLight ? 'bg-orange-100' : 'bg-orange-800'
                          } ${isHighlighted ? 'ring-1 sm:ring-2 ring-green-500 bg-green-400/30' : ''} transition-all`}
                        >
                          {i === 10 && '♘'}
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-600">
                    Tap a piece to see valid moves
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots - Enhanced */}
          <div className="mt-16 sm:mt-24 md:mt-32 relative px-4">
            {/* Background decoration */}
            <div className="absolute inset-0 -top-20 opacity-30">
              <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-300 rounded-full blur-[120px] animate-pulse-slow" />
              <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-200 rounded-full blur-[120px] animate-pulse-slow animation-delay-400" />
            </div>

            <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6 relative z-10">
              <div className="inline-block neu px-4 py-2 sm:px-8 sm:py-3">
                <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                  See It In Action
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Experience the App
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto px-4">
                Beautiful design meets <span className="text-gradient font-semibold">powerful functionality</span>
              </p>
            </div>

            {/* Mobile mockups with dramatic 3D effect */}
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-8 sm:gap-4 md:gap-8 lg:gap-12">
                {[
                  { num: 1, title: 'Clean Interface', desc: 'Intuitive chess board' },
                  { num: 2, title: 'Game Modes', desc: 'Choose your style' },
                  { num: 3, title: 'Live Gameplay', desc: 'Real-time action' }
                ].map((screen, idx) => (
                  <div
                    key={screen.num}
                    className={`group relative transition-all duration-700 hover:scale-110 ${
                      idx === 1 ? 'sm:scale-110 z-20' : 'sm:scale-90 z-10 sm:opacity-80 hover:opacity-100'
                    }`}
                    style={{
                      transform: idx === 0
                        ? 'perspective(1000px) rotateY(0deg) sm:rotateY(12deg) translateY(0px) sm:translateY(20px)'
                        : idx === 2
                        ? 'perspective(1000px) rotateY(0deg) sm:rotateY(-12deg) translateY(0px) sm:translateY(20px)'
                        : 'perspective(1000px) rotateY(0deg)',
                      transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700 rounded-[3rem]" />

                    {/* Mobile frame */}
                    <div className="relative p-1.5 sm:p-2 rounded-[2.5rem] sm:rounded-[3rem] bg-black shadow-2xl group-hover:shadow-orange-500/30">
                      {/* Screen */}
                      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-black">
                        <div className="relative aspect-[9/19.5] w-40 sm:w-32 md:w-40 lg:w-48 xl:w-56">
                          <img
                            src={`/works/chess/${screen.num}.png`}
                            alt={
                              screen.num === 1
                                ? "The Brilliant Chess gameplay screenshot showing clean chess board interface with piece positions"
                                : screen.num === 2
                                ? "The Brilliant Chess game mode selection screen with Online, Local, and Bluetooth options"
                                : "The Brilliant Chess live gameplay screenshot showing real-time move synchronization"
                            }
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            loading="lazy"
                            decoding="async"
                          />

                          {/* Overlay gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Info badge on hover */}
                          <div className="hidden sm:block absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl">
                              <div className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5">{screen.title}</div>
                              <div className="text-gray-600 text-[10px] sm:text-xs">{screen.desc}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Side buttons - hidden on mobile */}
                      <div className="hidden sm:block absolute -right-0.5 top-20 md:top-24 w-0.5 sm:w-1 h-8 sm:h-12 bg-gray-900 rounded-l-sm"></div>
                      <div className="hidden sm:block absolute -right-0.5 top-32 md:top-40 w-0.5 sm:w-1 h-12 sm:h-16 bg-gray-900 rounded-l-sm"></div>
                      <div className="hidden sm:block absolute -left-0.5 top-28 md:top-32 w-0.5 sm:w-1 h-6 sm:h-8 bg-gray-900 rounded-r-sm"></div>
                    </div>

                    {/* Caption below */}
                    <div className="mt-4 sm:mt-6 text-center">
                      <div className="font-semibold text-sm sm:text-base text-gray-900">{screen.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{screen.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
