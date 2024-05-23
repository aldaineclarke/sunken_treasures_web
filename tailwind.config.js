/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "accent": "#1f93be",
        "primary": "#5467c8",
        "secondary": "#59639a"
       
      }
    },
  },
  plugins: [],
}