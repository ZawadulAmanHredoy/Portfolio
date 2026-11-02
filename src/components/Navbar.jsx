import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTime(formatted);
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work", num: "01" },
    { label: "ABOUT", href: "#about", num: "02" },
    { label: "STACK", href: "#stack", num: "03" },
    { label: "IMPACT", href: "#impact", num: "04" },
    { label: "CONTACT", href: "#contact", num: "05" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-ink/90 backdrop-blur-md border-b border-line transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="font-mono text-xs font-semibold px-2 py-1 bg-surface-raised border border-line rounded text-paper group-hover:border-paper transition-colors">
            ZR
          </span>
          <span className="font-mono text-xs tracking-wider uppercase text-paper font-medium hidden sm:inline-block">
            Zawadul Aman Hredoy
          </span>
        </a>

        {/* Live Dhaka Time & Status Indicator (Center/Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-paper-muted">
          <div className="flex items-center gap-2 border-r border-line pr-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase text-emerald-400 font-medium">Available for hire</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-paper-dim">DHAKA, BD</span>
            <span className="text-paper tabular-nums font-mono font-medium">{time || "16:30:00"}</span>
            <span className="text-paper-dim">UTC+6</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-paper-muted hover:text-paper transition-colors py-1 flex items-center gap-1.5 group"
            >
              <span className="text-paper-dim text-[10px] group-hover:text-paper-muted transition-colors">
                [{link.num}]
              </span>
              <span>{link.label}</span>
            </a>
          ))}

          <a
            href="mailto:zawadulamanhredoy11189@gmail.com"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all active:scale-95"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-paper hover:text-paper/80 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-b border-line px-5 py-6 space-y-4 font-mono text-sm">
          <div className="flex items-center gap-2 text-xs text-paper-muted pb-3 border-b border-line">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400">Available for hire · Dhaka {time}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-paper-muted hover:text-paper py-2 flex items-center justify-between border-b border-line/40"
            >
              <span>{link.label}</span>
              <span className="text-paper-dim text-xs">[{link.num}]</span>
            </a>
          ))}

          <a
            href="mailto:zawadulamanhredoy11189@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded bg-paper text-ink font-semibold flex items-center justify-center gap-2 mt-4"
          >
            <span>LET'S WORK TOGETHER</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
