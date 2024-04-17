/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ontu: "hsl(142, 20%, 52%)",
        ontu2: "hsl(142, 20%, 74%)",
        ontu3: "hsl(142, 12%, 81%)",
        ontu4: "hsl(140, 6%, 90%)",
        blueOntu: "hsl(221, 62%, 61%)",
        yellowOntu: "hsl(41, 68%, 68%)",
        yellowOntu2: "hsl(47, 90%, 50%)",
        grayOntu: "hsl(221, 0%, 72%)",
        veryGreen: "hsl(182, 68%, 20%)",
        grayisBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
      },
      fontFamily: {
        monts: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        parallax: 'url("../src/assets/plomeria/P1.png")',
        parallax1: 'url("../src/assets/plomeria/4M.png")',
        parallaxElec2: 'url("../src/assets/electricidad/E3.png")',
        parallaxSH: 'url("../src/assets/SmartHome/sh.png")',
        parallaxHC1: 'url("../src/assets/SmartHome/SH2.png")',
        parallaxI: 'url("../src/assets/index/I1.png")',
        parallaxDCal: 'url("../src/assets/calentamiento/diseno.jpg")',
        parallaxCal: 'url("../src/assets/calderas/sustentable.jpg")',
        parallaxAA: 'url("../src/assets/calentamiento/agua.jpg")',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
