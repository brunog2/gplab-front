/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: {
          100: "#0360d9",
          200: "rgba(3, 96, 217, 0.31)",
        },
        white: "#fff",
        gray: {
          100: "#fafafa",
          200: "#021526",
        },
        black: "#000",
        whitesmoke: "#efefef",
        lavender: "#e1eeff",
        silver: "rgba(181, 181, 181, 0.68)",
        darkslategray: {
          100: "#2e2e2e",
          200: "#163048",
          300: "#0d2b46",
        },
        darkgray: "#a8a8a8",
        aliceblue: "#e6f5fc",
        lightskyblue: "#a5ccff",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
      "29xl": "48px",
      xl: "20px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
