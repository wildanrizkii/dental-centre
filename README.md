# Dentèle — Specialist Dental Centre

A pixel-perfect, premium Next.js website for Dentèle Specialist Dental Centre, faithfully reproducing the Google Stitch design reference.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: Lucide React & Google Material Symbols Outlined
- **Font**: Plus Jakarta Sans (`next/font/google`)
- **Validation**: Zod
- **Forms**: React Hook Form

## 📂 Project Structure

```
dental-centre/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system CSS & typography
│   │   ├── layout.tsx           # Root layout with Plus Jakarta Sans & SEO
│   │   └── page.tsx             # Homepage composition
│   ├── components/
│   │   ├── animations/
│   │   │   └── SmoothScroll.tsx # Lenis smooth scrolling provider
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Sticky blurred header with brand & CTA
│   │   │   ├── Navigation.tsx   # Pill navigation
│   │   │   ├── MobileMenu.tsx   # Animated mobile drawer menu
│   │   │   └── Footer.tsx       # Comprehensive dark footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Peach hero with contour SVG & stats card
│   │   │   ├── Partners.tsx     # Partner logo strip
│   │   │   ├── Philosophy.tsx   # 3 Philosophy & benefits cards
│   │   │   ├── Treatments.tsx   # Asymmetrical Bento Grid
│   │   │   ├── Statistics.tsx   # Dark clinical stats contrast bar
│   │   │   ├── About.tsx        # Clinic operatory & micro-dentistry card
│   │   │   ├── Specialists.tsx  # Specialist doctors showcase
│   │   │   ├── Testimonials.tsx # 5.0 Star review & Case outcome showcase
│   │   │   └── FinalCTA.tsx     # Curved elliptical consultation section
│   │   └── ui/
│   │       ├── Badge.tsx        # Reusable badge component
│   │       ├── Button.tsx       # Pill button primitives
│   │       └── Container.tsx    # Responsive grid container
│   ├── data/
│   │   └── content.ts           # Design tokens, content copy & image CDN URLs
│   └── lib/
│       └── utils.ts             # Tailwind merge & clsx utility
├── DESIGN.md                    # Design tokens & aesthetic reference
├── code.html                    # Original Google Stitch HTML reference
├── tailwind.config.ts           # Custom Tailwind theme extension
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Development Server

Run the development server:

```bash
cd /d E:\Projects\dental-centre
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To verify and build for production:

```bash
npm run build
npm run start
```
