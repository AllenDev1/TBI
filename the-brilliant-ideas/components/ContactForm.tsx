'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => number;
      reset: (id?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

const SERVICE_OPTIONS = [
  'Web Design & Development',
  'Mobile App Development',
  'Branding & Identity',
  'UI/UX Design',
  'Digital Marketing & SEO',
  'Custom Software',
  'Something Else',
];

const BUDGET_OPTIONS = [
  'Under NPR 50,000',
  'NPR 50,000 – 1,50,000',
  'NPR 1,50,000 – 5,00,000',
  'Above NPR 5,00,000',
  'Let’s discuss',
];

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const EMPTY: FormData = { name: '', email: '', company: '', service: '', budget: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const renderRecaptcha = useCallback(() => {
    if (!recaptchaRef.current || !window.grecaptcha?.render || widgetIdRef.current !== null) return;
    try {
      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token: string) => {
          setRecaptchaToken(token);
          setErrors((prev) => ({ ...prev, recaptcha: '' }));
        },
        'expired-callback': () => setRecaptchaToken(''),
      });
    } catch {
      // widget already rendered
    }
  }, []);

  useEffect(() => {
    if (window.grecaptcha?.render) {
      renderRecaptcha();
      return;
    }
    window.onRecaptchaLoad = renderRecaptcha;
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [renderRecaptcha]);

  const resetRecaptcha = () => {
    if (window.grecaptcha && widgetIdRef.current !== null) {
      window.grecaptcha.reset(widgetIdRef.current);
      setRecaptchaToken('');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Please tell us your name.';
    if (!formData.email.trim()) next.email = 'We need an email to reply to.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'That email doesn’t look right.';
    if (!formData.message.trim()) next.message = 'Tell us a little about your idea.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!recaptchaToken) {
      setErrors({ recaptcha: 'Please complete the reCAPTCHA verification.' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    try {
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
        setFormData(EMPTY);
        resetRecaptcha();
      }
    } catch (error) {
      const message =
        (axios.isAxiosError(error) && error.response?.data?.message) ||
        'Failed to send message. Please try again or email us directly.';
      setErrors({ general: message });
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-forest-faint p-10 text-center">
        <Image
          src="/image-story/glass-lotus.webp"
          alt=""
          width={1024}
          height={1536}
          sizes="180px"
          className="mx-auto h-36 w-auto animate-float motion-reduce:animate-none"
        />
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Message received!</h3>
        <p className="mx-auto mt-2 max-w-sm text-ink-soft">
          Your story has begun. We&rsquo;ll get back to you within one business day.
        </p>
        <button type="button" onClick={() => setIsSubmitted(false)} className="btn-outline mt-6">
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink-faint focus:border-sunrise focus:outline-none focus:ring-2 focus:ring-sunrise/20 transition-all';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tenzing Norgay"
          />
          {errors.name && <p className="mt-1.5 text-sm text-laligurans">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-laligurans">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-ink">
          Company / Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
          placeholder="Optional"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink">
            Service You Need
          </label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass}>
            <option value="">Choose a trail…</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-ink">
            Project Budget
          </label>
          <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
            <option value="">Choose a range…</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Tell Us Your Idea *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Every great story starts with a few words. What are you dreaming of building?"
        />
        {errors.message && <p className="mt-1.5 text-sm text-laligurans">{errors.message}</p>}
      </div>

      <div>
        {/* reCAPTCHA renders a fixed 304px-wide iframe. A bare transform:scale
            shrinks it visually but still reserves the original 304px in layout,
            which overflows the card and forces horizontal page scroll on narrow
            phones. So the wrapper is sized to the SCALED width and clips the
            reserved leftover — keeping the widget inside the viewport at every
            width, with no sideways scroll. */}
        <div className="w-[304px] max-w-full overflow-hidden h-[78px] max-[440px]:h-[72px] max-[390px]:h-[67px] max-[350px]:h-[57px] max-[440px]:w-[280px] max-[390px]:w-[259px] max-[350px]:w-[219px]">
          <div
            ref={recaptchaRef}
            className="origin-top-left max-[440px]:scale-[0.92] max-[390px]:scale-[0.85] max-[350px]:scale-[0.72]"
          />
        </div>
        {errors.recaptcha && <p className="mt-1.5 text-sm text-laligurans">{errors.recaptcha}</p>}
      </div>

      {errors.general && (
        <div className="rounded-xl bg-laligurans-faint px-4 py-3 text-sm font-medium text-laligurans-deep">
          {errors.general}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
        {isSubmitting ? 'Sending…' : 'Send Message'}
        {!isSubmitting && (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    </form>
  );
}
