"use client"
import { useStore } from "@/store"
import { div } from "framer-motion/client"
import { useEffect } from "react"
import AboutKanban from "./AboutProject"
import Technologies from "./Technology"
import Challenge from "./Challenge"
import Soultion from "./Sulotion"
const AnimateProject=()=>{
    const { setActiveSectionProject}=useStore()
    const nav=['about','challenge','solution','technologies']
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const visible = entries.find((entry) => entry.isIntersecting);
            if (visible) setActiveSectionProject(visible.target.id);
          },
          { threshold: 0.1 }
        );
    
        nav.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);
    return(
         
        <div></div>
    )

}
export default  AnimateProject;