"use client"
import Link from "next/link";

import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";
import Mywokr from "./Mywork";
import ContactToMe from "./Contacttome";
import { useEffect, useRef, useState } from "react";
import { transform } from "next/dist/build/swc/generated-native";
import { time } from "console";
import { useStore } from "@/store";

const AboutMe = () => {
    const visibleExplore = useStore((state) => state.visibleExplore)
    const styleChangeMain=useStore(state=>state.styleChangeMain)
    const aboutRef=useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // زمانی که #work-experience در دید کاربر قرار گرفت
                if (entry.target.id === 'work-experience') {
                   styleChangeMain()
                }
              }
            });
          },
          {
            threshold: 0.1, // به این معناست که وقتی 50% از بخش در دید کاربر باشد، تغییر ایجاد می‌شود
          }
        );
    
        // مشاهده بخش با id "work-experience"
        const workExperienceElement = document.getElementById('work-experience');
        if (workExperienceElement) {
          observer.observe(workExperienceElement);
        }
    
        return () => {
          if (workExperienceElement) {
            observer.unobserve(workExperienceElement); // توقف مشاهده وقتی کامپوننت unmount شود
          }
        };
      }, [styleChangeMain]);
   
    return (
        <div ref={aboutRef} className={`flex flex-col p-8 gap-60  `}  >
            <PersonalInformation   />
            <WorkExperience />
            <Skills />
            <Mywokr />
            <ContactToMe />

        </div>
    )
}
export default AboutMe;