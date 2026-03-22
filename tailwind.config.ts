import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-dim": "var(--surface-dim)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "surface-container-low": "var(--surface-container-low)",
        "surface-container": "var(--surface-container)",
        "surface-container-high": "var(--surface-container-high)",
        "surface-container-highest": "var(--surface-container-highest)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        primary: "var(--primary)",
        "on-primary": "var(--on-primary)",
        "primary-container": "var(--primary-container)",
        "on-primary-container": "var(--on-primary-container)",
        secondary: "var(--secondary)",
        "on-secondary": "var(--on-secondary)",
        "secondary-container": "var(--secondary-container)",
        "on-secondary-container": "var(--on-secondary-container)",
        tertiary: "var(--tertiary)",
        "on-tertiary": "var(--on-tertiary)",
        "tertiary-container": "var(--tertiary-container)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        accent: "var(--accent)",
        "on-accent": "var(--on-accent)",
        outline: "var(--outline)",
        "outline-variant": "var(--outline-variant)",
        terminal: {
          border: "var(--terminal-border)",
          accent: "var(--accent)",
          muted: "var(--muted)",
          dim: "#49454f",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "shape-xl": "var(--shape-corner-extra-large)",
      },
      boxShadow: {
        terminal: "0 1px 2px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18)",
        "elevation-0": "none",
        "elevation-1": "0 1px 2px rgba(0,0,0,0.28), 0 1px 3px 1px rgba(0,0,0,0.12)",
        "elevation-2": "0 1px 2px rgba(0,0,0,0.28), 0 2px 6px 2px rgba(0,0,0,0.14)",
        "elevation-3": "0 4px 8px 3px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.22)",
        glow: "0 0 48px rgba(52, 211, 153, 0.15), 0 0 80px rgba(139, 92, 246, 0.08)",
        "glow-violet": "0 0 40px rgba(167, 139, 250, 0.2)",
        "glow-cyan": "0 0 36px rgba(34, 211, 238, 0.18)",
      },
      animation: {
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
