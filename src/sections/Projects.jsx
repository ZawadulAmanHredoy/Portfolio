import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryList = ["All", "AI & Ad Tech", "Full-Stack MERN", "React & Next.js", "APIs & Cloud"];

  const categories = categoryList.map((cat) => ({
    label: cat,
    count: cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length,
  }));

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
          <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest">
            <span className="text-paper">02 // SELECTED WORK</span>
            <span>·</span>
            <span>Shipped End to End</span>
          </div>

          <div className="font-mono text-xs text-paper-muted">
            SHOWING <span className="text-paper font-semibold">{filteredProjects.length}</span> OF{" "}
            <span className="text-paper font-semibold">{projects.length}</span> REPOSITORIES
          </div>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="pt-10 md:pt-14 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              PRODUCTION ARCHITECTURES &amp; APPS
            </h2>
            <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
              Each project is built with production standards in mind: strict type safety, modular
              domain architecture, optimized database queries, and clean, accessible user interfaces.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`px-3 py-1.5 rounded font-mono text-xs transition-all flex items-center gap-2 border ${
                    active
                      ? "bg-paper text-ink border-paper font-semibold shadow-sm"
                      : "bg-surface/80 text-paper-muted border-line hover:border-paper/40 hover:text-paper"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded ${
                      active
                        ? "bg-ink/20 text-ink font-bold"
                        : "bg-ink text-paper-dim"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-6 md:space-y-8 mt-6">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-line bg-surface/50 hover:bg-surface/90 hover:border-paper/40 transition-all duration-300 rounded overflow-hidden group"
            >
              <div className="p-6 md:p-8">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-line font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-paper px-2 py-0.5 rounded bg-surface-raised border border-line">
                      PROJECT #{project.num}
                    </span>
                    <span className="text-paper-dim">·</span>
                    <span className="text-paper-muted uppercase">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.metrics && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.metrics}
                      </span>
                    )}
                    <span className="text-paper-dim text-[11px]">{project.year}</span>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  {/* Left Column: Title & Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="group/title block focus:outline-none"
                    >
                      <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-paper group-hover/title:text-paper-muted transition-colors">
                        {project.name}
                      </h3>
                    </Link>

                    <p className="font-mono text-xs text-paper-dim tracking-wide uppercase">
                      {project.headline}
                    </p>

                    <p className="text-sm text-paper-muted leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Architectural Feature Bullets */}
                    {project.features && (
                      <div className="pt-2 space-y-2">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-paper-dim">
                          KEY ARCHITECTURAL HIGHLIGHTS:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-paper-muted">
                          {project.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-paper-dim shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Stack & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-line lg:pl-8 pt-6 lg:pt-0">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-paper-dim mb-3">
                        TECHNOLOGY STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface-raised border border-line text-paper-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-6 space-y-2.5 font-mono text-xs">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded bg-paper text-ink font-semibold hover:bg-paper/90 transition-all active:scale-98"
                        >
                          <span className="flex items-center gap-2">
                            <span>LAUNCH LIVE APPLICATION</span>
                          </span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded border border-line bg-surface hover:border-paper/40 text-paper transition-colors"
                          >
                            <FaGithub size={13} />
                            <span>CLIENT CODE</span>
                          </a>
                        )}

                        {project.serverGithub ? (
                          <a
                            href={project.serverGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded border border-line bg-surface hover:border-paper/40 text-paper transition-colors"
                          >
                            <FaGithub size={13} />
                            <span>SERVER CODE</span>
                          </a>
                        ) : (
                          <Link
                            to={`/projects/${project.id}`}
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded border border-line bg-surface hover:border-paper/40 text-paper transition-colors"
                          >
                            <span>DETAILS</span>
                            <ArrowUpRight size={13} />
                          </Link>
                        )}
                      </div>

                      {project.serverGithub && (
                        <Link
                          to={`/projects/${project.id}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] text-paper-dim hover:text-paper transition-colors"
                        >
                          <span>READ FULL ARCHITECTURAL BREAKDOWN</span>
                          <ArrowUpRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
