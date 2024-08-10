import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:{
          1: "#1C1F2E",
          2: "#161925",
          3: "#ecf0f1",
          4: "#3498db", 
        },
        sky:{
          1:'#C9DDFF',
          2:'#ECF0FF',
          3:'#F5FCFF',

        },
        orange:{
          1: "#FF742E",
        },
        purple:{
          1: "#830EF9",
        },
        yellow:{
          1: "#F9A90E",
        },
        blue:{
          1:'#0E78F9'
        },
      },
      backgroundImage: {
        hero:"url('/images/hero-background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
