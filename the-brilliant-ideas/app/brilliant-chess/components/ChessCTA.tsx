'use client';

export default function ChessCTA() {
  return (
    <section id="download" className="py-32 bg-[#ecf0f3] relative overflow-hidden">
      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Subtle chess pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(45deg, #9a3412 25%, transparent 25%), linear-gradient(-45deg, #9a3412 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #9a3412 75%), linear-gradient(-45deg, transparent 75%, #9a3412 75%)`,
        backgroundSize: '160px 160px',
        backgroundPosition: '0 0, 0 80px, 80px -80px, -80px 0px'
      }} />

      {/* Animated background */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-200 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] animate-pulse-slow animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="neu p-6 sm:p-10 md:p-16 lg:p-20 bg-gradient-to-br from-white to-gray-50/50">
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
              {/* Title */}
              <div className="space-y-4 sm:space-y-6">
                {/* App Icon */}
                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                  <div className="neu p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl group hover:scale-105 transition-transform duration-500">
                    <img
                      src="/works/chess/icon.png"
                      alt="The Brilliant Chess Icon"
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-xl sm:rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="inline-block neu px-4 py-2 sm:px-8 sm:py-3">
                  <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    Get The App
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight px-4">
                  <span className="text-gray-900">Ready to Play</span>
                  <span className="block text-gradient mt-1 sm:mt-2">
                    The Brilliant Chess?
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
                  Download the app and start playing chess with friends online, locally, or via Bluetooth!
                </p>
              </div>

              {/* Download Options */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-3xl mx-auto px-4">
                <div className="text-center flex-1">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 uppercase tracking-wide font-semibold">Available Soon On</div>
                  <div className="text-xl sm:text-2xl font-bold text-gradient">iOS & Android</div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-6 sm:pt-8 border-t border-gray-200 px-4">
                {/* Direct APK Download - Available Now */}
                <a
                  href="/works/chess/the-brilliant-chess.apk"
                  download
                  className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:scale-105 orange-glow"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs text-orange-100">Download APK</div>
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white">Android App</div>
                  </div>
                </a>

                <div className="relative">
                  <a
                    href="#"
                    className="group relative w-full sm:w-auto neu px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 opacity-60 cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-gray-600">Download on the</div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900">App Store</div>
                    </div>
                  </a>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg animate-pulse">
                    Coming Soon
                  </div>
                </div>

                <div className="relative">
                  <a
                    href="#"
                    className="group relative w-full sm:w-auto neu px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 opacity-60 cursor-not-allowed"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-gray-600">GET IT ON</div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Google Play</div>
                    </div>
                  </a>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg animate-pulse">
                    Coming Soon
                  </div>
                </div>
              </div>

              {/* Features highlight */}
              <div className="neu p-6 sm:p-8 md:p-10 max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50/50 border-t border-gray-100">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-8 text-center">What You'll Get</h3>
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl hover:bg-orange-50/50 transition-colors duration-300 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm sm:text-base text-gray-900 mb-1">Complete Chess Experience</div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">All rules, modes, and features</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl hover:bg-orange-50/50 transition-colors duration-300 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm sm:text-base text-gray-900 mb-1">Multiple Game Modes</div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">Online, Local, and Bluetooth play</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl hover:bg-orange-50/50 transition-colors duration-300 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm sm:text-base text-gray-900 mb-1">No Ads, No Subscriptions</div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">Completely free to play</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl hover:bg-orange-50/50 transition-colors duration-300 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm sm:text-base text-gray-900 mb-1">Regular Updates</div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">New features and improvements</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="neu p-3 sm:p-4 md:p-5 text-center bg-gradient-to-br from-white to-gray-50/50 hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-orange-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2">
                    Platform
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm md:text-base font-semibold">iOS &<br className="sm:hidden" /> Android</div>
                </div>
                <div className="neu p-3 sm:p-4 md:p-5 text-center bg-gradient-to-br from-white to-gray-50/50 hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-orange-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2">
                    License
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm md:text-base font-semibold">Open Source<br className="sm:hidden" /> (MIT)</div>
                </div>
                <div className="neu p-3 sm:p-4 md:p-5 text-center bg-gradient-to-br from-white to-gray-50/50 hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-orange-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2">
                    Price
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm md:text-base font-semibold">100%<br className="sm:hidden" /> Free</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Remove gap before footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
