
"use client"
import { useState } from "react";
import Portfolio from "./Portfolio";
import { ArowSvg } from "@/assets";



const Explore=()=>{
    const [showPortfolio,setShowPortfolio]=useState(true);
    
    const togglePortfolio=()=>{
        setShowPortfolio(!showPortfolio);
       
    }

    return(
        <div className="  col-start-2 col-end-6 flex flex-col gap-6  border-r-2 border-borderdark">
            <div className="font-light ">EXPLORER</div>
            <div className="flex font-bold bordr-b-2 border-borderdark text-sm flex-col gap-2 ">
                <div className="flex gap-1 h-8 hover:border-[0.5px] hover:border-fontcolor">
                    <ArowSvg/>
                    <span>OPEN EDITORS</span>
                </div>
                <div className="flex flex-col content-center gap-2 border-t-2 border-borderdark">
                    <div onClick={togglePortfolio} className="flex gap-1  hover:border-[0.5px]  hover:border-fontcolor" >
                        <ArowSvg/>
                        <span className="text-sm">PORTFOLIO</span>
                        
                    </div>
                    <div>{showPortfolio && <Portfolio />}</div>
                    
                    
                </div>
                <div className="flex gap-1 h-8  border-t-2 border-borderdark hover:border-[0.5px] hover:border-fontcolor">
                    
                    <ArowSvg/>
                    <span>OUTLINE</span>
                </div>
                <div className="flex gap-1 h-8 border-t-2 border-borderdark hover:border-[0.5px] hover:border-fontcolor">
                    <ArowSvg />
                    <span>TIMELINE</span>
                </div>
                <div className="flex gap-1 border-t-2 h-8 border-borderdark hover:border-[0.5px] hover:border-fontcolor">
                    <ArowSvg />
                    <span>SCRIPTS</span>
                </div>
                
            </div>
        </div>
    )
}

export default Explore;