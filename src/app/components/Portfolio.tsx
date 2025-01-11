"use client"

import { useState } from "react"
import AboutMe from "./Aboutitem"
import AboutMets from "./Aboutitem"
import { ArowSvg, NextitemSvg, NodeitemSvg, PublicitemSvg } from "@/assets"


const Portfolio = () => {
    const [showPublic, setShowPublic] = useState(true)
    const togglePublic = () => {
        setShowPublic(!showPublic);
    }
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1  hover:bg-borderdark pl-2">
                <ArowSvg/>
                <NextitemSvg/>
                <span className="text-gray-500">.next</span>
            </div>
            <div className="flex gap-1  hover:bg-borderdark pl-2">
                <ArowSvg />
                <NodeitemSvg/>
                <span className="text-gray-500">node-modules</span>
            </div>
            <div className="flex gap-1 text-base text-fontcolor hover:bg-borderdark pl-2" onClick={togglePublic}>
                <ArowSvg />
                <PublicitemSvg/>
                <span >public</span>

            </div>
            <div className="flex gap-8 pl-4">

                <div className="p">{showPublic && <AboutMets />}</div>
            </div>

        </div>
    )
}
export default Portfolio;