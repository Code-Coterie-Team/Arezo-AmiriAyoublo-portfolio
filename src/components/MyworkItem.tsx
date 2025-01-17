'use client'
import { ReactItemSvg } from "@/assets";
import Link from "next/link"
import { useState } from "react";
import Headermain from "./Headermain";
import { useStore } from "@/store";

const MyWorkItem = () => {
    const{ addLink}=useStore();
     const handleAddLink=(name:string,href:string)=>{
         addLink({name,href})
     }
    return (
        <div className="flex gap-6  pl-1 ">
            <div className="border-[0.1px] border-bordercolor"></div>
            <div className="flex flex-col gap-4 ">
                <Link href={'/apps/kanban'} onClick={(e) => {
                    e.preventDefault();
                    handleAddLink('Kanban', '/apps/kanban');
                }} >
                    <div className="flex gap-2">
                        <ReactItemSvg />
                        Kanban
                    </div>
                </Link>

                <Link href={'/apps/real-state'} onClick={(e)=>{e.preventDefault();
                    handleAddLink('real state','/apps/real-state')}}>
                    <div className="flex gap-2">
                        <ReactItemSvg />
                        real state
                    </div>
                </Link>
                <Link href={'/apps/calculator'} onClick={(e)=>{
                    e.preventDefault();
                    handleAddLink('calculator','/apps/calculator')
                }}>
                    <div className="flex gap-2">
                        <ReactItemSvg />
                        calculator
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default MyWorkItem;