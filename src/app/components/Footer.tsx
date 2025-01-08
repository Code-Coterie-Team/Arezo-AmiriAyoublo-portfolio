

const Footer=()=>{
    return(
        <div className="h-[5%] flex w-screen bg-borderdark border-t-2 justify-between border-borderdark z-50 absolute">
            <div className="flex hover:bg-slate-800 ">
                <div className="w-10 h-full   opacity-35 hover:bg-blue-300"></div>
                <div className="flex pl-2  pt-1 ">
                    <div className="h-4 w-4  "><img src="branch.svg" alt="" className="h-full w-full fill-white " /></div>
                    <span className=" pl-4 text-sm">main</span>

                </div>
            </div>
            <div className="flex gap-4 pr-4 ">
                <span className="hover:bg-slate-800">space:2</span>
                <span className="hover:bg-slate-800">UTF-8</span>
                <span className="hover:bg-slate-800">CRLF</span>
                <span className="hover:bg-slate-800"> TypeScript JSX</span>
                <div className="hover:bg-slate-800">Go Live</div>
            </div>

        </div>
    )
}
export default Footer;