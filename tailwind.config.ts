import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "princesa-light": ['var(--font-princesa-light)'],
        "princesa-light-it": ['var(--font-princesa-light-it)'],
        "princesa-regular": ['var(--font-princesa-regular)'],
        "princesa-regular-it": ['var(--font-princesa-regular-it)'],
        "avenir-regular": ['var(--font-avenir-next-regular)']
      },
      colors: {
        "accent": '#F724A0',
        'accent-dark': '#A50262'
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke")
  ],
};
export default config;
