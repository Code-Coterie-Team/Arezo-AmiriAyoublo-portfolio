"use client"
import { useInView } from "framer-motion";
import { useRef } from "react"
import {motion} from 'framer-motion'

const AnimateComponent=({children}:{children:React.ReactNode})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once:false});

    const animationVariants={
        hidden:{opacity:0,x:-30},
        visible:{opacity:1,x:0, transition:{duration:1}}
    }
    return(
        <motion.div ref={ref} initial='hidden' animate={isInView?'visible':'hidden '} variants={animationVariants}>
           {children}

        </motion.div>
    )

}
export default AnimateComponent;