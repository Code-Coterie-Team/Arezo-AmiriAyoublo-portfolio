"use client"

import Link from "next/link";
import { motion } from 'framer-motion'
import { useStore } from "@/store";
import clsx from "clsx";

import ChallengeSvg from "@/icon/ChallengeSvg";
import SolutionItem from "@/icon/SolutionItem";
import TechnologySvg from "@/icon/TechnologySvg";
import BorderSvg from "@/icon/BorderSvg";
import ProjectSvg from "@/icon/ProjectSvg";

const ProjectItem = () => {
    const activeSectionProject=useStore((state)=>state.activeSectionProject)
    const projectItem = [
        {   
            
            href: `#about`,
            svg: <ProjectSvg />,
            name: 'about'
        },
        {
            
            href:`#challenge` ,
            svg: <ChallengeSvg />,
            name: 'Challenge'
        },
        {   
            href: `#solution`,
            svg: < SolutionItem/>,
            name: 'Solution'
        },
        {   
            
            href: `#technologies`,
            svg: <TechnologySvg/>,
            name: 'Technologies'
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
            {projectItem.map((item,index) => (
                <motion.div key={index} variants={itemMotion} className="relative">

                    <Link href={item.href} className={clsx('flex gap-2',{"text-linkcolor":activeSectionProject===item.name.toLowerCase() })} >
                        {item.svg}
                        {item.name}
                    </Link>
                    {activeSectionProject ===item.name.toLowerCase() && (
                                  <>
                                    
                                    <motion.span
                                      className="absolute top-0 -left-2"
                                      initial={{ opacity: 0, x: -10, y: -10 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                                    >
                                     <BorderSvg width={5} height={5} className="fill-current -rotate-90 "/>
                                    </motion.span>
                    
                                    <motion.span
                                      className="absolute top-0 right-0 "
                                      initial={{ opacity: 0, x: 10, y: -10 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                                    >
                                     <BorderSvg width={5} height={5} className="fill-current  "/>
                                    </motion.span>
                    
                                    
                                    <motion.span
                                      className="absolute bottom-0 -left-2 "
                                      initial={{ opacity: 0, x: -10, y: 10 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                                    >
                                      <BorderSvg width={5} height={5} className="fill-current rotate-180"/>
                                    </motion.span>
                    
                                    
                                    <motion.span
                                      className="absolute bottom-0 right-0  "
                                      initial={{ opacity: 0, x: 10, y: 10 }}
                                      animate={{ opacity: 1, x: 0, y: 0 }}
                                      transition={{ type:'tween', ease: "easeInOut", duration: 0.5 }}
                                    >
                                     <BorderSvg className=" rotate-90"/>
                                    </motion.span>
                                  </>
                                )}
                </motion.div>

            ))}


        </motion.div>
    )
}

export default ProjectItem;