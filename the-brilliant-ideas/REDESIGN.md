# The Brilliant Ideas — Site Renewal Log

_Last updated: 2026-07-05_

A record of the platform renewal: the goal, the design system we locked in, what
changed page by page, and how the imagery was processed. Kept alongside the code
so the decisions don't get lost.

---

## 1. The goal

Move the site from a bright, "orangy glassmorphism" look to a **calm, unhurried,
editorial** identity — _"heritage editorial, Himalayan patience."_ Warm paper and
ink instead of screens and buttons; colour used as punctuation, not decoration;
one visual hand across every page.

The five governing rules:

1. **Restraint over decoration** — one accent moment per screen.
2. **Warmth over sterility** — warm paper ground, warm-black ink, never clinical white.
3. **Type as the voice** — a soft display serif carries the storytelling.
4. **Nothing snaps** — slow, eased motion; reduced-motion always honoured.
5. **One hand** — surface, type, motion, and imagery feel authored by one person.

**Design Foundations reference (hosted):**
https://claude.ai/code/artifact/b5cf45ab-37f6-45a3-a1d7-5c54786d08ce

---

## 2. Design system (locked into `tailwind.config.ts` + `globals.css`)

### Colour

| Token | Value | Role |
| --- | --- | --- |
| `paper` / `paper-warm` / `paper-deep` | `#FBF9F5` / `#F4EEE3` / `#EBE2D2` | Warm layered surface (was pure white) |
| `ink` / `ink-soft` / `ink-faint` | `#22303A` / `#55656F` / `#8B897F` | Warm near-black text |
| `madder` | `#A62B44` (deep `#8B2038`, faint `#F6E9EC`) | **The one accent** — laligurans red |
| `himal`, `forest` | blues / greens | Supporting — illustration only, never UI |

- The old **bright orange `#F97316`** accent was retired. `sunrise` and
  `laligurans` are kept as **aliases that now resolve to `madder`**, so all existing
  markup shifted to the single accent with no class churn.

### Components

- **Buttons flattened** — removed the orange glow-shadow (the "SaaS" tell).
  `.btn-primary` = flat madder fill; `.btn-outline` = thin `ink/20` border. Reserved
  for the primary action per screen.
- **Focus states** — added a visible `focus-visible` madder ring site-wide (a11y).
- **Navbar** — removed the loud multicolour prayer-flag strip; clean transparent →
  white-on-scroll bar.
- **Ridge** section-transition fills warmed from `#FFFFFF` → `#FBF9F5` so bands don't seam.

### Type

- **Fraunces** (soft display serif) for headlines, **Inter** for body/UI. Editorial
  scale, generous leading, `text-wrap: balance` on headings.

---

## 3. Page-by-page changes

**Home** — Warm palette + flat buttons. Hero image (lantern branch) flipped and
**bled off the right edge**. Mid-page storytelling sections alternate full-bleed
edge images: the misty **footpath** ("Every project is a journey"), the **prayer
wheel** ("Crafted with devotion"), and a new closing **prayer-flag gateway**
("Let's begin your story").

**Services** — Rebuilt the six services into **alternating "little sections"** (big
illustration one side, text the other), replacing the card grid. "How We Work" is
now an **expedition route**: the silk ribbon runs down the centre as the trail, the
six process steps make **camp on alternating sides** with madder waypoint markers.
Removed decorative `01/02/03` numbers from services (not a sequence); kept them on
the process (it _is_ a sequence).

**About** — Guanyin ink drawing anchors the story. **"What We Live By"** rebuilt as
four **alternating illustrated sections**, each value paired with its namesake
(Rhino / Laligurans / Danphe / Mountains) at a large, admirable size. New
**basecamp crew** illustration in the team section.

**Contact** — Warm section + flat cards; the **lantern-lit doorway** ("an invitation
inward") replaces the previous image.

**Work + project detail** — Cards, gallery, and panels moved off white/cool-blue
onto the warm system with quiet hairline borders instead of heavy drop-shadows.

**Footer** — Fully redesigned into two bands:
- **Closing band** (warm): a feathered, centred meditating **Buddha** →
  "Great work is _calm work._" → sign-off → Start-a-project + email.
- **Nightfall band** (dark himal-night): brand + circular social icons, clean
  Explore / Find Us columns, copyright — reached via the mountain-ridge silhouette.

---

## 4. Imagery

All supplied art was **background-removed and renamed by content**, then mapped to
where it fits the copy. Cutouts were done with a custom border-flood + enclosed-pocket
fill script (Pillow), QA'd over both paper and grey.

| File | Where it's used |
| --- | --- |
| `image3.png` | Home hero (lantern branch) |
| `mountain-path.png` | Home journey · Services UI/UX · About "Mountains" value |
| `prayer-wheel.png` | Home craft · Services "Web" |
| `begin-story.png` | Home closing CTA |
| `singing-bowl.png` | Services "Mobile" |
| `laligurans-bloom.png` | Services "Branding" · About "Laligurans" value |
| `danphe-flight.png` | Services header · Services "Marketing" |
| `temple-lion.png` | Services "Software" |
| `lantern-doorway.png` | Contact |
| `guanyin-hand.png` | About story |
| `img5.png` (rhino) | About "Rhino" value (full comp, framed) |
| `danphe-nepal.png` (from `img4`) | About "Danphe" value |
| `basecamp.png` | About crew |
| `img1.png` (ribbon) | Services "How We Work" trek route |
| `buddha.png` (cropped from `img6`) | Footer closing band |
| `img7.png` | 404 page (snow leopard) |

**Art-direction note:** the original set had two styles — vivid "double-exposure"
animals vs. calm muted watercolours. We shifted the site toward the **calm
watercolour** look; the vivid ones (rhino, danphe) were kept only where their colour
is _justified_ (the About values, which celebrate boldness).

**Background-removal caveat:** full-scene compositions where the subject bleeds to
all edges (`img5` rhino, `img2` dragon, `img1` ribbon) can't be cleanly cut out —
these are used framed / with their (paper-matching) backgrounds instead.

---

## 5. Still open

- **Copy pass** — sharpen the storytelling voice across pages (collaborative; needs
  a tone decision).
- **Images still needed:** a dedicated **Web** spot (optional — reusing prayer wheel),
  a fresh **OG / social share** image (1200×630, currently off-brand).
- **Unplaced originals:** `img2` (dragon roof) and `glass-lotus` — the two loud images
  with no calm home. Recommend retiring unless a deliberately bold spot is wanted.

---

## 6. Tooling note

Background removal ran in an isolated Python venv (Pillow + numpy) with a
region-grow + colour-key + pocket-fill script; every cutout was screenshot-verified
in headless Chrome over paper and grey before use. Layout was verified page-by-page
the same way.
