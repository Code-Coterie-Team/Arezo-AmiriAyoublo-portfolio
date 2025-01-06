import Link from "next/link";


const  Activiybar=()=>{

    return(
        <div className="h-full w-[4%] flex flex-col  justify-between   bg-barcolor ">
            <div className="flex flex-col  gap-4 pt-4  cursor-pointer ">
                <div className=" w-full hover:bg-slate-600 p-2"><img src="file.svg" alt="" className="h-full w-full" /></div>
                <div className="w-full hover:bg-slate-600 p-2"><img src="github.svg" alt="" className="h-full w-full" /></div>
                <div className="w-full hover:bg-slate-600 p-2"><img src="project.svg" alt="" className="h-full w-full" /></div>
                <div className=" w-full hover:bg-slate-600 p-2"><img src="contact.svg" alt="" className="h-full w-full" /></div>
            </div>
            <div className="flex flex-col gap-4 p-3">
                <div className="h-10 w-full "><img src="about.svg" alt="" className="h-full w-full" /></div>
                <Link href="/setting"><div className="h-10 w-full"><img src="setting.svg" alt="" className="h-full w-full" /></div></Link>
            </div>
        </div>
    )

}

export default  Activiybar;