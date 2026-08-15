import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070709",
        card: "rgba(20, 20, 24, 0.65)",
        "card-hover": "rgba(30, 30, 36, 0.8)",
        "glass-border": "rgba(255, 255, 255, 0.12)",
        "glass-border-glow": "rgba(255, 255, 255, 0.3)",
        redline: "#FF3B30",
        "redline-glow": "rgba(255, 59, 48, 0.4)",
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rev-glow': 'revGlow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        revGlow: {
          '0%': { boxShadow: '0 0 10px rgba(255, 59, 48, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(255, 59, 48, 0.7)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
