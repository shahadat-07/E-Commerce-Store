/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003F62",
        secondary: "#EDA415",
        tertiary: "#A5A5A5",
        primaryLight: "#E2F4FF",
      },
      margin: {
        "section-gap": "56px",
      },
    },
  },
  plugins: [],
};
