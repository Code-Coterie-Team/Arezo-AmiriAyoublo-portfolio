import Link from "next/link"
import Home from "./Aboutitem"
import { StarSvg } from "@/assets"

const Headermain = () => {

    return (
        <div className="w-full h-8 border-b-2 border-borderdark flex  text-sm ">
            <div className="w-36  flex  justify-center gap-1  text-center font-semibold text-linkcolor border-b-2 border-linkcolor ">
                <StarSvg/>
                About Me
            </div>

        </div>
    )
}
export default Headermain