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
        yellowOntu2: "hsl(47, 100%, 50%)",
        grayOntu: "hsl(221, 0%, 72%)",
        veryGreen: "hsl(182, 68%, 20%)",
        grayisBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
      },
      fontFamily: {
        monts: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
