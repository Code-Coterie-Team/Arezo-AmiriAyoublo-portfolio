import Link from "next/link";


const  Activiybar=()=>{

    return(
        <div className=" col-span-1 flex flex-col h-full justify-between   ">
            <div className="flex flex-col  gap-2 pt-2 cursor-pointer w-2/3 ">
                <button className="w-full  hover:bg-slate-600 p-4"><img src="file.svg" alt="" className="h-full w-4/5 " /></button>
                <button className="w-full hover:bg-slate-600 p-4"><img src="searchsvg.svg" alt="" className="h-full w-4/5" /></button>
                <button className="w-full hover:bg-slate-600 p-4"><img src="branch.svg" alt="" className="h-full w-4/5" /></button>
                <button className=" w-full hover:bg-slate-600 p-4"><img src="runitem.svg" alt="" className="h-full w-4/5" /></button>
                <button className=" w-full hover:bg-slate-600 p-4"><img src="extentionitem.svg" alt="" className="h-full w-4/5" /></button>
            </div>
            <div className="flex flex-col gap-2 w-2/3">
                <div className="h-10 w-full p-2 "><img src="about.svg" alt="" className="h-full w-full" /></div>
                <Link href="/setting"><div className="h-10 w-full p-2"><img src="setting.svg" alt="" className="h-full w-full" /></div></Link>
            </div>
        </div>
    )

}

export default  Activiybar;