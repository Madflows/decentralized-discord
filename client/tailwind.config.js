/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepGrey: "#202225",
        semiDeepGrey: "#2f3136",
        lightGrey: "#36393f",
        primary: "#5865f2",
        secondary: "#dcddde",
        hoverGrey: "#3b3d43",
        green: "#3ba55d",
      }
    },
  },
  plugins: [],
}