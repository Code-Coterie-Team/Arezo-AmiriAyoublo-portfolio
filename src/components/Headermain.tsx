'use client'
import Link from "next/link"
import Home from "./Aboutitem"
import { DeletSvg, LoadBranchSvg, SidewindowSvg, StarSvg, ToggleSvg } from "@/assets"
import React from "react"
import { useStore } from '@/store'

import { usePathname } from "next/navigation"



const Headermain = () => {
    const { setLinks } = useStore();
    const links = useStore((state) => state.links)
    const path = usePathname();
    console.log(links, 'headermain');
    const handelDelete = (item: { name: string, href: string }) => {
        const filterLink = links.filter((ti: any) => ti.name !== item.name);
        setLinks(filterLink);
    }
    return (
        <div className=" w-full h-10 border-b-2 border-borderdark flex justify-between  items-center bg-maincolor text-sm  fixed z-10  pr-20">
            <div className="flex ">
                <Link href={'/'} className={`w-36  flex   justify-around items-center gap-1  text-center font-semibold ${'/' === path ? 'border-b-2 border-headerborder text-linkcolor' : 'text-fontcolor'} `}>
                    <StarSvg />
                    About Me
                    <button><DeletSvg className="fill-white " /></button>
                </Link>
                {links?.map((item: { name: string, href: string }, index: number) => (
                    <div key={index} className={`w-36  flex  gap-2 items-center justify-around text-center font-semibold  border-r border-borderdark ${item.href === path ? 'border-b-2 border-b-headerborder text-linkcolor' : 'text-fontcolor'}`}>


                        <Link href={item.href}   > {item.name}</Link>
                        <button onClick={() => { handelDelete(item) }}><DeletSvg className="fill-white" /></button>
                    </div>
                ))}
            </div>
            <div className="flex ">
                <LoadBranchSvg />
                <SidewindowSvg />
                <ToggleSvg />

            </div>

        </div>

    )
}
export default Headermain