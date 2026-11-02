import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  CheckCircle,
  Terminal,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      num: "01",
      title: "Frontend Engineering",
      subtitle: "Component Architecture & Micro-Interactions",
      icon: Code2,
      skills: [
        { name: "React 19 / 18", level: 95, tag: "Primary" },
        { name: "TypeScript", level: 90, tag: "Primary" },
        { name: "Next.js", level: 85, tag: "Framework" },
        { name: "Tailwind CSS", level: 95, tag: "Styling" },
        { name: "TanStack Query v5", level: 90, tag: "State" },
        { name: "Zustand & Redux", level: 85, tag: "State" },
        { name: "JavaScript (ES6+)", level: 95, tag: "Core" },
        { name: "HTML5 / Semantic CSS", level: 95, tag: "Standard" },
      ],
    },
    {
      num: "02",
      title: "Backend & Distributed Systems",
      subtitle: "High-Throughput Services & Queues",
      icon: Server,
      skills: [
        { name: "Node.js", level: 92, tag: "Primary" },
        { name: "Express.js", level: 90, tag: "Framework" },
        { name: "REST API Architecture", level: 95, tag: "Standard" },
        { name: "BullMQ Job Queues", level: 88, tag: "Async" },
        { name: "JWT & OAuth 2.0 Auth", level: 90, tag: "Security" },
        { name: "Rate Limiting & CORS", level: 92, tag: "Security" },
        { name: "Microservice Design", level: 82, tag: "Pattern" },
        { name: "WebSocket & SSE", level: 80, tag: "Real-time" },
      ],
    },
    {
      num: "03",
      title: "Database & In-Memory Caching",
      subtitle: "Schema Modeling & Fast Lookups",
      icon: Database,
      skills: [
        { name: "MongoDB & Mongoose", level: 92, tag: "NoSQL" },
        { name: "Redis Caching & Locking", level: 88, tag: "In-Memory" },
        { name: "Aggregation Pipelines", level: 85, tag: "Queries" },
        { name: "Firebase Firestore", level: 85, tag: "Cloud DB" },
        { name: "Data Indexing & Profiling", level: 82, tag: "Perf" },
        { name: "Schema Validation (Zod)", level: 90, tag: "Safety" },
      ],
    },
    {
      num: "04",
      title: "Cloud Infrastructure & DevOps",
      subtitle: "Service Accounts, Deployments & Containers",
      icon: Cloud,
      skills: [
        { name: "Google Cloud (Vertex AI)", level: 88, tag: "Cloud AI" },
        { name: "Firebase Service Accounts", level: 90, tag: "GCP" },
        { name: "Docker Containerization", level: 82, tag: "DevOps" },
        { name: "Vercel & Firebase Hosting", level: 92, tag: "Edge" },
        { name: "GitHub Actions CI/CD", level: 85, tag: "Automation" },
        { name: "Coolify & VPS Management", level: 80, tag: "Self-Host" },
      ],
    },
    {
      num: "05",
      title: "Testing, Tooling & Workflow",
      subtitle: "Quality Assurance & Production Readiness",
      icon: Wrench,
      skills: [
        { name: "Git & Advanced GitHub", level: 95, tag: "VCS" },
        { name: "Postman API Automation", level: 90, tag: "Testing" },
        { name: "Jest & Vitest Testing", level: 82, tag: "Unit" },
        { name: "Vite Bundler & ESM", level: 92, tag: "Build" },
        { name: "Linux / PowerShell CLI", level: 88, tag: "Shell" },
        { name: "Agile / Scrum Disciplines", level: 90, tag: "Process" },
      ],
    },
  ];

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
        <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest pb-6 border-b border-line">
          <span className="text-paper">03 // TECHNICAL ARSENAL</span>
          <span>·</span>
          <span>Engineered with Precision</span>
        </div>

        {/* Section Title */}
        <div className="pt-10 md:pt-14 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              CORE TECHNOLOGIES &amp; PROFICIENCIES
            </h2>
            <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
              A comprehensive view of the tools, frameworks, and architectural principles I leverage
              to build scalable modern software.
            </p>
          </div>

          <div className="font-mono text-xs text-paper-dim">
            <span>TOTAL TECHNOLOGIES: </span>
            <span className="text-paper font-semibold">32+</span>
            <span className="ml-4">FOCUS: </span>
            <span className="text-emerald-400 font-semibold">FULL-STACK PERF</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.num}
                className="p-6 border border-line bg-surface/60 hover:bg-surface hover:border-paper/40 transition-all duration-300 rounded flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-line text-paper-dim font-mono text-xs">
                    <span className="text-paper font-semibold">[{group.num}]</span>
                    <Icon size={16} className="text-paper-muted group-hover:text-paper transition-colors" />
                  </div>

                  <h3 className="font-sans font-bold text-lg text-paper mt-4">
                    {group.title}
                  </h3>
                  <p className="font-mono text-[11px] text-paper-dim uppercase tracking-wider mt-0.5 mb-5">
                    {group.subtitle}
                  </p>

                  {/* Skills List with Micro Progress Lines */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-paper font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-paper-dim px-1.5 py-0.5 rounded bg-surface-raised border border-line">
                              {skill.tag}
                            </span>
                            <span className="font-mono text-[10px] text-paper-muted tabular-nums">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        {/* Thin Hairline Meter */}
                        <div className="h-[2px] w-full bg-paper/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-paper-muted group-hover:bg-paper transition-all duration-500 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Chip Overview Card */}
          <div className="p-6 border border-line bg-surface/60 rounded flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line text-paper-dim font-mono text-xs">
                <span className="text-paper font-semibold">[06]</span>
                <Cpu size={16} className="text-paper-muted" />
              </div>

              <h3 className="font-sans font-bold text-lg text-paper mt-4">
                Architecture &amp; Cloud Systems
              </h3>
              <p className="font-mono text-[11px] text-paper-dim uppercase tracking-wider mt-0.5 mb-5">
                Modern Paradigms &amp; Best Practices
              </p>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "React 19",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Redis",
                  "BullMQ",
                  "TanStack Query",
                  "Zustand",
                  "Google Cloud Vertex AI",
                  "Docker",
                  "Tailwind CSS",
                  "Firebase Auth",
                  "RESTful APIs",
                  "JWT",
                  "Postman",
                  "Vite",
                  "Git & GitHub",
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

            <div className="pt-6 mt-6 border-t border-line font-mono text-[11px] text-paper-dim flex items-center justify-between">
              <span>ACTIVE STACK 2026</span>
              <span className="text-emerald-400">PRODUCTION READY</span>
            </div>
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
