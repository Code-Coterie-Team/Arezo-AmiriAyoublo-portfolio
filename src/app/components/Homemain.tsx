

const Homemain=()=>{
    return(
        <div className=" h-full grid grid-cols-1  content-center md:grid-cols-2 md:justify-items-center justify-self-center  md:gap-4 ">
            <div className="flex flex-col  gap-4 w-full h-full text-white  justify-self-center content-center pl-10">
                <div className=" text-3xl font-semibold">Arezoo AmiriAyoubloo</div>
                <div className="font-medium text-2xl">Front end Developer</div>
                <div className="flex gap-6">
                    <button className="bg-yellow-500 h-10 w-28 font-semibold">View Work</button>
                    <button className=" h-10 w-28 text-yellow-500 border-2 border-yellow-500">Contact Me</button>
                </div>

            </div>
            <div>
                <div className="size-40 rounded-full bg-yellow-500"></div>
            </div>
        </div>
    )
}
export default Homemain;