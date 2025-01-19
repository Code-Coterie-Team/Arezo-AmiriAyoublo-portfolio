"use client"
import { useState } from "react";
import Portfolio from "./Portfolio";
import { ArowSvg } from "@/assets";
import { transform } from "next/dist/build/swc/generated-native";
import { useStore } from "@/store";


const FileExplore = () => {
    const [arowStyle, setArowStyle] = useState({ transform: 'rotate (0deg)' });
    
    const [showPortfolio, setShowPortfolio] = useState(true);
    const exploreitem = ['OPEN EDITORS', 'PORTFOLIO', 'OUTLINE', 'TIMELINE', 'SCRIPTS']
    const togglePortfolio = () => {
        setShowPortfolio((prev) => !prev);
        setArowStyle((prev) => ({

            transform: prev.transform === 'rotate(0deg)' ? 'rotate(90deg)' : 'rotate(0deg)'
        }
        ))

    }

    return (
        <div className="flex flex-col ">

            <div className="flex font-bold bordr-b-2 border-borderdark text-sm flex-col gap-2 ">
                {exploreitem.map((item, index) => (
                    <div className="border-b border-borderdark" key={index}>
                        <div className="flex flex-col gap-1  hover:border-[0.5px] hover:border-fontcolor" onClick={item === 'PORTFOLIO' ? togglePortfolio : undefined}  >
                            <div className="flex">
                                {item === 'PORTFOLIO' ? (
                                    <ArowSvg style={arowStyle} />
                                ) : (<ArowSvg />)}


                                <span>{item}</span>
                            </div>

                        </div>
                        {item === 'PORTFOLIO' && showPortfolio && <Portfolio />}

                    </div>

                ))}


            </div>
        </div>
    )
}

export default FileExplore;