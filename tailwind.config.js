/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#0014c7",
        accent: ""
      }
    },
  },
  plugins: [],
  darkMode: "class",
}