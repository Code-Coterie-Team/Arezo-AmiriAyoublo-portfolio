"use client";

import {
  AboutSvg,
  BorderSvg, 
  MailSvg,
  MywokrSvg,
  SkillsSvg,
  WorkSvg,
} from "@/assets";
import Link from "next/link";

import { useStore } from "@/store";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function AboutTs() {
  const activeSection=useStore((state)=>state.activeSection);
  
  const navs = [
    {
      id: "aboutme",
      title: "About Me",
      link: "/#aboutme",
      svg: <AboutSvg />,
    },
    {
      id: "work-experience",
      title: "Work Experience",
      link: " /#work-experience",
      svg: <WorkSvg />,
    },
    {
      id: "skills",
      title: "Skills",
      link: "/#skills",
      svg: <SkillsSvg />,
    },
    {
      id: "mywork",
      title: "My Work",
      link: "/#mywork",
      svg: <MywokrSvg />,
    },
    {
      id: "contact-me",
      title: "Contact Me",
      link: "/#contact-me",
      svg: <MailSvg />,
    },
  ];

  const animationlink = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const itemMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


 
  return (
    <motion.div
      className="flex flex-col gap-1 pl-6 relative "
      variants={animationlink}
      initial="hidden"
      animate="visible"
    >
      

      {navs.map((item, index) => {
        return (
          <motion.div key={index} variants={itemMotion} className="relative">
            <Link
              key={item.id}
              href={item.link}
              className={clsx("flex  text-base font-medium gap-1 ",{"text-linkcolor":activeSection===item.id})}
            >
              {item.svg}
              {item.title}
            </Link>
            {activeSection ===item.id && (
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
        );
      })}
      
    
    </motion.div>
  );
}
