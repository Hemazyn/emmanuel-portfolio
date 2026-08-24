<div align="center">
  <br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Status-Live-10b981?style=flat-square&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Status-Live-10b981?style=flat-square&labelColor=f5f5f4" alt="Status" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&labelColor=f5f5f4" alt="Next.js" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&labelColor=f5f5f4" alt="React" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&labelColor=f5f5f4" alt="TypeScript" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&labelColor=f5f5f4" alt="Tailwind CSS" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square&labelColor=f5f5f4" alt="License" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&labelColor=1a1a1a" />
    <img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&labelColor=f5f5f4" alt="Vitest" />
  </picture>
  <br />
  <br />
</div>

<!-- Preview -->
<div align="center">
  <a href="https://iamtofunmi.vercel.app/">
    <img src="https://iamtofunmi.vercel.app/opengraph-image" alt="Emmanuel Tofunmi — Frontend Engineer Portfolio" width="100%" />
  </a>
  <br />
  <br />
</div>

# Emmanuel Tofunmi — Frontend Engineer Portfolio

> **Product-grade interfaces for CRM systems, admin dashboards, fintech platforms, high-end websites, and embedded widgets.**

A polished, performant, accessible, and tested single-page portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Brutalist design with green accent, hard edges, and VT323 display font — inspired by editorial and technical documentation aesthetics.

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
- [Design System](#design-system)
- [Testing](#testing)
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
- **Server/Client Component Split** — Static sections use a server wrapper with a client interactive child, reducing client JavaScript
- **Image Optimization** — All project images use `next/image` with `fill`, `sizes`, and `loading="lazy"` for optimal Core Web Vitals

### SEO & Accessibility
- **JSON-LD Structured Data** — Person + WebSite schemas via `@graph` for rich search results
- **Dynamic Sitemap** — Auto-generated `sitemap.ts` for search engine discovery
- **Robots.txt** — Configurable via `robots.ts`
- **Web Manifest** — PWA-friendly `manifest.json` with green theme and standalone display
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
| **Fonts**           | VT323 (display), Source Serif 4 (body), JetBrains Mono (monospace) via `next/font` |
| **Testing**         | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) + [jsdom](https://github.com/jsdom/jsdom) + [Playwright](https://playwright.dev/) (E2E) |
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
- **Server/Client Split Pattern** — Sections like About, Skills, and Footer follow a server-wrapper pattern: the outer components are server components that import static data and pass it to client children that handle animations and interactivity
- **Shared Animations** — Reusable Framer Motion variants in `src/lib/animations.ts` eliminate duplication across 6+ components

---

## Project Structure

```
emmanuel-portfolio/
├── public/
│   ├── project_image/          # Project screenshots and images
│   ├── resume/                 # Resume PDF download
│   └── manifest.json           # PWA web manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata, fonts, JSON-LD
│   │   ├── page.tsx            # Home page composition
│   │   ├── globals.css         # Tailwind, design tokens, component styles
│   │   ├── error.tsx           # Client error boundary
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── icon.tsx            # Dynamic favicon (brutalist green/border)
│   │   ├── apple-icon.tsx      # Dynamic Apple touch icon
│   │   ├── opengraph-image.tsx # Dynamic OG image
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt configuration
│   ├── __tests__/
│   │   ├── utils.test.ts       # Unit tests for utility functions
│   │   └── components/
│   │       └── ui/
│   │           └── SectionBackground.test.tsx
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, ThemeToggle, ThemeProvider, ClientLayout
│   │   ├── sections/           # Hero, About, Experience, Projects, CaseStudies,
│   │   │                         Skills, Contact, HomeContent
│   │   └── ui/                 # SectionHeader, SectionBackground, ProjectModal,
│   │                             JsonLd, Preloader
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
│       ├── utils.ts            # Utility functions (cn, formatDate, scrollToSection)
│       └── og.ts               # Font loading for OG image generation
├── e2e/
│   └── home.spec.ts            # Playwright E2E tests
├── vitest.config.ts            # Vitest configuration
├── vitest.setup.ts             # Test environment setup
├── playwright.config.ts        # Playwright E2E configuration
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
| `npm test`        | Run all unit/integration tests with Vitest        |
| `npm run test:watch` | Run tests in watch mode                       |
| `npm run test:coverage` | Run tests with V8 coverage report            |
| `npm run typecheck` | Type-check without emitting                   |
| `npm run lint`    | Run ESLint with Core Web Vitals rules             |
| `npm run e2e`     | Run Playwright end-to-end tests                   |

---

## Sections Overview

### Hero
Parallax-scrolled landing with scroll-driven opacity and scale transforms. Features animated headline reveal, live availability indicator, and dual CTAs (contact + resume download).

### About
Two-column layout: a narrative card describing engineering focus and service areas, and a snapshot card with location, contact info, and a curated technology stack.

### Experience
Carousel-style timeline with desktop sidebar navigation and mobile pill selectors. Each entry includes role, company, description, tech stack, and quantified achievements.

### Projects
Filterable 3-column grid with projects across 6 categories. Features compact cards with green accent borders, category badges, external links, and a full-screen modal with image gallery.

### Case Studies
Accordion-based deep dives into featured projects. Each study covers: problem → approach → solution → architecture decisions → impact → technologies. Expand/collapse with animated transitions.

### Skills
Two-panel layout: a sticky summary card with skill highlights, and a 6-step vertical narrative showing engineering process from product thinking through delivery. Each step includes a description and relevant technologies.

### Contact
Left: availability badges, copy-to-clipboard email, and direct action buttons (email, WhatsApp). Right: location, contact methods, and social presence links.

---

## Design System

The project uses a brutalist design language with green accent — inspired by editorial and technical documentation aesthetics.

### Colors
- **Light mode**: Warm cream background (`#fafaf5`), paper surface (`#f3f1e8`), dark ink text (`#1a1a1a`)
- **Dark mode**: Pure black background (`#0a0a0a`), dark gray surface (`#141414`), light ink text (`#e8e6dc`)
- **Accent**: Green (`#10b981` light / `#34d399` dark) for CTAs, links, and interactive elements

### Typography
- **Display/Headings**: VT323 — retro monospace for section titles and headings
- **Body**: Source Serif 4 — elegant serif for paragraphs and descriptions
- **Mono/Labels**: JetBrains Mono — for section labels, tags, and code

### Component Classes
- `.glass` / `.glass-strong` — Paper surface with subtle border (brutalist, no border-radius)
- `.btn` / `.btn-primary` / `.btn-secondary` — Hard-edge buttons with mono font, uppercase text
- `.glow-button` — Primary CTA with green background
- `.tag` — Hard-edge label/category badges with green tint
- `.ascii-rule` — Decorative dashed divider (green accent)
- `.dot-pattern` / `.grid-pattern` — Subtle background textures

### Design Principles
- **Zero border-radius** — Hard edges throughout for brutalist aesthetic
- **Mono labels** — Section labels and tags use JetBrains Mono uppercase
- **Dot grid background** — Subtle paper-like texture on body and sections
- **Green accent only** — No blue or other accent colors anywhere

---

## Testing

### Unit & Integration Tests (Vitest)
- **Vitest** with jsdom environment for fast, native-ESM test execution
- **React Testing Library** for component render and interaction tests
- **17 tests** across 4 test files covering utilities, UI components, and navigation
- **V8 coverage** reporting available via `npm run test:coverage`

### End-to-End Tests (Playwright)
- **Playwright** E2E tests for critical user flows
- Tests cover: page rendering, project modal (accessible dialog + Escape close), mobile navigation toggle, case study accordion expand
- Uses system Chrome (no browser download needed)
- Run via `npm run e2e`

---

## Deployment

The site is deployed on **[Vercel](https://vercel.com/)** with automatic deployments from the `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hemazyn/emmanuel-portfolio)

---

## License

This project is **MIT-licensed**. See the [LICENSE](LICENSE) file for details.

---

## Contact

**Emmanuel Tofunmi** — Frontend Engineer

<div align="left">
  <a href="https://iamtofunmi.vercel.app/"><b>Website</b></a> ·
  <a href="https://github.com/hemazyn"><b>GitHub</b></a> ·
  <a href="https://www.linkedin.com/in/devemma/"><b>LinkedIn</b></a> ·
  <a href="https://x.com/imanuel_tofunmi"><b>X (Twitter)</b></a> ·
  <a href="mailto:immanueltofunmi@gmail.com"><b>Email</b></a>
</div>

---

<div align="center">
  <sub>Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.</sub>
  <br />
  <sub>Tested with Vitest, React Testing Library, and Playwright.</sub>
  <br />
  <sub>Design & Development by <a href="https://github.com/hemazyn">Emmanuel Tofunmi</a></sub>
</div>
