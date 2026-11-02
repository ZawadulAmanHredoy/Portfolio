import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillDomains = [
    {
      id: "frontend",
      num: "01",
      title: "Frontend Engineering",
      role: "REACTIVE COMPONENT ARCHITECTURES",
      icon: Code2,
      description:
        "Building accessible, zero-jank, sub-100ms render user interfaces with modular state synchronization.",
      technologies: [
        { name: "React 19 / 18", role: "Primary Framework" },
        { name: "TypeScript", role: "Type Safety" },
        { name: "Next.js", role: "SSR & App Router" },
        { name: "Tailwind CSS", role: "Atomic Styling" },
        { name: "TanStack Query v5", role: "Server Cache & Sync" },
        { name: "Zustand & Redux", role: "Client State Store" },
        { name: "JavaScript (ES6+)", role: "Modern Runtime" },
        { name: "HTML5 / Semantic UI", role: "Accessible Standards" },
      ],
      highlights: [
        "Optimistic UI updates with TanStack Query mutation invalidation",
        "Compound component architecture with strict TypeScript contracts",
        "Mobile-first, responsive layouts tailored for zero layout shifts (CLS)",
      ],
    },
    {
      id: "backend",
      num: "02",
      title: "Backend & Job Queues",
      role: "HIGH-THROUGHPUT REST SERVICES",
      icon: Server,
      description:
        "Architecting resilient APIs, decoupled asynchronous processing pipelines, and secure authentication.",
      technologies: [
        { name: "Node.js", role: "Event-Driven Runtime" },
        { name: "Express.js", role: "RESTful Routing" },
        { name: "BullMQ", role: "Redis Worker Queues" },
        { name: "JWT & OAuth 2.0", role: "Identity & Tokens" },
        { name: "REST Architecture", role: "Clean Domain MVC" },
        { name: "Rate Limiting & CORS", role: "API Security" },
        { name: "WebSockets / SSE", role: "Real-Time Streaming" },
        { name: "Microservices", role: "Decoupled Domains" },
      ],
      highlights: [
        "Asynchronous job workers processing heavy media/notification tasks",
        "Structured middleware pipelines for auth, logging, and error triage",
        "Granular role-based access control (RBAC) and token refresh routines",
      ],
    },
    {
      id: "database",
      num: "03",
      title: "Database & In-Memory Store",
      role: "DATA MODELING & ULTRA-FAST CACHING",
      icon: Database,
      description:
        "Designing scalable data persistence, in-memory locking mechanisms, and high-performance aggregation.",
      technologies: [
        { name: "MongoDB & Mongoose", role: "Document Persistence" },
        { name: "Redis Caching", role: "Sub-Millisecond Cache" },
        { name: "Redis Mutex Locking", role: "Concurrency Safety" },
        { name: "Aggregation Pipelines", role: "Complex Analytics" },
        { name: "Zod Schema Validation", role: "Runtime Type Guard" },
        { name: "Firebase Firestore", role: "Real-Time Sync DB" },
      ],
      highlights: [
        "Redis-backed distributed mutex locks preventing double-booking races",
        "Compound index optimization ensuring sub-50ms database lookups",
        "Automated schema validation guaranteeing payload integrity",
      ],
    },
    {
      id: "cloud",
      num: "04",
      title: "Cloud AI & Infrastructure",
      role: "PRODUCTION DEPLOYMENTS & SERVICES",
      icon: Cloud,
      description:
        "Managing cloud AI model integrations, service accounts, automated CI/CD pipelines, and server hosting.",
      technologies: [
        { name: "Google Cloud Platform", role: "Vertex AI & Compute" },
        { name: "Service Accounts", role: "Zero-Secret In-Code Auth" },
        { name: "Docker", role: "Container Packaging" },
        { name: "GitHub Actions", role: "Automated CI/CD Tests" },
        { name: "Vercel & Firebase", role: "Edge Delivery" },
        { name: "Coolify & Linux VPS", role: "Self-Hosted Nodes" },
      ],
      highlights: [
        "100% cloud migration of Google AI models to Vertex AI postpay billing",
        "Automated GitHub Actions workflows verifying builds before production push",
        "Isolated environment secrets management and health monitoring",
      ],
    },
    {
      id: "workflow",
      num: "05",
      title: "Engineering Disciplines",
      role: "RELIABILITY, TESTING & TOOLING",
      icon: Wrench,
      description:
        "Maintaining professional engineering hygiene, test suites, clean commits, and predictable delivery.",
      technologies: [
        { name: "Git & Advanced GitHub", role: "Trunk-Based / PR Flow" },
        { name: "Postman Automation", role: "Contract Testing" },
        { name: "Jest & Vitest", role: "Unit / Integration Test" },
        { name: "Vite & ESM", role: "Lightning Build Pipeline" },
        { name: "PowerShell & Bash", role: "Automated Scripting" },
        { name: "Agile & Sprint Cycles", role: "Milestone Execution" },
      ],
      highlights: [
        "Trunk-based development with rigorous pull request peer reviews",
        "Comprehensive endpoint assertions with Postman test suites",
        "Strict ESLint rules and automated formatting for codebase uniformity",
      ],
    },
  ];

  const visibleDomains =
    selectedCategory === "all"
      ? skillDomains
      : skillDomains.filter((d) => d.id === selectedCategory);

  const engineeringPrinciples = [
    {
      title: "Sub-100ms Response Times",
      desc: "Leveraging Redis in-memory key-value caching, optimistic UI updates, and lean database indexing.",
    },
    {
      title: "Strict Type & Schema Safety",
      desc: "End-to-end type validation from API payload schemas (Zod) to TypeScript React component contracts.",
    },
    {
      title: "Decoupled Asynchronous Tasks",
      desc: "Offloading intensive tasks (notifications, video generation, data syncing) to BullMQ worker threads.",
    },
    {
      title: "Zero-Downtime Resilience",
      desc: "Graceful fallbacks, automated health checks, environment key guards, and comprehensive error boundaries.",
    },
  ];

  return (
    <section id="stack" className="py-20 md:py-28 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
          <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest">
            <span className="text-paper">03 // TECHNICAL ARSENAL</span>
            <span>·</span>
            <span>Architecture &amp; Tools</span>
          </div>

          <div className="font-mono text-xs text-paper-dim">
            <span>DISCIPLINE: </span>
            <span className="text-emerald-400 font-semibold">PRODUCTION-FIRST MERN</span>
          </div>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="pt-10 md:pt-14 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              CORE TECHNOLOGIES &amp; PROFICIENCIES
            </h2>
            <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
              An architectural breakdown of the stacks, database patterns, and cloud infrastructures
              I employ to build resilient, production-ready software.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend & Queues" },
              { id: "database", label: "Database & Redis" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "workflow", label: "Tooling" },
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded font-mono text-xs transition-all border ${
                    active
                      ? "bg-paper text-ink border-paper font-semibold shadow-sm"
                      : "bg-surface/80 text-paper-muted border-line hover:border-paper/40 hover:text-paper"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technical Domain Cards Grid (Clean Architectural Index — No Progress Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {visibleDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="p-6 md:p-7 border border-line bg-surface/60 hover:bg-surface hover:border-paper/40 transition-all duration-300 rounded flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-line font-mono text-xs text-paper-dim">
                    <span className="text-paper font-semibold">[{domain.num}]</span>
                    <div className="flex items-center gap-2">
                      <span className="uppercase text-[10px] tracking-wider text-paper-dim">
                        {domain.role}
                      </span>
                      <Icon
                        size={15}
                        className="text-paper-muted group-hover:text-paper transition-colors shrink-0"
                      />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-bold text-xl text-paper mt-4">
                    {domain.title}
                  </h3>
                  <p className="font-sans text-xs text-paper-muted leading-relaxed mt-2 mb-6">
                    {domain.description}
                  </p>

                  {/* Technology Pills Grid with Role Badges */}
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-paper-dim mb-1">
                      PRIMARY STACK &amp; CAPABILITIES:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {domain.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center justify-between px-3 py-2 rounded bg-surface-raised border border-line/80 hover:border-paper/30 transition-colors"
                        >
                          <span className="font-sans text-xs text-paper font-medium">
                            {tech.name}
                          </span>
                          <span className="font-mono text-[10px] text-paper-dim uppercase tracking-wide">
                            {tech.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Production Architectural Highlights */}
                  <div className="mt-6 pt-5 border-t border-line/70">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-paper-dim mb-2.5">
                      PRODUCTION PRACTICES:
                    </div>
                    <ul className="space-y-1.5 text-xs text-paper-muted font-sans">
                      {domain.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={13}
                            className="text-paper-dim shrink-0 mt-0.5"
                          />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Technology Inventory Strip */}
        <div className="mt-10 p-6 md:p-8 border border-line bg-surface/40 rounded flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-mono text-xs uppercase tracking-wider text-paper-dim flex items-center gap-2">
              <Cpu size={14} className="text-paper-muted" />
              <span>COMPLETE TECHNICAL INVENTORY</span>
            </div>
            <p className="font-sans text-xs text-paper-muted">
              Frameworks, protocols, and developer toolchains utilized across active repositories.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 max-w-2xl">
            {[
              "React 19",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Redis",
              "BullMQ",
              "TanStack Query v5",
              "Zustand",
              "Google Cloud Vertex AI",
              "Docker",
              "Tailwind CSS",
              "Zod",
              "Firebase Auth",
              "REST APIs",
              "JWT",
              "Postman",
              "Vite",
              "Jest",
              "GitHub Actions",
              "Vercel",
            ].map((chip) => (
              <span
                key={chip}
                className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface-raised border border-line text-paper-muted hover:text-paper hover:border-paper/40 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Cards (christendijoux style 4-column) */}
        <div className="mt-12 pt-10 border-t border-line">
          <div className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-6">
            CORE ENGINEERING PRINCIPLES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringPrinciples.map((principle, pIdx) => (
              <div
                key={principle.title}
                className="p-5 border border-line bg-surface/40 hover:bg-surface/80 transition-colors rounded"
              >
                <div className="font-mono text-[11px] text-paper-dim mb-2">
                  0{pIdx + 1} // PRINCIPLE
                </div>
                <h4 className="font-sans font-bold text-sm text-paper mb-1.5">
                  {principle.title}
                </h4>
                <p className="font-sans text-xs text-paper-muted leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
