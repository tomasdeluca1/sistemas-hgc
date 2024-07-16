/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2D3E50",
          secondary: "#F2B632",
          accent: "#FF6347",
          neutral: "#3D4451",
          "base-100": "#fff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
