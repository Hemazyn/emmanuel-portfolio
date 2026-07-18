<div align="center">
  <br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Status-Live-10b981?style=flat-square&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Status-Live-10b981?style=flat-square&labelColor=f1f5f9" alt="Status" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&labelColor=f1f5f9" alt="Next.js" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&labelColor=f1f5f9" alt="React" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&labelColor=f1f5f9" alt="TypeScript" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&labelColor=f1f5f9" alt="Tailwind CSS" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square&labelColor=f1f5f9" alt="License" />
  </picture>
  <br />
  <br />
</div>

# Emmanuel Tofunmi — Frontend Engineer Portfolio

> **Product-grade interfaces for CRM systems, admin dashboards, fintech platforms, high-end websites, and embedded widgets.**

A polished, performant, and accessible single-page portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Designed to showcase engineering process, project work, and technical depth through a narrative-driven experience.

**[View Live Site →](https://iamtofunmi.vercel.app/)**

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Sections Overview](#sections-overview)
- [SEO & Performance](#seo--performance)
- [Design System](#design-system)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

---

## Features

### User Experience
- **Narrative-driven Skills section** — A six-step engineering process that communicates methodology over tool lists (product thinking → build → test → shape → connect → ship)
- **Expandable Case Studies** — Deep-dive cards that reveal problem, approach, solution, architecture decisions, and measurable impact for each featured project
- **Interactive Experience Carousel** — Swipeable/navigable timeline with per-role details, achievements, and tech stacks
- **Category-filtered Project Grid** — Filter projects by domain (fintech, e-commerce, CRM, tools, websites) with smooth AnimatePresence transitions
- **Rich Project Modal** — Full-screen detail view with image gallery, tech stack, and external links
- **Dark/Light Mode** — System-aware theme toggle with persisted preference and flash-free hydration
- **Smooth Scroll Navigation** — Parallax Hero, scroll-spy active states, and animated section reveals

### Engineering
- **TypeScript** — Strict null checks, no implicit any, fully typed components, data, and utilities
- **Shared Animation System** — Extracted `fadeUp`, `revealVariants`, `cardVariants`, `overlayVariants`, `navItemVariants`, and easing constants in a single `animations.ts` module
- **Reusable UI Components** — `SectionBackground`, `SectionHeader`, `JsonLd`, `ProjectModal`, `AnimatedSection`, and other composable primitives
- **Framer Motion** — Orchestrated micro-interactions, layout animations, staggered reveals, and gesture responses
- **Responsive Design** — Mobile-first layout that scales from 320px to 2560px without breakpoint regressions

### SEO & Accessibility
- **JSON-LD Structured Data** — Person + WebSite schemas via `@graph` for rich search results
- **Dynamic Sitemap** — Auto-generated `sitemap.ts` for search engine discovery
- **Robots.txt** — Configurable via `robots.ts` with disallowed paths for API and internal routes
- **Web Manifest** — PWA-friendly `manifest.json` with emerald theme and standalone display
- **Comprehensive Metadata** — Title template, Open Graph, Twitter Cards, canonical URL, and `appleWebApp` configuration
- **Keyboard Navigation** — Focus-visible outlines, semantic HTML structure, and aria labels on interactive elements
- **Custom Error Boundaries** — Friendly 404 page with animated mascot and contextual error page with retry mechanism

---

## Tech Stack

| Category            | Technology                                                                 |
| ------------------- | -------------------------------------------------------------------------- |
| **Framework**       | [Next.js 16](https://nextjs.org/) (App Router)                             |
| **UI Library**      | [React 19](https://react.dev/)                                             |
| **Language**        | [TypeScript 5.9](https://www.typescriptlang.org/) (strict mode)            |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com/)                                |
| **Animation**       | [Framer Motion 12](https://www.framer.com/motion/)                         |
| **Icons**           | [Lucide React](https://lucide.dev/)                                        |
| **Theme**           | [next-themes](https://github.com/pacocoursey/next-themes)                  |
| **Fonts**           | Inter (body), Sora (headings), Fira Code (monospace) via `next/font`       |
| **Linting**         | ESLint with `eslint-config-next` (Core Web Vitals rules)                   |
| **Formatting**      | Prettier with `prettier-plugin-tailwindcss`                                |
| **Build Tool**      | Next.js built-in compiler with React Compiler enabled                      |
| **Deployment**      | [Vercel](https://vercel.com/)                                              |

---

## Architecture

```
Pages/Components
┌─────────────────────────────────────────────┐
│                  Root Layout                 │
│  ├── <head> → Theme Script (flash-free)     │
│  ├── <body> → JsonLd (structured data)      │
│  └── ClientLayout (ThemeProvider + Navbar)  │
│        └── Page Content                      │
│              ├── Hero                        │
│              ├── About                       │
│              ├── Experience                  │
│              ├── Projects                    │
│              ├── Case Studies                │
│              ├── Skills                      │
│              └── Contact                     │
└─────────────────────────────────────────────┘
```

### Data Flow

- **Static Data Layer** — All content lives in `src/data/` as typed TypeScript exports (projects, experience, skills, navigation, contact, case studies)
- **Client Components** — Interactive sections (Hero, About, Experience, Projects, Case Studies, Skills, Contact) use `"use client"` for animation and state
- **Server Components** — Layout shell and content aggregator (`HomeContent`) remain server-rendered for optimal performance
- **Shared Animations** — Reusable Framer Motion variants in `src/lib/animations.ts` eliminate duplication across 6+ components

---

## Project Structure

```
emmanuel-portfolio/
├── public/
│   ├── project_image/          # Project screenshots and images
│   ├── manifest.json           # PWA web manifest
│   └── favicon.ico             # Favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata, fonts, JSON-LD
│   │   ├── page.tsx            # Home page composition
│   │   ├── globals.css         # Tailwind, design tokens, component styles
│   │   ├── error.tsx           # Client error boundary
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt configuration
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, ThemeToggle, ThemeProvider, ClientLayout
│   │   ├── sections/           # Hero, About, Experience, Projects, CaseStudies, Skills, Contact, HomeContent
│   │   └── ui/                 # Reusable primitives (SectionHeader, SectionBackground, AnimatedSection,
│   │                             ProjectModal, JsonLd, Preloader, Card, Button, etc.)
│   ├── data/
│   │   ├── navigation.ts       # Nav links, social links, personal info
│   │   ├── projects.ts         # Project data with categories and images
│   │   ├── experience.ts       # Work experience and stats
│   │   ├── skills.ts           # Skill narrative and highlights
│   │   ├── case-studies.ts     # Detailed project case studies
│   │   └── contact.ts          # Contact info and methods
│   ├── hooks/
│   │   └── useScrollspy.ts     # Active section tracking hook
│   └── lib/
│       ├── animations.ts       # Shared Framer Motion variants and easing constants
│       └── utils.ts            # Utility functions (cn, formatDate, scrollToSection, truncateText)
├── tsconfig.json               # TypeScript strict configuration
├── next.config.mjs             # Next.js with React Compiler
├── eslint.config.mjs           # ESLint with Core Web Vitals rules
├── postcss.config.mjs          # PostCSS with Tailwind CSS v4
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.18 or later (LTS recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/hemazyn/emmanuel-portfolio.git
cd emmanuel-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit source files.

### Production Build

```bash
npm run build
npm start
```

---

## Available Scripts

| Script            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the development server with HMR            |
| `npm run build`   | Create an optimized production build              |
| `npm start`       | Start the production server                       |
| `npm run lint`    | Run ESLint with Core Web Vitals rules             |

---

## Sections Overview

### Hero
Parallax-scrolled landing with scroll-driven opacity and scale transforms. Features animated headline reveal, live availability indicator, and dual CTAs (contact + resume download).

### About
Two-column layout: a narrative card describing engineering focus and service areas, and a snapshot card with location, contact info, and a curated technology stack.

### Experience
Carousel-style timeline with desktop sidebar navigation and mobile pill selectors. Each entry includes role, company, description, tech stack, and quantified achievements.

### Projects
Filterable grid with 8 projects across 6 categories. Features thumbnail previews, category badges, external links, and a full-screen modal with image gallery for detailed views.

### Case Studies
Accordion-based deep dives into 4 featured projects. Each study covers: problem → approach → solution → architecture decisions → impact → technologies. Expand/collapse with animated transitions.

### Skills
Two-panel layout: a sticky summary card with 8 high-level skill highlights, and a 6-step vertical narrative showing engineering process from product thinking through delivery. Each step includes a description and relevant technologies.

### Contact
Left: availability badges, copy-to-clipboard email, and direct action buttons (email, WhatsApp). Right: location, contact methods, and social presence links.

---

## SEO & Performance

### Structured Data
- **JSON-LD** with `@graph` combining `Person` and `WebSite` schemas for enhanced search results
- Social profiles linked via `sameAs` property

### Metadata
- Dynamic title template (`%s | Emmanuel Tofunmi`)
- Comprehensive Open Graph and Twitter Card markup
- Canonical URL, publisher, and author metadata
- 15+ targeted keywords for frontend engineering search terms

### Performance Optimizations
- **React Compiler** enabled for automatic memoization
- **TypeScript strict mode** for compile-time error prevention
- **Shared animation variants** reduce bundle duplication
- **CSS-based dark mode** via Tailwind's `dark:` variant — no runtime style computation
- **Semantic HTML** foundation for accessibility and SEO

---

## Design System

The project uses a custom design token system built on Tailwind CSS v4 with CSS custom properties:

### Colors
- **Primary**: Emerald scale (500: `#10b981`) for accents, CTAs, and interactive elements
- **Dark**: 6-level neutral scale (`#0a0a0a` → `#313131`) for dark mode backgrounds
- **Light**: 5-level neutral scale (`#ffffff` → `#cbd5e1`) for light mode surfaces

### Component Classes
- `.glass` / `.glass-strong` — Frosted glass surfaces with backdrop blur
- `.gradient-text` — Emerald gradient text effect
- `.glow-button` — Primary CTA with glow shadow on hover
- `.tag` — Pill-shaped label/category badges
- `.bento-item` — Card surface with hover glow
- `.card-hover` — Hover scale + shadow interaction

### Animation System
- **Easing constants**: `EASE_OUT [0.22, 1, 0.36, 1]`, `EASE_SMOOTH [0.65, 0, 0.35, 1]`
- **CSS keyframes**: `fade-in`, `slide-up`, `slide-down`, `scale-in`, `float`, `glow`, `gradient`
- **Framer Motion variants**: `fadeUp`, `revealVariants`, `cardVariants`, `overlayVariants`, `navItemVariants`

---

## Deployment

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hemazyn/emmanuel-portfolio)

### Environment Variables

No environment variables are required for the base deployment. If adding backend integrations or analytics in the future, store keys in Vercel Environment Variables rather than committing them.

---

## License

This project is **MIT-licensed**. See the [LICENSE](LICENSE) file for details.

The underlying source code — component architecture, animation system, and design tokens — is open for inspiration and learning. The personal branding content (name, photos, project descriptions, case studies) is © Emmanuel Tofunmi.

---

## Contact

**Emmanuel Tofunmi** — Frontend Engineer

<div align="left">
  <a href="https://iamtofunmi.vercel.app/"><b>Website</b></a> ·
  <a href="https://github.com/hemazyn"><b>GitHub</b></a> ·
  <a href="https://www.linkedin.com/in/devemma/"><b>LinkedIn</b></a> ·
  <a href="https://x.com/imanuel_tofunmi"><b>X (Twitter)</b></a> ·
  <a href="mailto:hemazyn@gmail.com"><b>Email</b></a>
</div>

---

<div align="center">
  <sub>Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.</sub>
  <br />
  <sub>Design & Development by <a href="https://github.com/hemazyn">Emmanuel Tofunmi</a></sub>
</div>
