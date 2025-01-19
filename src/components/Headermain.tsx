'use client'
import Link from "next/link"
import Home from "./Aboutitem"
import { DeletSvg, StarSvg } from "@/assets"
import React from "react"
import { useStore } from "@/store"
import { useStoreWithEqualityFn } from "zustand/traditional"
import { usePathname } from "next/navigation"

const Headermain=() => {
    const {links}=useStore();
    const path=usePathname();
    return (
        <div className="w-full h-10 border-b-2 border-borderdark flex  bg-maincolor text-sm  fixed ">
            <Link href={'/'} className={`w-36  flex   justify-around items-center gap-1  text-center font-semibold ${'/'===path ? 'border-b-2 border-headerborder text-linkcolor' :'text-fontcolor'} `}>
                <StarSvg/>
                About Me 
                <DeletSvg/>
            </Link>
            {links?.map((item,index)=>(
                 <Link key={index} href={item.href } className={`w-36  flex  gap-2 items-center justify-around text-center font-semibold  border-r border-borderdark ${item.href===path ? 'border-b-2 border-b-headerborder text-linkcolor' :'text-fontcolor'}`} > {item.name} <DeletSvg/></Link>
            ))}
            
             
        </div>
    )
}
export default Headermain