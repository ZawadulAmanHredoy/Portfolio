import React, { useEffect, useState } from "react";

export default function IntroShell({ onFinish }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user already saw intro in current session
    const seen = sessionStorage.getItem("zr-intro-seen");
    if (seen === "1") {
      onFinish?.();
      return;
    }

    const duration = 1200; // ms
    const intervalTime = 16;
    const steps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = Math.min(100, Math.floor((step / steps) * 100));
      setCount(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          sessionStorage.setItem("zr-intro-seen", "1");
          setTimeout(() => {
            onFinish?.();
          }, 500);
        }, 150);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  // Format count to 3 digits e.g. "007", "042", "100"
  const formattedCount = String(count).padStart(3, "0");

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-ink text-paper p-5 md:p-10 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-[11px] font-mono tracking-widest uppercase text-paper-muted opacity-80">
        <span>Zawadul Aman Hredoy — Portfolio</span>
        <span>©2026</span>
      </div>

      {/* Giant Central / Bottom Counter */}
      <div className="w-full">
        <div className="font-display font-light leading-[0.78] text-[clamp(6.5rem,24vw,22rem)] tabular-nums tracking-tighter text-paper select-none">
          {formattedCount}
        </div>

        {/* Hairline Progress Bar */}
        <div className="mt-4 md:mt-6 h-[1px] w-full bg-paper/10 overflow-hidden">
          <div
            className="h-full bg-paper transition-all duration-75 ease-out origin-left"
            style={{ width: `${count}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-paper-dim">
          <span>Savar, Dhaka · 23.85°N 90.26°E</span>
          <span>MERN Stack · Cloud · APIs</span>
        </div>
      </div>
    </div>
  );
}
