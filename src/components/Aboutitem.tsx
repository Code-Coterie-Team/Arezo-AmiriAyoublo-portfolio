"use client"
import { StarSvg } from "@/assets";

import Link from "next/link";
import { useEffect, useState } from "react";
import AboutTs from "./Itemaboutts";
import { useStore } from "@/store";

const AboutMets=()=>{
    const {stylePublic,changeStyle}=useStore();
    useEffect(()=>{
        const timer=setTimeout(() => {
            changeStyle();
        }, 1000);

    },[])
    const [showAboutme,setShowAboutme]=useState(true);
    const toggleAboutMe=()=>{
        setShowAboutme(!showAboutme);
        changeStyle();
    }
    return(
        <div className=" flex gap-6 text-base">
            <div className="border-l-[0.3px] border-bordercolor"></div>
            <div className="flex flex-col gap-2 text-fontcolor ">
                <div className="flex gap-1  hover:bg-borderdark  " onClick={toggleAboutMe}  >

                    <StarSvg/>
                    <span className="">about_me.ts</span>
                </div>
                {showAboutme && <AboutTs />}
            </div>

            
       </div>
    )
}
export default AboutMets;