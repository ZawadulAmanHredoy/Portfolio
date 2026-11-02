import React from "react";
import { ArrowUpRight, Cpu, Database, Server, Smartphone } from "lucide-react";

export default function About() {
  const pillars = [
    {
      num: "#01 · FRONTEND",
      title: "Reactive & Accessible Frontends",
      desc: "Built with React 19, Next.js, and TypeScript. State managed atomically with Zustand and TanStack Query, styled with Tailwind CSS for zero-jank, sub-100ms render speeds.",
      icon: Smartphone,
    },
    {
      num: "#02 · BACKEND",
      title: "Resilient APIs & Job Queues",
      desc: "Robust Node.js and Express REST backends engineered with BullMQ, Redis caching, and JWT authentication. Clean MVC architecture separating domain logic from persistence.",
      icon: Server,
    },
    {
      num: "#03 · DATA & CLOUD",
      title: "Database Modeling & Cloud Services",
      desc: "Schema design across MongoDB and relational databases. Experience migrating services to Google Cloud (Vertex AI), configuring service accounts, and Docker containerization.",
      icon: Database,
    },
    {
      num: "#04 · CRAFT",
      title: "Crafted Engineering Discipline",
      desc: "Committed to maintainable codebases: thorough test coverage, automated CI/CD pipelines, strict linting, and intuitive developer documentation.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest pb-6 border-b border-line">
          <span className="text-paper">01 // ABOUT</span>
          <span>·</span>
          <span>From Code to Production</span>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 pt-10 md:pt-16">
          {/* Left Column: Manifesto / Bio */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              ENGINEERING RESILIENT WEB EXPERIENCES
            </h2>

            <p className="text-sm md:text-base text-paper-muted leading-relaxed font-sans">
              I am a <strong className="text-paper font-semibold">MERN Stack Developer</strong> based in
              Savar, Dhaka, Bangladesh. I specialize in turning complex requirements into scalable, secure,
              and high-performance web systems — from database design and asynchronous queues to polished,
              responsive user interfaces.
            </p>

            <p className="text-sm md:text-base text-paper-muted leading-relaxed font-sans">
              On a daily basis, I work with <strong className="text-paper font-semibold">React 19, Next.js,
              TypeScript, Node.js, Express, MongoDB, and Redis</strong>. I enjoy architecting systems where
              both the backend resilience and the frontend interaction feel effortless and instantaneous.
            </p>

            {/* Location & Focus Card */}
            <div className="p-5 border border-line bg-surface rounded space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-paper-dim border-b border-line pb-2">
                <span>HEADQUARTERS</span>
                <span className="text-paper">SAVAR, DHAKA · BD</span>
              </div>
              <div className="flex justify-between items-center text-paper-dim border-b border-line pb-2">
                <span>TIMEZONE</span>
                <span className="text-paper">ASIA/DHAKA (UTC+6)</span>
              </div>
              <div className="flex justify-between items-center text-paper-dim">
                <span>COLLABORATION</span>
                <span className="text-emerald-400 font-medium">OPEN WORLDWIDE (REMOTE)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architectural Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="p-6 border border-line bg-surface/70 hover:bg-surface hover:border-paper/40 transition-all duration-300 rounded flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center text-paper-dim font-mono text-[11px] mb-4">
                      <span>{p.num}</span>
                      <Icon size={16} className="text-paper-muted group-hover:text-paper transition-colors" />
                    </div>
                    <h3 className="font-sans font-bold text-base text-paper mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-paper-muted leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between text-[10px] font-mono uppercase text-paper-dim group-hover:text-paper transition-colors">
                    <span>Verified in Production</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
