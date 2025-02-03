"use client"
import { useStore } from "@/store"
import { div } from "framer-motion/client"
import React, { useEffect,useRef } from "react"
import { useInView } from "framer-motion"
import {motion } from 'framer-motion'
const AnimateProject=( {id,children}:{id:string,children:React.ReactNode})=>{
    const { setActiveSectionProject}=useStore()
    const  projectRef = useRef(null)
    const isInView = useInView(projectRef, {amount:0.1});
  
    useEffect(() => {
      if (isInView) setActiveSectionProject(id);
    }, [isInView]);
  
  
    return(
         <motion.div 
           ref={projectRef}
           id={id}
           >
             {children}
         </motion.div>
      
    )

}
export default  AnimateProject;