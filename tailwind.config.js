/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        black: "0px 10px 40px rgba(0, 0, 0, 0.1)",
        lightBlack: "0px 0px 40px rgba(0, 0, 0, 0.4)",
        orange: "0px 1px 8px rgba(255,140,0,0.4)",
        lightorange: "0px 1px 8px rgba(255,140,0,0.12)",
      },
      screens: {
        xs: "400px", // Custom breakpoint for extra small screens
        mdsm: "500px",
        mdlg: "600px",
        xl2: "1440px", // Custom breakpoint for extra large screens
      },
      stroke: {
        DEFAULT: "#FFEBCD",
      },
      colors: {
        theme: "#e8840c",
        secondary: "#e8840c",
        primary: "#FA8C32",
        secondary: "#FFB871",
        accent: "#FFE6D1",
        bgprimary: "#16727F",
        darkGreen: "#185B38",
        darkBlue: "#073D92",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bodoni: ['"Libre Bodoni"', "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  // plugins: [],
  plugins: [require("tailwind-scrollbar-hide")],
};
