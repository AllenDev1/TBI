'use client';

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

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

      <main className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Neumorphic Background Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] animate-float pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="animate-fade-in-up">
            <SectionHeading
              title="Let's Talk"
              subtitle="Have a project in mind? We'd love to hear about it. Get in touch and let's create something brilliant together."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <GlassCard className="p-8 md:p-10">
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-heading flex items-center gap-2">
                        <svg className="w-4 h-4 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className={`w-full px-4 py-3 rounded-xl neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all ${
                          errors.name ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-heading flex items-center gap-2">
                        <svg className="w-4 h-4 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className={`w-full px-4 py-3 rounded-xl neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all ${
                          errors.email ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-heading">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-heading">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all"
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
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-heading">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all"
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
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-heading">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all resize-none ${
                        errors.message ? 'ring-2 ring-red-500' : ''
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <div id="recaptcha-container" className="transform hover:scale-105 transition-transform duration-200" />
                    </div>
                    {errors.recaptcha && (
                      <div className="flex items-center justify-center gap-2 text-red-600 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>{errors.recaptcha}</span>
                      </div>
                    )}
                    <p className="text-xs text-center text-gray-500">
                      Protected by reCAPTCHA to prevent spam
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className={`w-full relative ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending your message...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-center text-gray-500 -mt-2">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-orange-primary hover:underline">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="/terms" className="text-orange-primary hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </GlassCard>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-right">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <GlassCard hover={false}>
                    <h3 className="text-lg font-semibold mb-2 text-heading">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-body hover:text-orange-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-body">{info.value}</p>
                    )}
                  </GlassCard>
                </div>
              ))}

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <GlassCard hover={false}>
                  <h3 className="text-lg font-semibold mb-3 text-heading">Office Hours</h3>
                  <div className="space-y-2 text-sm text-body">
                    <p>Sunday - Friday: 10am - 6pm</p>
                    <p>Saturday: Closed</p>
                  </div>
                </GlassCard>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <GlassCard hover={false}>
                  <h3 className="text-lg font-semibold mb-3 text-heading">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/the-brilliant-ideas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a
                      href="https://www.instagram.com/the_brilliant_ideas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61566978404584"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg neu flex items-center justify-center text-gray-600 hover:text-orange-primary transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
