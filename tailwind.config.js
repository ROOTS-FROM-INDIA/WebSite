/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        box: "785px",
      },
    },
    colors: {
      primary: "#F3B95E",
      secondary: "#599E9E",
      tertiary: "#F5F0E1",
      neutral1: "#353535",
      neutral2: "#767676",
      neutral3: "#FAFAFA",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
