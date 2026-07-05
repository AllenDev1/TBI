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
  externalLink?: string;
  appLink?: string;
  apkLink?: string;
  video?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'brilliant-chess',
    title: 'The Brilliant Chess',
    tagline: 'Master the game, your way',
    description:
      'A fully-featured chess game with online multiplayer, local play, and Bluetooth connectivity.',
    longDescription:
      'The Brilliant Chess is our own product, a polished mobile chess experience built from the ground up. Play online against friends, pass-and-play locally, or connect over Bluetooth when there is no internet at all. Designed for everyone from casual players to club regulars.',
    image: '/works/chess/1.webp',
    gallery: ['/works/chess/1.webp', '/works/chess/2.webp', '/works/chess/3.webp'],
    tags: ['Mobile App', 'Game', 'Multiplayer'],
    date: 'January 2025',
    year: 2025,
    apkLink: '/works/chess/the-brilliant-chess.apk',
    video: '/works/chess/promo.mp4',
  },
  {
    slug: 'pixeryhub',
    title: 'PixeryHub',
    tagline: 'Inspiring pixels for inspired people',
    description:
      'A platform offering free 4K/HD wallpapers, live backgrounds, and digital creative tools.',
    longDescription:
      'PixeryHub brings free 4K and HD wallpapers, live backgrounds, and handy digital tools to a global audience, available on the web and as an Android app on the Play Store.',
    image: '/works/pixeryhub/image1.webp',
    gallery: [
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
    slug: 'jestha',
    title: 'JESTHA',
    tagline: "Nepal's voice of freedom",
    description:
      "Nepal's social media app designed to promote open dialogue and free expression.",
    longDescription:
      'JESTHA is a social platform made for Nepal, a space for open dialogue, community, and free expression, built to handle real scale with a smooth mobile-first experience.',
    image: '/works/Jestha.webp',
    gallery: ['/works/Jestha.webp', '/works/j1.webp', '/works/j2.webp', '/works/jestha-m.webp'],
    tags: ['Mobile App', 'Social Platform'],
    date: 'April 2023',
    year: 2023,
    externalLink: 'https://jestha.com/',
  },
  {
    slug: 'nepalinest',
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
    title: 'The Brilliant Canvas',
    tagline: 'Design in three dimensions',
    description:
      'A t-shirt design studio with immersive 3D visualization powered by Three.js.',
    longDescription:
      'The Brilliant Canvas lets anyone design a t-shirt and see it in real time on an interactive 3D model. Drag, rotate, recolor, and export, all in the browser.',
    image: '/works/tbc/tbc1.webp',
    gallery: ['/works/tbc/tbc1.webp', '/works/tbc/TBC2.webp', '/works/tbc/tbc3.webp', '/works/tbc/tbc4.webp'],
    tags: ['3D Design', 'Web App'],
    date: 'April 2022',
    year: 2022,
    externalLink: 'https://thebrilliantcanvas.netlify.app/',
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
