export type Testimonial = {
  quote: string;
  name: string;
  /** Role, company, or place — e.g. "Founder, Acme" */
  role: string;
  /** Star rating out of 5 (from Google) */
  rating?: number;
  /** Optional square headshot in /public. Falls back to an initial. */
  avatar?: string;
  /** BCP-47 language tag when the quote isn't English (e.g. "ja") */
  lang?: string;
};

// Real Google reviews. The homepage features the first three (see page.tsx slice).
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Got my e-commerce website built here. A very talented and exciting team with a very good future.',
    name: 'Febval Gifts',
    role: 'E-commerce client',
    rating: 5,
  },
  {
    quote:
      'ネパールのこのチームと一緒に仕事ができて、とても良い経験でした。とてもプロフェッショナルで技術力が高く、コミュニケーションもスムーズでした。納期もきちんと守ってくれて、安心して任せられる開発チームです。おすすめします！',
    name: 'POSCOS',
    role: 'Client · Japan',
    rating: 4,
    lang: 'ja',
  },
  {
    quote: 'Talented and hardworking people who will get your job done before time.',
    name: 'Dipesh Karna',
    role: 'Local Guide, Google',
    rating: 5,
  },
  {
    quote: 'Awesome people and developers to work with.',
    name: 'Manish Shrestha',
    role: 'Local Guide, Google',
    rating: 5,
  },
  {
    quote: 'Best in job for every IT-related issue and project.',
    name: 'Rijard Khadka',
    role: 'Google review',
    rating: 5,
  },
];
