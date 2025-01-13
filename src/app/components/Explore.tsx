
"use client"
import { useState } from "react";
import Portfolio from "./Portfolio";
import { ArowSvg } from "@/assets";
import { transform } from "next/dist/build/swc/generated-native";



const Explore = () => {
    const [arowStyle, setArowStyle] = useState({ transform: 'rotate (0deg)' });
    console.log(arowStyle);
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
        <div className="  col-start-2 col-end-6 flex flex-col gap-6  border-r-2 border-borderdark  ">
            <div className="font-light ">EXPLORER</div>
            <div className="flex font-bold bordr-b-2 border-borderdark text-sm flex-col gap-2 ">
                {exploreitem.map((item, index) => (
                    <>
                        <div key={index} className="flex flex-col gap-1  hover:border-[0.5px] hover:border-fontcolor" onClick={item === 'PORTFOLIO' ? togglePortfolio : undefined}  >
                            <div className="flex" key={index}>
                                {item === 'PORTFOLIO' && (
                                    <ArowSvg style={arowStyle} />
                                )}
                                <span>{item}</span>
                            </div>
                            
                        </div>
                        {item === 'PORTFOLIO' && showPortfolio && <Portfolio />}

                    </>

                ))}


            </div>




        </div>
    )
}

export default Explore;