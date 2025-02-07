
"use client"
import { useStore } from '@/store';
import FileExplore from "./FileExplore";
import clsx from 'clsx';

const Explore = () => {
    const hideExplore=useStore((state)=> state.hideExplore)
    const visibleExplore = useStore((state) => state.visibleExplore)
    return (
        <div className= "md:flex md:flex-col gap-6  border-r-2 border-borderdark  h-full overflow-hidden">

            {visibleExplore && <FileExplore />}
        </div>


    )
}

export default Explore;