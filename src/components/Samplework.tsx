"use client "
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"
 interface Idata {
    project:string,
    image:string,
    link:string,
 }
const Samplework=({project,image,link}:Idata)=>{
    const [bgPosition,setBgPosition]=useState({x:0,y:0});
   
    const handelMouse=(e:any)=>{
        const{offsetX,offsetY}=e.nativeEvent;
        setBgPosition({x:offsetX,y:offsetY})

    }
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-6 border-[0.5px]  rounded-lg border-fontcolor h-[300px] hover:shadow-md hover:shadow-workfont transition   " style={{background:`radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px ,rgba(255, 220, 139,0.1),rgb(30 ,35, 54 ))`}}  onMouseMove={handelMouse}>
            <div className="flex flex-col gap-24 text-white font-semibold">
                <p className=" text-3xl ">{project} </p>
                <Link href={link} className="text-2xl hover:border-b-2 hover:border-workfont">Learn More</Link>
            </div>
            <Image src={image} alt="" width={500} height={200} className=" shadow-xl rounded-xl shadow-black"/>
        </div>

    )
}
export default Samplework