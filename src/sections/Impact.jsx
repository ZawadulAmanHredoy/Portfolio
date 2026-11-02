import React from "react";
import { GitPullRequest, Award, Zap, ShieldCheck, GitCommit, Database } from "lucide-react";

export default function Impact() {
  const stats = [
    {
      num: "30+",
      label: "REPOSITORIES ARCHITECTED",
      desc: "Full-stack web apps, microservices, and client systems on GitHub.",
      icon: GitCommit,
    },
    {
      num: "18+",
      label: "PRS & FEATURES SHIPPED",
      desc: "Continuous integration, clean commits, and collaborative merges.",
      icon: GitPullRequest,
    },
    {
      num: "< 80ms",
      label: "TARGET API LATENCY",
      desc: "Achieved via Redis caching, BullMQ job queues, and indexed MongoDB queries.",
      icon: Zap,
    },
    {
      num: "4",
      label: "OFFICIAL GITHUB BADGES",
      desc: "Quickdraw, YOLO, Pull Shark (x2), and Pair Extraordinaire (x2) unlocked.",
      icon: Award,
    },
    {
      num: "100%",
      label: "CLOUD & AD TECH MIGRATION",
      desc: "PlanPost AI models moved to Google Cloud Vertex AI service accounts; TikTok Business API integrated.",
      icon: ShieldCheck,
    },
    {
      num: "99.9%",
      label: "ZERO-DOWNTIME RESILIENCE",
      desc: "Defensive error boundaries, graceful fallback handlers, and strict schema validation.",
      icon: Database,
    },
  ];

  const badges = [
    {
      title: "Pull Shark",
      multiplier: "x2",
      description: "Merged 16+ Pull Requests across collaborative repositories.",
      img: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
      tier: "Official GitHub Achievement",
    },
    {
      title: "Pair Extraordinaire",
      multiplier: "x2",
      description: "Co-authored commits in merged pull requests.",
      img: "https://github.githubassets.com/assets/pair-extraordinaire-gold-8e8e7a049fa5.png",
      tier: "Official GitHub Achievement",
    },
    {
      title: "Quickdraw",
      multiplier: "",
      description: "Closed an issue or pull request within 5 minutes of opening.",
      img: "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
      tier: "Official GitHub Achievement",
    },
    {
      title: "YOLO",
      multiplier: "",
      description: "Merged a pull request without code review.",
      img: "https://github.githubassets.com/assets/yolo-default-be0bbff42e13.png",
      tier: "Official GitHub Achievement",
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest pb-6 border-b border-line">
          <span className="text-paper">04 // IMPACT &amp; ACHIEVEMENTS</span>
          <span>·</span>
          <span>Measurable Results</span>
        </div>

        {/* Section Title */}
        <div className="pt-10 md:pt-14 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              METRICS THAT VALIDATE THE CODE
            </h2>
            <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
              Software engineering is about delivering verifiable value. Here is a snapshot of
              my open-source presence, performance benchmarks, and platform achievements.
            </p>
          </div>

          <div className="font-mono text-xs text-paper-dim">
            <span>VERIFIED ON GITHUB · </span>
            <a
              href="https://github.com/ZawadulAmanHredoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper hover:underline"
            >
              @ZawadulAmanHredoy
            </a>
          </div>
        </div>

        {/* 6-Card Numeric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="p-6 md:p-8 border border-line bg-surface/50 hover:bg-surface hover:border-paper/40 transition-all duration-300 rounded flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-line text-paper-dim font-mono text-xs">
                    <span className="text-paper font-semibold">[0{idx + 1}]</span>
                    <Icon size={16} className="text-paper-muted group-hover:text-paper transition-colors" />
                  </div>

                  {/* Big Number */}
                  <div className="pt-6">
                    <div className="font-display font-black text-5xl sm:text-6xl text-paper tracking-tight">
                      {s.num}
                    </div>
                    <div className="font-mono text-xs text-paper font-semibold uppercase tracking-wider mt-2">
                      {s.label}
                    </div>
                  </div>
                </div>

                <p className="font-sans text-xs text-paper-muted leading-relaxed mt-6 pt-4 border-t border-line/60">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* GitHub Official Badges Showcase */}
        <div className="mt-14 pt-10 border-t border-line">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="font-mono text-xs uppercase tracking-wider text-paper-dim">
              OFFICIAL GITHUB ACHIEVEMENTS UNLOCKED
            </div>
            <div className="font-mono text-[11px] text-paper-muted">
              Live on GitHub profile sidebar
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((b) => (
              <div
                key={b.title}
                className="p-5 border border-line bg-surface/40 hover:bg-surface/80 hover:border-paper/40 transition-all rounded flex items-center gap-4 group"
              >
                <div className="w-14 h-14 shrink-0 rounded bg-ink/80 border border-line p-1 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-sans font-bold text-sm text-paper truncate">
                      {b.title}
                    </h4>
                    {b.multiplier && (
                      <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-1.5 py-0.2 rounded">
                        {b.multiplier}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[10px] text-paper-dim uppercase mt-0.5">
                    {b.tier}
                  </p>
                  <p className="font-sans text-xs text-paper-muted leading-tight mt-1 line-clamp-2">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
