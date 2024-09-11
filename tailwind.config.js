/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "darkMode",
  theme: {
    extend: {
      backgroundImage: {
        marani: "url('/images/marani.png')",
        mobileBar: "url('/images/banner2.png')",
      },
      fontFamily: {
        arialgeo: ['"Arial GEO"', "sans-serif"],
        tommaso: ['"ALK Tommaso"', "sans-serif"],
      },
      colors: {
        backgroundColor: {
          purpleStart: "#A583D1",
          purpleMid: "#724AA4",
          purpleEnd: "#1E122E",
          backgroundCol: "#F5F5F5",

          dark: {
            backgroundCol: "#000",
          },
        },

        wineNavbarColor: {
          light: "#EAEAEA",
          dark: "#8A63A2",
          textPurple: "#491E50",
          textDark: "#000",
          textGray: "#908F8F",
        },

        wineCardColor: {
          dark: "#583980",
          light: "#D9D9D9",
          border: "#C8C5C5",
          addBtn: "#8862B7",
          arrowBg: "#33204B",
        },

        wineDetailsColor: {
          textColor: "#BB8DF5",
          textDark: "#000",
        },

        color: {
          primary: "#FFF",
          secondary: "#aea6b7",
          black: "#000",

          dark: {
            black: "#fff",
          },
        },

        logoColor: {
          circle: "#BA92ED",
          insideCircle: "#000",
        },

        buttonColor: {
          primary: "#613994",
          secondary: "#000",

          dark: {
            primary: "#724AA4",
            secondary: "#fff",
          },
        },

        inputColor: {
          primary: "#000",
          secondary: "#D0CFCF",

          dark: {
            primary: "#fff",
            secondary: "#000",
          },
        },
      },
      screens: {
        tiny: { max: "300px" },
        smaller: { min: "301px", max: "410px" },
        small: { max: "410px" },
        smallExtra: { min: "411px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".overflow-hidden": {
          overflow: "hidden",
        },
      });
    },
  ],
};
