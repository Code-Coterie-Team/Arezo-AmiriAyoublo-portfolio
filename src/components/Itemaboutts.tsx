'use client'
import { AboutSvg, BorderSvg, ContactSvg, MywokrSvg, SkillsSvg, WorkSvg } from "@/assets";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStore } from '@/assets';
import { usePathname } from "next/navigation";

export default function AboutTs() {
    const { stylePublic, changeStyle } = useStore();

    const [pathName, setPathName] = useState<string>('/#aboutme')
    console.log(pathName);
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
            svg: <ContactSvg />
        },

    ]
    useEffect(() => {
        const HandelHashChange = () => {
            setPathName(window.location.hash || '#aboutme');
        }
        window.addEventListener('hashchange', HandelHashChange);
        setPathName(window.location.hash);
        return () => {
            window.removeEventListener('hashchange', HandelHashChange)
        }
    }, [])

    return (
        <div className="flex flex-col gap-2 pl-6 " >

            {navs.map((item, index) => {
                const itemHash = item.link.split('#')[1]
                return (
                    <Link key={index} href={item.link} style={stylePublic} className="flex relative gap-2">

                        {item.svg}
                        {item.title}
                        {`#${itemHash}` === pathName && (
                            <div className="flex  gap-10">
                                <BorderSvg />
                                <BorderSvg className=" absolute top-0 -left-4 -rotate-90" />
                                <BorderSvg className="rotate-90 absolute top-4 " />
                                <BorderSvg className=" -rotate-180 absolute top-4 -left-4" />
                            </div>)
                        }

                    </Link>
                )

            })}
        </div>
    )
}