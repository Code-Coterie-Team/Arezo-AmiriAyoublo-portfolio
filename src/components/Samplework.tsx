"use client "

import { useEffect, useState } from "react"

const Samplework=()=>{
    const [bgColor,setBgColor]=useState('transparent')

    useEffect(()=>{
        const scrollPosition=window.scrollY;
        
    })
    return(
        <div className="w-full p-6 border-[0.5px]  rounded-lg border-fontcolor h-[300px] hover:shadow-md hover:shadow-workfont " style={{backgroundColor:bgColor}}></div>

    )
}
export default Samplework