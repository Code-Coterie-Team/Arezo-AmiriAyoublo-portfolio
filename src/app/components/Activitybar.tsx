import Link from "next/link";
import { AboutSvg, BranchSvg, ContactSvg, ExtentionSvg, FileSvg, RunitemSvg, SearchSvg, SettingSvg } from "@/assets";

const  Activiybar=()=>{
    const svgitem=[
        <FileSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor "  />,
        <SearchSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor" />,
        < BranchSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor" />,
        < RunitemSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor" />,
        <ExtentionSvg className="w-8 h-8  fill-slate-500 hover:fill-fontcolor" />
    ]
    return(
        <div className=" col-span-1 flex flex-col gap-16 ">
            <div className="flex flex-col  gap-2 pt-2 cursor-pointer">
                {svgitem.map((item)=>(
                    <button className="  p-4 focus:border-l-2 border-fontcolor focus:fill-fontcolor ">{item }</button>
                ))}
                
                
            </div>
            <div className="flex flex-col ">
                <div className=" p-4 "><ContactSvg  /></div>
                <Link href="/setting"><div className="p-4 "><SettingSvg  /></div></Link>
            </div>
        </div>
    )

}

export default  Activiybar;