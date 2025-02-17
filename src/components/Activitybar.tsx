"use client"
import Link from "next/link";

import { useStore } from '@/store';
import FileSvg from "@/icon/FileSvg";
import SearchSvg from "@/icon/Searchsvg";
import BranchSvg from "@/icon/BarnchSvg";
import Runitem from "@/icon/Runitem";
import ExtentionSvg from "@/icon/ExtentionSvg";
import ContactSvg from "@/icon/ContactSvg";
import SettingSvg from "@/icon/SettingSvg";

const Activiybar = () => {
    const setVisibileExplore = useStore((state) => state.setVisibileExplore)
    const {addLink}=useStore()
    const handleAddLink=(name:string,href:string)=>{
               addLink({name,href})
    }
    const svgitem = [
        { id: "file", icon: <FileSvg width={32} height={32} className="text-slate-500 hover:text-fontcolor "/> },
        { id: "search", icon:<SearchSvg width={32} height={32} className="text-slate-500 hover:text-fontcolor "/> },
        { id: "branch", icon: <BranchSvg width={32} height={32} className="text-slate-500 hover:text-fontcolor"/> },
        { id: "run", icon: <Runitem width={32} height={32} className="text-slate-500 hover:text-fontcolor"/> },
        { id: "extension", icon: <ExtentionSvg width={32} height={32} className="text-slate-500 hover:text-fontcolor"/> }
    
    ]
    return (
        <div className="md:flex md:flex-col justify-between h-full col-span-1    ">
            <div className="flex flex-col gap-1 items-center">
                {svgitem.map((item, index) => (
                    <button key={ index} className=" w-full p-3 focus:border-l-2 border-fontcolor "  onClick={() => {
                        setVisibileExplore(item.id === "file");
                    }}>{item.icon}</button>
                ))}


            </div>
            <div className="flex flex-col gap-4 p-2  ">
                <ContactSvg width={32} height={32}  className=" fill-slate-500 hover:fill-fontcolor  "/>
                <Link href="/setting" onClick={()=>{handleAddLink('Setting','/setting')} } ><SettingSvg width={32} height={32}   /></Link>
            </div>
        </div>
    )

}

export default Activiybar;