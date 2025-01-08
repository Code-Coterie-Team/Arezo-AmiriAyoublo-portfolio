
"use client"
import { useState } from "react";
import Portfolio from "./Portfolio";



const Explore=()=>{
    const [showPortfolio,setShowPortfolio]=useState(false);
    
    const togglePortfolio=()=>{
        setShowPortfolio(!showPortfolio);
       
    }

    return(
        <div className="h-full col-start-2 col-end-6 flex flex-col gap-6  border-r-2  border-borderdark">
            <div className="font-light ">EXPLORER</div>
            <div className="flex font-bold bordr-b-2 border-borderdark text-sm flex-col gap-2">
                <div className="flex gap-1">
                    <img src="" alt="" />
                    <span>OPEN EDITORS</span>
                </div>
                <div className="flex flex-col content-center gap-2 border-t-2 border-borderdark">
                    <div onClick={togglePortfolio} className="flex gap-1" >
                        <div className="h-4 w-4 " ><img src="arow.svg" alt="" className="h-full w-full " /></div>
                        <span className="text-sm">PORTFOLIO</span>
                        
                    </div>
                    <div>{showPortfolio && <Portfolio />}</div>
                    
                    
                </div>
                <div className="flex gap-1  border-t-2 border-borderdark">
                    <img src="" alt="" />
                    <span>OUTLINE</span>
                </div>
                <div className="flex gap-1 border-t-2 border-borderdark">
                    <img src="" alt="" />
                    <span>TIMELINE</span>
                </div>
                <div className="flex gap-1 border-t-2 border-borderdark">
                    <img src="" alt="" />
                    <span>SCRIPTS</span>
                </div>
                
            </div>
        </div>
    )
}

export default Explore;