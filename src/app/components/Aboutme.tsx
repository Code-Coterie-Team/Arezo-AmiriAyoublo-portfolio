"use client"
import Link from "next/link";

import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";
import Skills from "./Skills";

const AboutMe = () => {

    return (
        <div className="flex flex-col p-10  gap-60 w-full scroll-smooth "   >
            <PersonalInformation />
            <WorkExperience />
            <Skills />
        </div>
    )
}
export default AboutMe;