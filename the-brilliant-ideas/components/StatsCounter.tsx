'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Completed',
      icon: '🚀',
      color: 'from-blue-400 to-blue-600'
    },
    {
      value: 100,
      suffix: '+',
      label: 'Happy Clients',
      icon: '😊',
      color: 'from-green-400 to-green-600'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Team Members',
      icon: '👥',
      color: 'from-purple-400 to-purple-600'
    },
    {
      value: 5,
      suffix: '+',
      label: 'Years Experience',
      icon: '⭐',
      color: 'from-orange-400 to-orange-600'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: '💯',
      color: 'from-pink-400 to-pink-600'
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      icon: '⚡',
      color: 'from-red-400 to-red-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-6 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow animation-delay-300"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Delivering Excellence
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that speak for our commitment to quality and client satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-gray-300 font-medium text-lg">
                  {stat.label}
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-2xl">🏆</span>
            <span className="text-white font-medium">Trusted by businesses across Nepal and beyond</span>
          </div>
        </div>
      </div>
    </section>
  );
}
