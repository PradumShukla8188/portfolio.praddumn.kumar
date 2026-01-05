import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Crimson Pro"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        leather: {
          50: '#f8f4f0',
          100: '#e8ddd1',
          200: '#d4c4b0',
          300: '#b8a089',
          400: '#9d7d62',
          500: '#7d6049',
          600: '#64493a',
          700: '#4d3729',
          800: '#3a2919',
          900: '#2a1e12',
        },
        parchment: {
          50: '#fdfbf7',
          100: '#f9f5ed',
          200: '#f3ebe0',
          300: '#eadcc9',
          400: '#ddc7a8',
          500: '#cab288',
          600: '#b39c6f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
