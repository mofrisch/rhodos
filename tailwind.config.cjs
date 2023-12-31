/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "800px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        ...defaultTheme.fontFamily.sans,
        serif: ["Domine"],
        ...defaultTheme.fontFamily.serif,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
