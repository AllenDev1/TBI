'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

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
}

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

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
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

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
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
                  <div className="mb-6 p-4 rounded-lg neu-inset">
                    <p className="font-semibold text-heading">Thank you for reaching out!</p>
                    <p className="text-sm mt-1 text-body">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-heading">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all ${
                          errors.name ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-heading">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg neu-inset text-body bg-white focus:outline-none focus:ring-2 focus:ring-orange-primary transition-all ${
                          errors.email ? 'ring-2 ring-red-500' : ''
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    className={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
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
