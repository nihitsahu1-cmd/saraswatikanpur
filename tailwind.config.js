/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmIvory: 'rgb(var(--color-warm-ivory) / <alpha-value>)',
        softPeach: 'rgb(var(--color-soft-peach) / <alpha-value>)',
        warmOrange: 'rgb(var(--color-warm-orange) / <alpha-value>)',
        terracotta: 'rgb(var(--color-terracotta) / <alpha-value>)',
        deepNavy: 'rgb(var(--color-deep-navy) / <alpha-value>)',
        royalNavy: 'rgb(var(--color-royal-navy) / <alpha-value>)',
        antiqueGold: 'rgb(var(--color-antique-gold) / <alpha-value>)',
        lightGold: 'rgb(var(--color-light-gold) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        mutedText: 'rgb(var(--color-muted-text) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
