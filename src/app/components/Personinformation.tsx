import Link from "next/link"

export default  function PersonalInformation(){
    return (
        <>   
         <div id="#about-me" className="flex flex-col pt-20 gap-4 justify-center content-center  text-white">
                <div className="flex text-5xl gap-4 relative">
                    <h1 className=" font-semibold ">Arezoo AmiriAyoubloo</h1>
                    <span className="  animation animate-wave" >👋</span>
                </div>
                <div className="flex gap-2 ">
                    <span>Looking for job</span>
                    <div className="size-2 bg-red-600 animate-pulse rounded-full"></div>
                    <span className="text-green-800 animate-pulse">/Frontend Developer</span>
                </div>
                <p>I'm a developer with experience in backend development using Python and the Django framework. Recently, I've developed a strong interest in frontend development, and I've been working on frontend projects for a while now. I love learning new technologies and challenging myself.</p>
                <div className="flex font-bold text-borderdark gap-4">
                    <Link href="https://www.linkedin.com/in/arezoo-amiri-ayoblo/"> <button className="bg-white w-8 text-xl  rounded font-extrabold">in</button></Link>
                    <button className="bg-white w-6 rounded-full">git</button>
                    <button className="h-8 w-36 rounded-xl bg-white  ">contact me</button>
                </div>
            </div>
            <div className="scroll flex justify-center ">
                <span></span>
                <span></span>
                <span></span>
                
            </div>
            
            <div className="flex flex-col gap-10 text-white">
                <div className="flex gap-2 w-full">
                    <div className="w-4 border-t-4 border-white"></div>
                    <div className=" w-full border-t border-fontcolor p-2"></div>
                </div>
                <div className="flex gap-8">
                    <img src="" alt="" />
                    <h2 className="text-2xl">About Me</h2>

                </div>
                <p className="text-5xl">I'm a <span className="text-green-600">software developer</span>  specialized on 
                    <span className="text-green-600"> Web Applications</span>
                </p>
                <div className="flex gap-14" >
                    <div className="flex flex-col gap-8 font-semibold">
                        <h3 className="">Arezoo AmiriAyoubloo</h3>
                        <span className="text-green-500">Frontend Developer</span>
                        <p className="text-fontcolor">
                            I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.</p>
                        <p className="text-fontcolor">After 4 years in this industry I have worked with multiple front-end and back-end technologies.</p>
                    </div>
                    <div><img src="arezoo.jpeg" alt="" className=" rounded-full size-[200px]" /></div>
                </div>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-4">
                        <span className="text-green-500 border-b border-fontcolor">Language</span>
                        <div className="flex flex-col gap-4 font-extrabold pb-2 border-b border-fontcolor">
                            <p >Persian-Native</p>
                            <p >English-Intermaidate</p>
                            <p >Turkish-Advance</p>
                        </div>
                        <div className="flex font-bold text-borderdark gap-4">
                            <Link href="https://www.linkedin.com/in/arezoo-amiri-ayoblo/"> <button className="bg-white w-8 text-xl  rounded font-extrabold">in</button></Link>
                            <button className="bg-white w-6 rounded-full">git</button>
                            <button className="h-8 w-36 rounded-xl bg-white  ">contact me</button>
                        </div>

                    </div>
                    <div className="w-full border-[0.2px] border-fontcolor rounded-lg hover:shadow-md  hover:shadow-green-400"></div>
                    
                </div>


            </div>
        </> 
    )
}
