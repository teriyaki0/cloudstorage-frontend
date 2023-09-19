/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      dark: "#1B1B1B",
      white: "#fff",
      blue: "#307CEE",
      red: "#AD5654",
      yellow: "#D8993C",
      gray: "#242424",
      "light-gray": "#323232",
      "text-gray": "#88888A",
     "light-hard-gray": "#5E5E60"
    },
  },
  plugins: [],
};
