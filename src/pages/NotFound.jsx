import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-paper flex flex-col justify-between font-sans selection:bg-paper selection:text-ink">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-32 text-center my-auto">
        <div className="font-mono text-xs text-paper-dim uppercase tracking-widest mb-3">
          [ ERROR 404 · PAGE NOT FOUND ]
        </div>
        <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tight text-paper">
          ENDPOINT VOID
        </h1>
        <p className="mt-4 text-paper-muted text-sm md:text-base max-w-md mx-auto font-sans leading-relaxed">
          The requested coordinate does not exist in this deployment. Return to the main index.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-paper text-ink font-mono text-xs font-semibold hover:bg-paper/90 transition-all active:scale-95"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
