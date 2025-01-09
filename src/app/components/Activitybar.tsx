import Link from "next/link";
import { AboutSvg, BranchSvg, ContactSvg, ExtentionSvg, FileSvg, RunitemSvg, SearchSvg, SettingSvg } from "@/assets";

const  Activiybar=()=>{

    return(
        <div className=" col-span-1 flex flex-col gap-16 ">
            <div className="flex flex-col  gap-2 pt-2 cursor-pointer">
                <button className=" hover:bg-slate-600 p-4"><FileSvg className="w-8 h-8 " /></button>
                <button className="w-full hover:bg-slate-600 p-4"><SearchSvg  className="w-8 h-8" /></button>
                <button className="w-full hover:bg-slate-600 p-4">< BranchSvg className="w-8 h-8" /></button>
                <button className=" w-full hover:bg-slate-600 p-4">< RunitemSvg  className="w-8 h-8" /></button>
                <button className=" w-full hover:bg-slate-600 p-4"><ExtentionSvg className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col ">
                <div className=" p-4 "><ContactSvg  /></div>
                <Link href="/setting"><div className="p-4 "><SettingSvg  /></div></Link>
            </div>
        </div>
    )

}

export default  Activiybar;