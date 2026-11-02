import React from "react";
import { Briefcase, GraduationCap, CheckCircle2, Megaphone } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "AUGUST 2026 — PRESENT",
      role: "Junior Software Engineer",
      company: "Ads Pillar",
      location: "Dhaka, Bangladesh",
      badge: "CURRENT ROLE",
      highlights: [
        "Architecting full-stack software solutions and data pipelines across production environments using TypeScript, Node.js, and React.",
        "Engineered the core automation modules for PlanPost AI, including TikTok Business API and Meta marketing integrations following the AIDA ad model.",
        "Spearheaded the Google Cloud Vertex AI migration, transitioning generative AI endpoints to service accounts with zero downtime and postpay billing.",
        "Refactored data-fetching pipelines, eliminating double-request overhead and boosting API throughput with Redis caching.",
        "Enforced defensive programming, structured Pino logging, and robust test suites across staging and production builds.",
      ],
      stack: [
        "TypeScript",
        "React 19",
        "Node.js",
        "Express",
        "Google Cloud Vertex AI",
        "TikTok Business API",
        "Redis",
        "MongoDB",
        "BullMQ",
      ],
    },
    {
      period: "2025 — 2026",
      role: "Full-Stack Software Engineer & Open-Source Architect",
      company: "Independent Production Projects",
      location: "Savar, Dhaka · Remote",
      badge: "PRODUCTION APPS",
      highlights: [
        "Architected high-concurrency booking platforms (HR Booking Platform) featuring race-safe Redis mutex locking and BullMQ worker queues.",
        "Engineered algorithmic developer discovery engines (Profile Suggestion Engine) with debounced indexing and sub-80ms lookup latency.",
        "Developed emergency community healthcare networks (Lifeline Blood Donation Hub) with geo-proximity triage and role-based access control.",
        "Authored 30+ open-source repositories and merged 18+ pull requests, unlocking 4 official GitHub achievements.",
      ],
      stack: ["React 19", "Next.js 16", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Zustand"],
    },
    {
      period: "2022 — 2026",
      role: "B.Sc. in Computer Science & Engineering",
      company: "United International University",
      location: "Dhaka, Bangladesh",
      badge: "ACADEMIC FOUNDATION",
      highlights: [
        "Rigorous coursework in Algorithms, Data Structures, Relational Database Systems, Operating Systems, and Distributed Computing.",
        "Conducted research on 'An Autonomous Self-Healing LLM Guardrail System on Edge Hardware' for on-device safety interventions.",
        "Formulated an end-to-end NLP classification pipeline for depressive sentiment detection in unstructured social media corpora.",
        "Active member of the UIU Computer Club; participated in system design workshops and competitive programming.",
      ],
      stack: ["Data Structures", "Algorithms", "System Design", "LLM Guardrails", "NLP", "Databases"],
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest pb-6 border-b border-line">
          <span className="text-paper">04.1 // MILESTONES &amp; EXPERIENCE</span>
          <span>·</span>
          <span>Ads Pillar &amp; Engineering Journey</span>
        </div>

        {/* Section Title */}
        <div className="pt-10 md:pt-14 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              PROFESSIONAL MILESTONES
            </h2>
            <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
              Professional software engineering at Ads Pillar, high-impact distributed applications,
              and academic foundations in computer science.
            </p>
          </div>

          <div className="font-mono text-xs text-paper-dim">
            <span>CURRENT POSITION: </span>
            <span className="text-emerald-400 font-semibold">ADS PILLAR · DHAKA</span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 mt-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 border rounded transition-all ${
                idx === 0
                  ? "border-paper/40 bg-surface/80 shadow-sm"
                  : "border-line bg-surface/50 hover:bg-surface hover:border-paper/30"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-line">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-sans font-bold text-lg md:text-xl text-paper">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                          idx === 0
                            ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-semibold"
                            : "bg-surface-raised border border-line text-paper-dim"
                        }`}
                      >
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-paper-dim mt-0.5">
                    <strong className="text-paper font-semibold">{exp.company}</strong> · {exp.location}
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
