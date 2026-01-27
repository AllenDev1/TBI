'use client';

export default function ChessHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/works/chess/promo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        {/* Subtle orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-orange-900/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up">
              <div className="space-y-4 md:space-y-6">
                {/* App Icon */}
                <div className="flex justify-center mb-4 md:mb-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl group hover:scale-105 transition-all duration-500 cursor-pointer shadow-2xl border border-white/20">
                    <img
                      src="/works/chess/icon.png"
                      alt="The Brilliant Chess Icon"
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl"
                    />
                  </div>
                </div>

                <div className="inline-block">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-orange-300 tracking-wide uppercase rounded-full shadow-lg">
                    Free & Open Source
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                  <span className="text-white inline-block animate-fade-in-up" style={{textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)'}}>
                    The Brilliant
                  </span>
                  <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent mt-2 md:mt-3 animate-fade-in-up relative" style={{animationDelay: '0.2s', filter: 'drop-shadow(0 4px 12px rgba(251,146,60,0.8)) drop-shadow(0 2px 6px rgba(251,146,60,0.6))'}}>
                    Chess
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed px-4 font-medium" style={{textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 1px 5px rgba(0,0,0,0.7)'}}>
                  Master the game with three exciting ways to play: Online multiplayer, Local pass-and-play, or Bluetooth connectivity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 sm:px-12 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span>Download Now</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="group bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 sm:px-12 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl text-white hover:scale-105 transition-all duration-300 shadow-2xl hover:bg-white/20 flex items-center justify-center gap-2"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#ecf0f3] pointer-events-none z-10" />
    </section>
  );
}
