/** Site content — edit social URLs here before deploy */

/** Hero subtitle — backend + platform, with explicit mobile depth */
export const headline =
  "Software Engineer | Backend & APIs (Laravel, Symfony, REST) · Mobile (Kotlin/Android, Swift/iOS, Flutter) · Data (MySQL, PostgreSQL, Redis) · Docker · CI/CD | Germany";

/** Shorter title for browser tab / SEO */
export const metaTitle = "Software Engineer | Backend · Mobile · Laravel · Symfony · Kotlin · Flutter | Germany";

/** One line for header / footer under your name */
export const roleSubtitle = "Backend · Mobile · Software Engineer";

/** Open Graph / Twitter card title (keep concise) */
export const socialCardTitle = "Software Engineer · Backend & Mobile";

export const site = {
  name: "Sameh Bakleh",
  tagline:
    "Senior software engineer with strong backend and mobile experience — APIs and services (Laravel, Symfony, Node), data (SQL, Redis), Docker & CI/CD, plus Android, iOS, and Flutter in production. Former mobile team lead; open to senior backend, mobile, or hybrid engineering roles in Germany.",
  email: "samhbkeng1992@gmail.com",
  phone: "+49 177 797 7187",
  location: "Bochum, Germany (location flexible)",
  linkedin: "https://www.linkedin.com/in/sameh-bakleh-b177b1189",
  /** Full profile URL — not just https://github.com/ (breaks CTAs until set) */
  github: "https://github.com/samhbk",
  workAuth: "Chancenkarte — Eligible to work in Germany",
  availability: "Immediate",
  /** Long-form availability for recruiters */
  availabilityDetail:
    "I am flexible with starting date and could begin reasonably soon, depending on agreement.",
  workMode: "Remote · Hybrid · On-site (Germany)",
  operatorRole: "BACKEND_MOBILE_SWE",
  /** Public CV (PDF/Drive, etc.) — leave empty to hide “Resume” in hero & command palette */
  resumeUrl: "",
} as const;

/** `null` when `site.github` is still the generic host (hide broken GitHub buttons). */
export function githubProfileHref(): string | null {
  const normalized = site.github.replace(/\/+$/, "");
  if (normalized === "https://github.com") return null;
  return site.github;
}

/** About — backend + mobile leadership, accurate breadth */
export const aboutParagraphs = [
  "I am a software engineer with 7+ years of experience designing and shipping production backend systems, APIs, and data layers used by real users and partner teams.",
  "On the server side I focus on Laravel and Symfony, REST API design, authentication (JWT/OAuth2), SQL (MySQL, PostgreSQL), Redis for cache and performance, and contracts that keep mobile, web, and internal clients predictable.",
  "I also have deep mobile experience: I have led Android, iOS, and Flutter teams as a mobile team lead, shipped native and cross-platform apps (Kotlin/Jetpack/MVVM/Clean Architecture, Swift, Flutter/Bloc), and published multiple products to the App Store and Google Play — always in sync with the APIs and release trains behind them.",
  "I automate delivery with Docker, GitLab CI/CD, and solid testing discipline, and I apply SOLID, clean architecture, and pragmatic API versioning so systems stay evolvable under load.",
  "I mentor engineers, run architecture and code reviews, and own roadmaps from requirements through deployment — bridging backend and mobile when integration, performance, and store readiness matter.",
  "Open to Senior / Staff Backend Engineer, Senior Mobile / Android / Flutter roles, Mobile Team Lead, or technical leadership in Germany (Remote, Hybrid, On-site).",
] as const;

export const education =
  "B.Sc. Software Engineering — Yarmouk Private University (2010–2016) · GPA 3.2/4.0";

export const languages = [
  "Arabic — Native / Bilingual",
  "English — Professional working proficiency",
  "German — A2 (improving)",
] as const;

export const openToRoles = [
  "Senior Backend Engineer",
  "Software Engineer (Backend / Full-stack)",
  "Mobile Team Lead",
  "Senior Mobile Engineer",
  "Senior Android Engineer (Kotlin)",
  "Flutter Developer",
  "Technical Lead (Engineering)",
  "Platform / API Engineer",
] as const;

export type PublishedApp = { name: string; url: string; note?: string };

export const publishedMobileIntro =
  "Mobile is a first-class part of my experience — team leadership, native and Flutter, store releases, and real user scale. Representative App Store & Play listings:";

export const publishedMobileAppsIos: PublishedApp[] = [
  { name: "Petra Ride", url: "https://apps.apple.com/ee/app/petra-ride/id1463809354" },
  { name: "Forsa", url: "https://apps.apple.com/us/app/forsa/id6737195314" },
  { name: "MEA Real Estate", url: "https://apps.apple.com/us/app/mea-real-estate/id6444905425" },
  {
    name: "Tareeq (طريق)",
    url: "https://apps.apple.com/us/app/%D8%B7%D8%B1%D9%8A%D9%82/id6738869040",
  },
];

export const publishedMobileAppsAndroid: PublishedApp[] = [
  {
    name: "Adde Dollar",
    note: "Currency & Commodities Tracker · 1M+ downloads",
    url: "https://play.google.com/store/apps/details?id=com.dollarade.ade",
  },
  {
    name: "Petra Ride",
    note: "Ride-hailing & delivery · 1M+ downloads",
    url: "https://play.google.com/store/apps/details?id=com.PetraRide_User",
  },
  {
    name: "Tareeq",
    note: "Ride booking & delivery platform",
    url: "https://play.google.com/store/apps/details?id=com.syweb.tareeq",
  },
  {
    name: "Forsa",
    note: "Recruitment platform",
    url: "https://play.google.com/store/apps/details?id=com.sy.forsa",
  },
  {
    name: "MEA Real Estate",
    note: "Property search",
    url: "https://play.google.com/store/apps/details?id=tech.cloudsystems.mearealestate",
  },
  {
    name: "Campnsea",
    note: "Outdoor e-commerce",
    url: "https://play.google.com/store/apps/details?id=campnsea.android.app",
  },
];

export const publishedMobileOutro =
  "Strong integration mindset — auth, pagination, caching, and release discipline on the client side, always aligned with stable server contracts and observability.";

export type LiveWebShowcase = {
  name: string;
  url: string;
  description: string;
};

/** Live backend / API / frontend products */
export const liveWebShowcases: LiveWebShowcase[] = [
  {
    name: "Views Bank",
    url: "https://viewsbank.app/",
    description:
      "Rewards platform: users earn points from video engagement and redeem with partners — apps, APIs, and marketing site.",
  },
  {
    name: "Leaders Translation",
    url: "https://leaderstranslation.com/",
    description: "Translation services: public web presence and client-facing flows.",
  },
  {
    name: "Forsa Syria",
    url: "https://forsa.sy/",
    description: "Jobs & recruitment platform for Syria — web product aligned with the Forsa mobile apps.",
  },
  {
    name: "Outmartt",
    url: "https://outmartt.com/",
    description: "Commercial web product — brand, catalog, and customer journeys.",
  },
];

export const heroCode = `import { Engineer } from './platform';

const Profile = () => {
  return (
    <Engineer
      name="Sameh Bakleh"
      role="Software Engineer · Backend & Mobile"
      stack="Laravel · Symfony · Kotlin · Swift · Flutter · REST · Docker"
    />
  );
};`;

export const stats = [
  { label: "EXPERIENCE", value: "7+ YRS" },
  { label: "FOCUS", value: "API · MOBILE" },
  { label: "TARGET_ROLES", value: "8" },
  { label: "STATUS", value: "OPEN TO WORK" },
];

/** Skills — backend first, then delivery, then client integration */
export const skills = [
  {
    category: "Backend & APIs",
    items: [
      "Laravel",
      "Symfony",
      "PHP",
      "RESTful APIs",
      "API Design",
      "OpenAPI / Swagger",
      "JWT / OAuth2",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Message queues (basics)",
    ],
  },
  {
    category: "Engineering & Delivery",
    items: [
      "Docker",
      "GitLab CI/CD",
      "Git",
      "Agile / Scrum",
      "SOLID Principles",
      "Clean Architecture",
      "Clean Code",
      "Code Review",
      "Automated Testing",
      "Scalable Architecture",
      "Microservices (basics)",
    ],
  },
  {
    category: "Mobile & client apps",
    items: [
      "Kotlin / Android",
      "Jetpack",
      "MVVM",
      "Clean Architecture (mobile)",
      "Swift / iOS",
      "Flutter",
      "Bloc",
      "REST client integration",
      "Next.js",
      "Fastlane",
    ],
  },
];

export type ExperienceItem = {
  id: string;
  period: string;
  location: string;
  company: string;
  title: string;
  bullets: string[];
  stack: string[];
};

/** Non-overlapping timeline — newest first */
export const experience: ExperienceItem[] = [
  {
    id: "brainycode-tech",
    period: "January 2025 - February 2026 (1 year 2 months)",
    location: "Beirut Governorate, Lebanon",
    company: "BrainyCode Tech",
    title: "Senior Backend & Mobile Team Lead",
    bullets: [
      "Led the architecture and delivery of scalable mobile and backend systems across multiple production projects.",
      "Designed and built mobile applications using Kotlin (Jetpack, MVVM), Swift (iOS), and Flutter",
      "Developed backend systems using Laravel and Symfony with RESTful APIs",
      "Defined API standards (JWT, OAuth2, versioning, validation layers)",
      "Improved system performance using Redis caching, reducing database load",
      "Established CI/CD pipelines using GitLab CI/CD, Docker, and Fastlane",
      "Led Agile/Scrum processes and managed a cross-functional engineering team",
      "Introduced code review practices and automated testing strategies",
      "Managed full product lifecycle from requirements to deployment",
    ],
    stack: [
      "Kotlin",
      "Jetpack",
      "MVVM",
      "Swift (iOS)",
      "Flutter",
      "Laravel",
      "Symfony",
      "RESTful APIs",
      "JWT",
      "OAuth2",
      "API versioning",
      "Validation layers",
      "Redis caching",
      "GitLab CI/CD",
      "Docker",
      "Fastlane",
      "Agile/Scrum",
      "Cross-functional leadership",
      "Automated testing",
    ],
  },
  {
    id: "anorizontech",
    period: "September 2023 - December 2024 (1 year 4 months)",
    location: "Damascus Governorate, Syria",
    company: "AnorizonTech",
    title: "Senior Backend Engineer",
    bullets: [
      "Designed and developed secure, scalable backend systems, optimizing performance and ensuring maintainable architectures.",
      "Developed Laravel-based systems with Role-Based Access Control (RBAC) for secure and scalable architectures",
      "Refactored complex database queries, eliminating N+1 issues to improve admin dashboard performance",
      "Built secure and efficient RESTful APIs with API versioning and input validation",
    ],
    stack: [
      "Laravel",
      "RBAC",
      "N+1 elimination",
      "Admin dashboard performance",
      "RESTful APIs",
      "API versioning",
      "Input validation",
      "Database optimization",
    ],
  },
  {
    id: "forsa-sy",
    period: "January 2024 - August 2024 (8 months)",
    location: "Damascus Governorate, Syria",
    company: "Forsa.sy",
    title: "Senior Backend Engineer",
    bullets: [
      "Developed and optimized backend systems for a high-traffic recruitment platform, focusing on performance, scalability, and code quality.",
      "Built and optimized REST APIs, integrating Redis for caching to improve performance",
      "Reduced response times and server load by restructuring validation and request-handling workflows",
      "Mentored junior developers and standardized backend code structures across the team",
    ],
    stack: [
      "REST APIs",
      "Redis",
      "Validation",
      "Request-handling workflows",
      "Performance",
      "Scalability",
      "Code quality",
      "Mentoring",
    ],
  },
  {
    id: "cloud-systems-sarl",
    period: "May 2022 - December 2023 (1 year 8 months)",
    location: "Beirut Governorate, Lebanon",
    company: "Cloud Systems SARL",
    title: "Senior Mobile Team Lead",
    bullets: [
      "Led iOS development and managed a team delivering high-performance mobile applications.",
      "Developed scalable iOS applications using Swift",
      "Led and mentored a team of mobile developers",
      "Participated in architecture, planning, and App Store delivery",
      "Improved code quality and maintainability using best practices",
      "Aligned development with business goals using Agile methodologies",
    ],
    stack: ["Swift", "iOS", "App Store delivery", "Agile methodologies", "Team leadership", "Architecture & planning"],
  },
  {
    id: "arcadous",
    period: "May 2021 - April 2022 (1 year)",
    location: "Beirut Governorate, Lebanon",
    company: "Arcadous",
    title: "Full Stack Engineer",
    bullets: [
      "Built scalable web applications and backend services across the full stack.",
      "Developed backend systems using Laravel and Symfony",
      "Built REST APIs with JWT and OAuth2 authentication",
      "Developed frontend applications using Next.js",
      "Optimized databases (MySQL, PostgreSQL) for performance",
      "Implemented Redis caching for scalability",
      "Used Docker and CI/CD pipelines for deployment automation",
    ],
    stack: [
      "Laravel",
      "Symfony",
      "JWT",
      "OAuth2",
      "Next.js",
      "MySQL",
      "PostgreSQL",
      "Redis caching",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: "magma-global",
    period: "February 2019 - March 2021 (2 years 2 months)",
    location: "Beirut Governorate, Lebanon",
    company: "Magma Global",
    title: "Mobile Application Developer",
    bullets: [
      "Developed native mobile applications for Android and iOS platforms.",
      "Built Android apps using Kotlin and Java",
      "Developed iOS apps using Swift",
      "Reduced crash rates by ~50% through code refactoring",
      "Implemented secure authentication (JWT, OAuth2)",
      "Improved performance and application stability",
    ],
    stack: ["Kotlin", "Java", "Swift", "Android", "iOS", "JWT", "OAuth2", "Performance", "Stability"],
  },
  {
    id: "creapix",
    period: "September 2018 - January 2019 (5 months)",
    location: "Beirut Governorate, Lebanon",
    company: "Creapix",
    title: "Full-Stack Developer",
    bullets: [
      "Developed innovative and efficient software solutions for clients, delivering high-quality applications across the full technology stack.",
      "Developed applications using PHP, Laravel, and JavaScript",
      "Collaborated with cross-functional teams to meet client requirements and deadlines",
      "Provided technical guidance and mentored junior developers",
      "Researched and implemented new technologies to improve development processes",
      "Designed and optimized database schemas and queries for performance and scalability",
      "Ensured application security and performance through rigorous testing and monitoring",
    ],
    stack: ["PHP", "Laravel", "JavaScript", "Database schemas", "Performance", "Scalability", "Security", "Testing", "Monitoring"],
  },
  {
    id: "dreamwd",
    period: "February 2016 - June 2018 (2 years 5 months)",
    location: "Doha, Qatar",
    company: "DreamWD",
    title: "Mobile Application Developer",
    bullets: [
      "Developed and implemented mobile application strategies for both iOS and Android platforms, focusing on performance, usability, and maintainable architecture.",
      "Developed mobile applications using Swift (iOS) and Kotlin / Java (Android)",
      "Collaborated closely with the design team to create intuitive and user-friendly interfaces",
      "Took ownership of the mobile codebase, ensuring clean, maintainable, and high-quality implementations",
      "Led and mentored a team of junior mobile developers",
      "Integrated various APIs and third-party services into mobile applications",
      "Conducted usability testing and incorporated feedback to continuously improve the user experience",
    ],
    stack: ["Swift", "Kotlin / Java", "Android", "iOS", "Usability testing", "API integration", "Third-party services", "Team leadership"],
  },
];

export type ProjectItem = {
  name: string;
  /** Workspace folder in the portfolio monorepo */
  folder: string;
  description: string;
  stack: string[];
  highlight: string;
  demo?: string;
  repo?: string;
};

/** Every app in `new repo` (excluding archives of tooling-only zips) */
export const projects: ProjectItem[] = [
  {
    name: "Marketplace Platform",
    folder: "marketplace-platform/",
    description:
      "Production monorepo: Laravel 13 REST API (JWT, RBAC, Swagger), Next.js 16 storefront & seller dashboard, Docker (PHP-FPM, Nginx, MySQL, Redis).",
    stack: ["Laravel", "Next.js", "TypeScript", "Tailwind", "Docker", "MySQL", "Redis"],
    highlight: "Laravel",
    repo: site.github,
  },
  {
    name: "Marketplace Platform API",
    folder: "marketplace-platform-api/",
    description:
      "Symfony 7 marketplace API: JWT + refresh, MySQL, Redis (cache + Messenger), Nelmio OpenAPI, Docker. Roles: Admin, Seller, Customer.",
    stack: ["Symfony", "PHP", "MySQL", "Redis", "Docker", "OpenAPI"],
    highlight: "Symfony",
    repo: site.github,
  },
  {
    name: "Marketplace API (Laravel copy)",
    folder: "marketplace-platform-api-laravel-copy/",
    description: "Laravel API workspace variant — reference / parallel implementation alongside the Symfony service.",
    stack: ["Laravel", "PHP", "REST"],
    highlight: "Laravel",
    repo: site.github,
  },
  {
    name: "Marketplace API (Laravel archive)",
    folder: "marketplace-platform-api-laravel-archive/",
    description: "Archived Laravel API snapshot for the marketplace domain (history / comparison).",
    stack: ["Laravel", "PHP"],
    highlight: "Laravel",
    repo: site.github,
  },
  {
    name: "Marketplace (iOS)",
    folder: "MarketplaceApp/",
    description:
      "SwiftUI marketplace client: MVVM, Combine, Alamofire; bearer auth and paginated resources against a Laravel-style JSON API.",
    stack: ["Swift", "SwiftUI", "Combine", "iOS"],
    highlight: "Swift",
    repo: site.github,
  },
  {
    name: "Android Marketplace",
    folder: "android-marketplace/",
    description: "Native Android marketplace app (Kotlin, Jetpack) aligned with marketplace platform APIs.",
    stack: ["Kotlin", "Jetpack", "Gradle", "REST"],
    highlight: "Kotlin",
    repo: site.github,
  },
  {
    name: "Booking System API",
    folder: "booking-system-api/",
    description:
      "Laravel REST API: JWT, bookable resources, availability & overlap-safe bookings, Redis caching, queues, API versioning, Swagger.",
    stack: ["Laravel", "PHP", "MySQL", "Redis", "REST"],
    highlight: "Laravel",
    repo: site.github,
  },
  {
    name: "Recruitment Platform",
    folder: "recruitment-platform-laravel/",
    description:
      "Scalable job portal: JWT, listings, applicant tracking, salary analytics, Redis, clean architecture.",
    stack: ["Laravel", "MySQL", "Redis", "JWT", "PHP"],
    highlight: "Laravel",
    repo: site.github,
  },
  {
    name: "E-Commerce Platform",
    folder: "ecommerce-platform/",
    description:
      "Full-stack commerce: Node/Express + Next.js, MongoDB, JWT/RBAC, Stripe checkout, Docker, GitHub Actions CI.",
    stack: ["Node.js", "Next.js", "MongoDB", "Stripe", "Docker"],
    highlight: "Next.js",
    repo: site.github,
  },
  {
    name: "Real-Time Chat Application",
    folder: "chat-app/",
    description: "Private & group chat, message history, WebSockets, Node/Express backend, React frontend.",
    stack: ["Node.js", "Express", "Socket.io", "MongoDB", "React"],
    highlight: "Node.js",
    repo: site.github,
  },
  {
    name: "iOS Chat App",
    folder: "ios-chat-app/",
    description:
      "Native iOS realtime chat: Swift/SwiftUI patterns, Firebase Auth, Firestore or RTDB, FCM, media & delivery states.",
    stack: ["Swift", "SwiftUI", "Firebase", "iOS"],
    highlight: "Swift",
    repo: site.github,
  },
  {
    name: "Analytics Dashboard",
    folder: "nextjs-dashboard/",
    description: "Next.js dashboard with KPIs, charts, activity tables — admin-style analytics UI.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    highlight: "Next.js",
    repo: site.github,
  },
  {
    name: "Task Management System",
    folder: "task-management-system/",
    description:
      "Spring Boot + React/TS: JWT, RBAC, tasks CRUD, calendar view, Docker Compose, GitHub Actions.",
    stack: ["Spring Boot", "Java", "React", "TypeScript", "PostgreSQL", "Docker"],
    highlight: "Spring",
    repo: site.github,
  },
  {
    name: "Personal Finance Tracker",
    folder: "personal-finance-tracker/",
    description: "Income/expense tracking, budgets, categories, reports & charts; Node/Express, React, MongoDB, Docker CI.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Tailwind", "Docker"],
    highlight: "React",
    repo: site.github,
  },
  {
    name: "Developer Portfolio (this site)",
    folder: "sameh-portfolio/",
    description:
      "Terminal-inspired portfolio: Next.js App Router, TypeScript, Tailwind, Framer Motion — your public profile.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    highlight: "Next.js",
    repo: site.github,
  },
];

export const navItems = [
  { id: "home", label: "Home", file: "main.ts" },
  { id: "about", label: "About", file: "about.md" },
  { id: "skills", label: "Skills", file: "skills.json" },
  { id: "experience", label: "Experience", file: "experience.git" },
  { id: "projects", label: "Projects", file: "projects/" },
  { id: "showcase", label: "Showcase", file: "live/refs" },
  { id: "stats", label: "Stats", file: "metrics.db" },
  { id: "contact", label: "Contact", file: "contact.sh" },
] as const;

export const loadedModules = [
  "LARAVEL",
  "SYMFONY",
  "REST",
  "KOTLIN",
  "SWIFT",
  "FLUTTER",
  "DOCKER",
];
