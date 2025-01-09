"use client"
import Link from "next/link";

import WorkExperience from "./Workexperience";
import PersonalInformation from "./Personinformation";

const AboutMe=()=>{

    return(
        <div className="flex flex-col p-10  gap-20 w-full "   >
            <PersonalInformation/>
            <WorkExperience/>
        </div>
    )
}
export default AboutMe;