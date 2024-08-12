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
        "dark-pixel":
          "url('/assets/images/bg.webp'), linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(15, 17, 23, 1))",
      },
      keyframes: {
        moveBg: {
          "0%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        moveBg: "moveBg 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
