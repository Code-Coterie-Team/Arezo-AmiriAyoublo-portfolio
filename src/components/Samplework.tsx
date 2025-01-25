"use client "
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"
import { useStore } from "@/store"
interface Idata {
    project: string,
    image: string,
    link: string,
    projectlink:string,

}
const Samplework = ({ project, image, link,projectlink }: Idata) => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
    const links=useStore((state)=>state.links)
    const addLink=useStore(state=>state.addLink)
    console.log(links,'saml');
    const handelMouse = (e: any) => {
        const { offsetX, offsetY } = e.nativeEvent;
        setBgPosition({ x: offsetX, y: offsetY })

    }
    
    const handleAddLink = (name: string, href: string) => {
        const existlink=links.some((l:any)=>l.href===href);
        if(!existlink){
            addLink({ name, href });
        }
       
}

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-6 border-[0.5px]  rounded-lg border-fontcolor h-[300px] hover:shadow-md hover:shadow-workfont transition   " style={{ background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px ,rgba(255, 220, 139,0.1),rgb(30 ,35, 54 ))` }} onMouseMove={handelMouse}>
            <div className="flex flex-col justify-between text-white font-semibold">
                <Link className=" text-3xl " href={projectlink} target="_blank">{project} </Link>
                <Link href={link} className="text-2xl w-36 hover:border-b-2 hover:border-workfont" onClick={()=>{handleAddLink(project,link)}} >Learn More</Link>
            </div>
            <Link href={projectlink} target="_blank" >
                <Image src={image} alt="home-landig-page" width={500} height={200} className=" h-44 md:h-64 shadow-xl rounded-xl shadow-black " />
            </Link>
        </div>

    )
}
export default Samplework