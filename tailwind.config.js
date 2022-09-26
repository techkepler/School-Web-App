/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
