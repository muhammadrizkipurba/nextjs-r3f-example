import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        lg: '1rem',
        xl: '.5rem',
        '2xl': '0',
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [ "var(--font-clash-display)", "var(--font-chillax)", "sans-serif" ],
      },
      keyframes: {
        "slide-left": {
          "0%": {trnsform: "translateX(0)"},
          "100%": {trnsform: "translateX(-100%)"}
        }
      },
      animation: {
        "slide-left": "slide-left 3s linear infinite",
        "spin-slow": "spin 6s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;
