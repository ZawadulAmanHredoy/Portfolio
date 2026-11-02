import React from "react";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "2025 — PRESENT",
      role: "Full-Stack Software Engineer & MERN Specialist",
      company: "Independent / Production Projects",
      location: "Dhaka, Bangladesh · Remote",
      highlights: [
        "Architected high-throughput MERN applications incorporating Redis caching and BullMQ asynchronous worker queues.",
        "Engineered scalable REST APIs with Express.js, implementing JWT authentication, rate limiting, and MongoDB indexing.",
        "Designed reactive, accessible frontends using React 19, TypeScript, TanStack Query, and Tailwind CSS.",
      ],
      stack: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ"],
    },
    {
      period: "2025 — 2026",
      role: "Cloud AI Infrastructure & Backend Migration",
      company: "Production Engineering Systems",
      location: "Google Cloud Platform",
      highlights: [
        "Migrated AI infrastructure from legacy AI Studio prepay keys to Google Cloud Vertex AI using service accounts.",
        "Configured robust fallbacks, model routing, and error boundaries for high-availability production workloads.",
        "Maintained 100% test coverage across video and text generator endpoints with zero downtime.",
      ],
      stack: ["Google Cloud", "Vertex AI", "Node.js", "Service Accounts", "Jest"],
    },
    {
      period: "2022 — 2026",
      role: "B.Sc. in Computer Science & Engineering",
      company: "University Academic Foundations",
      location: "Dhaka, Bangladesh",
      highlights: [
        "In-depth coursework in Algorithms, Data Structures, Relational Database Systems, Operating Systems, and Distributed Computing.",
        "Applied software engineering methodologies, design patterns (MVC, Repository Pattern), and agile sprint workflows.",
      ],
      stack: ["Data Structures", "Algorithms", "System Design", "Databases"],
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest pb-6 border-b border-line">
          <span className="text-paper">04.1 // MILESTONES &amp; JOURNEY</span>
          <span>·</span>
          <span>Experience &amp; Education</span>
        </div>

        {/* Section Title */}
        <div className="pt-10 md:pt-14 pb-8">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
            ENGINEERING MILESTONES
          </h2>
          <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
            A timeline of continuous learning, real-world systems engineering, and academic foundations.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 mt-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 border border-line bg-surface/50 hover:bg-surface hover:border-paper/40 transition-all rounded"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-line">
                <div>
                  <h3 className="font-sans font-bold text-lg md:text-xl text-paper">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs text-paper-dim mt-0.5">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <div className="font-mono text-xs text-paper-muted sm:text-right shrink-0">
                  <span className="px-2.5 py-1 rounded bg-surface-raised border border-line">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <ul className="lg:col-span-8 space-y-2 text-xs md:text-sm text-paper-muted font-sans">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-paper-dim shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="lg:col-span-4 flex flex-wrap gap-1.5 items-start self-start">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-raised border border-line text-paper-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
