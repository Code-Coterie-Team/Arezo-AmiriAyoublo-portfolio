
"use client"
import { useStore } from '@/assets';
import FileExplore from "./FileExplore";

const Explore = () => {

    const visibleExplore = useStore((state) => state.visibleExplore)
    return (
        <div className={` hidden md:flex md:flex-col md:col-start-2 md:col-end-6 gap-6  border-r-2 border-borderdark }`}>

            {visibleExplore && <FileExplore />}
        </div>


    )
}

export default Explore;