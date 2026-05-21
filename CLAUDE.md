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

The `next.config.mjs` intentionally disables ESLint and TypeScript build errors (`ignoreDuringBuilds: true`, `ignoreBuildErrors: true`) — Vercel builds will not fail on type or lint errors.

## Architecture

Single-page marketing website using **Next.js 15 App Router**. There is only one route (`app/page.tsx`); all content is sections stacked vertically on that page.

### Page structure (top to bottom)

```
HeroHeaderContainer          ← fixed slideshow bg + scroll-aware header + hero copy
  ├── HeroSlideshow          ← fixed, full-screen background (z-index: -1)
  ├── Header                 ← receives isScrolled + opacity from container
  └── HeroSection            ← hero copy/CTA

WhatWeDoSection  (#what-we-do)
VisionSection
FeaturesSection  (#features)
PartnersCarousel (#partners)
CaseStudiesSection (#case-studies)
BusinessPartnerSection (#business-partners)
TeamSection      (#team)        ← wrapped in SectionWrapper
QuoteSection     (#quote)       ← wrapped in SectionWrapper
ContactSection   (#contact)     ← wrapped in SectionWrapper

Footer                         ← in layout.tsx, always rendered
ScrollToTop                    ← in layout.tsx, always rendered
```

### Key shared components

- **`SectionWrapper`** — wraps sections with optional gradient top/bottom dividers for smooth color transitions between sections. Props: `backgroundColor`, `prevSectionColor`, `nextSectionColor`.
- **`AnimatedSection`** — scroll-triggered entrance animations via the `useScrollAnimation` hook. Props: `direction` (up/down/left/right/none), `delay`, `duration`, `threshold`.
- **`HeroHeaderContainer`** — client component that owns scroll state shared between `Header` and `HeroSection`. The header fades out as the user approaches the `#quote` section.

### Component conventions

- All components that use browser APIs or React hooks carry `"use client"` at the top.
- Server components (no interactivity) omit the directive.
- Radix UI primitives live in `components/ui/` (shadcn/ui pattern) — these are primitives, not page sections.
- Custom hooks live in `hooks/` (e.g., `use-scroll-animation.ts`).
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for all className merging.

### Styling

- **Font**: Space Grotesk via `next/font/google`, exposed as `var(--font-space-grotesk)` / `font-sans`.
- **Dark-only theme** — no light mode. CSS variables defined once in `:root`:
  - Background: `#004953` (Midnight Green)
  - Primary: `#008794` (Teal Blue)
  - Secondary: `#01F9C6` (Bright Teal)
  - Accent: `#7FFFD4` (Aquamarine)
- Tailwind colors reference CSS variables (e.g., `bg-primary`, `text-secondary`) — do not hardcode hex values in components.
- Custom animations: `animate-spin-slow`, `animate-compass` defined in `tailwind.config.ts`.
