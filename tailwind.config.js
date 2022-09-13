/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    fontSize: {
      h1: "30px",
      h2: "24px",
      h3: "20px",
      h4: "16px",

      p1: "18px",
      p2: "16px",
      p3: "14px",
      p4: "12px",
    },
    extend: {
      fontFamily: {
        open: "'Open Sans', sans-serif ",
      },

      screens: {
        ds: "1440px",
      },
      colors: {
        dark: "#0C101A",
        secondary: "#919FAE",
        primary: "#0193DC",
        bg1: "#F9FBFD",
        bg2: "#F9F9F9",
        hover: "#027AB6",
        active: "#015580",
        focus: "#0193DC",
        navbar: "#101524",
        table: "#B9CAFF",
        bordertable: "#DFDFDF",
      },
    },
  },
  plugins: [],
};
