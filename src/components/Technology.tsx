
import Image from "next/image";
import BorderTop from "./Bordertop";

const Technologies=()=>{

    return(
         <div className="flex flex-col gap-2" id='technologies'>
            <BorderTop/>
            <span>Technologies</span>
            <div className="flex gap-2">
                {/* <Image  src='/js-logo.webp' alt=""/> */}
            </div>

         </div>
    )
}

export default Technologies;