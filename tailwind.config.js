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
        blueOntu: "hsl(219, 83%, 39%)",
        blueOntu2: "hsl(219, 82%, 36%)",
        marineOntu: "hsl(219, 47%, 48%)",
        lilaOntu: "hsl(233, 32%, 52%)",
        purpleOntu: "hsl(262, 32%, 52%)",
        yellowOntu: "hsl(51,81% 57%)",
        veryGreen: "hsl(182, 68%, 20%)",
        veryBlue: "hsl(225, 85%, 30%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
        grayisBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
      },
      fontFamily: {
        monts: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
