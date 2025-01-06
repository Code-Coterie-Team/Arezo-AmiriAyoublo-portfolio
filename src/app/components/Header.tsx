


const Header=()=>{
    return(
        <div className=" flex   h-[5%]  justify-between border border-black  text-sm p-2  text-white ">
            <div className="flex gap-16">
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