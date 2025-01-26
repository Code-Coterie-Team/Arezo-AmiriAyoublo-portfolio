'use client'
import { AboutSvg, BorderSvg, ContactMeSvg, ContactSvg, MywokrSvg, SkillsSvg, WorkSvg } from "@/assets";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store";
import { motion } from "framer-motion";

export default function AboutTs() {
   
    
    const navs = [
        {
            title: 'About Me',
            link: '/#aboutme',
            svg: <AboutSvg />
        },
        {
            title: 'Work Experience',
            link: ' /#work-experience',
            svg: <WorkSvg />
        },
        {
            title: 'Skills',
            link: '/#skills',
            svg: <SkillsSvg />
        },
        {
            title: 'My Work',
            link: '/#mywork',
            svg: <MywokrSvg />
        },
        {
            title: 'Contact Me',
            link: '/#contact-me',
            svg: <ContactMeSvg />
        },

    ]
    const animationlink={
        hidden:{opacity:0},
        visible:{
            opacity:1,
            transition:{ staggerChildren:0.2}
        }
    }
   const itemMotion={
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0, transition:{duration:0.5}}
   }

    return (
        < motion.div className="flex flex-col gap-1 pl-6 "  variants={animationlink} initial="hidden" animate="visible">

            {navs.map((item, index) => {
                const itemHash = item.link.split('#')[1]
                
                return (
                    <motion.div  key={index}  variants={itemMotion}  >
                        <Link href={item.link} className={`flex relative  text-base font-medium gap-1 `}  >

                            {item.svg}
                            {item.title}
                            

                        </Link>
                        {/* {`#${itemHash}` && (
                                <div className="flex  gap-10">
                                    <BorderSvg />
                                    <BorderSvg className=" absolute top-0 -left-4 -rotate-90" />
                                    <BorderSvg className="rotate-90 absolute top-4 " />
                                    <BorderSvg className=" -rotate-180 absolute top-4 -left-4" />
                                </div>)
                            } */}
                    </motion.div>
                )

            })}
        </motion.div>
    )
}