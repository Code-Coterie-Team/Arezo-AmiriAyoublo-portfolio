"use client"
import Image from "next/image";
import { GiticonSvg } from "@/assets";
import Link from "next/link";
import { useRef, useState } from "react";
import  {motion} from 'framer-motion'
import { useInView } from "framer-motion";
export default function College() {
    const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
    const handelMouse = (e: any) => {
        const { offsetX, offsetY } = e.nativeEvent;
        setCoordinate({ x: offsetX, y: offsetY })
    }
    const ref=useRef(null)
    const isInView=useInView(ref,{once:false});
    const animationVariants={
        hidden:{opacity:0,x:200},
        visible:{opacity:1,x:0, transition:{duration:1}}
    }
    const animationLanguage={
        hidden:{opacity:0,x:-30},
        visible:{opacity:1,x:0, transition:{duration:1}}
    }
    return (
        <motion.div className="flex gap-10" >
            <div className="flex flex-col gap-4">
                <span className="text-green-500 border-b border-fontcolor">Language</span>
                <motion.div className="flex flex-col gap-4 font-extrabold pb-2 border-b border-fontcolor" variants={animationLanguage} ref={ref} initial='hidden' animate={isInView ?'visible':'hidden'}>
                    <p >Persian-Native</p>
                    <p >English-Intermaidate</p>
                    <p >Turkish-Advance</p>
                </motion.div>
                <div className="flex font-bold text-borderdark gap-4">
                    <Link href="https://www.linkedin.com/in/arezoo-amiri-ayoblo/" target="_blank"> <button className="bg-white w-8 text-xl  rounded font-extrabold">in</button></Link>
                    <Link href={'https://github.com/arezooamiri'}>
                        <button className="bg-white w-6 rounded-full"> <GiticonSvg /> </button>
                    </Link>
                    <Link href={'/#contact-me'}>
                        <button className="h-8 w-36 rounded-xl bg-white  " >contact me</button>
                    </Link>
                </div>

            </div>
            <motion.div ref={ref} variants={animationVariants} initial='hidden' animate={isInView ?'visible':'hidden'}  className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 content-center w-full border-[0.2px] border-fontcolor rounded-lg hover:shadow-md  hover:shadow-green-400 "
                onMouseMove={handelMouse} style={{ background: ` radial-gradient(circle at ${coordinate.x}px ${coordinate.y}px ,rgba(74, 222, 128,0.1),rgb(30 ,35, 54 ))` }}>
                <Image src='/Shahrood_University_of_Technology.jpg' alt='' width={150} height={300} className=" rounded-2xl"></Image>
                <div className="flex flex-col gap-2">
                    <p className="text-white text-2xl font-semibold">B.S in Mechateronic Engineering</p>
                    <p className="text-green-400">Shahrood University of Technology</p>

                </div>
            </motion.div>

        </motion.div>
    )
}