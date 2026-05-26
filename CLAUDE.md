# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

There is no test suite. ESLint and TypeScript errors are intentionally ignored during builds (`next.config.mjs`).

## Architecture

Single-page marketing site for Bixen (AI consulting). All content lives in `app/page.tsx`, which composes section components in order. There are no additional routes.

### Key patterns

**Hero area** — `HeroHeaderContainer` is a client component that owns scroll state shared between `Header` (fixed nav that gains background after 50px scroll and fades out near the quote section) and `HeroSlideshow` (fixed full-screen background). `HeroSection` sits on top via `z-10`.

**Section layout** — Some sections are placed directly in `page.tsx` with explicit `z-index` stacking; others are wrapped in `SectionWrapper`, which handles visual color transitions between adjacent sections. Don't mix these approaches without understanding the z-index stack.

**Scroll animations** — Wrap content in `<AnimatedSection>` to get scroll-entry reveal behavior. The logic lives in `hooks/use-scroll-animation.tsx`.

**UI primitives** — `components/ui/` is Shadcn UI (generated, Radix-based). Don't hand-edit these; add new ones via the shadcn CLI or copy the pattern.

### Styling

- Tailwind CSS is the only styling mechanism.
- Brand mint color is `#01F9C6` — applied via CSS custom properties in `app/globals.css`, not hardcoded in the config.
- Three font families are registered: `font-sans` (Space Grotesk, default body), `font-montserrat`, and `font-slogan` (Plus Jakarta Sans — used for the hero slogan).
- Colors like `primary`, `secondary`, etc. resolve to CSS variables defined in `globals.css`, following the Shadcn convention.

### `"use client"` boundary

Only add `"use client"` when a component uses hooks, state, or browser APIs. All section components that are purely presentational should remain server components.
