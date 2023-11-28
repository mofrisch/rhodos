/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "800px",
    },

    extend: {
      fontFamily: {
        mono: ["Roboto Flex"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
