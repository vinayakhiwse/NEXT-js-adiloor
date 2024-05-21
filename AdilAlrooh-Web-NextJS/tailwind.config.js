/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C8B3AE",
        "primary-dark": "#9D8988",
        secondary: "#801818",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
        },
      boxShadow: {
        primary: "-2em -2em 3em -2em rgba(0, 0, 0, 0.25)",
        "hover-secondary": "0em 0.2em 1em 0.3em #a84f4f85",
        "icon-primary": "0em 0.3em .5em 0.1em #a84f4f85",
      },
    },

  },
  plugins: [],
};
