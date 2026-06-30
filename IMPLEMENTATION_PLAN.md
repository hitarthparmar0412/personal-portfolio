# Portfolio 10/10 Implementation Plan
## Hitarth Parmar — redesign-v3 branch

Based on 4-agent world-class design + SEO audit (June 2026).

---

## OPTIMAL SECTION ORDER (Final — Conversion Science)

| # | Section | Why This Position |
|---|---------|-------------------|
| 1 | Hero | Hook: "The engineer behind 7M users." + availability |
| 2 | Projects | Proof immediately — recruiter needs evidence in scroll 1 |
| 3 | Stats | Numbers now have context (visitor just saw the apps) |
| 4 | Testimonials | Social proof amplifies after seeing the work |
| 5 | InlineCTA | Trust peak #1 — catch visitors who've already decided |
| 6 | Services | "What do I hire you for?" — answered after trust is built |
| 7 | Pricing | Immediately after services — commercial pitch visible to 3× more visitors |
| 8 | Experience | Credentials confirm capability visitor already trusts |
| 9 | About | Human narrative — visitor is already almost sold |
| 10 | Skills | Detail layer for the technically curious |
| 11 | Awards | Third-party recognition closes the credentials arc |
| 12 | Education | Minimal supporting credential |
| 13 | Contact | Conversion endpoint |
| 14 | Footer | Close |

**Removed:** Speaking section (2 college sessions with full-bleed hero → credibility mismatch)

---

## CHANGES BY FILE

### Hero.tsx — Visual noise removal
- [ ] Remove `useTyped` hook + `TYPED_ITEMS` (typewriter = 2018 pattern)
- [ ] Replace with 1 static subtitle: `"Flutter · AI · Mobile · Web"`
- [ ] Remove `Sparkles` import (used only by typewriter)
- [ ] H1 → sentence case: `"The engineer"` / `"behind 7M users."`
- [ ] Remove `filter: 'blur(12px)'` from headline animation → opacity only
- [ ] Remove spinning conic ring → static gradient border (zero GPU cost)
- [ ] Remove 3 floating bounce cards (repeat stats already in column)
- [ ] Remove mini stats row (duplicate of floating cards)
- [ ] Remove orb `animate={{ scale }}` breathing (keep mouse parallax only)
- [ ] Fix mobile photo: 120×148 → full-width `max-w-xs aspect-[4/5]`
- [ ] Fix scroll cue target: `about` → `projects`

### page.tsx — Section hierarchy
- [ ] New order: Hero → Projects → Stats → Testimonials → InlineCTA → Services → Pricing → Experience → About → Skills → Awards → Education → Contact → Footer
- [ ] Remove `Speaking` import + `<Speaking />`
- [ ] Add `InlineCTA` import + `<InlineCTA />` after Testimonials

### InlineCTA.tsx — NEW component
- [ ] Create `src/components/InlineCTA.tsx`
- [ ] Full-width strip, dark bg, "Ready to build your next app?" headline
- [ ] Two CTAs: "Start a Project →" (gold) + "Book a Free Call →" (ghost)
- [ ] Both scroll to `#contact`

### Skills.tsx — Remove attention leaks
- [ ] Delete `SkillTicker` component + both `<SkillTicker>` calls
- [ ] Delete `FlagTicker` component + both `<FlagTicker>` calls
- [ ] Delete `allSkills`, `half`, `countries` variables
- [ ] Keep the accordion — it's excellent and unique

### Projects.tsx — Fix filter bug
- [ ] Fix AI filter: remove `&& !p.isFeatured` so Times of My Life appears when clicking "AI"
- [ ] Reduce filters to 5: `['All', 'Featured', 'AI', 'Fintech', 'Delivery']`
- [ ] When non-All filter is active, include featured projects in results

### data.ts — Content quality
- [ ] Rewrite 6 service descriptions to outcome-first (client language, not tool language)
- [ ] Move Whitfield testimonial ("different league") to position #1 in array
- [ ] Bio: name "Deonde" explicitly for SEO/GEO
- [ ] Remove or properly attribute "AI Integration Pioneer" in awards

### layout.tsx — SEO/Schema
- [ ] Fix title: "Hitarth Parmar — Flutter Developer & Mobile Architect | 24+ Live Apps"
- [ ] Upgrade Person schema: add `telephone`, `worksFor`, `alumniOf`, `award` (Apple feature!), `hasCredential`, full `knowsAbout` list, `givenName`, `familyName`, `description`
- [ ] Add `ProfilePage` schema
- [ ] Upgrade WebSite schema: add `SearchAction`, `description`, `author`
- [ ] Fix `jobTitle` to "Senior Flutter Developer" (not generic "Senior Software Engineer")

### globals.css
- [ ] Remove `html { scroll-behavior: smooth; }` (conflicts with Lenis)

### Contact.tsx
- [ ] Add focus ring CSS class to all `<input>` and `<textarea>` elements
- [ ] Add `localStorage` draft save before submit

### Pricing.tsx
- [ ] SaaS/Enterprise: change suffix from `'+'` to `'– $45,000+'` (ceiling anchor)
- [ ] "Book a free call →" → proper gold styled button (currently a text link)

### About.tsx
- [ ] Add `priority` prop to `<Image>` (above-the-fold image, should load eager)

---

## POST-IMPLEMENTATION
- [ ] `npm run build` — must pass with 0 errors
- [ ] Update CLAUDE.md

---

## REFERENCE: 10/10 Portfolio Principles (2026)
From Brittany Chiang, Bruno Simon, Linear, Stripe, Vercel:
- **Design restraint is a skill** — clean > flashy
- **Under 2s load time** — every infinite animation costs
- **One well-documented project beats ten todo apps**
- **Lead with proof** — outcomes before tools
- **Mobile-first** — hero photo must work at any size
- **4 questions every recruiter asks:** Who? What can you build? How do I trust you? How do I reach you?
