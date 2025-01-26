"use client"
import {  ReactElement, useRef, useState } from "react"
import Image from "next/image";
import {  useInView } from "framer-motion";
import {motion} from 'framer-motion'
interface ISkill {
    title: string,
    icon:{image:string,name:string}[]
}
export default function CircleSkill({ title,icon }: ISkill) {
    const activRef=useRef(null)
    const isView=useInView(activRef,{once:false})
    const itemMotion={
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0, transition:{duration:0.5}}
       }
    
    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            <div className="text-3xl font-semibold text-white">{title}</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
               {icon.map((item,index)=>(
                  <motion.div ref={activRef} key={index} className="flex flex-col gap-2 justify-center items-center" variants={itemMotion} initial='hidden' animate={isView ?'visible':'hidden'}>
                      <Image src={item.image}  alt="" width={60} height={60}/>
                    
                    <div className="bg-white p-1 text-skillcolor text-sm font-bold rounded-3xl text-center">{item.name}</div>
                  </motion.div>
               ))}

            </div>
        </div>

    )
}