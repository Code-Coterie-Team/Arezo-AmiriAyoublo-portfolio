"use client"
import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";
import ContactToMe from "./Contacttome";
import Mywork from "./Mywork";
import AnimateComponent from "./AnimateComponent";
import { useEffect } from "react";
import { useStore } from "@/store";
const AboutMe = () => {
    const { setActiveSection } = useStore();

  const sections = [
    "aboutme",
    "work-experience",
    "skills",
    "mywork",
    "contact-me",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

   
    return (
        <div className={`flex flex-col p-8 gap-60 h-full  `}  >
            <PersonalInformation   />
            <AnimateComponent><WorkExperience /></AnimateComponent>
            <AnimateComponent><Skills /></AnimateComponent>
            <AnimateComponent><Mywork /></AnimateComponent>
            <AnimateComponent><ContactToMe /></AnimateComponent>
            

        </div>
    )
}
export default AboutMe;