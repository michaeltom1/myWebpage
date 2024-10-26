/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#041644",
        accent: "#38bdf8",
        btn: "#0014c7",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};