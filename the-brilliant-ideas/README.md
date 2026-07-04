# The Brilliant Ideas — Digital Agency Website

The marketing site for **The Brilliant Ideas**, a digital agency from Nepal building
websites, mobile apps, brands, and software products. Built with Next.js, TypeScript,
and Tailwind CSS around a "Himalayan storytelling" aesthetic — a warm paper canvas,
hand-drawn Nepali artwork, and gentle scroll-driven motion.

## Features

🎨 **Design & storytelling**
- Light "paper" canvas with Himalayan-ink text and a sunrise-orange / laligurans (rhododendron) accent palette
- Hand-drawn SVG artwork of Nepali motifs — the danphe bird, a one-horned rhino, mountain ridges
- Scroll-driven storytelling: a swaying lantern, a silk-road journey trail, parallax layers, and reveal-on-scroll sections
- `prefers-reduced-motion` respected throughout

🖼️ **Pages**
- **Home** — hero, the journey, the craft, selected work, the crew, and a closing CTA
- **Work** — portfolio listing, with a dynamic `work/[slug]` detail page per project
- **Services** — service offerings and how-we-work process
- **About** — team, values, and company story
- **Contact** — validated contact form with reCAPTCHA and budget/service pickers
- **Privacy**, **Terms**, and a custom **404**

🛠️ **Technical**
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** with a custom theme (`tailwind.config.ts`)
- **Lenis** smooth scrolling and **Three.js** animated hero starfield (lazy-loaded)
- **Fraunces** (display) + **Inter** (body) via `next/font`
- SEO: `sitemap.ts`, `robots.ts`, JSON-LD Organization + WebSite schema, OpenGraph & Twitter cards
- Google Analytics + Microsoft Clarity, Google reCAPTCHA v2, `axios`-based form submission

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd the-brilliant-ideas
npm install
```

### Environment variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API that receives contact-form submissions (`POST {API_URL}/tbi-contact`) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 site key for the contact form |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # run ESLint (next lint)
```

## Project Structure

```
the-brilliant-ideas/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── services/           # Services page
│   ├── work/               # Portfolio listing
│   │   └── [slug]/         # Dynamic project detail page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms
│   ├── globals.css         # Global styles + utilities
│   ├── layout.tsx          # Root layout (fonts, metadata, schema, analytics)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404
│   ├── sitemap.ts          # Generated sitemap
│   └── robots.ts           # Generated robots.txt
├── components/             # Reusable components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer with links & social
│   ├── ContactForm.tsx     # Validated contact form + reCAPTCHA
│   ├── HeroStars.tsx       # Three.js starfield
│   ├── HeroStarsLazy.tsx   # Lazy loader for the starfield
│   ├── JourneyTrail.tsx    # SVG journey/trail illustration
│   ├── NepalArt.tsx        # Hand-drawn SVG art (Danphe, Rhino, Ridge…)
│   ├── StoryScene.tsx      # Scroll storytelling scene
│   ├── ParallaxLayer.tsx   # Parallax wrapper
│   ├── Reveal.tsx          # Reveal-on-scroll wrapper
│   ├── TiltCard.tsx        # Pointer-tilt card
│   └── SmoothScroll.tsx    # Lenis smooth scroll setup
├── lib/                    # Content & config (edit these to change copy)
│   ├── site.ts             # Site metadata, contact info, services
│   ├── projects.ts         # Portfolio projects
│   └── team.ts             # Team members
├── public/                 # Static assets (images, artwork, works, team…)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Content

Most copy lives in `lib/` — no need to touch page markup for routine updates:
- **Company info, contact details, and service list** → `lib/site.ts`
- **Portfolio projects** (title, images, links, tags) → `lib/projects.ts`
- **Team members** → `lib/team.ts`

### Theme

Colors, fonts, and animations are defined in `tailwind.config.ts`. The palette is named
after the concept:

- `paper` — the light canvas background (`DEFAULT` / `warm` / `deep`)
- `ink` — Himalayan-night text (`DEFAULT` / `soft` / `faint`)
- `sunrise` — brand orange (`#F97316` and variants)
- `laligurans` — rhododendron red, Nepal's national flower
- `himal` — cool mountain blues · `forest` — Terai greens

Global utilities and base styles (button classes, section helpers, image glow) live in
`app/globals.css`.

### Images

Static assets live under `public/` — `works/` for portfolio media, `team/` for headshots,
`image-story/` for the illustrated scenes. Update the paths referenced in `lib/projects.ts`
and `lib/team.ts` when you add new ones.

## Deployment

Optimized for **Vercel** (recommended for Next.js), but deployable to any Node.js host
(Netlify, AWS Amplify, etc.).

1. Push to GitHub
2. Import the project in Vercel
3. Add the environment variables above
4. Deploy

## Browser Support

Latest Chrome, Firefox, Safari, and Edge.

## Contact

For questions, reach out at `info@thebrilliantideas.com`.
