import React from 'react';
import Button from './Button';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Neomorphic Background Elements - Same as Hero */}
      <div className="absolute top-10 sm:top-20 -right-20 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-60"></div>
      <div className="absolute bottom-10 sm:bottom-20 -left-20 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-60"></div>

      <div className="container mx-auto relative z-10">
        <div className="neu rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden group">

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-inset mb-6 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></div>
              <span className="text-sm font-semibold text-orange-600">Let&apos;s Work Together</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-heading animate-fade-in-up animation-delay-100">
              Ready to Create Something
              <span className="text-gradient block md:inline"> Brilliant</span>?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-body mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-up animation-delay-200">
              Let&apos;s collaborate to bring your vision to life. Get in touch and let&apos;s start building something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
              <Button variant="primary" href="/contact">
                Let&apos;s Talk
              </Button>
              <Button variant="glass" href="/work">
                View Our Work
              </Button>
            </div>

            {/* Stats or Social Proof */}
            <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2 animate-fade-in-up animation-delay-400">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-1">∞</div>
                <div className="text-xs sm:text-sm text-gray-600">Creativity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
