"use client"
import { Skillitem } from "@/assets";
import { useEffect, useState } from "react";
import BorderTop from "./Bordertop";
import CircleSkill from "./Circleskill";


const Skills=()=>{
    const [styleTitle,setyleTitle]=useState(
       {opacity:0}
    )
    const[Language,setLanguage]=useState(true);
    const [randomColor,setColor]=useState('rgb(255,255,255)');
    const [tools,setTools]=useState(false);
    const change=()=>{
        setyleTitle({opacity:1})
    }
    const randomColorF=()=>{
         const r=Math.floor(Math.random()*256);
         const g=Math.floor(Math.random()*256);
         const b=Math.floor(Math.random()*256)
        return `rgb(${r},${g},${b})`

    }
    useEffect(()=>{
       const interval= setInterval(() => {
            setColor(randomColorF)
        }, 2000);
        return ()=>clearInterval(interval)
    },[])
    
    return(
        <div className="grid grid-cols-1 gap-8" id='skills'>
            <BorderTop/>
            <div className=" flex gap-6 content-center relative" onScroll={change}>
                <div
                className="size-10 rounded-full bg-skillcolor blur-lg"></div>
                <Skillitem className=" absolute "/>
                <p className="text-2xl text-white" >Skills</p>
            </div>
            <p className="font-extrabold  text-white  text-3xl pb-16 "> software developer with experience in <span className="text-skillcolor"> Front-End</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
                <div className="  relative size-72  border-4 border-borderdark rounded-full shadow-sm shadow-white" style={{background:randomColor}}>
                    <div className="size-56 rounded-full bg-black/80 absolute left-7 bottom-7">
                        <div className="size-60 bg-transparent absolute left-8 top-48 rotate-45 -translate-x-1/2  -translate-y-1/2 rounded-xl " style={{borderTop:` 12px solid  ${randomColor}`}}>
                            
                            
                         </div>
                        
                        <div className="size-60 bg-transparent  border-b-[12px] absolute top-8 left-8  -translate-x-1/2  -translate-y-1/2 rounded-xl -rotate-45" style={{borderBottom:`12px solid ${randomColor}`}}></div>
                        
                        <button className=" absolute top-6 left-16 font-semibold text-xl border-b border-skillcolor "  onClick={()=>setLanguage(!Language)}>Language</button>
                        <button className="absolute bottom-6 left-20 font-semibold text-xl border-b border-skillcolor" onClick={()=>setTools(!tools)}>Tools</button>
                        <button className=" absolute top-24 left-6 font-semibold text-xl border-b border-skillcolor">Back</button>
                        <button className="absolute top-24  right-6 font-semibold text-xl border-b border-skillcolor">Front</button>
                        

                    </div>
                </div>
                
               { Language && <CircleSkill title="Programming Languages" icon={[{image:'/js-logo.webp',name:'JavaScript'},{image:'/python-logo.webp',name:'Python'},{image:'/ts-logo.webp',name:'TypeScript'}]} />}
               {tools && <CircleSkill title="Tools" icon={[{image:'/gti-logo-webp',name:'git'}]} />}
            
            </div>
        </div>
    )

}

export default Skills;