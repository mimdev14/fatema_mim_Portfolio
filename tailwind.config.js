/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        signal: {
          DEFAULT: 'rgb(var(--c-signal) / <alpha-value>)',
          dark: 'rgb(var(--c-signal-dark) / <alpha-value>)',
          light: 'rgb(var(--c-signal-light) / <alpha-value>)',
        },
        amber: {
          DEFAULT: 'rgb(var(--c-amber) / <alpha-value>)',
          dark: 'rgb(var(--c-amber-dark) / <alpha-value>)',
          light: 'rgb(var(--c-amber-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgb(var(--c-line)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--c-line)) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        gradient: 'gradient 4s ease infinite',
      },
    },
  },
  plugins: [],
};
