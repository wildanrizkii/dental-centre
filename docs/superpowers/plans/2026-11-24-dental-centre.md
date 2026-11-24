# Dental Centre Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-perfect, responsive Next.js 15+ website for Dentèle Specialist Dental Centre matching the Google Stitch reference (`code.html`) and design system (`DESIGN.md`).

**Architecture:** Next.js App Router with React 19, TypeScript strict mode, Tailwind CSS with custom design tokens matching `code.html`, Framer Motion for subtle scroll and entrance animations, Lenis for smooth scrolling, and Lucide React + Material Symbols for icons. Modular component architecture with clean separation of layout, sections, UI atoms, animations, and data models.

**Tech Stack:** Next.js, React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis (`lenis`), Lucide React, Plus Jakarta Sans (`next/font/google`), clsx, tailwind-merge, Zod, React Hook Form.

**Spec:** `E:\Projects\dental-centre\code.html` and `E:\Projects\dental-centre\DESIGN.md`.

## Global Constraints
- Exact color tokens and layout from `code.html`:
  - `surface`: `#fcf9f8`
  - `on-surface`: `#1b1c1c`
  - `on-surface-variant`: `#4d453f`
  - `primary`: `#685c50`
  - `primary-container`: `#b7a89a`
  - `secondary`: `#5b6051`
  - `secondary-container`: `#e0e5d1`
  - `inverse-surface`: `#303030`
  - `inverse-on-surface`: `#f3f0ef`
  - Hero card peach background: `rgb(235, 205, 191)` / `#EBCDBF`
- Typography: Plus Jakarta Sans for all text and headings.
- Image assets: Use exact Google CDN image URLs from `code.html` with robust fallback placeholders if needed.
- No omitted sections: Header, Hero, Partners, Philosophy, Treatments Bento, Statistics, About Clinic, Specialists, Testimonials, Final CTA, Footer.

## Review Focus
1. Header navigation and mobile menu toggle behavior.
2. Hero section layout fidelity: circular contour SVG rings, badges, text, 15+ stats card with overlapping avatars, quick-navigation capsules.
3. Treatments Asymmetrical Bento Grid: 5-column left card ("Cosmetic Smile Design"), 7-column right split with Implants, Orthodontics, and wide bottom Microscopic Restorative card.
4. Statistics Bar contrast: dark `#303030` container with large numeric highlights (`15+`, `20+`, `10k+`, `99.4%`) and subtle accent glow.
5. Responsive behavior: mobile single column reflow, no horizontal overflow, touch target accessibility (min 44px), WCAG 2.2 AA contrast.

---

### Task 1: Project Initialization & Package Setup
**Files:**
- Create: `E:\Projects\dental-centre\package.json`
- Create: `E:\Projects\dental-centre\tsconfig.json`
- Create: `E:\Projects\dental-centre\next.config.ts`
- Create: `E:\Projects\dental-centre\postcss.config.mjs`
- Create: `E:\Projects\dental-centre\tailwind.config.ts`
- Create: `E:\Projects\dental-centre\.gitignore`

- [x] Step 1: Initialize package.json with Next.js, React, Tailwind, Framer Motion, Lenis, Lucide.
- [ ] Step 2: Install dependencies with npm install.
- [ ] Step 3: Verify TypeScript configuration and Next.js setup.

### Task 2: Design Tokens, Fonts & Global CSS
**Files:**
- Modify: `E:\Projects\dental-centre\tailwind.config.ts`
- Create: `E:\Projects\dental-centre\src\app\globals.css`
- Create: `E:\Projects\dental-centre\src\app\layout.tsx`
- Create: `E:\Projects\dental-centre\src\lib\utils.ts`

- [ ] Step 1: Configure Tailwind with all exact colors, radii, spacing, font sizes, shadows from `code.html`.
- [ ] Step 2: Set up `next/font/google` for Plus Jakarta Sans and Material Symbols support in `globals.css`.
- [ ] Step 3: Implement `cn()` utility (`clsx` + `tailwind-merge`).

### Task 3: UI Primitives & Layout Components
**Files:**
- Create: `E:\Projects\dental-centre\src\components\ui\Button.tsx`
- Create: `E:\Projects\dental-centre\src\components\ui\Badge.tsx`
- Create: `E:\Projects\dental-centre\src\components\ui\Container.tsx`
- Create: `E:\Projects\dental-centre\src\components\layout\Header.tsx`
- Create: `E:\Projects\dental-centre\src\components\layout\Footer.tsx`
- Create: `E:\Projects\dental-centre\src\components\layout\Navigation.tsx`
- Create: `E:\Projects\dental-centre\src\components\layout\MobileMenu.tsx`

- [ ] Step 1: Create reusable Button, Badge, and Container components.
- [ ] Step 2: Implement sticky Header with backdrop blur, brand logo, navigation pills, CTA, mobile menu drawer.
- [ ] Step 3: Implement rich dark Footer matching `code.html`.

### Task 4: Hero Section & Partners Strip
**Files:**
- Create: `E:\Projects\dental-centre\src\components\sections\Hero.tsx`
- Create: `E:\Projects\dental-centre\src\components\sections\Partners.tsx`

- [ ] Step 1: Implement Hero section with peach rounded canvas (`rounded-[28px]`, `#ebcdbf`), SVG contour rings, verified badge, headline, CTA buttons, and floating 15+ years card with doctor avatars and navigation capsules.
- [ ] Step 2: Implement Partners logo strip with STRAUMANN, INVISALIGN, 3SHAPE TRIOS, NOBEL BIOCARE, DENTAL MONITORING, PLANMECA CBCT.

### Task 5: Philosophy & Bento Treatments
**Files:**
- Create: `E:\Projects\dental-centre\src\components\sections\Philosophy.tsx`
- Create: `E:\Projects\dental-centre\src\components\sections\Treatments.tsx`

- [ ] Step 1: Implement Philosophy section with dual badges, 3 image cards with hover zoom and tag pills.
- [ ] Step 2: Implement Comprehensive Dental Treatments asymmetrical Bento Grid: 5-column tall Cosmetic Smile Design card, 2 upper cards (Implants, Orthodontics), wide Microscopic Restorative card, and "Explore All 14 Treatments" pill.

### Task 6: Statistics Bar & About Clinic
**Files:**
- Create: `E:\Projects\dental-centre\src\components\sections\Statistics.tsx`
- Create: `E:\Projects\dental-centre\src\components\sections\About.tsx`

- [ ] Step 1: Implement Statistics bar in dark container with 4 stats, count-up animation, and subtle glow.
- [ ] Step 2: Implement About Clinic section with 7-column image + overlapping Micro-Dentistry badge and 5-column editorial text + checkmarks + CTA.

### Task 7: Specialists, Testimonials & Final CTA
**Files:**
- Create: `E:\Projects\dental-centre\src\components\sections\Specialists.tsx`
- Create: `E:\Projects\dental-centre\src\components\sections\Testimonials.tsx`
- Create: `E:\Projects\dental-centre\src\components\sections\FinalCTA.tsx`

- [ ] Step 1: Implement Specialists team grid with Dr. Sarah Jenkins, Dr. Julian Vance, Dr. Elena Rostova.
- [ ] Step 2: Implement Patient Testimonial section with 5-star rating, quote, patient avatar, and Case Outcome #1148 showcase.
- [ ] Step 3: Implement Final Conversion section with decorative ellipses, twin CTAs, and clinic location/valet metadata.

### Task 8: Smooth Scroll, Animations & Page Assembly
**Files:**
- Create: `E:\Projects\dental-centre\src\components\animations\SmoothScroll.tsx`
- Create: `E:\Projects\dental-centre\src\components\animations\FadeIn.tsx`
- Modify: `E:\Projects\dental-centre\src\app\page.tsx`

- [ ] Step 1: Setup Lenis smooth scroll provider.
- [ ] Step 2: Assemble all sections in `src/app/page.tsx` with Framer Motion scroll reveals.
- [ ] Step 3: Add metadata and SEO tags.

### Task 9: Verification, Lint & Production Build
- [ ] Step 1: Run `npm run build` to verify type-checking and bundling.
- [ ] Step 2: Verify responsive design, image loading, interactions, and console errors.
- [ ] Step 3: Prepare final summary report with dev command.
