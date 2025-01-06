import Link from "next/link"
import Home from "./Homemain"

const Headermain = () => {

    return (
        <div className="bg-background w-full h-8 text-white flex  text-sm ">
            <div className="w-32 border-r flex gap-1 border-black text-center p-1">Home.js
            </div>
            <div className="w-32 border-r border-black text-center p-1">about</div>
            <div className="w-32 border-r border-black text-center p-1">contact</div>
            <div className="w-32 border-r border-black text-center p-1" >project</div>
            <div className="w-32 border-r border-black text-center p-1">github </div>
        </div>
    )
}
export default Headermain