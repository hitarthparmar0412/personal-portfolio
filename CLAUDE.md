# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repo has **two versions** on separate branches:

| Branch | Description |
|--------|-------------|
| `main` | Legacy static Bootstrap/HTML portfolio (`index.html`) |
| `redesign-v3` | **Active** — Next.js 14 ultra-premium portfolio |

All active development happens on `redesign-v3`.

## Development (Next.js — redesign-v3)

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before committing)
npm run lint     # ESLint
```

No test suite. Always run `npm run build` before committing.

## Architecture (redesign-v3)

### Tech stack
- **Next.js 14** App Router, TypeScript, Tailwind CSS
- **Framer Motion** — all animations (spring physics, layout, AnimatePresence)
- **Lenis** — smooth scroll (wired in `src/app/layout.tsx` via `SmoothScroll` component)
- **Lucide React** — icons
- **next/font/google** — Space Grotesk, Inter, JetBrains Mono (zero FOUT)

### Key files

| File | Purpose |
|------|---------|
| `src/lib/data.ts` | **Single source of truth** for all content — personal info, projects, skills, experience, stats, services, testimonials |
| `src/app/layout.tsx` | Root layout with Lenis smooth scroll + metadata/SEO + JSON-LD schemas |
| `src/app/page.tsx` | Home page — imports and arranges all section components |
| `src/components/ui/index.tsx` | Shared primitives: `SectionHeading`, `GlassCard`, `Tag`, `Button`, animation variants |
| `src/components/ui/SplitText.tsx` | Word-by-word clip-path text reveal used on all headings |
| `src/components/SmoothScroll.tsx` | Client component that initialises Lenis |

### Optimal Section Order (Conversion-Optimised)

```
Navigation → Hero → Projects → Stats → Testimonials → InlineCTA
→ Services → Pricing → Experience → About → Skills → Awards
→ Education → Contact → Footer
```

This order is based on recruiter/founder psychology:
1. **Hero** — claim: "The engineer behind 7M users"
2. **Projects** — proof immediately (recruiter needs evidence in scroll 1)
3. **Stats** — numbers now have context (visitor just saw the apps)
4. **Testimonials** — social proof amplifies after seeing the work
5. **InlineCTA** — catch visitors at trust peak #1
6. **Services** — "what do I hire you for?" answered after trust is built
7. **Pricing** — directly after services, visible to 3× more visitors
8. **Experience** — credentials confirm capability visitor already trusts
9. **About** — human narrative for visitor who's almost sold
10. **Skills** — detail layer for the technically curious
11. **Awards** — third-party recognition closes credentials arc
12. **Education** — minimal supporting credential
13. **Contact** — conversion endpoint

**Speaking section removed** — 2 college sessions presented with a full-bleed section heading creates a credibility mismatch for senior roles.

### Section components

```
src/components/
  Hero.tsx         — sentence-case H1, static subtitle, parallax orbs, photo w/ static gradient border
  About.tsx        — profile2.jpg with static gradient border
  Stats.tsx        — animated counter (dynamic hours from May 2023)
  Skills.tsx       — vertical tab-accordion (9 categories) ONLY — no tickers, no flag rows
  Projects.tsx     — logo-banner cards + 5 filter tabs + AnimatePresence; links to /projects/[id]
  Testimonials.tsx — 4 client testimonials, Whitfield quote first
  InlineCTA.tsx    — full-width CTA strip with "Start a Project" + "Book a Free Call"
  Experience.tsx   — timeline
  Education.tsx    — education cards
  Awards.tsx       — award cards
  Services.tsx     — 6 outcome-first service cards
  Pricing.tsx      — 3-tier pricing (MVP Sprint / Production Build / SaaS Enterprise $18K–$45K) + currency detection
  Contact.tsx      — EmailJS + Firebase Realtime DB + localStorage draft save
  Navigation.tsx   — fixed sidebar nav (desktop) + mobile overlay; 11 items
  Footer.tsx
  MobileHireFAB.tsx — sticky gold "Hire Me" FAB on mobile
  ScrollProgress.tsx — 2px fixed top progress bar
```

### Hero design (v3 — 2026 clean)
- **H1**: Sentence case — "The engineer" / "behind 7M users." (NOT all-caps)
- **Subtitle**: Static `"Flutter · AI · Mobile · Web"` (NO typewriter — 2018 pattern)
- **Photo border**: Static gradient (NOT spinning conic ring — too much GPU)
- **Floating cards**: Removed (duplicate of stats in left column)
- **Mini stats**: Removed (duplicate of Stats section)
- **Orb animations**: Mouse parallax only — NO scale breathing
- **Mobile photo**: 200×250px rounded card (NOT 120×148px postage stamp)
- **Blur on headline**: Removed (GPU jank on mobile)

### Project detail pages

`src/app/projects/[id]/page.tsx` — SSG with `generateStaticParams` + `generateMetadata`. Every project in `data.ts` gets a pre-rendered detail page at `/projects/[id]`.

### Data model — `src/lib/data.ts`

Key exports:
- `personalInfo` — name, title, bio (names Deonde explicitly), social links
- `stats` — 4 stats (dynamic hours: `calcSupportHours()` = weeks × 5 × 8 from May 1 2023)
- `projects[]` — 14 projects with id, category, tag, tech, platforms, color, isFeatured, isAI
- `projectDetails` — per-project role, year, features[], challenges[], outcome for detail pages
- `skills` — categorised skill arrays (9 categories, used in accordion only — no tickers)
- `experience[]`, `education[]`, `awards[]`
- `services[]` — 6 services with **outcome-first** descriptions (client language, not tool language)
- `testimonials[]` — 4 client testimonials; Whitfield ("different league") is index 0
- `contactInfo` — EmailJS credentials + Firebase URL

### Filters in Projects.tsx
5 filters only: `['All', 'AI', 'Fintech', 'Delivery', 'Marketplace']`
When a non-All filter is active, featured projects are INCLUDED in results (bug fix: AI filter no longer hides Times of My Life).

### Design system

- **Background**: `#05080F` (primary), `#0D1117` (alternate sections)
- **Gold accent**: `#E8B554` — headings, CTAs, labels
- **Blue accent**: `#4285F4` — tech badges, links
- **Purple accent**: `#8B5CF6` — AI badges, tertiary
- **Glass card**: `rgba(255,255,255,0.03)` + `border: 1px solid rgba(255,255,255,0.07)`
- **Font**: Space Grotesk (display/headings), Inter (body), JetBrains Mono (code/labels)
- **Text opacity tiers**: white/90 (headlines), white/70 (body), white/45 (subtitles), white/25 (mono labels)
- **Animations**: Framer Motion spring physics — `ease: [0.34, 1.56, 0.64, 1]` for scale-in, `ease: [0.16, 1, 0.3, 1]` for reveals
- **Infinite animations**: Keep to max 4 simultaneously. Currently: status pill ping, scroll chevron, LIVE badge pulse, mouse-parallax orbs (not time-based)

### SEO / Schema (layout.tsx)

- Page title: `"Hitarth Parmar — Flutter Developer & Mobile Architect | 24+ Live Apps"`
- `Person` schema — includes: `@id`, `telephone`, `worksFor` (iCoderz), `alumniOf` (Atmiya University), `award` (Apple "New Apps We Love"), `hasCredential` (Google AI certs), full `knowsAbout` list
- `WebSite` schema — includes `SearchAction` for Sitelinks searchbox
- `ProfilePage` schema — new 2023 Google standard for personal portfolios
- `sitemap.ts` — all 14 project pages + home
- `robots.ts` — allows all crawlers

### Pricing

3 tiers with USD/INR currency auto-detection (via `Intl.DateTimeFormat().resolvedOptions().timeZone`):
- **MVP Sprint**: $3,000–$6,000 / ₹2.5L–₹5L / 4–6 weeks
- **Production Build**: $8,000–$18,000 / ₹6.5L–₹15L / 8–14 weeks (MOST POPULAR)
- **SaaS/Enterprise**: $18,000–$45,000 / ₹15L–₹37L / 12–20 weeks (ceiling anchor added)

### Images

```
public/images/
  profile.jpg    — blazer photo (hero, primary)
  profile2.jpg   — casual photo (about section)

public/projects/
  deonde-logo-hq.png, chowman-logo-hq.png, times-logo-hq.png
  juiced-logo-hq.png, oklends-logo.png
  screenshots/times-og.jpg, chowman-og.png
```

### Contact

- **EmailJS**: service `service_7aledoj`, template `template_7avw32n`, key `G2oDydfqN2ur3Qbmu`
- **Firebase**: `https://portfolio-hitarth-default-rtdb.firebaseio.com/contact.json` (POST)
- **localStorage draft save**: form data saved before submit, cleared on success

## Adding a new project

1. Add entry to `projects[]` in `src/lib/data.ts`
2. Add matching entry to `projectDetails` in the same file
3. Optionally add logo to `public/projects/` and map it in `Projects.tsx` (`projectLogos` object)
4. Run `npm run build` — the new `/projects/[id]` page pre-renders automatically

## Performance rules

- Max 4 simultaneous infinite CSS/Framer animations site-wide
- No `filter: blur()` on large hero elements (GPU jank on mid-range Android)
- No `html { scroll-behavior: smooth }` — Lenis handles this (removing it prevents double-scroll)
- All hero images need `priority` prop on next/image
- Never use `<img>` — always use `next/image` for optimization
