import React from "react";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Code2, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 border-b border-line overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Tagline / Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 md:pb-8 border-b border-line text-[11px] font-mono uppercase tracking-widest text-paper-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-paper rounded-full" />
            <span>Junior Software Engineer @ Ads Pillar · Full-Stack &amp; Ad Tech Architect</span>
          </div>
          <div className="flex items-center gap-4 text-paper-dim">
            <span>SAVAR, DHAKA · BD</span>
            <span>23.85°N · 90.26°E</span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="py-10 md:py-16">
          <h1 className="font-display font-black text-[clamp(4.2rem,16vw,14rem)] leading-[0.82] tracking-tighter uppercase text-paper select-none">
            BUILDING
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-2 md:mt-4">
            <h2 className="font-display font-black text-[clamp(2.8rem,10.5vw,9.5rem)] leading-[0.85] tracking-tighter uppercase text-paper-muted select-none">
              SCALABLE WEB APPS
            </h2>
            <div className="max-w-md pb-2">
              <p className="text-sm md:text-base text-paper-muted font-sans leading-relaxed">
                Software Engineer at <strong className="text-paper font-semibold">Ads Pillar</strong>.
                I build scalable web architectures, Ad Tech campaign automation pipelines, and high-performance
                cloud systems on Google Cloud Vertex AI and React 19.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Technical Specification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line mt-6">
          {/* Box 1 */}
          <div className="p-5 md:p-6 border-r border-b border-line bg-surface/50 hover:bg-surface transition-colors">
            <div className="flex items-center gap-2 text-paper-dim font-mono text-[11px] uppercase tracking-wider mb-2">
              <Code2 size={14} className="text-paper-muted" />
              <span>CORE ARCHITECTURE</span>
            </div>
            <p className="text-sm font-medium text-paper">MERN Stack &amp; REST APIs</p>
            <p className="text-xs text-paper-muted mt-1">Node.js, Express, React 19, MongoDB</p>
          </div>

          {/* Box 2 */}
          <div className="p-5 md:p-6 border-r border-b border-line bg-surface/50 hover:bg-surface transition-colors">
            <div className="flex items-center gap-2 text-paper-dim font-mono text-[11px] uppercase tracking-wider mb-2">
              <Layers size={14} className="text-paper-muted" />
              <span>PERFORMANCE &amp; QUEUES</span>
            </div>
            <p className="text-sm font-medium text-paper">Sub-100ms Workflows</p>
            <p className="text-xs text-paper-muted mt-1">Redis Caching, BullMQ, TanStack Query</p>
          </div>

          {/* Box 3 */}
          <div className="p-5 md:p-6 border-r border-b border-line bg-surface/50 hover:bg-surface transition-colors">
            <div className="flex items-center gap-2 text-paper-dim font-mono text-[11px] uppercase tracking-wider mb-2">
              <Sparkles size={14} className="text-paper-muted" />
              <span>CLOUD &amp; AD TECH</span>
            </div>
            <p className="text-sm font-medium text-paper">Google Cloud &amp; TikTok Ads</p>
            <p className="text-xs text-paper-muted mt-1">Vertex AI, Veo 3.1, AIDA Carousels</p>
          </div>

          {/* Box 4 */}
          <div className="p-5 md:p-6 border-r border-b border-line bg-surface/50 hover:bg-surface transition-colors">
            <div className="flex items-center gap-2 text-paper-dim font-mono text-[11px] uppercase tracking-wider mb-2">
              <Terminal size={14} className="text-paper-muted" />
              <span>ENGINEERING MINDSET</span>
            </div>
            <p className="text-sm font-medium text-paper">Zero-Downtime Reliability</p>
            <p className="text-xs text-paper-muted mt-1">Clean Architecture, Test Suites, CI/CD</p>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all active:scale-95 shadow-sm"
          >
            <span>EXPLORE SELECTED WORK</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="https://github.com/ZawadulAmanHredoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-line bg-surface text-paper font-mono text-xs hover:border-paper/40 transition-colors"
          >
            <span>GITHUB PROFILE</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-transparent text-paper-muted hover:text-paper font-mono text-xs transition-colors"
          >
            <span>START A CONVERSATION →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
