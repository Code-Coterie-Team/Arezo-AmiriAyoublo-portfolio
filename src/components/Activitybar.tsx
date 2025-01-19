"use client"
import Link from "next/link";

import {  BranchSvg, ContactSvg, ExtentionSvg, FileSvg, RunitemSvg, SearchSvg, SettingSvg } from "@/assets";
import { useStore } from "@/store";

const  Activiybar=()=>{
    const setVisibileExplore=useStore((state)=>state.setVisibileExplore)
    const svgitem=[
        <FileSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor "   />,
        <SearchSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor"  />,
        < BranchSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor"   />,
        < RunitemSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor"   />,
        <ExtentionSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor"   />
    ]
    return(
        <div className=" col-span-1 flex flex-col gap-16 ">
            <div className="flex flex-col  gap-2 pt-2 items-center cursor-pointer">
                {svgitem.map((item,index)=>(
                    <button key={index} className="  p-4 focus:border-l-2 border-fontcolor focus:fill-fontcolor " onClick={()=>{
                        if(index===0){
                            setVisibileExplore(true);
                        } else{
                            setVisibileExplore(false)
                        }}}>{item }</button>
                ))}
                
                
            </div>
            <div className="flex flex-col gap-16  items-center ">
                <ContactSvg  className=" fill-slate-500 hover:fill-fontcolor" />
                <Link href="/setting"><SettingSvg  /></Link>
            </div>
        </div>
    )

}

export default  Activiybar;