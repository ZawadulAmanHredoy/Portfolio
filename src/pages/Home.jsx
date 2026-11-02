import React, { useState } from "react";
import IntroShell from "../components/IntroShell";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Impact from "../sections/Impact";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-paper font-sans selection:bg-paper selection:text-ink relative overflow-x-hidden">
      {/* Intro Preloader matching christendijoux.com */}
      <IntroShell onFinish={() => setIntroFinished(true)} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Impact />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
