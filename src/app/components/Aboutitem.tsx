"use client"
import { StarSvg } from "@/assets";

import Link from "next/link";
import { useState } from "react";
import AboutTs from "./Itemaboutts";

const AboutMets=()=>{
    const [showAboutme,setShowAboutme]=useState(true);
    const toggleAboutMe=()=>{
        setShowAboutme(!showAboutme);
    }
    return(
        <div className=" flex gap-6 text-base">
            <div className="text-fontcolor  "></div>
            <div className="flex flex-col gap-2 text-fontcolor ">
                <div className="flex gap-1  hover:bg-borderdark  " onClick={toggleAboutMe}>

                    <StarSvg/>
                    <span className="">about_me.ts</span>
                </div>
                {showAboutme && <AboutTs/>}
            </div>

            
       </div>
    )
}
export default AboutMets;