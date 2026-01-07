# The Brilliant Ideas - Digital Agency Website

A modern, premium creative agency website built with Next.js, TypeScript, and Tailwind CSS, featuring an orangy glassmorphism aesthetic.

## Features

✨ **Modern Design**
- Orangy glassmorphism/liquid glass aesthetic
- Warm dark gradient background
- Smooth animations and transitions
- Responsive mobile-first design

🎨 **Pages Included**
- **Home** - Hero, services, featured work, process, testimonials, and CTA
- **Work** - Portfolio showcase with filterable project cards
- **Services** - Detailed service offerings with process breakdown
- **About** - Team, values, stats, and company story
- **Contact** - Contact form with validation and contact information

🛠️ **Technical Features**
- Next.js 15+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Reusable components (Button, GlassCard, Navbar, Footer, etc.)
- Semantic HTML and accessibility features
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd the-brilliant-ideas
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
the-brilliant-ideas/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── services/          # Services page
│   ├── work/              # Portfolio page
│   ├── globals.css        # Global styles and glassmorphism utilities
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Button.tsx         # Button component (primary, glass, outline)
│   ├── Footer.tsx         # Footer with links
│   ├── GlassCard.tsx      # Glassmorphism card component
│   ├── Navbar.tsx         # Navigation bar
│   ├── ProjectCard.tsx    # Project showcase card
│   ├── SectionHeading.tsx # Section heading component
│   └── TestimonialCard.tsx# Testimonial card
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Customization

### Colors

The orange accent colors are defined in `tailwind.config.ts`:
- Primary: `#F97316`
- Glow: `#FDBA74`

The dark background gradients are defined in CSS variables in `app/globals.css`:
- `--bg-gradient-start: #120E0B`
- `--bg-gradient-mid: #1C140E`
- `--bg-gradient-end: #0F0A07`

### Components

All reusable components are in the `components/` directory:
- **Button** - Three variants: primary (orange), glass, and outline
- **GlassCard** - Glassmorphism effect with optional hover animation
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Footer with links and social media
- **ProjectCard** - Card for portfolio items
- **TestimonialCard** - Card for client testimonials
- **SectionHeading** - Consistent section headings

### Content

Replace the placeholder content in each page:
1. Update company information in `components/Footer.tsx`
2. Replace project images and descriptions in portfolio pages
3. Update team members in `app/about/page.tsx`
4. Customize service offerings in `app/services/page.tsx`
5. Update contact information in `app/contact/page.tsx`

### Images

The project uses Unsplash placeholder images. Replace them with your own:
1. Add images to the `public/` directory
2. Update image paths in components and pages
3. Or use a CMS/CDN for dynamic image management

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting provider

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for The Brilliant Ideas digital agency.

## Contact

For questions or support, reach out at hello@thebrilliantideas.com
