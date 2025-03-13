/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: {
          '800': '#1f2937',
          '900': '#111827',
        }
      }
    },
  },
  plugins: [],
} 