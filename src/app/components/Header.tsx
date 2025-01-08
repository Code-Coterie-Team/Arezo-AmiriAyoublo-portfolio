import  {ArowSvg } from "../../assets";



const Header=()=>{
    return(
        <div className=" flex   h-[7%]  justify-between  border-b-2 border-borderdark text-sm p-2  ">
            <div className="flex gap-16">
                {/* <ArowSvg/> */}
                <ul className="flex gap-4 ">
                    <li className="h-full w-5"><img src="vscod.svg" alt="" /></li>
                    <li>File</li>
                    <li> Edit</li>
                    <li>View</li>
                    <li> Run</li>
                    <li>Go</li>
                    <li>Terminal</li>
                    <li>Help</li>
                </ul>
                <div>Arezoo AmiriAyoubloo-Visual Studio Code</div>
            </div>
            <div className="flex gap-2 ">
                <div className="size-3  rounded-full bg-yellow-200"></div>
                <div className=" size-3 rounded-full bg-green-400 "></div>
                <div className="size-3 rounded-full bg-red-500"></div>
            </div>
        </div>
    )
}
export default Header;