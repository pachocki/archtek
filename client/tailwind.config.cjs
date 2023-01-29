/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "big-screen": { max: "2600px" },

      laptop: { max: "1450px" },

      screen: { max: "1050px" },

      tablet: { max: "768px" },

      mobile: { max: "640px" },

      "small-mobile": { max: "380px" },
    },
    extend: {
      backgroundImage: () => ({
        "hero-home": "url('../src/assets/hero.jpg')",
       
      }),
    },
  },
  plugins: [],
}