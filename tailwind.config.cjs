/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 0 rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
