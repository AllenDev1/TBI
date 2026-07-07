export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  /** Cover image shown on the work listing. Replace with fresh screenshots later. */
  image: string;
  /** Detail-page gallery. Add new screenshots here as they are ready. */
  gallery: string[];
  tags: string[];
  date: string;
  year: number;
  /** Optional case-study spec — a field-note colophon shown on the card &
   *  detail page when filled. Left undefined until real copy is supplied
   *  (never auto-invented, so no fictional metrics ship). */
  projectType?: string;
  role?: string;
  challenge?: string;
  outcome?: string;
  externalLink?: string;
  appLink?: string;
  /** Apple App Store link */
  iosLink?: string;
  apkLink?: string;
  video?: string;
  /** Which Nepali craft frames the hero shot on the case-study page:
   *  'window' (carved Newari window — portrait/mobile shots) or
   *  'thangka' (silk scroll — web/landscape shots). */
  frame: 'window' | 'thangka';
  /** App-store-style listing details; when present the case-study page shows
   *  the icon, an info bar, and a horizontal screenshot strip. */
  appMeta?: {
    icon: string;
    ageRating?: string;
    category?: string;
    developer?: string;
    language?: string;
    size?: string;
  };
  /** The shot displayed inside the frame (defaults to `image` if omitted). */
  frameShot?: string;
  /** App icon enshrined inside the Newari window (takes precedence over frameShot). */
  frameIcon?: string;
  /** The project's own brand world — floods the case-study hero & next-project banner. */
  brand: {
    /** deep brand background */
    bg: string;
    /** readable text color on that background */
    fg: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: 'jestha',
    brand: { bg: '#14595F', fg: '#EDF7F6' },
    frameIcon: '/works/jestha/logo.webp',
    frame: 'window',
    frameShot: '/works/jestha/jestha-framecrop.webp',
    appMeta: {
      icon: '/works/jestha/logo.webp',
      ageRating: '13+',
      category: 'Social Networking',
      developer: 'The Brilliant Ideas',
      language: 'EN',
      size: '50 MB',
    },
    title: 'JESTHA',
    tagline: "Nepal's voice of freedom",
    description:
      "Nepal's social media app designed to promote open dialogue and free expression.",
    longDescription:
      'JESTHA is a social platform made for Nepal, a space for open dialogue, community, and free expression, built to handle real scale with a smooth mobile-first experience.',
    image: '/works/Jestha.webp',
    gallery: [
      '/works/jestha/j1.webp',
      '/works/jestha/j2.webp',
      '/works/jestha/j3.webp',
      '/works/jestha/j4.webp',
      '/works/jestha/j5.webp',
      '/works/jestha/j6.webp',
    ],
    tags: ['Mobile App', 'Social Platform'],
    date: 'April 2023',
    year: 2023,
    externalLink: 'https://jestha.com/',
    appLink: 'https://play.google.com/store/apps/details?id=com.jestha.social',
    iosLink: 'https://apps.apple.com/us/app/jestha/id6767431345',
  },
  {
    slug: 'pixeryhub',
    brand: { bg: '#1B1C20', fg: '#F5F2EC' },
    frameIcon: '/works/pixeryhub/ph-logo.webp',
    frame: 'window',
    title: 'PixeryHub',
    tagline: 'Inspiring pixels for inspired people',
    description:
      'A platform offering free 4K/HD wallpapers, live backgrounds, and digital creative tools.',
    longDescription:
      'PixeryHub brings free 4K and HD wallpapers, live backgrounds, and handy digital tools to a global audience, available on the web and as an Android app on the Play Store.',
    image: '/works/pixeryhub/image1.webp',
    gallery: [
      '/works/pixeryhub/ph-ios1.webp',
      '/works/pixeryhub/ph-ios2.webp',
      '/works/pixeryhub/ph-ios3.webp',
      '/works/pixeryhub/image1.webp',
      '/works/pixeryhub/image2.webp',
      '/works/pixeryhub/image3.webp',
      '/works/pixeryhub/image4.webp',
    ],
    tags: ['Mobile App', 'Web App', 'Design Tools'],
    date: 'December 2024',
    year: 2024,
    externalLink: 'https://pixeryhub.com/',
    appLink: 'https://play.google.com/store/apps/details?id=com.pixeryhub.app',
  },
  {
    slug: 'brilliant-chess',
    brand: { bg: '#B94E12', fg: '#FFF4EA' },
    frameIcon: '/works/chess/icon-without-bg.webp',
    frame: 'window',
    title: 'The Brilliant Chess',
    tagline: 'Master the game, your way',
    description:
      'A fully-featured chess game with online multiplayer, local play, and Bluetooth connectivity.',
    longDescription:
      'The Brilliant Chess is our own product, a polished mobile chess experience built from the ground up. Play online against friends, pass-and-play locally, or connect over Bluetooth when there is no internet at all. Designed for everyone from casual players to club regulars.',
    image: '/works/chess/1.webp',
    gallery: [
      '/works/chess/c1.webp',
      '/works/chess/c2.webp',
      '/works/chess/c3.webp',
      '/works/chess/c4.webp',
      '/works/chess/c5.webp',
      '/works/chess/c6.webp',
    ],
    tags: ['Mobile App', 'Game', 'Multiplayer'],
    date: 'January 2025',
    year: 2025,
    apkLink: '/works/chess/the-brilliant-chess.apk',
    video: '/works/chess/promo.mp4',
  },
  {
    slug: 'confidia',
    brand: { bg: '#2E5E4E', fg: '#F0F5EF' },
    frameIcon: '/works/confidia/confidia-logo.webp',
    frame: 'window',
    frameShot: '/works/confidia/confidia-framecrop.webp',
    title: 'Confidia',
    tagline: 'Build confidence for real connection',
    description:
      'An AI-powered confidence coach that helps you practice conversations and connect for real.',
    longDescription:
      'Confidia is a personal confidence coach in your pocket. An AI message assistant helps you find the right words, daily challenges build social courage step by step, and a confidence score tracks your progress over time — so real conversations stop feeling scary.',
    image: '/works/confidia/confidia-feature.webp',
    gallery: [
      '/works/confidia/confidia-1.webp',
      '/works/confidia/confidia-2.webp',
      '/works/confidia/confidia-3.webp',
      '/works/confidia/confidia-4.webp',
      '/works/confidia/confidia-5.webp',
      '/works/confidia/confidia-6.webp',
    ],
    tags: ['Mobile App', 'AI'],
    date: 'March 2026',
    year: 2026,
    externalLink: 'https://confidia.pixeryhub.com/',
  },
  {
    slug: 'brilliant-sudoku',
    brand: { bg: '#C05A10', fg: '#FFF4EA' },
    frameIcon: '/works/sudoku/sudoku-logo.webp',
    frame: 'window',
    frameShot: '/works/sudoku/sudoku-framecrop.webp',
    title: 'Brilliant Sudoku',
    tagline: 'Brilliant minds, brilliant puzzles',
    description:
      'A clean, fast sudoku game with five difficulty levels, from novice to expert.',
    longDescription:
      'Brilliant Sudoku is puzzling without the clutter: five difficulty levels from novice to expert, unlimited undo, notes, and a distraction-free board that gets out of the way of your thinking.',
    image: '/works/sudoku/sudoku-feature.webp',
    gallery: [
      '/works/sudoku/sudoku-1.webp',
      '/works/sudoku/sudoku-2.webp',
      '/works/sudoku/sudoku-3.webp',
      '/works/sudoku/sudoku-4.webp',
    ],
    tags: ['Mobile App', 'Game', 'Puzzle'],
    date: 'March 2026',
    year: 2026,
  },
  {
    slug: 'nepalinest',
    brand: { bg: '#233242', fg: '#EFF3F6' },
    frame: 'thangka',
    title: 'NepaliNest',
    tagline: 'Your marketplace, reimagined',
    description:
      'An eCommerce platform offering a diverse marketplace for new and used products in Nepal.',
    longDescription:
      'NepaliNest is a marketplace built for Nepali buyers and sellers, with new and used products, simple listings, and a shopping experience designed around local needs.',
    image: '/works/nn/nn1.webp',
    gallery: ['/works/nn/nn1.webp', '/works/nn/nn2.webp', '/works/nn/nn3.webp', '/works/nn/nn4.webp'],
    tags: ['E-commerce', 'Web App'],
    date: 'April 2021',
    year: 2021,
    externalLink: 'https://www.nepalinest.com/',
  },
  {
    slug: 'the-brilliant-canvas',
    brand: { bg: '#3B3455', fg: '#F2F0F7' },
    frame: 'thangka',
    title: 'The Brilliant Canvas',
    tagline: 'Design in three dimensions',
    description:
      'A t-shirt design studio with immersive 3D visualization powered by Three.js.',
    longDescription:
      'The Brilliant Canvas lets anyone design a t-shirt and see it in real time on an interactive 3D model. Drag, rotate, recolor, and export, all in the browser.',
    image: '/works/tbc/tbc3.webp',
    gallery: ['/works/tbc/tbc3.webp', '/works/tbc/TBC2.webp', '/works/tbc/tbc4.webp', '/works/tbc/tbc1.webp'],
    tags: ['3D Design', 'Web App'],
    date: 'April 2022',
    year: 2022,
    externalLink: 'https://thebrilliantcanvas.netlify.app/',
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
