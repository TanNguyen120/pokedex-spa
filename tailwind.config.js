/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '30': '90px',
        '10': '30px',
      }
    },
    backgroundImage: {
      'red-space': "url('../public/spaceBG.jpg')",
      'magic-circle': "url('../public/borderPoke.png')",
      // 'magic-circle': "url('../public/newPokeBorder1.gif')",
      'main-bg': "url('../public/bodyBG.png')",
      'evoPokeBg': "url('../public/pokeBorder.png')",
      'gold-frame': "url('../public/gold-frame.png')",
      'blue-abstract': "url('../public/abstract-background-blue.jpg')"
    },
  },
  plugins: [],
}
