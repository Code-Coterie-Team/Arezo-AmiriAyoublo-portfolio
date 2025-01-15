import { AboutSvg, ContactSvg, MywokrSvg, SkillsSvg, WorkSvg } from "@/assets";
import Link from "next/link";
import React from "react";
import { useStore } from '../store';

export default function AboutTs() {
    const { stylePublic, changeStyle } = useStore();
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
    return (
        <div className="flex flex-col gap-2 pl-6" >

            {navs.map((item, index) => (
                <Link key={index} href={item.link} style={stylePublic}>
                    <button className="flex  gap-2">
                        {item.svg}
                        <span>{item.title}</span>


                    </button>
                </Link>
            )

            )}
        </div>
    )
}