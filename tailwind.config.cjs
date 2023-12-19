/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "800px",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
