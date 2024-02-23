/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "laptop": "1125px",
        "sm": "620px",
        "xs": "500px",
        "xxs": "445px",
        "xxxs": "350px",
         // => @media (min-width: 1125px) { ... }

      },
      colors: {
        primary: "#4871FF",
        "primary-400": "#3c76d8",
        "primary-300": "#5591e4",
        "primary-200": "#77a9f0",
        "primary-100": "#a1c2fb",  // Lighter shade
        "primary-50": "#F0F8FF",  // Lighter shade
        "textPrimary": "#262262",
        "secondary": "#F5F7FE",
        "outline": "#DBE3FF",
      },
      fontFamily:{
        sans: ['sans-serif'],
        serif: ['serif'],
        playfair: ['Alfa Slab One'],
        sans: ['Cooper Black']
      }
    },
  },
  plugins: [],
}

