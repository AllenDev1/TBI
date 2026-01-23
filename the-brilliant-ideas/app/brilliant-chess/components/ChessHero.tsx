'use client';

export default function ChessHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white via-[#fafafa] to-white">
      {/* Chess Board Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #9a3412 25%, transparent 25%),
            linear-gradient(-45deg, #9a3412 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #9a3412 75%),
            linear-gradient(-45deg, transparent 75%, #9a3412 75%)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px'
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] animate-float-delay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up">
              <div className="space-y-4 md:space-y-6">
                {/* App Icon */}
                <div className="flex justify-center lg:justify-start mb-4 md:mb-8">
                  <div className="neu p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl group hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl">
                    <img
                      src="/works/chess/icon.png"
                      alt="The Brilliant Chess Icon"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl"
                    />
                  </div>
                </div>

                <div className="inline-block">
                  <span className="neu px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-orange-600 tracking-wide uppercase">
                    Free & Open Source
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="text-gray-900">The Brilliant</span>
                  <span className="block text-gradient mt-1 md:mt-2">
                    Chess
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                  Master the game with three exciting ways to play: Online multiplayer, Local pass-and-play, or Bluetooth connectivity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Download Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>

                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group neu px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-gray-700 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            {/* Right Column - Chess Board Visual */}
            <div className="relative animate-fade-in-up animation-delay-200 mt-8 lg:mt-0">
              <div className="relative aspect-square max-w-sm sm:max-w-md md:max-w-lg mx-auto px-4 sm:px-0">
                {/* Glow effect behind board */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-600/30 blur-3xl scale-110 animate-pulse-slow" />

                {/* Chess board mockup */}
                <div className="relative neu p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50/50 shadow-2xl">
                  {/* Board coordinates */}
                  <div className="relative">
                    {/* Top file labels (a-h) */}
                    <div className="grid grid-cols-8 mb-1 sm:mb-2 px-3 sm:px-5 md:px-7">
                      {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((file) => (
                        <div key={file} className="text-center text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700">
                          {file}
                        </div>
                      ))}
                    </div>

                    <div className="flex">
                      {/* Left rank labels (8-1) */}
                      <div className="flex flex-col justify-around pr-1 sm:pr-2">
                        {[8, 7, 6, 5, 4, 3, 2, 1].map((rank) => (
                          <div key={rank} className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700 h-full flex items-center">
                            {rank}
                          </div>
                        ))}
                      </div>

                      {/* Chess board */}
                      <div className="grid grid-cols-8 gap-0 aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex-1 ring-2 sm:ring-4 ring-orange-100">
                        {Array.from({ length: 64 }).map((_, i) => {
                          const row = Math.floor(i / 8);
                          const col = i % 8;
                          const isLight = (row + col) % 2 === 0;

                          return (
                            <div
                              key={i}
                              className={`aspect-square ${
                                isLight ? 'bg-orange-100' : 'bg-orange-800'
                              } flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-transform hover:scale-110 cursor-pointer`}
                            >
                              {/* Complete chess board setup */}
                              {/* Black pieces - row 0 */}
                              {i === 0 && <span className="text-gray-900">♜</span>}
                              {i === 1 && <span className="text-gray-900">♞</span>}
                              {i === 2 && <span className="text-gray-900">♝</span>}
                              {i === 3 && <span className="text-gray-900">♛</span>}
                              {i === 4 && <span className="text-gray-900">♚</span>}
                              {i === 5 && <span className="text-gray-900">♝</span>}
                              {i === 6 && <span className="text-gray-900">♞</span>}
                              {i === 7 && <span className="text-gray-900">♜</span>}

                              {/* Black pawns - row 1 */}
                              {i >= 8 && i <= 15 && <span className="text-gray-900">♟</span>}

                              {/* White pawns - row 6 */}
                              {i >= 48 && i <= 55 && <span className="text-white drop-shadow-md">♙</span>}

                              {/* White pieces - row 7 */}
                              {i === 56 && <span className="text-white drop-shadow-md">♖</span>}
                              {i === 57 && <span className="text-white drop-shadow-md">♘</span>}
                              {i === 58 && <span className="text-white drop-shadow-md">♗</span>}
                              {i === 59 && <span className="text-white drop-shadow-md">♕</span>}
                              {i === 60 && <span className="text-white drop-shadow-md">♔</span>}
                              {i === 61 && <span className="text-white drop-shadow-md">♗</span>}
                              {i === 62 && <span className="text-white drop-shadow-md">♘</span>}
                              {i === 63 && <span className="text-white drop-shadow-md">♖</span>}
                            </div>
                          );
                        })}
                      </div>

                      {/* Right rank labels (8-1) */}
                      <div className="flex flex-col justify-around pl-1 sm:pl-2">
                        {[8, 7, 6, 5, 4, 3, 2, 1].map((rank) => (
                          <div key={`r-${rank}`} className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700 h-full flex items-center">
                            {rank}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom file labels (a-h) */}
                    <div className="grid grid-cols-8 mt-1 sm:mt-2 px-3 sm:px-5 md:px-7">
                      {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((file) => (
                        <div key={`b-${file}`} className="text-center text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700">
                          {file}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating mode badges - Enhanced */}
                <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 neu px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-green-600 animate-bounce-slow shadow-lg group hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
                <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 neu px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-blue-600 animate-pulse-slow shadow-lg group hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                    </svg>
                    Bluetooth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-down">
        <svg className="w-6 h-6 text-orange-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#ecf0f3] pointer-events-none" />
    </section>
  );
}
