import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ["var(--font-fredoka)", "serif"],
        sans: ["var(--font-oswald)", "sans-serif"],
      },

      keyframes: {
        directionX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10%)" },
        },
        directionY: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10%)" },
        },
      },

      animation: {
        directionX: "directionX 2s ease-in-out infinite",
        directionY: "directionY 2s ease-in-out infinite",
      },
    },

    screens: {
      s: "520px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
