# DESIGN SYSTEM — Hitarth Parmar Portfolio
### Built on Google Design Research · Validated by Awwwards Winners · 2026–2027

---

## PHILOSOPHY

> "Remove everything that isn't essential. Make what remains feel expensive."
> — Google Design Team

> "Surfaces always dark. Content always bright."
> — Google Glimmer Team

> "Motion must mean something. Never animate just because you can."
> — Google Material Motion Team

This design system is derived from **10+ Google Design Library resources**, validated against **Awwwards triple-crown winners** (Lusion, Bruno Simon) and **18,000-person research studies** by Google.

**Goal:** Ultra premium, world-class portfolio that attracts freelance clients AND recruiters in 2026–2027.

---

## 1. COLOR SYSTEM
*Source: Google PRISM Gradient Language + Ruxandra Duru Color Theory + Gemini AI Visual Design*

### Base Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#05080F` | Page background — deep space black |
| `--color-surface` | `#0D1117` | Card/section surfaces |
| `--color-surface-2` | `#12181F` | Elevated cards, modals |
| `--color-text-primary` | `#F8F8F8` | Headlines — warm white, never pure |
| `--color-text-secondary` | `#A0AEC0` | Body, descriptions |
| `--color-text-muted` | `#4A5568` | Labels, captions |
| `--color-gold` | `#E8B554` | Primary accent — matches CV |
| `--color-blue` | `#4285F4` | Google Blue — secondary accent |
| `--color-purple` | `#8B5CF6` | Gradient third point |
| `--color-glass` | `rgba(255,255,255,0.04)` | Glassmorphism cards |
| `--color-glass-border` | `rgba(255,255,255,0.08)` | Card borders |
| `--color-gold-glow` | `rgba(232,181,84,0.15)` | Hover glow effects |
| `--color-blue-glow` | `rgba(66,133,244,0.15)` | Section accent glows |

### Gradient System (Google PRISM — 2025 Evolution)

```css
/* Hero gradient — Gemini AI style */
--gradient-hero: radial-gradient(
  ellipse at 60% 50%,
  rgba(66, 133, 244, 0.3) 0%,
  rgba(139, 92, 246, 0.2) 40%,
  rgba(232, 181, 84, 0.1) 70%,
  transparent 100%
);

/* Gold accent gradient */
--gradient-gold: linear-gradient(135deg, #E8B554 0%, #F5A623 100%);

/* Card shimmer */
--gradient-card: linear-gradient(
  135deg,
  rgba(255,255,255,0.05) 0%,
  rgba(255,255,255,0.02) 100%
);

/* Text gradient for name */
--gradient-name: linear-gradient(90deg, #F8F8F8 0%, #E8B554 50%, #4285F4 100%);
```

### Google 3-Step Color Rules (Ruxandra Duru)

1. **BALANCE STIMULATION** — Low contrast + gradients + fuzzy boundaries = atmosphere (hero section)
2. **RELATE** — Restrict one property at a time. Bridge colors between gold and blue (use purple)
3. **COMPLETE** — Complementary pair: Gold ↔ Blue (opposite on wheel = satisfaction)

**Rule:** High saturation colors on dark background disappear. Use desaturated accents with selective bright pops.

---

## 2. TYPOGRAPHY
*Source: Google Sans Flex (Red Dot Award 2024, Open Source 2025)*

### Font Stack

```css
--font-display: 'Google Sans', 'Space Grotesk', sans-serif;   /* Headlines */
--font-body:    'Inter', 'Google Sans Text', sans-serif;       /* Body */
--font-mono:    'DM Mono', 'JetBrains Mono', monospace;       /* Tech tags, code */
```

### Scale

| Role | Size | Weight | Usage |
|------|------|--------|-------|
| `--text-name` | clamp(56px, 10vw, 120px) | 900 | Your name — hero |
| `--text-h1` | clamp(40px, 6vw, 80px) | 800 | Section headlines |
| `--text-h2` | clamp(28px, 4vw, 48px) | 700 | Sub-sections |
| `--text-h3` | clamp(20px, 2.5vw, 28px) | 600 | Card titles |
| `--text-body-lg` | 18px | 400 | Lead paragraphs |
| `--text-body` | 16px | 400 | Body copy |
| `--text-sm` | 14px | 400 | Labels, captions |
| `--text-xs` | 12px | 500 | Tags, badges |

### Google Research Finding
> "Taller, more elegant styles rated MORE PREMIUM and ENGAGING than standard fonts"
> — Google Sans Flex user study, 3,000 readers

**Rule:** Use extra-bold (900) for the name only. Everything else breathes at lower weights. This contrast = premium.

### Google Sans Flex Variable Axes (apply via CSS)
```css
/* Example — hero name */
.hero-name {
  font-variation-settings:
    'wght' 900,   /* Weight: max bold */
    'wdth' 100,   /* Width: normal */
    'opsz' 72,    /* Optical size: large display */
    'ROND' 50;    /* Roundedness: slightly soft */
}
```

---

## 3. MOTION & ANIMATION
*Source: Google Making Motion Meaningful + Material Design Motion + Gemini Motion Principles*

### Core Rules (Google's Exact Principles)

```
RULE 1: Motion must MEAN something
  Every animation guides the user — never decorative
  Motion communicates: direction, resistance, outcome

RULE 2: Follow real-world physics
  Objects follow ARC paths — never straight lines
  Ease-in on start → ease-out at rest
  No abrupt stops. No instant acceleration
  Gravity + friction applied to everything

RULE 3: Motion sleight of hand
  Animate the WHOLE rather than every part
  Simplify visual complexity, communicate outcome
  Less motion = more premium

RULE 4: Broad & elegant transitions
  Exaggerated durations feel smoother
  "Thoughtfully tying things together"
  Speed variation: slow build → fast release = anticipation

RULE 5: SILENCE is a design tool
  Ask "Does this need animation? WHY?"
  Overuse diminishes the impact of important moments
  Most micro-interactions = NO animation
```

### Timing System

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `--duration-instant` | 0ms | — | Focus rings, active states |
| `--duration-micro` | 150ms | ease-out | Hover states, button press |
| `--duration-short` | 300ms | ease-in-out | Small element transitions |
| `--duration-medium` | 500ms | spring | Section reveals, card entry |
| `--duration-long` | 800ms | spring | Hero elements, page intro |
| `--duration-hero` | 2000ms | ease | Incoming notifications, gentle attention |

### Easing Curves (Google Spring Physics)

```css
--ease-standard:  cubic-bezier(0.2, 0, 0, 1);          /* Most elements */
--ease-decelerate: cubic-bezier(0, 0, 0, 1);            /* Entering elements */
--ease-accelerate: cubic-bezier(0.3, 0, 1, 1);          /* Exiting elements */
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);    /* Hero, CTAs, cards */
--ease-bounce:    cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Stats counters */
```

### Framer Motion Variants (ready to use)

```js
// Section reveal — used on every section
export const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.2, 0, 0, 1] }
  }
}

// Card entry — staggered grid
export const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  })
}

// Hero name — cinematic entry
export const heroName = {
  hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.2, 0, 0, 1] }
  }
}

// Gradient orb — Gemini-style breathing
export const heroGradient = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
}

// Stats counter — enter with bounce
export const statReveal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }
  })
}
```

---

## 4. LAYOUT & SPACING
*Source: Google Material 3 + Gemini Layout Principles*

### Grid System

```css
--grid-max:     1280px;   /* Max content width */
--grid-cols:    12;       /* Column count */
--grid-gap:     24px;     /* Column gap */
--grid-margin:  clamp(24px, 5vw, 80px);  /* Side margins */
```

### Spacing Scale (Google's breathing room philosophy)

```css
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px    /* Section padding minimum */
--space-24:  96px    /* Section padding desktop */
--space-32:  128px   /* Hero vertical padding */
```

**Rule:** 80px+ section padding minimum. Google's "extreme breathing room" principle — nothing is cramped. Whitespace = confidence.

### Glassmorphism Cards (Material You containers)

```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;  /* Google's "rounded continuity" */
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(232, 181, 84, 0.3);  /* Gold glow on hover */
  box-shadow: 0 0 40px rgba(232, 181, 84, 0.08);
}
```

---

## 5. SECTIONS BLUEPRINT

### HERO
```
Dark background: #05080F
Gemini-style gradient orb — blue→gold→purple, radial, slowly breathing
Giant name: "HITARTH PARMAR" — Google Sans Flex 900, clamp 56–120px
Typewriter subtitle: "Senior Flutter Developer" — typed animation
Two CTAs: [View My Work] [Download CV]
Social links row below
Scroll indicator — subtle bounce arrow

Gradient orb: position absolute, 60% right, 50% top
             scale pulses 1 → 1.05 → 1 over 6s (Gemini breathing)
             sharp center → diffuses outward (Gemini energy transfer)
```

### STATS BAR
```
4 stats across full width, dark surface, gold numbers
Counter animation on scroll enter (Framer Motion + useInView)
"4+" | "24+" | "7M+" | "9.3"
Labels: YEARS EXP | LIVE APPS | ACTIVE USERS | ACADEMIC SPI
Gold number, white label below — Google size hierarchy principle
(enlarged key element = 4x faster recognition)
```

### ABOUT
```
Split layout: profile photo left | content right
Photo: rounded, subtle gold border glow
Content: short bio (3 lines max), then tech stack pills
Tech pills: glassmorphism, icon + label, hover glow
Skills section: animated progress bars OR icon grid
```

### PROJECTS — Bento Grid (most important section)
```
Filter tabs: All | Delivery & Logistics | Fintech & AI |
             Health & Travel | EdTech | Lifestyle

Featured row (2 large cards):
  • Deonde — white-label delivery SaaS
  • Times of My Life — AI storytelling multiplatform

Grid (3-col desktop, 2-col tablet, 1-col mobile):
  Each card: app name + category tag + 1-line desc +
             platform badges (Android/iOS/Web) +
             live link button

Card hover: scale 1.02, gold border glow, "View Project" overlay
AI projects get ✦ sparkle tag (Google AI Sparkle research)

Project categories (from CV):
  DELIVERY & LOGISTICS: Deonde, Chowman, Juiced Fuel
  FINTECH & AI: Payana, Times of My Life
  HEALTH & LIFESTYLE: NutriLens AI, RecipeVault, Pet Lifestyle Suite
  EDTECH & TRAVEL: SourceCAD, TripTrop, AstroLearn
  ASTROLOGY: Zebrapad/AstroNum
  MARKETPLACE: OkLends, Taxi & Salon Booking
  FINANCE: Personal Finance Apps
```

### EXPERIENCE TIMELINE
```
Vertical timeline, centered line with gold dots
iCoderz Solutions (May 2023 – Present) — Flutter & FlutterFlow Dev
KodeMakers Technologies (May 2022 – Apr 2023) — Junior Flutter Dev
Scroll-triggered: each entry slides in from alternating sides
```

### SKILLS
```
Grouped by category (from CV):
  Languages:     Dart, Java, JavaScript, HTML, CSS, SQL
  Frameworks:    Flutter, FlutterFlow, Android Studio, Xcode, Figma
  State Mgmt:    GetX, Bloc/Cubit, Riverpod, Provider, MVVM
  Backend:       Firebase, REST APIs, Socket.IO
  Payments:      Stripe, Razorpay, Google Pay, In-App Purchase
  AI & GenAI:    Gemini, OpenAI, Prompt Engineering
  Storage:       SQLite, Hive, Shared Preferences
  DevOps:        Git, GitHub, Fastlane, GitHub Actions
  Methodology:   Agile/Scrum, Code Reviews, JIRA

Icon grid with hover glow — NO progress bars (they're subjective)
```

### SERVICES
```
4–6 service cards in grid:
  Flutter App Development
  FlutterFlow Development
  UI/UX to Flutter Conversion
  Firebase & Backend Integration
  App Store Deployment (Play + App Store)
  Cross-Platform (Android + iOS + Web)

Glassmorphism cards, icon + title + 2-line desc
```

### EDUCATION & CERTIFICATIONS
```
B.Tech IT — Atmiya University, Rajkot (2019–2023) | SPI 9.3/10
Certifications grid (from CV):
  AI Fundamentals (Google/Udemy)
  AI for Writing & Communicating (Google/Udemy)
  AI for Research & Insights (Google/Udemy)
  Generative AI Skill Badge (Google Skills)
  Flutter Development (Udemy)
  Digital Marketing Fundamentals (Google/Coursera)
```

### AWARDS
```
Two award cards side by side:
  01. The Eccentric Performer — iCoderz Solutions
  02. Best Performer of the Team — iCoderz Solutions
Gold numbered badges, glassmorphism cards
```

### CONTACT
```
Two columns:
  Left:  "Let's Work Together" — giant gold headline
         Email, Phone, Location, LinkedIn
  Right: Contact form (Name, Email, Subject, Message, Send)
Big CTA button: gold gradient, spring animation on hover
```

---

## 6. COMPONENT PATTERNS

### Navigation (Sidebar — matches original site structure)

```
Left sidebar, full height, dark surface
Logo/initials at top
Nav links with icons (Boxicons style)
Active state: gold left border + gold text
Mobile: slide-in overlay from left
Sticky position
```

### Buttons

```css
/* Primary CTA */
.btn-primary {
  background: linear-gradient(135deg, #E8B554, #F5A623);
  color: #05080F;
  font-weight: 700;
  border-radius: 8px;
  padding: 14px 32px;
  transition: transform 150ms, box-shadow 150ms;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(232, 181, 84, 0.3);
}

/* Secondary outline */
.btn-secondary {
  background: transparent;
  border: 1px solid rgba(232, 181, 84, 0.5);
  color: #E8B554;
  border-radius: 8px;
  padding: 14px 32px;
  backdrop-filter: blur(8px);
}
```

### Category / Tech Tags

```css
.tag {
  background: rgba(66, 133, 244, 0.1);
  border: 1px solid rgba(66, 133, 244, 0.2);
  color: #4285F4;
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 4px;
}

.tag-gold {
  background: rgba(232, 181, 84, 0.1);
  border-color: rgba(232, 181, 84, 0.2);
  color: #E8B554;
}

.tag-ai {
  /* Sparkle prefix — Google AI icon research */
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.2);
  color: #8B5CF6;
}
.tag-ai::before { content: "✦ "; }
```

---

## 7. SEO SYSTEM
*Next.js 14 App Router — maximum Google ranking*

### Meta Tags (every page)
```
Title:       "Hitarth Parmar — Senior Flutter Developer | 24+ Live Apps"
Description: "Results-driven Senior Flutter Developer with 4+ years experience.
              24+ live apps, 7M+ users. Expert in Flutter, Firebase, GetX, Bloc,
              Stripe, Google Maps. Available for freelance & full-time. Ahmedabad."
Keywords:    Flutter developer, FlutterFlow, Firebase, cross-platform, mobile app
             developer, Dart, GetX, Bloc, Riverpod, Stripe integration, Ahmedabad
OG Image:    1200x630 dark card with name + stats
Canonical:   https://hitarth.dev (or your domain)
```

### Structured Data (JSON-LD)
```json
{
  "@type": "Person",
  "name": "Hitarth Parmar",
  "jobTitle": "Senior Flutter Developer",
  "description": "4+ years, 24+ live apps, 7M+ users",
  "url": "https://hitarth.dev",
  "email": "hitarth.parmar0412@gmail.com",
  "telephone": "+91 95869 13540",
  "address": { "addressLocality": "Ahmedabad", "addressCountry": "IN" },
  "knowsAbout": ["Flutter", "Dart", "Firebase", "FlutterFlow", "GetX", "Bloc"]
}
```

### Performance Targets
```
Lighthouse Performance:  95+
Lighthouse SEO:          100
Lighthouse A11y:         95+
First Contentful Paint:  < 1.2s
Largest Contentful Paint: < 2.5s
Cumulative Layout Shift:  < 0.1
```

---

## 8. TECH STACK

| Layer | Tool | Reason |
|-------|------|--------|
| Framework | Next.js 14 App Router | SSR/SSG for SEO + performance |
| Styling | Tailwind CSS | Precision, no unused CSS |
| Animation | Framer Motion | Google spring physics |
| Scroll | GSAP ScrollTrigger | Complex scroll sequences |
| Smooth scroll | Lenis | Silk-smooth scrolling |
| 3D / Hero depth | Three.js (hero only) | Premium depth effect |
| Icons | Lucide React + custom SVG | Sharp at all sizes |
| Font | Google Sans Flex + Inter | Google's own award-winning font |
| SEO | next-seo + next-sitemap | 100 Lighthouse SEO |
| Analytics | Vercel Analytics | Performance monitoring |
| Resume | PDF in /public/resume.pdf | One-click download |
| Hosting | Vercel | Free global CDN, auto HTTPS |
| Images | next/image + WebP | Auto-optimized |

---

## 9. VALIDATED SOURCES

### Google Design Library (All Read & Applied)
- [Gemini AI Visual Design](https://design.google/library/gemini-ai-visual-design)
- [Expressive Material Design Research — 18,000 participants](https://design.google/library/expressive-material-design-google-research)
- [Making Motion Meaningful](https://design.google/library/making-motion-meaningful)
- [Material Design Motion](https://design.google/library/material-design-motion-sharon-harris)
- [Google Sans Flex Font — Red Dot 2024](https://design.google/library/google-sans-flex-font)
- [Rethinking Color Theory](https://design.google/library/color-theory-ruxandra-duru)
- [Transparent Screen Design](https://design.google/library/transparent-screens)
- [Sound & Touch — Micro-interactions](https://design.google/library/ux-sound-haptic-material-design)
- [AI Sparkle Icon Research — 2,000 participants](https://design.google/library/ai-sparkle-icon-research-pozos-schmidt)
- [10 Years of Material Design](https://design.google/library/material-design-eras)
- [Colors Change](https://design.google/library/colors-change)
- [Evolving Google Identity](https://design.google/library/evolving-google-identity)
- [Variable Fonts](https://design.google/library/variable-fonts-type)

### Award-Winning Reference Sites
- [Lusion.co](https://lusion.co/) — Awwwards SOTM + FWA WOTY + CSSDA WOTY (triple crown)
- [Bruno Simon](https://bruno-simon.com/) — Awwwards SOTM Jan 2026 + CSSDA WOTY
- [design.google](https://design.google/) — Google's design showcase
- [m3.material.io](https://m3.material.io/) — Material Design 3 system

### Research Numbers to Remember
- **87%** of 18–24 yr olds prefer expressive design (Google, 18,000 participants)
- **4x faster** element recognition with expressive sizing
- **+34%** boost in "modernity" perception
- **+32%** boost in "premium/subculture" perception
- **+30%** boost in "unique/rebellious" perception
- **37%** quarterly growth in AI sparkle icon usage at Google

---

## 10. PERSONAL DATA (from CV)

```
Name:          Hitarth Parmar
Title:         Senior Flutter & FlutterFlow Developer · Cross-Platform
Phone:         +91 95869 13540
Email:         hitarth.parmar0412@gmail.com
Location:      Ahmedabad, Gujarat · India
Status:        Open to Opportunities

Stats:
  4+ years professional experience
  24+ live apps in production
  Android · iOS · Web multi-platform
  9.3/10 Academic SPI (B.Tech IT)
  7M+ active users (Deonde SaaS)

Current Role:  Flutter & FlutterFlow Developer
               iCoderz Solutions Pvt. Ltd. (May 2023 – Present)
               Ahmedabad, Gujarat

Previous:      Junior Flutter Developer
               KodeMakers Technologies (May 2022 – Apr 2023)
               Vadodara, Gujarat

Education:     B.Tech Information Technology
               Atmiya University, Rajkot, Gujarat (2019–2023)
               SPI: 9.3/10

Awards:
  01. The Eccentric Performer — iCoderz Solutions
  02. Best Performer of the Team — iCoderz Solutions

Speaking:      Guest Lecturer & Mentor — Atmiya University

Live App Links:
  Deonde:        https://deonde.co/
  Chowman:       https://chowman.net/
  Payana:        https://payana.co.in/
  Times of Life: https://timesofmy.life/
  OkLends:       https://play.google.com/store/apps/details?id=com.oklends.rent
  TripTrop:      https://apps.apple.com/us/developer/triptrop/id1637417656
  Juiced Fuel:   https://juicedfuel.com/
  AstroLearn:    https://play.google.com/store/apps/details?id=com.astrolearn.app
  Zebrapad:      https://play.google.com/store/apps/details?id=com.zebrapad
```

---

*This document is the single source of truth for building Hitarth Parmar's portfolio.*
*Every decision is backed by Google research and Awwwards-validated design patterns.*
*Last updated: June 2026*
