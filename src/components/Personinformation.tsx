
import { AboutSvg, BackgroundSvg, ContactSvg, GiticonSvg } from "@/assets"
import Link from "next/link"
import { useEffect, useState } from "react"
import BorderTop from "./Bordertop"
import Image from "next/image"
import College from "./College"
export default  function PersonalInformation(){
 
    
   

   
    return (
        <>  
           
 
            <div id="aboutme" className="flex flex-col pt-20 gap-4 justify-center content-center  text-white scroll-smooth">
                
                <div className="flex text-5xl gap-4 relative">
                    <h1 className=" font-semibold ">Arezoo AmiriAyoubloo</h1>
                    <span className="  animation animate-wave" >👋</span>
                </div>
                <div className="flex gap-2  items-center">
                    <span>Looking for job</span>
                    <div className="size-2 bg-red-600 animate-pulse rounded-full"></div>
                    <span className="text-linkcolor animate-pulse">/Frontend Developer</span>
                </div>
                <p>I'm a developer with experience in backend development using Python and the Django framework. Recently, I've developed a strong interest in frontend development, and I've been working on frontend projects for a while now. I love learning new technologies and challenging myself.</p>
                <div className="flex font-bold text-borderdark gap-4">
                    <Link href="https://www.linkedin.com/in/arezoo-amiri-ayoblo/"> <button className="bg-white w-8 text-xl  rounded font-extrabold">in</button></Link>
                    <button className=" w-6 rounded-full"><GiticonSvg   className="bg-white rounded-full"/></button>
                    <button className="h-8 w-36 rounded-xl bg-white shadow-buttonshadow  ">contact me</button>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center ">
                <span className="size-4  border-white border-r border-b rotate-45 animate-scroll   "></span>
                <span className="size-4  border-white border-r border-b  rotate-45 animate-scroll  delay-150 "></span>
                <span className="size-4  border-white border-r border-b rotate-45 animate-scroll  delay-300 "></span>
                
            </div>
            
            <div className="flex flex-col gap-10 text-white">
                <BorderTop/>
                <div className="flex items-center gap-4 relative">
                    <div className="size-10 rounded-full bg-green-300 blur-lg "></div>
                    <ContactSvg className="fill-white absolute  left-4 "  />
                    <h2 className="text-2xl">About Me</h2>

                </div>
                <p className="text-5xl">I'm a <span className="text-green-600">software developer</span>  specialized on 
                    <span className="text-green-600"> Web Applications</span>
                </p>
                <div className="flex gap-14" >
                    <div className="flex flex-col gap-8 font-semibold">
                        <h3 className="text-2xl">Arezoo AmiriAyoubloo</h3>
                        <span className="text-green-500">Frontend Developer</span>
                        <p className="text-fontcolor">
                            I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.</p>
                        <p className="text-fontcolor">After 4 years in this industry I have worked with multiple front-end and back-end technologies.</p>
                    </div>
                    <Image src="/arezoo.jpeg" alt="" className="rounded-full "  height={300} width={300}/>
                </div>
                <College/>


            </div>
        </> 
    )
}
