'use client'
import Link from "next/link"
import Home from "./Aboutitem"
import { DeletSvg, StarSvg } from "@/assets"
import React from "react"
import { useStore } from '@/assets'
import { useStoreWithEqualityFn } from "zustand/traditional"
import { usePathname } from "next/navigation"

const Headermain = () => {
    const { links, setLinks} = useStore();
    const path = usePathname();

    const handelDelete = (item: { name: string, href: string }) => {
        const filterLink = links.filter((ti:any) => ti.name !== item.name);
        setLinks(filterLink)
    }
    return (
        <div className="w-full h-10 border-b-2 border-borderdark flex  bg-maincolor text-sm  fixed ">
            <Link href={'/'} className={`w-36  flex   justify-around items-center gap-1  text-center font-semibold ${'/' === path ? 'border-b-2 border-headerborder text-linkcolor' : 'text-fontcolor'} `}>
                <StarSvg />
                About Me
                <button><DeletSvg className="fill-white " /></button>
            </Link>
            {links?.map((item:{name:string,href:string}, index:number) => (
                <Link key={index} href={item.href} className={`w-36  flex  gap-2 items-center justify-around text-center font-semibold  border-r border-borderdark ${item.href === path ? 'border-b-2 border-b-headerborder text-linkcolor' : 'text-fontcolor'}`} > {item.name}
                    <button onClick={() => { handelDelete(item) }}><DeletSvg className="fill-white" /></button>
                </Link>
            ))}


        </div>
    )
}
export default Headermain