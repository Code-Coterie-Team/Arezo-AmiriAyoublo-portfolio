import Link from "next/link";



const Explore=()=>{

    return(
        <div className="bg-background  h-full col-start-2 col-end-3 flex flex-col gap-6  text-white p-4 border-r border-black">
            <div className="font-light">EXPLORER</div>
            <div className="flex">
                <div className="flex  gap-2 ">
                    <div className="h-4 w-4 " ><img src="arow.svg" alt="" className="h-full w-full " /></div>
                    <span className="text-sm">PORTFOLIO</span>
                    
                </div>
            </div>
        </div>
    )
}

export default Explore;