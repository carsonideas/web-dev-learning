/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'js-yellow': '#f7df1e',
        'ts-blue': '#3178c6',
        'html-orange': '#e34c26',
        'css-blue': '#264de4',
        'dark-bg': '#121212',
        'dark-card': '#1e1e1e',
        'dark-accent': '#2d2d2d',
        'light-text': '#f5f5f5',
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'accent': '#ec4899',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['Fira Code', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
