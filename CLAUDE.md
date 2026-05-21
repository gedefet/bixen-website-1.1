# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # development server (http://localhost:3000)
pnpm build      # production build
pnpm lint       # ESLint
pnpm start      # serve production build locally
```

> Note: there is both a `pnpm-lock.yaml` and a `package-lock.json` in the repo. Use `pnpm` as the primary package manager.

## Deployment

- **Production**: `main` branch → auto-deploys to bixen.ai via Vercel
- **Previews**: any push to a non-`main` branch generates a unique Vercel preview URL
- Current dev branch: `feature/modificaciones`
- `staging` branch also exists on the remote

`next.config.mjs` intentionally disables ESLint and TypeScript build errors and sets `images: { unoptimized: true }` — Vercel builds will not fail on type/lint errors, and `next/image` optimization is disabled.

## Architecture

Single-page marketing website using **Next.js 15 App Router**. There is only one route (`app/page.tsx`); all content is sections stacked vertically.

### Page structure (top to bottom)

```
HeroHeaderContainer   ← fixed slideshow bg + scroll-aware header + hero copy
StatsSection
ServicesSection
AiStatement
VisionSection
WhyBixenSection
PartnersCarousel
CaseStudiesSection
TeamSection
QuoteSection
ContactSection

Footer                ← in layout.tsx, always rendered
ScrollToTop           ← in layout.tsx, always rendered
RevealObserver        ← in layout.tsx, global IntersectionObserver for scroll animations
```

### Key shared components

- **`SectionWrapper`** — wraps sections with optional gradient top/bottom dividers. Props: `backgroundColor`, `prevSectionColor`, `nextSectionColor` (raw color strings, e.g. `"#050709"`).
- **`AnimatedSection`** — hook-based scroll-triggered entrance animation. Props: `direction` (up/down/left/right/none), `delay`, `duration`, `threshold`. Uses `useScrollAnimation` hook.
- **`HeroHeaderContainer`** — client component that owns scroll state shared between `Header` and `HeroSection`.

### Component conventions

- All components that use browser APIs or React hooks carry `"use client"` at the top.
- Radix UI primitives live in `components/ui/` (shadcn/ui pattern) — these are primitives, not page sections.
- Custom hooks live in `hooks/`.
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for all className merging.

### Scroll reveal system

The preferred scroll animation pattern is CSS-class-based:
1. Add `className="reveal"` to any element (starts invisible, translated 20px down).
2. `RevealObserver` (mounted globally in `layout.tsx`) watches for `.reveal` elements entering the viewport and adds `.in`, triggering the transition.
3. Respects `prefers-reduced-motion`.

`AnimatedSection` is an older hook-based alternative still used in some components; prefer the `reveal` class for new work.

### Styling

- **Font**: Plus Jakarta Sans via `next/font/google`, variable `--font-plus-jakarta` / `font-sans`.
- **Dark-only theme** — no light mode. CSS variables in `:root` in `globals.css`:

  | Token | Value | Use |
  |---|---|---|
  | `--bg` | `#050709` | Page background |
  | `--surface-1/2/3` | `#0b1015` / `#11181f` / `#18222b` | Card/surface layering |
  | `--text` / `--text-2/3/4` | white at 100/65/42/22% | Text hierarchy |
  | `--clr-accent` | `#01F9C6` | Bright teal (highlights, borders) |
  | `--clr-accent-2` | `#008794` | Teal blue (secondary accent) |
  | `--bdr` / `--bdr-strong` | white 8% / 16% | Borders |
  | `--section-pad-x/y` | `clamp(24px,5vw,96px)` / `clamp(96px,12vw,180px)` | Section spacing |
  | `--container-w` | `1320px` | Max content width |

- Tailwind colors (`bg-primary`, `bg-secondary`, etc.) map to HSL CSS variables — do not hardcode hex values in components.
- Use `.container-bixen` CSS class for full-width → max-width content containers.
- Use `.eyebrow` CSS class for small all-caps section labels (renders a teal line before the text).
- Use `.h-section` CSS class for large gradient headings; wrap highlighted words in `<em>` for teal color.

### Responsive grids

Named grid classes in `globals.css` (e.g. `.stats-grid`, `.services-grid`, `.cases-grid`) use `!important` column overrides at breakpoints 880px, 600px, and 540px. New grids should follow this same pattern for consistency.
