/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      fontFamily: {
        mono: ["Roboto Flex"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
