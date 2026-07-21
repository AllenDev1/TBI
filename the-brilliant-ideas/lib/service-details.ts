// Long-form content for the /services/[slug] pages.
// Each entry is a full landing page for one service. Written for people first,
// but structured so search engines finally have a dedicated page per keyword
// ("web development in Nepal", "SEO services in Nepal", and so on) instead of
// one crowded /services page trying to rank for everything at once.

export type ServiceDetail = {
  slug: string;
  /** <title> — keyword first, brand comes from the layout template */
  seoTitle: string;
  seoDescription: string;
  /** on-page H1 — keyword-bearing, unlike the poetic index page */
  h1: string;
  /** the italic accent line inside the H1 */
  h1Accent: string;
  /** Hero illustration override — must be a transparent-background cutout like
   *  every other hero on the site. Falls back to the SERVICES index image,
   *  which is only safe when that image is itself a cutout (trailhead-gate is
   *  a full-bleed painting, hence the override for web-design-development). */
  heroImage?: string;
  heroAlt?: string;
  intro: string[];
  deliverables: { title: string; text: string }[];
  whyUs: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  /** slugs from lib/projects.ts to cross-link as proof of work */
  relatedProjects: string[];
  closing: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: 'web-design-development',
    seoTitle: 'Web Design & Development in Nepal',
    seoDescription:
      'Professional web design and development in Nepal. The Brilliant Ideas builds fast, SEO-ready websites, web apps, and e-commerce stores with Next.js and React, from Biratnagar and Kathmandu.',
    h1: 'Web design & development',
    h1Accent: 'in Nepal.',
    heroImage: '/image-story/mountain-path.webp',
    heroAlt: 'A watercolor of a stone Himalayan footpath winding past a small stupa and prayer flags toward a misty snow peak',
    intro: [
      'Your website is the trailhead of your business: the first place a customer stands and decides whether the journey looks worth taking. We design and build websites in Nepal that load fast, rank on Google, and turn visitors into customers, whether they arrive from Biratnagar, Kathmandu, or the other side of the world.',
      'We work with modern tools like Next.js, React, and TypeScript, the same stack used by the world’s best product teams. That means server-rendered pages that search engines can actually read, images that load in a blink on Nepali mobile networks, and a codebase your business can grow into rather than out of.',
      'From a five-page company site to a full e-commerce platform with payments, inventory, and order tracking, we handle the whole climb: strategy, design, development, hosting, and the ongoing care after launch.',
    ],
    deliverables: [
      { title: 'Business & corporate websites', text: 'Clean, credible company sites that tell your story and make it effortless for customers to reach you.' },
      { title: 'E-commerce development', text: 'Online stores with product catalogues, carts, and payment integration, built to sell across Nepal and abroad.' },
      { title: 'Web applications', text: 'Dashboards, portals, booking systems, and custom tools delivered as fast, secure web apps.' },
      { title: 'Landing pages that convert', text: 'Focused single-page sites for campaigns, product launches, and lead generation.' },
      { title: 'Website redesigns', text: 'Outdated or slow site? We rebuild it on a modern stack without losing your existing search rankings.' },
      { title: 'Speed & SEO built in', text: 'Every site ships with technical SEO, structured data, and Core Web Vitals performance from day one, not bolted on later.' },
    ],
    whyUs: [
      { title: 'Modern stack, not templates', text: 'We hand-build with Next.js and React. No page-builder bloat, no rented WordPress themes that look like everyone else’s.' },
      { title: 'Made for Nepali realities', text: 'We test on the phones and networks your customers actually use, so your site is fast in Itahari, not just in a lab.' },
      { title: 'Search engines from day one', text: 'Semantic markup, sitemaps, metadata, and structured data are part of the build, because a beautiful site nobody finds helps nobody.' },
      { title: 'We stay after launch', text: 'Hosting, updates, and improvements: we remain your guide long after the flag is planted.' },
    ],
    faqs: [
      { q: 'How much does a website cost in Nepal?', a: 'It depends on scope. A focused business website is a smaller investment than a full e-commerce platform or custom web application. Tell us what you need and we’ll give you a clear, itemised quote, free and with no obligation.' },
      { q: 'How long does it take to build a website?', a: 'A typical business website takes 3–6 weeks from kickoff to launch. Larger builds like e-commerce stores or web apps usually run 2–4 months. We agree on milestones before we start, so you always know where the trail leads.' },
      { q: 'Do you build e-commerce websites?', a: 'Yes. We build complete online stores with product management, carts, checkout, and payment integration, like NepaliNest, our e-commerce platform for the Nepali diaspora.' },
      { q: 'Will my website work well on mobile?', a: 'Always. Most Nepali web traffic is on mobile, so we design mobile-first and test on real devices and real network speeds before launch.' },
      { q: 'Can you redesign my existing website without losing Google rankings?', a: 'Yes. We map your existing URLs, set up proper redirects, and preserve your metadata and structured data so a redesign becomes an SEO upgrade, not a setback.' },
    ],
    relatedProjects: ['nepalinest', 'the-brilliant-canvas', 'pixeryhub'],
    closing: 'Every journey begins at the trailhead. Let’s build yours properly.',
  },
  {
    slug: 'mobile-apps',
    seoTitle: 'Mobile App Development in Nepal',
    seoDescription:
      'Android and iOS app development in Nepal. The Brilliant Ideas designs and ships native-quality mobile apps, from games and social platforms to AI products, from Biratnagar and Kathmandu.',
    h1: 'Mobile app development',
    h1Accent: 'in Nepal.',
    intro: [
      'An idea that lives in someone’s pocket travels everywhere they do, from the Terai plains to the high passes, and to every country where Nepalis have made a home. We develop Android and iOS apps in Nepal with the polish of the products you already love: fast, intuitive, and dependable.',
      'We’re not an outsourcing shop assembling screens to a spec. We have designed, built, and shipped our own apps to the Play Store, from multiplayer chess and puzzle games to social platforms and AI companions, so we’ve felt every stage of the app journey ourselves: store review, crash reports, user feedback, version updates. That experience goes into every client build.',
      'Whether you’re a startup with a product idea, a business that needs a customer app, or a founder who wants a game built properly, we take you from first sketch to a live listing on the app stores.',
    ],
    deliverables: [
      { title: 'Android & iOS apps', text: 'Native-quality apps for both platforms, built from a shared codebase to keep costs sensible.' },
      { title: 'Games', text: 'From multiplayer chess to daily puzzles, we design and ship games people return to, like The Brilliant Chess and Brilliant Sudoku.' },
      { title: 'Social & community platforms', text: 'Feeds, profiles, chat, and notifications: the full architecture of a modern social product, as we built for JESTHA.' },
      { title: 'AI-powered apps', text: 'Apps built around language models and intelligent features, done thoughtfully, like Confidia, our AI companion app.' },
      { title: 'Business & booking apps', text: 'Customer-facing apps for shops, services, and startups that need more than a website.' },
      { title: 'App store launch & beyond', text: 'Store listings, screenshots, review submission, analytics, and post-launch updates: the whole expedition, not just the build.' },
    ],
    whyUs: [
      { title: 'We ship our own apps', text: 'Our portfolio is on the Play Store right now. We hold ourselves to the standard of products we’d publish under our own name.' },
      { title: 'Design-led development', text: 'An app people delete isn’t an app. UX research and interface craft come before the first line of code.' },
      { title: 'Honest scoping', text: 'We’ll tell you what your first version actually needs, and what can wait, so you launch sooner and learn from real users.' },
      { title: 'Full-journey support', text: 'Store submission, crash monitoring, updates, and new features. We stay on the rope with you.' },
    ],
    faqs: [
      { q: 'How much does app development cost in Nepal?', a: 'A focused first version of an app is far more affordable than most founders expect, and much depends on features like accounts, payments, or real-time chat. Share your idea and we’ll break the cost down honestly, feature by feature.' },
      { q: 'Do you build for both Android and iOS?', a: 'Yes. We build from a shared codebase that ships to both platforms, which keeps quality high and costs lower than building twice.' },
      { q: 'Can you publish the app to the Play Store and App Store for us?', a: 'Yes. We handle store accounts, listings, screenshots, and the review process. We’ve been through it many times with our own apps.' },
      { q: 'Do you develop games?', a: 'We do, and we love it. The Brilliant Chess and Brilliant Sudoku are our own titles: design, development, multiplayer infrastructure, and store launch, all in-house.' },
      { q: 'What happens after the app launches?', a: 'Apps are living products. We offer ongoing support for updates, OS changes, crash fixes, and new features, so your app keeps climbing instead of quietly ageing.' },
    ],
    relatedProjects: ['jestha', 'brilliant-chess', 'confidia'],
    closing: 'Your idea, in every pocket. Let’s take it to the stores.',
  },
  {
    slug: 'branding-identity',
    seoTitle: 'Branding & Logo Design Agency in Nepal',
    seoDescription:
      'Branding agency in Nepal crafting logos, visual identities, and complete brand systems. The Brilliant Ideas helps Nepali businesses and startups build brands people remember.',
    h1: 'Branding & identity design',
    h1Accent: 'in Nepal.',
    intro: [
      'On a spring hillside, the laligurans doesn’t ask to be noticed. It simply is. That’s what a great brand does. We’re a branding agency in Nepal helping businesses, startups, and products find the name, mark, and voice that make them impossible to confuse with anyone else.',
      'A brand is more than a logo file. It’s the colour a customer remembers, the tone of your Instagram caption, the way your packaging feels in the hand. We design complete identity systems covering logo, palette, typography, patterns, and guidelines, so everything you make looks like it came from the same confident place.',
      'We’ve built brands for our own products and for clients across Nepal, and we bring the same standard to a tea shop in Biratnagar as to a startup pitching investors in Kathmandu: clarity first, beauty always, and nothing generic.',
    ],
    deliverables: [
      { title: 'Logo design', text: 'Distinctive, versatile marks designed to work everywhere, from a favicon to a shopfront sign.' },
      { title: 'Complete visual identity', text: 'Colour palettes, typography, patterns, and imagery direction that hold together across every touchpoint.' },
      { title: 'Brand guidelines', text: 'A clear, practical rulebook so your team and future partners keep the brand consistent without guessing.' },
      { title: 'Brand naming & messaging', text: 'Names, taglines, and tone of voice that say the right thing in both English and Nepali contexts.' },
      { title: 'Rebranding', text: 'Careful evolution for businesses that have outgrown their old look without losing the recognition they’ve earned.' },
      { title: 'Social & marketing kits', text: 'Templates for posts, covers, and campaigns so your brand stays sharp on every feed.' },
    ],
    whyUs: [
      { title: 'Strategy before style', text: 'We start with who you are and who you serve, so the design decisions have a reason behind them, not just a mood.' },
      { title: 'Rooted here, fluent everywhere', text: 'We design brands that feel at home in Nepal and stand confidently on the international stage.' },
      { title: 'Systems, not just files', text: 'You get an identity that scales: guidelines, assets, and templates your whole team can actually use.' },
      { title: 'Craft you can see', text: 'Look at our own brand. Every flower, ridge, and letterform on this site was drawn with intent. Yours will be too.' },
    ],
    faqs: [
      { q: 'How much does logo design cost in Nepal?', a: 'A standalone logo costs less than a full identity system, and we offer packages for both. Tell us your stage, whether that’s a new business, a rebrand, or a product launch, and we’ll recommend the right scope with a clear price.' },
      { q: 'What’s included in a full branding package?', a: 'Typically: research and strategy, logo design with variations, colour and typography systems, brand guidelines, and starter assets for social and print. We tailor the exact contents to your needs.' },
      { q: 'How long does a branding project take?', a: 'A logo project usually takes 2–3 weeks; a complete identity system 4–8 weeks. Good brands, like good treks, reward the unhurried pace.' },
      { q: 'Can you rebrand my existing business?', a: 'Yes, carefully. We audit what recognition you’ve already earned, keep what works, and redesign what’s holding you back.' },
      { q: 'Do I own the final brand assets?', a: 'Completely. You receive all source files, exports, and full rights to your identity. It’s yours, summit to base.' },
    ],
    relatedProjects: ['jestha', 'brilliant-chess', 'nepalinest'],
    closing: 'Be the flower on the hillside. Let’s make your brand unmistakable.',
  },
  {
    slug: 'ui-ux-design',
    seoTitle: 'UI/UX Design Services in Nepal',
    seoDescription:
      'UI/UX design services in Nepal. The Brilliant Ideas designs research-driven interfaces for websites, mobile apps, and software: intuitive products people navigate by instinct.',
    h1: 'UI/UX design',
    h1Accent: 'people navigate by instinct.',
    intro: [
      'A good mountain path needs no signposts: the way forward is simply obvious. That’s our standard for interface design. We provide UI/UX design services in Nepal for websites, mobile apps, and software products, creating screens people understand the moment they see them.',
      'Good UX isn’t decoration; it’s the difference between an app people use daily and one they delete by Friday. We start with research into who your users are, what they’re trying to do, and where they get stuck, then design flows, wireframes, and polished interfaces that remove every unnecessary step between your user and their goal.',
      'Because we’re also developers, our designs aren’t pretty pictures that fall apart in engineering. Every screen we hand over is buildable, specified, and considerate of real-world constraints like slow networks and small budgets.',
    ],
    deliverables: [
      { title: 'UX research & audits', text: 'User interviews, competitor analysis, and honest audits of where your current product loses people.' },
      { title: 'Wireframes & user flows', text: 'The architecture of your product mapped clearly before a single pixel is polished.' },
      { title: 'Interface (UI) design', text: 'Beautiful, consistent screens for web and mobile, designed in Figma and organised for developers.' },
      { title: 'Interactive prototypes', text: 'Clickable prototypes you can test with real users, and show investors, before committing to code.' },
      { title: 'Design systems', text: 'Reusable components, tokens, and rules so your product stays consistent as it grows.' },
      { title: 'Usability testing', text: 'Watching real people use your product, finding the friction, and smoothing the path.' },
    ],
    whyUs: [
      { title: 'Designers who ship', text: 'We build what we design, so nothing we draw is impossible, vague, or wasteful to engineer.' },
      { title: 'Research over opinion', text: 'Design debates end quickly when you watch a real user try the thing. We test, we don’t guess.' },
      { title: 'Local context matters', text: 'We design for the devices, languages, and habits of real Nepali users as fluently as for global audiences.' },
      { title: 'Instinct as the goal', text: 'Our benchmark is simple: if a screen needs explaining, it isn’t finished.' },
    ],
    faqs: [
      { q: 'What’s the difference between UI and UX design?', a: 'UX is the path: the flows, structure, and logic of how someone gets things done. UI is how that path looks and feels: colour, type, spacing, motion. We do both, because a beautiful screen with a confusing flow fails, and so does a logical flow that looks untrustworthy.' },
      { q: 'Do you redesign existing apps and websites?', a: 'Yes. A UX audit of your current product is often the best first step. We identify exactly where users struggle, then redesign with evidence rather than taste alone.' },
      { q: 'What tools do you use?', a: 'Figma for design and prototyping, with organised files and components your developers (or ours) can build from directly.' },
      { q: 'Can you work with our development team?', a: 'Absolutely. We deliver specs, assets, and design systems that drop cleanly into any team’s workflow, and we stay available while they build.' },
      { q: 'How much does UI/UX design cost in Nepal?', a: 'It scales with the size of the product; a landing page is a different journey than a full app. We scope in screens and flows, so quotes are transparent and comparable.' },
    ],
    relatedProjects: ['pixeryhub', 'confidia', 'the-brilliant-canvas'],
    closing: 'A path so clear it needs no signposts. Let’s design yours.',
  },
  {
    slug: 'digital-marketing',
    seoTitle: 'SEO & Digital Marketing Services in Nepal',
    seoDescription:
      'SEO and digital marketing services in Nepal. The Brilliant Ideas grows your search rankings, content, and campaigns. Honest, search-first marketing from Biratnagar and Kathmandu.',
    h1: 'SEO & digital marketing',
    h1Accent: 'in Nepal.',
    intro: [
      'The Gandharba minstrels of old carried songs from valley to valley. The best stories travelled. Today the valleys are search results and social feeds, and we make sure your story is the one that gets heard. We provide SEO and digital marketing services in Nepal that bring the right customers to your door, not just traffic to your graphs.',
      'Search engine optimisation done honestly is slow, compounding work: technical foundations that let Google read your site, content that genuinely answers what your customers are asking, and authority earned through real relationships, not bought links or keyword tricks that collapse with the next algorithm update.',
      'We practise what we sell: our own sites are built search-first, with structured data, performance budgets, and content strategy baked into the code. When we optimise your business, we bring the engineer’s toolkit and the storyteller’s ear together.',
    ],
    deliverables: [
      { title: 'SEO audits & technical SEO', text: 'A full crawl of your site covering speed, indexing, structured data, and mobile experience, with a prioritised, plain-language fix list.' },
      { title: 'Local SEO', text: 'Google Business Profiles, local citations, and location pages that put you on the map when customers search nearby.' },
      { title: 'Content strategy & writing', text: 'Blog posts, service pages, and guides that answer what your customers actually search for, in a voice that sounds like you.' },
      { title: 'Keyword research', text: 'Finding the searches with real buying intent behind them, in both English and Nepali, before a word is written.' },
      { title: 'Social media campaigns', text: 'Content calendars and campaigns for the platforms where your audience actually spends time.' },
      { title: 'Analytics & reporting', text: 'Clear monthly reports on rankings, traffic, and leads: what moved, why, and what we’re doing next.' },
    ],
    whyUs: [
      { title: 'Engineers and storytellers', text: 'Technical SEO needs a developer’s hands; content needs a writer’s ear. We have both under one roof.' },
      { title: 'No dark arts', text: 'No bought backlinks, no keyword stuffing, no tricks that work until they catastrophically don’t. We build rankings that survive algorithm updates.' },
      { title: 'Honest timelines', text: 'SEO compounds the way a long trek gains altitude: steadily. We’ll tell you what to expect at month one, three, and six.' },
      { title: 'Nepal-market fluency', text: 'We know how Nepali customers search, in which language, and on which devices, and how to reach the diaspora abroad.' },
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'For most sites, meaningful movement takes 3–6 months, with compounding gains after that. Anyone promising page one in two weeks is selling something that will hurt you later. We show progress monthly so you can watch the climb.' },
      { q: 'What do SEO services cost in Nepal?', a: 'We offer one-time audits, project-based work (like fixing a site’s technical SEO), and monthly retainers for ongoing content and growth. Each is quoted clearly up front.' },
      { q: 'Do you handle social media marketing too?', a: 'Yes: strategy, content calendars, creative design, and campaign management, coordinated with your SEO so every channel tells the same story.' },
      { q: 'Can you do SEO for e-commerce sites?', a: 'Yes. Product page optimisation, category structure, review schema, and content that captures buyers at every stage of the search journey.' },
      { q: 'Will you explain what you’re actually doing?', a: 'Always. Every report is written in plain language: what changed, why it matters, and what happens next. No jargon fog, no mystery invoices.' },
    ],
    relatedProjects: ['nepalinest', 'jestha', 'pixeryhub'],
    closing: 'Your story deserves to travel. Let’s carry it to every valley.',
  },
  {
    slug: 'software-development',
    seoTitle: 'Custom Software Development in Nepal',
    seoDescription:
      'Custom software development in Nepal: APIs, dashboards, business systems, and e-commerce platforms built to scale. The Brilliant Ideas, a software company in Biratnagar and Kathmandu.',
    h1: 'Custom software development',
    h1Accent: 'built to stand for ages.',
    intro: [
      'The mountains endure because their foundations run deep. We build custom software in Nepal the same way, engineering systems your business can stand on for years: APIs, dashboards, internal tools, and platforms ready for the day your ambitions get bigger.',
      'Off-the-shelf software makes you work its way. Custom software works yours. Whether it’s a booking system shaped around how your team actually operates, a dashboard that finally shows all your numbers in one place, or the backend for a product serving thousands of users, we design and build it clean, documented, and ready to grow.',
      'As a software company in Nepal with our own products in production, serving real users with real uptime and real stakes, we engineer for the long trail: secure by default, tested before launch, and maintainable by whoever comes after us, not just by us.',
    ],
    deliverables: [
      { title: 'Custom business systems', text: 'Inventory, booking, billing, HR: software shaped precisely around how your organisation works.' },
      { title: 'APIs & backends', text: 'Robust, documented APIs that power your apps and connect your services, built to handle growth.' },
      { title: 'Dashboards & admin panels', text: 'Every number that matters, in one clear view, with the controls your team needs to act on it.' },
      { title: 'E-commerce platforms', text: 'Full commerce systems with catalogues, payments, and order management, like our NepaliNest platform.' },
      { title: 'System integration', text: 'Making your existing tools finally talk to each other: payments, accounting, messaging, and more.' },
      { title: 'Maintenance & scaling', text: 'Monitoring, security updates, and performance work that keeps your software strong as usage climbs.' },
    ],
    whyUs: [
      { title: 'Products in production', text: 'We run our own platforms with real users. We know what 2 a.m. reliability actually requires, and we build for it.' },
      { title: 'Built to be inherited', text: 'Clean code, documentation, and sensible architecture, so your software is never held hostage by its own complexity, or by us.' },
      { title: 'Security by default', text: 'Authentication, data protection, and careful handling of what your users trust you with, from the first commit.' },
      { title: 'One team, whole stack', text: 'Design, frontend, backend, and infrastructure under one roof. No coordination gaps for problems to hide in.' },
    ],
    faqs: [
      { q: 'What does custom software development cost in Nepal?', a: 'Custom software is scoped feature by feature, so costs vary widely, but Nepal-based development makes world-class engineering remarkably accessible. We quote transparently after understanding your workflow, with no surprise line items.' },
      { q: 'Custom software or off-the-shelf: which do I need?', a: 'If an existing tool fits 90% of your workflow, buy it, and we will tell you so honestly. Custom makes sense when your process is your advantage, when subscriptions are bleeding you, or when nothing on the market fits how you actually work.' },
      { q: 'How do you handle security and data privacy?', a: 'Security is part of the architecture, not an add-on: encrypted data, proper authentication, access controls, and careful API design. We treat your users’ data the way we treat our own products’.' },
      { q: 'Can you take over or fix an existing system?', a: 'Yes. We audit inherited codebases, stabilise what’s fragile, document what’s mysterious, and then improve from solid ground.' },
      { q: 'Do you provide support after delivery?', a: 'Always. Software is a living thing, so we offer maintenance plans covering monitoring, updates, fixes, and new features as your needs grow.' },
    ],
    relatedProjects: ['nepalinest', 'confidia', 'the-brilliant-canvas'],
    closing: 'Foundations like the mountains. Let’s build something that lasts.',
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}
