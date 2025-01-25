'use client'
import { AboutSvg, BorderSvg, ContactMeSvg, ContactSvg, MywokrSvg, SkillsSvg, WorkSvg } from "@/assets";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store";


export default function AboutTs() {
    const { stylePublic} = useStore(state=>state);
    const styleChangeMain= useStore(state=>state.styleChangeMain);

    
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

    return (
        <div className="flex flex-col gap-2 pl-6 " >

            {navs.map((item, index) => {
                const itemHash = item.link.split('#')[1]
                
                return (
                    <div  key={index}   >
                        <Link href={item.link} className="flex relative  text-base font-medium gap-2">

                            {item.svg}
                            {item.title}
                            

                        </Link>
                        {`#${itemHash}` && (
                                <div className="flex  gap-10">
                                    <BorderSvg />
                                    <BorderSvg className=" absolute top-0 -left-4 -rotate-90" />
                                    <BorderSvg className="rotate-90 absolute top-4 " />
                                    <BorderSvg className=" -rotate-180 absolute top-4 -left-4" />
                                </div>)
                            }
                    </div>
                )

            })}
        </div>
    )
}