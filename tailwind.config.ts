import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       
        foreground: "var(--foreground)",
        barcolor:"rgb(52, 55, 70)",
        background: "rgb(33, 34, 44)",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
