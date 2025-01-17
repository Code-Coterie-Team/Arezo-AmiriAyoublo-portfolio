'use client'
import Link from "next/link"
import Home from "./Aboutitem"
import { StarSvg } from "@/assets"
import React from "react"
import { useStore } from "@/store"
import { useStoreWithEqualityFn } from "zustand/traditional"

const Headermain=() => {
    const {links}=useStore();
    return (
        <div className="w-full h-8 border-b-2 border-borderdark flex  text-sm ">
            <Link href={'/'} className="w-36  flex  justify-center gap-1  text-center font-semibold text-linkcolor border-b-2 ">
                <StarSvg/>
                About Me
            </Link>
            {links?.map((item,index)=>(
                 <Link key={index} href={item.href } className="w-36  flex  justify-center gap-1  text-center font-semibold text-linkcolor  border-r border-borderdark "> {item.name}</Link>
            ))}
            
             
        </div>
    )
}
export default Headermain