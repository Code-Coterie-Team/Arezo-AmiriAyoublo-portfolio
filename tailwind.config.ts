import { transform } from "next/dist/build/swc/generated-native";
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
        light:{ 
          linkcolorlight:'',

        },
        foreground: "var(--foreground)",
        fontcolor:"rgb(169, 177, 214)",
        borderdark:"rgb(27 ,30 ,46 )",
        linkcolor:"rgb(61, 185, 201)",
        skillcolor:"rgb(147 154 255 / var(--tw-text-opacity))",
        workfont:'rgb(255 220 139)',
        contactcolor:'rgb(96 ,165 ,250)',
        bordercolor:'#31374e',
        maincolor:'rgb(30 ,35 ,54 )',
        headerborder:'rgb(61, 89, 161)',
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
      gridRowStart:{
         '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
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
          '0%': {
            transform:'rotate(0deg)'
          },
    
        '10%': {
            transform: 'rotate(14deg)'
        },
    
        '20%': {
            transform: 'rotate(-8deg)'
        },
    
        '30%': {
            transform:'rotate(14deg)'
        },
    
       ' 40%': {
            transform:' rotate(-4deg)'
        },
    
        '50%': {
            transform: 'rotate(10deg)'
        },
    
        '60%': {
            transform:' rotate(0deg)'
        }
        },
        
      },
      animation:{
        wave:'wave 2s ease infinite',
       
      },
      
      
      boxShadow:{
         buttonshadow:'0px 4px 7px 0px rgba(0, 0, 0,0.15)'
      },
      
    },
  },
  plugins: [],
} satisfies Config;
