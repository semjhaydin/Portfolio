import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080B10",
        surface: "#0F1623",
        "surface-border": "#1E293B",
        card: "rgba(15, 22, 35, 0.75)",
        brand: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          violet: "#8B5CF6",
          emerald: "#10B981",
          accent: "#38BDF8"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15), rgba(255, 255, 255, 0))",
        "card-gradient": "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 22, 35, 0.8) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      }
    },
  },
  plugins: [],
};

export default config;
