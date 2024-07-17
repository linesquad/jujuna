/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arialgeo: ['"Arial GEO"', "sans-serif"],
      },
      colors: {
        backgroundColor: {
          purpleStart: "#A583D1",
          purpleMid: "#724AA4",
          purpleEnd: "#1E122E",
        },

        textColor: {
          primary: "#FFF",
          secondary: "#aea6b7",
          black: "#000",
        },

        logoColor: {
          circle: "#BA92ED",
          insideCircle: "#000",
        },

        buttonColor: {
          primary: "#613994",
          secondary: "#000",
        },

        inputColor: {
          primary: "#000",
          secondary: "#D0CFCF",
        },
      },
    },
  },
  plugins: [],
};
