export interface CaseStudy {
  id: number
  projectId: number
  title: string
  subtitle: string
  category: string
  problem: string
  approach: string
  solution: string
  impact: string[]
  technologies: string[]
  architecture: string[]
  role: string
  duration: string
  team: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    projectId: 4,
    title: "TaskFlow",
    subtitle: "Errand & service management CRM",
    category: "CRM / Admin",
    problem: "TaskFlow needed a CRM platform for managing everyday errands and service operations, including market runs, grocery shopping, meal prep, and cleaning services. The product required a lightweight customer booking flow and an admin interface for scheduling, client management, and order coordination.",
    approach: "I focused on creating a clear separation between the customer journey and the operations experience — keeping the booking flow simple and intuitive for users, while making the admin side more comprehensive for internal coordination and service management.",
    solution: "Built the frontend for both the customer-facing booking experience and the admin dashboard using Next.js and React. Implemented service selection, scheduling, order tracking, and operational screens for managing clients, requests, and service workflows.",
    impact: ["Delivered a functional CRM with customer-facing and admin interfaces", "Built an intuitive booking flow for service selection and scheduling", "Created admin tools for managing orders, clients, and service operations", "Supported smoother coordination of day-to-day service requests"],
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "REST APIs", "Zustand"],
    architecture: ["Dual-interface architecture (customer + admin)", "Role-based access control", "Responsive design for mobile booking", "Structured data flow for scheduling and service operations"],
    role: "Frontend Engineer",
    duration: "Project-based engagement",
    team: "Small product team with frontend and backend collaboration",
  },
  {
    id: 2,
    projectId: 2,
    title: "SpectraPay",
    subtitle: "Crypto wallet & payment platform",
    category: "Fintech",
    problem: "SpectraPay needed a customer-facing dashboard that could handle complex fintech operations — wallet management, crypto-to-Naira conversions, KYC verification flows, gift card trading, and instant bank withdrawals — within a single cohesive interface. The challenge was balancing security-sensitive workflows with a smooth and intuitive user experience.",
    approach: "I worked directly with the founder in a pre-seed, cross-functional team, taking primary responsibility for the frontend experience while collaborating with other team members across product delivery. We mapped the core user journeys — onboarding, KYC, wallet management, and payments — and structured the dashboard to support fast iteration without overcomplicating the product.",
    solution: "Built a responsive Next.js dashboard with TypeScript to support complex fintech user flows. Implemented KYC submission interfaces, wallet and transaction views, payment-related screens, and admin-facing operational interfaces, using Tailwind CSS for fast and consistent UI development.",
    impact: ["Delivered a production-ready fintech dashboard supporting core wallet and payment workflows", "Built wallet management and transaction interfaces from the ground up", "Implemented secure UI flows for KYC, payments, and user onboarding", "Took strong ownership of frontend delivery in a fast-moving startup environment"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    architecture: ["Component-driven UI architecture", "Responsive mobile-first design", "Secure form handling with validation", "Structured dashboard flows for fintech operations"],
    role: "Frontend Engineer",
    duration: "Ongoing",
    team: "Founder-led cross-functional team with frontend, mobile, and operations/marketing contributors",
  },
  {
    id: 3,
    projectId: 1,
    title: "Oyato",
    subtitle: "Full-scale e-commerce platform",
    category: "E-Commerce",
    problem: "Oyato needed a full e-commerce platform for electronics and mobile brands, including a product catalog, search and filtering, a Pay Later option, inventory visibility, and operational admin tools. The product also needed strong performance and SEO support for product discovery.",
    approach: "Working as part of the Tech 201 team, I focused on the customer-facing website and admin dashboard, aligning frontend implementation with backend services and broader product requirements. A key decision was using SSR for SEO-critical pages while keeping interactive shopping flows responsive on the client side.",
    solution: "Built and maintained the Oyato website and admin dashboard using Next.js and React. Implemented product listing and discovery flows, search and filtering, pay-later related user flows, and admin interfaces for managing products, inventory, and operational tasks.",
    impact: ["Built the customer-facing website and admin dashboard for a production e-commerce platform", "Implemented product catalog, search, filtering, and shopping-related user flows", "Supported the Oyato Pay Later experience within the purchase journey", "Built admin interfaces for inventory visibility and operational management"],
    technologies: ["Next.js", "React", "Tailwind CSS", "REST APIs", "State Management"],
    architecture: ["SSR for SEO-critical product pages", "Client-side state for interactive shopping flows", "Optimized image and data loading strategies", "Admin dashboard architecture for product and inventory management"],
    role: "Frontend Developer",
    duration: "Multi-phase product development",
    team: "Cross-functional team at Tech 201 with frontend, backend, mobile, and product contributors",
  },
  {
    id: 4,
    projectId: 3,
    title: "Omavon",
    subtitle: "Crypto payment integration platform",
    category: "Fintech",
    problem: "Omavon needed a platform that enables businesses to accept crypto payments through an embeddable experience that felt simple and familiar. The main challenge was supporting a lightweight widget integration while maintaining a secure and reliable payment flow for merchants and end users.",
    approach: "As part of the Tech 201 team, I contributed to the frontend experience around the payment widget and merchant-facing interfaces. The focus was on keeping the integration flow straightforward for merchants while supporting secure embedded interactions and clear transaction visibility.",
    solution: "Built frontend interfaces for the payment widget and merchant dashboard, including payment flow screens, merchant configuration views, and transaction monitoring interfaces. Supported the embedded widget experience and merchant tools needed for managing crypto payment activity.",
    impact: ["Contributed to the embeddable widget experience for low-friction merchant integration", "Built merchant dashboard interfaces for transaction monitoring and widget management", "Supported secure interaction patterns for embedded payment flows", "Helped simplify crypto payments into a more familiar business checkout experience"],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.Js"],
    architecture: ["Embeddable iframe widget architecture", "Cross-origin secure communication", "Standalone frontend integration pattern", "Responsive payment flow design"],
    role: "Frontend Developer",
    duration: "Multi-phase product development",
    team: "Cross-functional team at Tech 201 with frontend, backend, mobile, and product contributors",
  },
]
