"use client"
import { StarSvg } from "@/assets";
import AboutTs from "./Itemaboutts";
import { useStore } from "@/store";
import Link from "next/link";

const AboutMets = () => {
   
    const {setActiveLink,addLink,setShowAboutme}=useStore();
    const showAboutme=useStore((state)=>state.showAboutme)

     const links=useStore((state)=>state.links)
    
    const toggleAboutMe = (name:string,href:string) => {
        setShowAboutme(!showAboutme);
        const existlink=links.some((l)=>l.href===href);
        if(!existlink){
            addLink({name,href});
        }
        setActiveLink('/')
        
    }
    return (
        <div className=" flex gap-6 text-base">
            <div className="border-l-[0.3px] border-bordercolor"></div>
            <div className="flex flex-col gap-2 text-fontcolor ">
                <div className="flex gap-1  hover:bg-borderdark  font-medium text-base " onClick={()=>setShowAboutme(!showAboutme)}  >

                    <StarSvg />
                    <Link  href={'/'}  onClick={()=>toggleAboutMe('About me','/')}>about_me.ts</Link>
                </div>
                { showAboutme && <AboutTs />}
            </div>


        </div>
    )
}
export default AboutMets;