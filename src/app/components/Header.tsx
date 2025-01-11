import  {ActiveWindowSvg, ArowSvg, HorizWindowSvg, SidewindowSvg, VscodeSvg } from "../../assets";
import Explore from "./Explore";



const Header=()=>{
   
    return(
        <div className="   flex row-span-1  justify-between  border-b-2 border-borderdark text-sm p-2  ">
            <div className="flex gap-20 text-base">
               
                <ul className="flex gap-4   ">
                    <VscodeSvg/>
                    <li className="h-full w-5"><img src="vscod.svg" alt="" /></li>
                    <li>File</li>
                    <li> Edit</li>
                    <li>View</li>
                    <li> Run</li>
                    <li>Go</li>
                    <li>Terminal</li>
                    <li>Help</li>
                </ul>
                <h1>Arezoo AmiriAyoubloo-Visual Studio Code</h1>
            </div>
           
            <div className="flex gap-6 ">
               <div className="flex gap-2">
                    <button ><ActiveWindowSvg /> </button>
                    <button><HorizWindowSvg /></button>
                    <button> <SidewindowSvg /></button>
               </div>
                <div className="size-3  rounded-full bg-yellow-200"></div>
                <div className=" size-3 rounded-full bg-green-400 "></div>
                <div className="size-3 rounded-full bg-red-500"></div>
            </div>
        </div>
    )
}
export default Header;