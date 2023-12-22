/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      SF: ["Roboto"],
      OS: ["Open Sans"],
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
