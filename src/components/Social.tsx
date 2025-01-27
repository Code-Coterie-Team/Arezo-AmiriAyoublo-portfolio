"use client"
import Link from "next/link"
import { GiticonSvg } from "@/assets"
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
export default function Social() {
    const ref=useRef(null);
    const isInView=useInView(ref,{once:false})
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
    return (
        <motion.div ref={ref} variants={containerVariants} initial='hidden' animate={isInView ? "visible":"hidden"} >
            <motion.div className="flex gap-6 text-black" variants={itemVariants}>
                <Link href="https://www.linkedin.com/in/arezoo-amiri-ayoblo/" target="_blank" >
                    <button className="bg-white w-8 text-xl  rounded font-extrabold" >in</button></Link>
                <Link href={'https://github.com/arezooamiri'} target="_blank"> <button className=" w-6 rounded-full" ><GiticonSvg className="bg-white rounded-full" /></button></Link>
                <Link href={'/#contact-me'} className="h-8  w-36 p-1 text-center rounded-xl  bg-white shadow-buttonshadow font-medium  ">contact me</Link>
            </motion.div>
        </motion.div>
    )
}