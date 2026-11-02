import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, Compass } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-ink text-paper flex flex-col justify-between">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <div className="font-mono text-xs text-paper-dim uppercase tracking-widest mb-4">
            [404 · REPOSITORY NOT LOCATED]
          </div>
          <h1 className="font-display font-black text-5xl uppercase tracking-tight text-paper">
            Project Not Found
          </h1>
          <p className="mt-4 text-paper-muted text-sm max-w-md mx-auto">
            The requested project specification could not be found or has been archived.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-ink text-paper font-sans selection:bg-paper selection:text-ink">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-line text-xs font-mono">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-paper-muted hover:text-paper transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO WORK INDEX</span>
            </Link>

            <div className="flex items-center gap-3 text-paper-dim">
              <span>PROJECT #{project.num}</span>
              <span>·</span>
              <span className="uppercase">{project.category}</span>
            </div>
          </div>

          {/* Project Editorial Header */}
          <div className="py-10 md:py-16 border-b border-line">
            <div className="flex flex-wrap items-center gap-3 text-paper-dim font-mono text-xs mb-3">
              <span className="text-paper px-2 py-0.5 rounded bg-surface-raised border border-line">
                RELEASE {project.year}
              </span>
              {project.metrics && (
                <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                  {project.metrics}
                </span>
              )}
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-paper leading-[0.9]">
              {project.name}
            </h1>

            <p className="mt-4 font-mono text-sm md:text-base text-paper-muted uppercase tracking-wide max-w-3xl">
              {project.headline}
            </p>
          </div>

          {/* Project Core Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 md:pt-14">
            {/* Left Column: Description, Features, Challenges, Future */}
            <div className="lg:col-span-8 space-y-10">
              {/* Architecture Overview */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-3">
                  01 // ARCHITECTURAL SUMMARY
                </h2>
                <p className="text-base text-paper-muted leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && (
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-4">
                    02 // CORE IMPLEMENTATION CAPABILITIES
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-4 border border-line bg-surface/50 rounded flex items-start gap-3"
                      >
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-paper-muted leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges Faced */}
              {project.challenges && (
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-4">
                    03 // ENGINEERING CHALLENGES &amp; SOLUTIONS
                  </h2>
                  <div className="space-y-3">
                    {project.challenges.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 border border-line bg-surface/40 rounded flex items-start gap-3"
                      >
                        <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-paper-muted leading-relaxed">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Future Plans */}
              {project.futurePlans && (
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-4">
                    04 // FUTURE ROADMAP &amp; EXPANSIONS
                  </h2>
                  <div className="space-y-3">
                    {project.futurePlans.map((plan, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 border border-line bg-surface/30 rounded flex items-start gap-3"
                      >
                        <Compass size={16} className="text-paper-dim shrink-0 mt-0.5" />
                        <span className="text-xs text-paper-muted leading-relaxed">{plan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Specifications & Deploy Links */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 border border-line bg-surface/60 rounded sticky top-24 space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-3">
                    DEPLOYMENT &amp; REPOSITORIES
                  </h3>
                  <div className="space-y-2.5 font-mono text-xs">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded bg-paper text-ink font-semibold hover:bg-paper/90 transition-all active:scale-98"
                      >
                        <span>LAUNCH APPLICATION</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded border border-line bg-surface hover:border-paper/40 text-paper transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <FaGithub size={14} />
                          <span>CLIENT REPOSITORY</span>
                        </span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.serverGithub && (
                      <a
                        href={project.serverGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded border border-line bg-surface hover:border-paper/40 text-paper transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <FaGithub size={14} />
                          <span>SERVER REPOSITORY</span>
                        </span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="border-t border-line pt-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-paper-dim mb-3">
                    STACK &amp; ENVIRONMENT
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface-raised border border-line text-paper-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line pt-6 font-mono text-xs space-y-2 text-paper-dim">
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-emerald-400 font-medium">LIVE IN PRODUCTION</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROLE:</span>
                    <span className="text-paper">FULL-STACK ARCHITECT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Project Nav Banner */}
          <div className="mt-16 pt-10 border-t border-line">
            <div className="p-6 md:p-8 border border-line bg-surface/40 hover:bg-surface/80 hover:border-paper/40 transition-all rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-paper-dim uppercase">
                  NEXT SELECTED WORK [{nextProject.num}]
                </span>
                <h4 className="font-display font-black text-2xl md:text-3xl text-paper uppercase tracking-tight mt-1">
                  {nextProject.name}
                </h4>
              </div>

              <Link
                to={`/projects/${nextProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
