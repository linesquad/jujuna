/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: {
          lightBlue: "#bae6fd",
          mediumBlue: "##0ea5e9",
          inputText: "#333",
        },

        backgroundColor: {
          inputLightGrey: "#ebebeb",
          inputMediumGrey: "#6f788d",

          listPrimary: "#ff6f80",
          listSecondary: "#ffea5c",
          listNotActive: "#b9dbe6",
        },

        borderColor: {
          inputLightGrey: "#ebebeb",
          inputMediumGrey: "#6f788d",
        },
      },
    },
  },
  plugins: [],
};
