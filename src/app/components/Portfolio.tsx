"use client"

import { useState } from "react"
import AboutMe from "./Aboutitem"
import AboutMets from "./Aboutitem"


const Portfolio = () => {
    const [showPublic, setShowPublic] = useState(true)
    const togglePublic = () => {
        setShowPublic(!showPublic);
    }
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-1  hover:bg-borderdark pl-2">
                <div><img src="arow.svg" alt="" /></div>
                <div><img src="nextitem.svg" alt="" /></div>
                <span className="text-gray-500">.next</span>
            </div>
            <div className="flex gap-1  hover:bg-borderdark pl-2">
                <div><img src="arow.svg" alt="" /></div>
                <div><img src="nodeitem.svg" alt="" /></div>
                <span className="text-gray-500">node-modules</span>
            </div>
            <div className="flex gap-1  hover:bg-borderdark pl-2" onClick={togglePublic}>
                <div><img src="arow.svg" alt="" /></div>
                <div><img src="publicitem.svg" alt="" /></div>
                <span className="text-gray-500">public</span>

            </div>
            <div className="flex gap-8 pl-4">

                <div className="p">{showPublic && <AboutMets />}</div>
            </div>

        </div>
    )
}
export default Portfolio;