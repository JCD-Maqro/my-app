/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/bg.webp')",
        bg2: "url('/bg2.webp')",
        bg3: "url('/bg3.webp')",
        bg4: "url('/bg4.webp')",
      },
      screens: {
        xxxs: "50px",
        xxs: "270px",
        xxshalf: "380px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xlg: "1300px",
        xxl: "1700px",
      },
    },
  },
  plugins: [
  
    require("flowbite/plugin"),
  ],
}
