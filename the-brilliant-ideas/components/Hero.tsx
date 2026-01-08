import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Neomorphic Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-60"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-800">
              Creating
              <span className="block font-light text-gray-700">Better Digital</span>
              <span className="text-gradient block">Experiences</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
              We craft exceptional digital solutions that bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Button variant="primary" href="/services">What We Do</Button>
              <Button variant="glass" href="/work">View Works</Button>
            </div>
          </div>

          {/* Right Side - Visual Mockups */}
          <div className="relative h-[500px] lg:h-[600px] animate-fade-in-up animation-delay-300">
            {/* Browser Mockup */}
            <div className="absolute top-0 right-0 w-4/5 neu rounded-2xl overflow-hidden animate-float">
              <div className="bg-gray-200 p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="bg-white p-6 h-64 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-32 mx-auto"></div>
                    <div className="h-3 bg-gray-200 rounded w-24 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute bottom-0 left-0 w-2/5 neu rounded-3xl overflow-hidden animate-float animation-delay-200">
              <div className="bg-gray-900 p-3 h-80">
                <div className="bg-white rounded-2xl h-full p-4 flex flex-col gap-3">
                  <div className="h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg"></div>
                  <div className="flex-1 bg-gray-100 rounded-lg"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Color Palette Card */}
            <div className="absolute top-1/3 left-1/4 neu rounded-xl p-4 bg-white animate-float animation-delay-400">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded bg-orange-500"></div>
                <div className="w-8 h-8 rounded bg-orange-300"></div>
                <div className="w-8 h-8 rounded bg-gray-800"></div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="absolute bottom-1/4 right-1/4 neu rounded-xl p-4 bg-white animate-float animation-delay-600">
              <div className="space-y-2">
                <div className="flex items-end gap-1 h-12">
                  <div className="w-3 bg-orange-400 rounded-t" style={{height: '40%'}}></div>
                  <div className="w-3 bg-orange-500 rounded-t" style={{height: '70%'}}></div>
                  <div className="w-3 bg-orange-600 rounded-t" style={{height: '100%'}}></div>
                  <div className="w-3 bg-orange-400 rounded-t" style={{height: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
