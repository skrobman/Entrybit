/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderRadius: {
        S: "4px",
        M: "8px",
        L: "100px",
      },
      fontFamily: {
        SoraThin: ["Sora-Thin"],
        SoraExtraLight: ["Sora-ExtraLight"],
        SoraLight: ["Sora-Light"],
        SoraRegular: ["Sora-Regular"],
        SoraMedium: ["Sora-Medium"],
        SoraSemiBold: ["Sora-SemiBold"],
        SoraBold: ["Sora-Bold"],
        SoraExtraBold: ["Sora-ExtraBold"],
      },
      colors: {
        light: {
          background: "#FAFBFC",
          primary: {
            100: "#D6E1FF",
            200: "#1956FC",
            300: "#002280",
          },
          alert: {
            100: "#EDC7D5",
            200: "#5C0F2B",
            300: "#B84A72",
            400: "#EDE6C7",
            500: "#5C4D0F",
            600: "#B8A24A",
            700: "#C7EDC8",
            800: "#0F5C12",
            900: "#4AB84D",
          },
          surface: {
            100: "#ECEDF0",
            200: "#FAFBFC",
            300: "#F1F3FA",
            400: "#D4D6DB",
          },
          txt: {
            100: "#07112E",
            200: "#51586D",
            300: "#9CA0AB",
            400: "#1956FC",
          },
        },
        dark: {
          background: "#2A2B2E",
          primary: {
            100: "#002280",
            200: "#D6E1FF",
            300: "#3269FC",
          },
          alert: {
            100: "#5C2E3F",
            200: "#EDC7D5",
            300: "#B84A72",
            400: "#5C532E",
            500: "#EDE6C7",
            600: "#B8A24A",
            700: "#2E5C30",
            800: "#C7EDC8",
            900: "#4AB84D",
          },
          surface: {
            100: "#17181A",
            200: "#2A2B2E",
            300: "#323438",
            400: "#4A4C52",
          },
          txt: {
            100: "#FAFBFC",
            200: "#BDBEC0",
            300: "#808183",
            400: "#3269FC",
          },
        },
      },
    },
  },
  plugins: [],
};
