/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "divergent-gold": "#F6E1AC",
        "divergent-blue": "#000026",
      },
      backgroundImage: {
        constellation: "url('./assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
