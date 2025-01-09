import Link from "next/link"
import Home from "./Aboutitem"
import { StarSvg } from "@/assets"

const Headermain = () => {

    return (
        <div className="w-full h-8 border-b-2 border-borderdark flex  text-sm ">
            <div className="w-36 border-r flex  justify-center gap-1 border-black text-center font-semibold text-linkcolor focus:border-b-2 hover:border-blue-500 p-1">
                <StarSvg/>
                About Me
            </div>

        </div>
    )
}
export default Headermain