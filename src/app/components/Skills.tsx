"use client"
import { Skillitem } from "@/assets";
import { useEffect, useState } from "react";


const Skills=()=>{
    const [styleTitle,setyleTitle]=useState(
       {opacity:0}
    )
    const change=()=>{
        setyleTitle({opacity:1})
    }
    return(
        <div className="grid grid-cols-1 gap-8" id='skills'>
            <div className="flex gap-2 w-full">
                <div className="w-4 border-t-4 border-white"></div>
                <div className=" w-full border-t border-fontcolor p-2"></div>
            </div>
            <div className=" flex gap-6 content-center   " onScroll={change}>
                <Skillitem/>
                <p className="text-2xl text-white" >Skills</p>
            </div>
            <p className="font-extrabold  text-white  text-3xl "> software developer with experience in <span className="text-blue-900"> Front-End</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                <div className=" size-72  border-4 border-black rounded-full bg-blue-700"></div>
                <div></div>
            </div>
        </div>
    )

}

export default Skills;