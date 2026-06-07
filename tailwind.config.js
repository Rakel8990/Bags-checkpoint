/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          low: "#0B0B0B",
          mid: "#111111",
          high: "#161616"
        },
        concrete: {
          blue: "#4D9CFF",
          muted: "#1E293B"
          }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
