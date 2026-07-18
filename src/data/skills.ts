export const skillNarrative = [
  {
    id: "understand",
    number: "01",
    title: "I start with product thinking and system design",
    description:
      "Before writing code, I break down requirements into user flows, component trees, and data models. I evaluate trade-offs between architecture patterns — SSR vs ISR vs CSR, state management strategies, and bundle optimization approaches — to make informed decisions that scale with the product.",
    stack: ["Product Thinking", "System Design", "Architecture Planning", "UI/UX Principles", "Technical Specifications"],
  },
  {
    id: "build",
    number: "02",
    title: "I build with type-safe, component-driven architecture",
    description:
      "Using React, Next.js, and TypeScript as my core stack, I build component libraries with clearly defined interfaces, strict typing, and composable patterns. I write code that other engineers can read, extend, and test without friction.",
    stack: ["React", "Next.js", "TypeScript", "JavaScript (ES2024+)", "Component Architecture", "Design Systems"],
  },
  {
    id: "test",
    number: "03",
    title: "I test systematically — unit, integration, and E2E",
    description:
      "I write tests as part of the development process, not as an afterthought. Unit tests with Vitest for business logic, integration tests with React Testing Library for component behavior, and E2E tests with Playwright for critical user flows. I aim for meaningful coverage that catches regressions without testing implementation details.",
    stack: ["Vitest", "React Testing Library", "Playwright", "Test-Driven Development", "Mocking & Stubbing", "CI/CD Pipelines"],
  },
  {
    id: "shape",
    number: "04",
    title: "I shape performant, accessible user experiences",
    description:
      "I use Tailwind CSS, animation libraries, and responsive design patterns to create polished interfaces — but never at the expense of performance or accessibility. I optimize Core Web Vitals (LCP, FID, CLS), ensure WCAG 2.1 AA compliance, and use semantic HTML as the foundation of every component.",
    stack: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Web Accessibility (WCAG)", "Core Web Vitals", "CSS Architecture"],
  },
  {
    id: "connect",
    number: "05",
    title: "I connect frontends to real-world systems",
    description:
      "From fintech dashboards to CRM platforms and embedded widgets, I integrate REST and GraphQL APIs, manage complex application state (server state with React Query, client state with Zustand), handle real-time updates, and structure frontend logic around actual product workflows. I've built admin panels, payment flows, KYC interfaces, and data-heavy reporting dashboards.",
    stack: ["REST APIs", "GraphQL", "React Query / TanStack Query", "Zustand", "Real-time Systems", "Admin Dashboards", "Fintech UX"],
  },
  {
    id: "ship",
    number: "06",
    title: "I optimize, document, and ship with confidence",
    description:
      "Before deploying, I audit performance budgets, review bundle sizes, check accessibility compliance, and ensure the code is properly typed and tested. I use Git workflows, code reviews, and CI/CD pipelines to ship reliable software — not just code that works on my machine.",
    stack: ["Performance Optimization", "Bundle Analysis", "Git & GitHub", "Code Review", "CI/CD (Vercel, GitHub Actions)", "Technical Documentation"],
  },
]

export const skillHighlights = [
  "TypeScript-first component architecture",
  "System design and architecture decisions",
  "Test-driven development (Vitest + RTL + Playwright)",
  "Core Web Vitals and performance optimization",
  "WCAG 2.1 AA accessible interfaces",
  "State management with React Query & Zustand",
  "Design systems and reusable component libraries",
  "CI/CD pipelines and automated quality gates",
]
