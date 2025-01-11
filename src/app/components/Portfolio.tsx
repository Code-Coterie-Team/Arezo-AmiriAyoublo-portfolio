"use client"

import { useState } from "react"
import AboutMe from "./Aboutitem"
import AboutMets from "./Aboutitem"
import { ArowSvg, EsllintSvg, GitignoreSvg, JsonpakageSvg, NextitemSvg, NodeitemSvg, PublicitemSvg, TailwindSvg, TsconfigSvg } from "@/assets"
import { title } from "process"


const Portfolio = () => {

    const [showPublic, setShowPublic] = useState(true)
    const togglePublic = () => {
        setShowPublic(!showPublic);
    }
    const directory=[
        {
            title:'.eslintrc.json',
            svg:<EsllintSvg/>

        },
        {
            title:'.gitignore',
            svg:<GitignoreSvg/>
        },
        {
            title:'next.config.js',
            svg:<NextitemSvg/>
        },
        {
            title:"package-lock.js",
            svg:<JsonpakageSvg/>,

        },
        {
            title:'package.json',
            svg:<JsonpakageSvg/>,
        },
        {
            title:'tailwind.config.ts',
            svg:<TailwindSvg/>
        },
        {
            title:'tsconfig.json',
            svg:<TsconfigSvg/>
        }
    ]
    return (
        <div className="flex flex-col gap-2  h-screen overflow-y-auto" style={{ maxHeight: '300px' }}>
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
            <div className="pl-2 ">
                <ArowSvg />
                <span>src</span>

            </div>
            <div className="flex flex-col gap-4 pl-6">
                {directory.map((item,index)=>(
                    <div key={index} className="flex gap-4">
                        {item.svg}
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>





        </div>
    )
}
export default Portfolio;