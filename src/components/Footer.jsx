import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-ink text-paper py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-line">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold px-2 py-1 bg-surface-raised border border-line rounded text-paper">
                ZR
              </span>
              <span className="font-mono text-sm tracking-wider uppercase text-paper font-semibold">
                MD ZAWADUL AMAN HREDOY
              </span>
            </div>
            <p className="font-mono text-xs text-paper-dim mt-2">
              Full-Stack Software Engineer &amp; MERN Architect · Savar, Dhaka, Bangladesh
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-line bg-surface hover:border-paper/40 hover:text-paper font-mono text-xs text-paper-muted transition-colors active:scale-95"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Metadata Grid */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-paper-dim">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} MD Zawadul Aman Hredoy. All rights reserved.
            </p>
            <p className="text-[11px] text-paper-dim/80">
              Aesthetic inspired by christendijoux.com · Built with React 19, Tailwind CSS &amp; Vite.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-paper-muted">
            <a
              href="https://github.com/ZawadulAmanHredoy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition-colors flex items-center gap-1.5"
            >
              <FaGithub size={13} />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-zawadul-aman-hredoy-a51635261/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin size={13} />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://x.com/ZHredy5070"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition-colors flex items-center gap-1.5"
            >
              <FaXTwitter size={13} />
              <span>TWITTER</span>
            </a>
            <a
              href="mailto:zawadulamanhredoy11189@gmail.com"
              className="hover:text-paper transition-colors flex items-center gap-1.5"
            >
              <Mail size={13} />
              <span>EMAIL</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
