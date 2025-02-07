
"use client"
import { useStore } from '@/store';
import FileExplore from "./FileExplore";

const Explore = () => {

    const visibleExplore = useStore((state) => state.visibleExplore)
    return (
        <div className={`  md:flex md:flex-col md:col-start-2 md:col-end-6 gap-6  border-r-2 border-borderdark  h-full overflow-hidden }`}>

            {visibleExplore && <FileExplore />}
        </div>


    )
}

export default Explore;