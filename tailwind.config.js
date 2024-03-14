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
        parallax: 'url("../src/assets/plomeria/herramientas3.jpg")',
        parallaxElec:
          'url("../src/assets/electricidad/bannerElectricista3.jpg")',
        parallaxElec2: 'url("../src/assets/electricidad/lamparas.jpg")',
        parallaxSH: 'url("../src/assets/SmartHome/controlLuces.jpg")',
        parallaxSH2: 'url("../src/assets/SmartHome/SmartHome.jpg")',
        parallaxSH3: 'url("../src/assets/SmartHome/home2.jpg")',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
