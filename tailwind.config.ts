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
        fontcolor:"rgb(169, 177, 214)",
        borderdark:"rgb(27 ,30 ,46 )",
        linkcolor:"rgb(61, 185, 201)",
        skillcolor:"rgb(147 154 255 / var(--tw-text-opacity));"
      },
      gridTemplateColumns:{
        '16':'repeat(16,minmax(0,1fr))',
       
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridTemplateRows:{
        
        '16':'repeat(16,minmax(0,1fr))',
      },
      gridRowEnd:{
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      keyframes:{
        wave:{
          to:{transform:'rotate(-10deg)'}
        }
      },
      animation:{
        wave:'wave 400ms ease infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
