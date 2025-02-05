"use client";
import Link from "next/link";

import {
  DeletSvg,
  LoadBranchSvg,
  SidewindowSvg,
  StarSvg,
  ToggleSvg,
} from "@/assets";
import React from "react";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Headermain = () => {

  const links = useStore((state) => state.links);
  const  {setActiveProject,setActiveLink,setShowAboutme,removeLink}=useStore();
  const path = usePathname();
  const router = useRouter();
  const  activeLink=useStore((state)=>state.activeLink)
  const handelDelete = (href: string) => {
    removeLink(href);
  };
  const setLink=(name:string,href:string)=>{
          setActiveProject(name)
          setActiveLink(href);
          if(name==='About me'){
            setShowAboutme(true);
          }else{
            setShowAboutme(false)
          }
  }

  useEffect(() => {
    
      
      if (activeLink) {
        router.push(activeLink);
        if (activeLink !=='/'){
          setShowAboutme(false);
        }else{
          setShowAboutme(true)
        }
      }
   
  }, [links, router,activeLink,setShowAboutme]);

  return (
    <div className=" w-full h-12 border-b-2 border-borderdark flex justify-between   items-center bg-maincolor text-sm ">
      <div className="flex h-full ">
        {links.map((item: { name: string; href: string }, index: number) => (
          <div
            key={index}
            className={`w-36  h-full flex  gap-2 items-center justify-around text-center font-semibold  border-r border-borderdark ${
              item.href === path
                ? "border-b-2 border-b-headerborder text-linkcolor"
                : "text-fontcolor"
            }`}
          >
            {item.name === "About me" && <StarSvg />}
            <button onClick={()=>setLink(item.name,item.href)}><Link href={item.href}>{item.name}</Link></button>
            <button
              onClick={() => {
                handelDelete(item.href);
              }}
            >
              <DeletSvg className="fill-white" />
            </button>
          </div>
        ))}
      </div>
    
      <div className="flex gap-2 ">
        <LoadBranchSvg />
        <SidewindowSvg />
        <ToggleSvg />
      </div>
    </div>
  );
};
export default Headermain;
