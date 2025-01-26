"use client"
import { ChallengeSvg, ProjectAboutSvg, SolutionSvg, TechnologySvg } from "@/assets";
import Link from "next/link";
import { motion } from 'framer-motion'
import { div } from "framer-motion/client";
const ProjectItem = () => {
    const projectItem = [
        {
            href: '#about',
            svg: <ProjectAboutSvg />,
            name: 'about'
        },
        {
            href: '#challenge',
            svg: <ChallengeSvg />,
            name: ' Challenge'
        },
        {
            href: '#solution',
            svg: <SolutionSvg />,
            name: 'Solution'
        },
        {
            href: '#technologies',
            svg: <TechnologySvg />,
            name: ' Technologies'
        }
    ]
    const animationlink = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }
    const itemMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
    return (
        <motion.div className="flex flex-col gap-2 pl-6 pt-1" initial='hidden' animate='visible' variants={animationlink}>
            {projectItem.map((item) => (
                <motion.div variants={itemMotion}>

                    <Link href={item.href} className={`flex gap-2`} >
                        {item.svg}
                        {item.name}
                    </Link>
                </motion.div>

            ))}


        </motion.div>
    )
}

export default ProjectItem;