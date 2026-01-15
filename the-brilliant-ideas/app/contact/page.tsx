'use client';

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import CursorGlow from '@/components/CursorGlow';

// Declare grecaptcha type
declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad?: () => void;
    onRecaptchaSuccess?: (token: string) => void;
  }
}

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  recaptcha?: string;
  general?: string;
}

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LctrgEsAAAAAKzHMJib7r8fgm7aSzWU2Bxx-lQp';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Render reCAPTCHA
  const renderRecaptcha = useCallback(() => {
    if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.render) {
      const container = document.getElementById('recaptcha-container');

      if (container && !container.hasChildNodes()) {
        try {
          const widgetId = window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: (token: string) => {
              setRecaptchaToken(token);
            },
            theme: 'light',
          });
          setRecaptchaWidgetId(widgetId);
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
        }
      }
    }
  }, []);

  // Load reCAPTCHA v2 script with explicit render
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Check if already loaded
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      return;
    }

    // Check if script exists
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    if (existingScript) {
      window.onRecaptchaLoad = renderRecaptcha;
      return;
    }

    // Load script
    window.onRecaptchaLoad = renderRecaptcha;
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    script.onerror = () => console.error('Failed to load reCAPTCHA script');
    document.head.appendChild(script);
  }, [renderRecaptcha]);

  // Reset reCAPTCHA after submission
  const resetRecaptcha = () => {
    if (typeof window !== 'undefined' && window.grecaptcha && recaptchaWidgetId !== null) {
      window.grecaptcha.reset(recaptchaWidgetId);
      setRecaptchaToken('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setErrors({ recaptcha: 'Please complete the reCAPTCHA verification' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Submit to backend API
      const response = await axios.post(`${API_BASE_URL}/tbi-contact`, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        serviceInterested: formData.service,
        projectBudget: formData.budget,
        message: formData.message,
        recaptchaToken,
      });

      if (response.data.success) {
        setIsSubmitted(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        });

        // Reset reCAPTCHA
        resetRecaptcha();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error: any) {
      console.error('Form submission error:', error);

      const errorMessage = error.response?.data?.message || 'Failed to send message. Please try again.';
      setErrors({ general: errorMessage });

      // Reset reCAPTCHA on error
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'info@thebrilliantideas.com',
      link: 'mailto:info@thebrilliantideas.com',
    },
    {
      title: 'Phone',
      value: '+977 9814767895',
      link: 'tel:+9779814767895',
    },
    {
      title: 'Biratnagar Office',
      value: 'Hattkhola, Milanchok',
    },
    {
      title: 'Kathmandu Office',
      value: 'Battishputtali, Rammandir Marga',
    },
  ];

  return (
    <>
      <Navbar />
      <CursorGlow />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-5 md:px-6 bg-gray-50 relative overflow-hidden">
        {/* Decorative Neomorphic Background Elements - Responsive sizing */}
        <div className="absolute top-10 sm:top-16 md:top-20 -right-20 sm:right-5 md:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none opacity-60"></div>
        <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 -left-20 sm:left-5 md:left-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none opacity-60"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 px-2">
              Let's Create Something{' '}
              <span className="text-gradient">Brilliant</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Have a project in mind? We'd love to hear about it. Get in touch and let's transform your vision into reality.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <a href="mailto:info@thebrilliantideas.com" className="neu rounded-2xl p-5 sm:p-6 hover:shadow-xl active:scale-95 transition-all duration-300 group bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full neu flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-800">Email Us</p>
                <p className="text-xs text-gray-500 mt-1">Quick response</p>
              </a>

              <a href="tel:+9779814767895" className="neu rounded-2xl p-5 sm:p-6 hover:shadow-xl active:scale-95 transition-all duration-300 group bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full neu flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-800">Call Us</p>
                <p className="text-xs text-gray-500 mt-1">Direct line</p>
              </a>

              <a href="#contact-form" className="neu rounded-2xl p-5 sm:p-6 hover:shadow-xl active:scale-95 transition-all duration-300 group bg-white scroll-smooth">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full neu flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-800">Fill Form</p>
                <p className="text-xs text-gray-500 mt-1">Detailed inquiry</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="contact-form" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 md:px-6 relative overflow-hidden bg-gray-50 scroll-mt-20">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Send Us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <div className="neu rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 bg-white shadow-xl">
                {isSubmitted && (
                  <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-sm animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-green-900 text-lg">Message Sent Successfully! ✓</p>
                        <p className="text-sm mt-1 text-green-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {errors.general && (
                  <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 shadow-sm animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-red-900 text-lg">Oops! Something went wrong</p>
                        <p className="text-sm mt-1 text-red-700">{errors.general}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Name */}
                    <div className="group">
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-800 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl neu-inset text-sm sm:text-base text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 ${
                          errors.name ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-2 flex items-center gap-1 animate-fade-in">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-800 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl neu-inset text-sm sm:text-base text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 ${
                          errors.email ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-2 flex items-center gap-1 animate-fade-in">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Company */}
                    <div className="group">
                      <label htmlFor="company" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-800 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl neu-inset text-sm sm:text-base text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Service */}
                    <div className="group">
                      <label htmlFor="service" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-800 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl neu-inset text-sm sm:text-base text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="software-development">Software Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="branding">Branding & Design</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="group">
                    <label htmlFor="budget" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-800 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl neu-inset text-sm sm:text-base text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 cursor-pointer"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under-5k">Under NPR 5 Lakh</option>
                      <option value="5k-10k">NPR 5-10 Lakh</option>
                      <option value="10k-25k">NPR 10-25 Lakh</option>
                      <option value="25k+">NPR 25 Lakh+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-800 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl neu-inset text-sm sm:text-base text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 resize-none ${
                        errors.message ? 'ring-2 ring-red-500' : ''
                      }`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1 animate-fade-in">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                    <div className="flex justify-center py-2 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                      <div id="recaptcha-container" className="transform sm:hover:scale-105 transition-transform duration-200 scale-[0.85] sm:scale-90 md:scale-100 origin-center" />
                    </div>
                    {errors.recaptcha && (
                      <div className="flex items-start sm:items-center justify-center gap-2 text-red-600 text-xs sm:text-sm bg-gradient-to-r from-red-50 to-rose-50 p-3 sm:p-3.5 rounded-xl border border-red-100 animate-fade-in">
                        <svg className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-left flex-1">{errors.recaptcha}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 sm:py-0">
                      <svg className="w-3.5 h-3.5 sm:w-3 sm:h-3 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-[10px] sm:text-xs text-center text-gray-500 leading-snug">
                        <span className="hidden sm:inline">Protected by reCAPTCHA to prevent spam</span>
                        <span className="sm:hidden">Protected by reCAPTCHA</span>
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3 sm:pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className={`w-full relative text-base sm:text-lg py-3.5 sm:py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl active:scale-[0.98] sm:hover:scale-[1.02]'} transition-all duration-300`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2 sm:gap-3">
                          <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending message...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send Message</span>
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Privacy Notice */}
                  <div className="pt-3 sm:pt-4 text-center">
                    <p className="text-xs text-gray-500 bg-gray-50 p-3 sm:p-4 rounded-xl leading-relaxed">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-orange-primary hover:underline font-medium">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="/terms" className="text-orange-primary hover:underline font-medium">Terms of Service</a>.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-slide-in-right">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="neu rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white hover:shadow-xl active:scale-[0.98] transition-all duration-300">
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 text-gray-800">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-sm sm:text-base text-gray-600 hover:text-orange-500 active:text-orange-600 transition-colors break-words">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="neu rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white hover:shadow-xl active:scale-[0.98] transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Office Hours</h3>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <p>Sunday - Friday: 10am - 6pm</p>
                    <p>Saturday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="neu rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white hover:shadow-xl active:scale-[0.98] transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Follow Us</h3>
                  <div className="flex gap-2.5 sm:gap-3">
                    <a
                      href="https://www.linkedin.com/company/the-brilliant-ideas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary active:scale-95 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a
                      href="https://www.instagram.com/the_brilliant_ideas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary active:scale-95 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61566978404584"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary active:scale-95 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-5 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Quick answers to common questions about working with us
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "What is your typical response time?",
                a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                q: "Do you work with international clients?",
                a: "Yes! We work with clients worldwide. We're experienced in remote collaboration and have successfully delivered projects across different time zones."
              },
              {
                q: "What is your project timeline?",
                a: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "What are your payment terms?",
                a: "We typically work with a 50% upfront payment and 50% upon completion. For larger projects, we can arrange milestone-based payments."
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Yes! We offer various maintenance and support packages to ensure your digital product continues to perform optimally. This includes updates, bug fixes, and feature enhancements."
              },
              {
                q: "Can you help with an existing project?",
                a: "Absolutely! We can take over existing projects, perform audits, fix bugs, add features, or provide consulting services to improve your current digital solutions."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="neu rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white group cursor-pointer hover:shadow-xl active:scale-[0.99] transition-all duration-300"
              >
                <summary className="flex items-center justify-between gap-3 font-semibold text-gray-900 text-sm sm:text-base md:text-lg cursor-pointer list-none">
                  <span className="pr-2">{faq.q}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      <div className="-mt-16 sm:-mt-24 md:-mt-32">
        <Footer />
      </div>
    </>
  );
}
