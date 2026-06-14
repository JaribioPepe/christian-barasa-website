import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1A1A",
          900: "#121212",
          800: "#1A1A1A",
          700: "#242424",
          600: "#2E2E2E",
        },
        ivory: {
          DEFAULT: "#F8F6F2",
          deep: "#F1EDE6",
        },
        champagne: {
          DEFAULT: "#C8A96A",
          light: "#D8C09A",
          deep: "#A8884B",
        },
        stone: {
          DEFAULT: "#8C8780",
          light: "#B8B2A8",
        },
        beige: "#E7E0D5",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.35em",
        wide2: "0.22em",
      },
      maxWidth: {
        editorial: "82rem",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
