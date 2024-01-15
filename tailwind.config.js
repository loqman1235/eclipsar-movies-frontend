/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#d2ccdb",
          200: "#a699b6",
          300: "#796692",
          400: "#4d336d",
          500: "#200049",
          600: "#1a003a",
          700: "#13002c",
          800: "#0d001d",
          900: "#06000f",
        },
        primary: {
          100: "#cffbf6",
          200: "#a0f7ed",
          300: "#70f3e4",
          400: "#41efdb",
          500: "#11ebd2",
          600: "#0ebca8",
          700: "#0a8d7e",
          800: "#075e54",
          900: "#032f2a",
        },
        accent: {
          100: "#d8ccdd",
          200: "#b099bb",
          300: "#896799",
          400: "#613477",
          500: "#3a0155",
          600: "#2e0144",
          700: "#230133",
          800: "#170022",
          900: "#0c0011",
        },
        navbar: "#34145D",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
