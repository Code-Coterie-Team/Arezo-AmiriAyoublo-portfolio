"use client"
import Link from "next/link";

import { BranchSvg, ContactSvg, ExtentionSvg, FileSvg, RunitemSvg, SearchSvg, SettingSvg } from "@/assets";
import { useStore } from '@/store';

const Activiybar = () => {
    const setVisibileExplore = useStore((state) => state.setVisibileExplore)
    const {addLink}=useStore()
    const handleAddLink=(name:string,href:string)=>{
               addLink({name,href})
    }
    const svgitem = [
        { id: "file", icon: <FileSvg className="fill-slate-500 hover:fill-fontcolor" width={32} height={32}/> },
        { id: "search", icon: <SearchSvg className="fill-slate-500 hover:fill-fontcolor" width={32} height={32}/> },
        { id: "branch", icon: <BranchSvg className="fill-slate-500 hover:fill-fontcolor" width={32} height={32}/> },
        { id: "run", icon: <RunitemSvg className="fill-slate-500 hover:fill-fontcolor" width={32} height={32}/> },
        { id: "extension", icon: <ExtentionSvg className="fill-slate-500 hover:fill-fontcolor" width={32} height={32}/> }
    
    ]
    return (
        <div className=" col-span-1 flex flex-col justify-between h-full ">
            <div className="flex flex-col gap-1  items-center">
                {svgitem.map((item, index) => (
                    <button key={ index} className=" w-full p-3  focus:border-l-2 border-fontcolor focus:fill-fontcolor  "  onClick={() => {
                        setVisibileExplore(item.id === "file");
                    }}>{item.icon}</button>
                ))}


            </div>
            <div className="flex flex-col gap-4 p-2  ">
                <ContactSvg className=" fill-slate-500 hover:fill-fontcolor  " width={32} height={32}/>
                <Link href="/setting" onClick={()=>{handleAddLink('Setting','/setting')} } ><SettingSvg width={32} height={32} /></Link>
            </div>
        </div>
    )

}

export default Activiybar;