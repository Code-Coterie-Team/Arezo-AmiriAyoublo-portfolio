import {JetBrains_Mono } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google';
  

export const sourcesanPro=Source_Sans_3({
    subsets:['latin'],
    weight:['400','600','700'],
    variable: '--font-source-sans-pro', 

})
export const jetBrainsMono=JetBrains_Mono({subsets:['latin'],
    weight:['400','500','700'],
    style:['normal','italic'],
    variable:'--font-jetbrains-mono',
    
})