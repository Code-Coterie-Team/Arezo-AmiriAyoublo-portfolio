"use client"
import { StarSvg } from "@/assets";
import { useEffect, useState } from "react";
import AboutTs from "./Itemaboutts";
import { useStore } from "@/store";

const AboutMets = () => {
   
    const {setActiveLink,addLink}=useStore();
    const [showAboutme, setShowAboutme] = useState(true);
     const links=useStore((state)=>state.links)
    
    const toggleAboutMe = (name:string,href:string) => {
        setShowAboutme(!showAboutme);
        const existlink=links.some((l:any)=>l.href===href);
        if(!existlink){
            addLink({name,href});
        }
      
        setActiveLink('/')
        
    }
    return (
        <div className=" flex gap-6 text-base">
            <div className="border-l-[0.3px] border-bordercolor"></div>
            <div className="flex flex-col gap-2 text-fontcolor ">
                <div className="flex gap-1  hover:bg-borderdark  font-medium text-base " onClick={()=>setShowAboutme(!showAboutme)}  >

                    <StarSvg />
                    <span className=" "  onClick={()=>toggleAboutMe('Home','/')}>about_me.ts</span>
                </div>
                {showAboutme && <AboutTs />}
            </div>


        </div>
    )
}
export default AboutMets;