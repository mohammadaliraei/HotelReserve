/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "#1D91CC",
        darkBlue: "#11577A",
        Gray: "#ADADAD",
      },
    },
    fontFamily: {
      Sans: ["Sans", "sans-serif"],
      Mikhak: ["Mikhak", "sans-serif"],
    },
  },
  plugins: [],
};
