

const Footer=()=>{
    return(
        <div className="bg-black h-[5%] flex justify-between  text-white p-2">
            <div className="flex gap-4">
                <div className="h-4 w-4"><img src="branch.svg" alt="" className="h-full w-full" /></div>
                <span className=" pl-4 text-sm">main</span>

            </div>
            <div className="flex gap-4 pr-4 ">
                <span>powerd by nesxtjs</span>
                <span>prettier</span>
            </div>

        </div>
    )
}
export default Footer;