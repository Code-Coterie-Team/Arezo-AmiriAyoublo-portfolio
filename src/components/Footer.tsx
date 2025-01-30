import { BranchSvg } from "@/assets";


const Footer=()=>{
    return(
        <div className="flex  bg-borderdark border-t-2 justify-between items-center border-borderdark ">
            <div className="flex hover:bg-slate-800 ">
                <div className="w-10    opacity-35 hover:bg-blue-300"></div>
                <div className="flex pl-2  pt-1 ">
                    <BranchSvg/>
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