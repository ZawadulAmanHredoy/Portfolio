import React from "react";
import { ArrowUpRight, Cpu, Database, Server, Smartphone, Megaphone, ShieldCheck, FileDown } from "lucide-react";

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
      num: "#03 · AD TECH (ADS PILLAR)",
      title: "Ad Tech & Marketing Automation",
      desc: "Hands-on engineering at Ads Pillar building PlanPost AI: integrating TikTok Business API, Meta Marketing API, AIDA carousel creation, commercial music APIs, and automated spend distribution.",
      icon: Megaphone,
    },
    {
      num: "#04 · DATA & CLOUD",
      title: "Cloud AI & Vertex AI Migrations",
      desc: "Migrated generative AI pipelines from AI Studio keys to Google Cloud Vertex AI (Veo 3.1, Gemini Flash) using service accounts, Redis caching, and robust failover boundaries.",
      icon: Database,
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
              ENGINEERING RESILIENT WEB &amp; AD TECH SYSTEMS
            </h2>

            <p className="text-sm md:text-base text-paper-muted leading-relaxed font-sans">
              I am a <strong className="text-paper font-semibold">Junior Software Engineer at Ads Pillar</strong> and
              full-stack MERN architect based in Savar, Dhaka, Bangladesh. I turn complex requirements into
              scalable, secure, and high-performance software systems — from Ad Tech campaign automation and
              distributed Redis queues to polished React 19 frontends.
            </p>

            <p className="text-sm md:text-base text-paper-muted leading-relaxed font-sans">
              At <strong className="text-paper font-semibold">Ads Pillar</strong>, I engineer core modules for{" "}
              <strong className="text-paper font-semibold">PlanPost AI</strong>, orchestrating automated publishing,
              TikTok Business API ad pipelines, and complete infrastructure migrations to{" "}
              <strong className="text-paper font-semibold">Google Cloud Vertex AI</strong>.
            </p>

            <p className="text-sm md:text-base text-paper-muted leading-relaxed font-sans">
              On a daily basis, I work with <strong className="text-paper font-semibold">React 19, Next.js,
              TypeScript, Node.js, Express, MongoDB, Redis, BullMQ, and Google Cloud</strong>.
            </p>

            {/* Location & Focus Card */}
            <div className="p-5 border border-line bg-surface rounded space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-paper-dim border-b border-line pb-2">
                <span>COMPANY</span>
                <span className="text-paper font-semibold">ADS PILLAR (DHAKA)</span>
              </div>
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

            {/* Curriculum Vitae Download Card */}
            <a
              href="/MD_Zawadul_Aman_Hredoy_CV.pdf"
              download="MD_Zawadul_Aman_Hredoy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-line bg-surface/60 hover:bg-surface hover:border-paper/40 rounded flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-surface-raised border border-line text-emerald-400 group-hover:scale-105 transition-transform">
                  <FileDown size={18} />
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-paper group-hover:text-paper transition-colors">
                    CURRICULUM VITAE (PDF)
                  </div>
                  <div className="font-mono text-[10px] text-paper-dim">
                    Software Engineer · 2 Pages · 128 KB
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-paper-muted group-hover:text-paper transition-colors">
                <span>DOWNLOAD</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
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

                  <div className="pt-6 mt-6 border-t border-line/60 flex items-center justify-between font-mono text-[10px] text-paper-dim">
                    <span>STATUS: ACTIVE DISCIPLINE</span>
                    <ArrowUpRight size={12} className="group-hover:text-paper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
