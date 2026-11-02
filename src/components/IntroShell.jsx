import React, { useEffect, useState } from "react";

export default function IntroShell({ onFinish }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(() => {
    try {
      return sessionStorage.getItem("zr-intro-seen") === "1";
    } catch {
      return false;
    }
  });
  const [shouldRender, setShouldRender] = useState(() => {
    try {
      return sessionStorage.getItem("zr-intro-seen") !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    setHasMounted(true);

    // If already seen in this session, finish immediately
    try {
      if (sessionStorage.getItem("zr-intro-seen") === "1") {
        setIsDone(true);
        setShouldRender(false);
        onFinish?.();
        return;
      }
    } catch {
      // ignore
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    let animationFrameId;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out quad
      const easedProgress = Math.floor(progress * 100);

      setCount(easedProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsDone(true);
          try {
            sessionStorage.setItem("zr-intro-seen", "1");
          } catch {
            // ignore
          }
          onFinish?.();
          setTimeout(() => {
            setShouldRender(false);
          }, 800);
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Absolute safety fallback: guarantee dismiss after 1.8s
    const fallbackTimer = setTimeout(() => {
      setIsDone(true);
      try {
        sessionStorage.setItem("zr-intro-seen", "1");
      } catch {
        // ignore
      }
      onFinish?.();
      setTimeout(() => {
        setShouldRender(false);
      }, 800);
    }, 1800);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      clearTimeout(fallbackTimer);
    };
  }, [onFinish]);

  const handleDismiss = () => {
    setIsDone(true);
    try {
      sessionStorage.setItem("zr-intro-seen", "1");
    } catch {
      // ignore
    }
    onFinish?.();
    setTimeout(() => {
      setShouldRender(false);
    }, 800);
  };

  if (!shouldRender) {
    return null;
  }

  const formattedCount = String(count).padStart(3, "0");

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-ink text-paper p-5 md:p-10 cursor-pointer select-none transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-[11px] font-mono tracking-widest uppercase text-paper-muted opacity-80">
        <span>Zawadul Aman Hredoy — Portfolio</span>
        <span className="text-paper-dim hover:text-paper transition-colors">
          [ CLICK TO SKIP ]
        </span>
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
          <span>Junior Software Engineer @ Ads Pillar</span>
        </div>
      </div>
    </div>
  );
}
