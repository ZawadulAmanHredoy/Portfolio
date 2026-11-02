import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent

  const email = "zawadulamanhredoy11189@gmail.com";
  const phone = "+880 1874-648057";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 800);
  };

  const socials = [
    {
      name: "GitHub",
      handle: "@ZawadulAmanHredoy",
      url: "https://github.com/ZawadulAmanHredoy",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      handle: "MD Zawadul Aman Hredoy",
      url: "https://www.linkedin.com/in/md-zawadul-aman-hredoy-a51635261/",
      icon: FaLinkedin,
    },
    {
      name: "Twitter / X",
      handle: "@ZHredy5070",
      url: "https://x.com/ZHredy5070",
      icon: FaXTwitter,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-paper-dim font-mono text-[11px] uppercase tracking-widest pb-6 border-b border-line">
          <span className="text-paper">05 // CONTACT</span>
          <span>·</span>
          <span>Let's Build Together</span>
        </div>

        {/* Section Title */}
        <div className="pt-10 md:pt-14 pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-paper leading-[0.9]">
              START A CONVERSATION
            </h2>
            <p className="mt-3 text-sm md:text-base text-paper-muted font-sans max-w-2xl">
              I am open to full-time engineering positions, freelance software architecture, and
              high-impact collaborative projects. Drop a note or reach out directly.
            </p>
          </div>

          <div className="font-mono text-xs text-paper-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold uppercase">Currently Available</span>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          {/* Left Column: Direct Inquiries & Social Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 md:p-8 border border-line bg-surface/60 hover:border-paper/40 transition-all rounded">
              <div className="flex items-center justify-between text-paper-dim font-mono text-xs pb-3 border-b border-line">
                <span>PRIMARY INBOX</span>
                <span>DIRECT DISPATCH</span>
              </div>

              <div className="mt-4">
                <a
                  href={`mailto:${email}`}
                  className="font-display font-black text-xl sm:text-2xl md:text-3xl text-paper hover:text-paper-muted transition-colors break-all leading-tight block"
                >
                  {email}
                </a>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-surface-raised border border-line hover:border-paper/40 font-mono text-xs text-paper transition-all active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>COPY EMAIL ADDRESS</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all active:scale-95"
                  >
                    <span>COMPOSE EMAIL</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Location Metadata Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-line bg-surface/50 rounded space-y-2">
                <div className="flex items-center gap-2 text-paper-dim font-mono text-[11px] uppercase">
                  <Phone size={13} />
                  <span>DIRECT CALL / WHATSAPP</span>
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="font-mono text-sm text-paper hover:underline font-semibold block pt-1"
                >
                  {phone}
                </a>
                <p className="font-mono text-[10px] text-paper-dim">Available 10:00 — 22:00 BST</p>
              </div>

              <div className="p-5 border border-line bg-surface/50 rounded space-y-2">
                <div className="flex items-center gap-2 text-paper-dim font-mono text-[11px] uppercase">
                  <MapPin size={13} />
                  <span>LOCATION &amp; TIME</span>
                </div>
                <p className="font-mono text-sm text-paper font-semibold pt-1">
                  Savar, Dhaka, Bangladesh
                </p>
                <p className="font-mono text-[10px] text-paper-dim">Asia/Dhaka (UTC+6)</p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-5 border border-line bg-surface/40 rounded space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-paper-dim">
                CONNECT ACROSS PLATFORMS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-line bg-surface hover:bg-surface-raised hover:border-paper/40 transition-all rounded flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Icon size={14} className="text-paper-muted group-hover:text-paper" />
                        <span className="font-mono text-xs text-paper truncate">{s.name}</span>
                      </div>
                      <ArrowUpRight
                        size={12}
                        className="text-paper-dim group-hover:text-paper transition-colors shrink-0"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Terminal Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 border border-line bg-surface/60 rounded flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between text-paper-dim font-mono text-xs pb-4 border-b border-line">
                  <span>SEND A MESSAGE</span>
                  <span>STATUS: SECURE DISPATCH</span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-paper-dim mb-1.5">
                      Your Full Name <span className="text-paper">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 rounded bg-surface-raised border border-line text-sm text-paper placeholder-paper-dim focus:outline-none focus:border-paper transition-colors font-sans"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-paper-dim mb-1.5">
                      Your Email Address <span className="text-paper">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded bg-surface-raised border border-line text-sm text-paper placeholder-paper-dim focus:outline-none focus:border-paper transition-colors font-sans"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-paper-dim mb-1.5">
                      Project Details or Inquiry <span className="text-paper">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timelines, or role requirements..."
                      className="w-full px-3.5 py-2.5 rounded bg-surface-raised border border-line text-sm text-paper placeholder-paper-dim focus:outline-none focus:border-paper transition-colors font-sans resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit & Status */}
              <div className="pt-6 mt-6 border-t border-line">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all active:scale-98 disabled:opacity-50"
                >
                  {formStatus === "sending" ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : formStatus === "sent" ? (
                    <span className="flex items-center gap-1.5 text-emerald-950 font-bold">
                      <Check size={14} />
                      MESSAGE RECEIVED! I WILL REPLY SHORTLY.
                    </span>
                  ) : (
                    <>
                      <span>TRANSMIT INQUIRY</span>
                      <Send size={13} />
                    </>
                  )}
                </button>

                <p className="font-mono text-[10px] text-paper-dim text-center mt-3">
                  Responses typically sent within 24 hours. For urgent requests, email directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
