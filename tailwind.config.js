const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    fontFamily:{
      paytone: ["Paytone One", "sans-serif"]
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
