/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        surface: "#0c0c0c",
        "surface-raised": "#121212",
        "surface-card": "#161616",
        paper: "#f2f2ee",
        "paper-muted": "#9e9e96",
        "paper-dim": "#666660",
        line: "rgba(242, 242, 238, 0.12)",
        "line-bright": "rgba(242, 242, 238, 0.28)",
        accent: "#6366f1",
        "accent-glow": "rgba(99, 102, 241, 0.15)",
        emerald: {
          500: "#10b981",
        },
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        sans: ["'Geist'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
        tighter: "-0.05em",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
