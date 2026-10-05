import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          /* RGB channels so Tailwind opacity modifiers work with theme swap */
          ink: "rgb(var(--c-ink) / <alpha-value>)",
          hall: "rgb(var(--c-hall) / <alpha-value>)",
          panel: "rgb(var(--c-panel) / <alpha-value>)",
          brass: "rgb(var(--c-brass) / <alpha-value>)",
          brassDim: "rgb(var(--c-brass-dim) / <alpha-value>)",
          marble: "rgb(var(--c-marble) / <alpha-value>)",
          parchment: "rgb(var(--c-parchment) / <alpha-value>)",
          mist: "rgb(var(--c-mist) / <alpha-value>)",
          cyan: "rgb(var(--c-cyan) / <alpha-value>)",
          violet: "rgb(var(--c-violet) / <alpha-value>)", /* cool slate alias */
          ember: "rgb(var(--c-amber) / <alpha-value>)",
          rose: "rgb(var(--c-rose) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        placard:
          "0 8px 32px rgba(28,25,23,0.08), inset 0 1px 0 rgba(255,255,255,0.7), 0 0 0 1px rgba(71,85,105,0.06)",
        hall: "0 20px 60px rgba(28,25,23,0.12)",
        glow: "0 0 40px rgb(var(--c-brass) / 0.18)",
      },
      backgroundImage: {
        "hall-gradient":
          "radial-gradient(ellipse at 20% 0%, rgb(var(--c-brass) / 0.1), transparent 50%), radial-gradient(ellipse at 85% 20%, rgb(var(--c-violet) / 0.12), transparent 45%)",
        vignette:
          "radial-gradient(ellipse at center, transparent 40%, rgba(68,64,60,0.12) 100%)",
      },
      keyframes: {
        "liquid-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 3%) scale(0.94)" },
        },
        "liquid-drift-alt": {
          "0%, 100%": { transform: "translate(0,0) scale(1.05)" },
          "50%": { transform: "translate(-7%, 5%) scale(0.9)" },
        },
        "mesh-shift": {
          "0%, 100%": { backgroundPosition: "0% 40%, 100% 0%, 50% 100%" },
          "50%": { backgroundPosition: "100% 60%, 0% 40%, 30% 20%" },
        },
      },
      animation: {
        "liquid-drift": "liquid-drift 22s ease-in-out infinite",
        "liquid-drift-alt": "liquid-drift-alt 28s ease-in-out infinite",
        "mesh-shift": "mesh-shift 30s ease-in-out infinite",
      },
      backdropBlur: {
        glass: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
