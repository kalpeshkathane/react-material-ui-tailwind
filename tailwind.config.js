/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/*.{html}", "./*.{html}"],
  darkMode: false, // or 'media' or 'class'
  important: "#root",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};