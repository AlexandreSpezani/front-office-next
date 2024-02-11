import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tenant-background": "url('/restaurant.png')",
      },
      boxShadow: {
        inset: "inset 2px 4px 20px 14px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), nextui()],
};
export default config;
