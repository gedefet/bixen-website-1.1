# Project Overview

Bixen Website (v1.1) is a modern, high-performance landing page built with **Next.js 15**, **React 19**, and **Tailwind CSS**. It serves as a professional showcase for "Bixen," emphasizing AI expertise with the slogan "Helping businesses thrive through AI."

## Core Technologies
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** Shadcn UI (Radix UI primitives)
- **Icons:** Lucide React
- **Animations:** Custom `useScrollAnimation` hook and `AnimatedSection` component
- **Carousels:** Embla Carousel (`embla-carousel-react`)
- **Forms:** React Hook Form & Zod

- **Fonts:** Plus Jakarta Sans (primary sans), Space Grotesk, and Montserrat.
- **Next.js Config:** 
  - `unoptimized: true` for images (useful for static exports or specific hosting).
  - ESLint and TypeScript build errors are currently set to be ignored during production builds.

## Project Structure
- `app/`: Contains the main application routes and global styles.
  - `page.tsx`: The primary landing page layout, composing various sections.
  - `layout.tsx`: Root layout with font and theme providers.
- `components/`: Modular UI components.
  - `ui/`: Lower-level primitives (Shadcn UI).
  - `*-section.tsx`: Large page sections (Hero, Features, Team, etc.).
- `hooks/`: Custom React hooks (e.g., scroll animations, mobile detection).
- `lib/`: Shared utility functions (e.g., Tailwind class merging).
- `public/`: Static assets (images, logos).

## Building and Running
The project uses `npm` (or `pnpm`/`yarn`) for package management.

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Production Start:** `npm run start`
- **Linting:** `npm run lint`

## Development Conventions

### Styling & Components
- **Tailwind First:** Use Tailwind CSS for all styling. Custom values (like the brand mint color `#01F9C6`) are defined in `tailwind.config.ts`.
- **Shadcn UI:** Follow the Shadcn pattern for UI components. If a new primitive is needed, add it to `components/ui`.
- **Animations:** Wrap sections or elements in `AnimatedSection` to leverage the custom scroll-entry animations.

### Best Practices
- **Client Components:** Use the `"use client"` directive only when necessary (e.g., hooks, state, event listeners).
- **Type Safety:** Ensure all components and hooks are strictly typed.
- **Section Isolation:** Maintain clear separation between sections in `app/page.tsx` for easy reordering and maintenance.
