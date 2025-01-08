"use client"
import Link from "next/link";

import WorkExperience from "./Workexperience";

const AboutMe=()=>{

    return(
        <div className="flex flex-col p-10 gap-32   w-full "   style= {{minHeight:'1500 px',minWidth: '1500px' }} >
            <div id="#about-me" className="flex flex-col pt-20 gap-4 justify-center content-center text-white">
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
            <WorkExperience/>
        </div>
    )
}
export default AboutMe;