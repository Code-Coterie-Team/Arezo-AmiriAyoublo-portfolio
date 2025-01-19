
"use client"
import { useStore } from "@/store";
import FileExplore from "./FileExplore";

const Explore = () => {
  
    const visibleExplore=useStore((state)=> state.visibleExplore)
    return (
        <div className= {` flex flex-col col-start-2 col-end-6 gap-6  border-r-2 border-borderdark ` }>
            <div className="font-light ">EXPLORER</div>
            {visibleExplore && <FileExplore/>}
        </div>
        
       
    )
}

export default Explore;