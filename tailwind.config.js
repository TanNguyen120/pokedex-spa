/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'red-space': "url('../public/spaceBG.jpg')",
      'magic-circle': "url('../public/magic-circle.png')"
    },
  },
  plugins: [],
}
