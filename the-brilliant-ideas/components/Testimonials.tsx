'use client';

import React from 'react';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Manish Shrestha',
      role: 'Local Guide',
      company: 'Google Reviewer',
      image: '👨‍💼',
      rating: 5,
      text: 'Awesome people and developers to work with',
      highlight: 'Verified Google Review',
      verified: true,
      date: '12 weeks ago'
    },
    {
      name: 'Dipesh Karna',
      role: 'Local Guide',
      company: 'Google Reviewer',
      image: '👨‍💻',
      rating: 5,
      text: 'Talented and hardworking people who will get your job done before time',
      highlight: 'Delivered Early',
      verified: true,
      date: '1 Mar 2023'
    },
    {
      name: 'Febval Gifts',
      role: 'Business Owner',
      company: 'E-commerce Client',
      image: '🎁',
      rating: 5,
      text: 'Got my e-commerce website built form here. Very talented and exciting team with very good future.',
      highlight: 'E-commerce Success',
      verified: true,
      date: '1 Mar 2023'
    },
    {
      name: 'Rijard Khadka',
      role: 'Business Owner',
      company: 'IT Client',
      image: '👨‍💼',
      rating: 5,
      text: 'Best in job for every IT related issues and projects.',
      highlight: 'IT Expert',
      verified: true,
      date: '1 Mar 2023'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 md:px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative Neomorphic Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-50"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-30" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-up mb-10 sm:mb-12 md:mb-16 text-center">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real results from real businesses we've helped grow."
          />

          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white shadow-lg neu active:scale-95 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-xl sm:text-2xl font-bold text-gray-800">4.5</span>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <defs>
                      <clipPath id="half-star">
                        <rect x="0" y="0" width="10" height="20" />
                      </clipPath>
                    </defs>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipPath="url(#half-star)" />
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gray-50 neu transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >

                  {/* Quote Icon */}
                  <div className="absolute top-4 sm:top-5 right-4 sm:right-5 opacity-10 text-orange-500">
                    <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full neu flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base sm:text-lg text-gray-800 mb-0.5 sm:mb-1 truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 mb-2 truncate">
                          {testimonial.role}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          {testimonial.verified && (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 flex-1">
                      "{testimonial.text}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-200/50 mt-auto">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium neu-inset bg-white">
                        <span className="text-orange-600">✓</span>
                        <span className="truncate text-gray-700">{testimonial.highlight}</span>
                      </div>

                      {testimonial.date && (
                        <div className="text-xs text-gray-500 flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
                          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{testimonial.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <a
            href="https://share.google/kx53W2U28rIrSC59g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 sm:hover:scale-105 neu group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-medium text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
              <span className="hidden sm:inline">View all reviews on Google</span>
              <span className="sm:hidden">Google Reviews</span>
            </span>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
