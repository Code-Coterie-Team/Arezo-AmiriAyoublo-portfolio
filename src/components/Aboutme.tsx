"use client"
import Link from "next/link";
import { useStore } from '@/assets';
import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";
import Mywokr from "./Mywork";
import ContactToMe from "./Contacttome";

const AboutMe = () => {
    const visibleExplore = useStore((state) => state.visibleExplore)
    return (
        <div className={`flex flex-col p-8 gap-60 w-full `} style={{ scrollBehavior: "smooth" }}  >
            <PersonalInformation />
            <WorkExperience />
            <Skills />
            <Mywokr />
            <ContactToMe />

        </div>
    )
}
export default AboutMe;