/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
      },
      linkStyle: {

      }
    },
    backgroundImage: {
      'red-space': "url('../public/spaceBG.jpg')",
      'magic-circle': "url('../public/borderPoke.png')",
      // 'magic-circle': "url('../public/newPokeBorder1.gif')",
      'main-bg': "url('../public/bodyBG.png')",
      'evoPokeBg': "url('../public/pokeBorder.png')",
      'gold-frame': "url('../public/gold-frame.png')",
      'blue-abstract': "url('../public/abstract-background-blue.jpg')",
      'grey-abstract': "url('../public/abstractGrey.jpg')",
      'whitePatternDiamond': "url('../public/patternDiamonWhite.jpg')",
      "whiteTriPattern": "url('../public/whiteTriPat.jpg')",
      "smallGreyWhite": "url('../public/smallGreyWhiteBG.jpg')",
      "seaWhite": "url('../public/seaWhite.jpg')",
      "whiteWallPaint": "url('../public/whiteWall.jpg')",
      "regionBg": "url('../public/regionBg.jpg')",
      "fabricBg": "url('../public/fabric.jpg')",
      'whiteMoonBg': "url('../public/whiteMoon.jpg')"
    },
  },
  plugins: [],
}
