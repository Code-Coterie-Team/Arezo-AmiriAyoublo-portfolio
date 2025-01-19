'use client'
import { ReactItemSvg } from "@/assets";
import Link from "next/link"

import { useStore } from "@/store";
import ProjectItem from "./Projectitem";
import { useState } from "react";

const MyWorkItem = () => {
    const { addLink } = useStore();
    const [showDetail, setShowDetail] = useState<{ [key: number]: boolean }>({})
    const navProject = [
        {
            path: '/apps/kanban',
            name: 'Kanban',

        },
        {
            path: '/apps/real-state',
            name: 'Real State'
        },
        {
            path: '/apps/calculator',
            name: 'Calculator',
        }
    ]
    const handleAddLink = (name: string, href: string, index: number) => {
        addLink({ name, href });
        setShowDetail((prev) => ({ ...prev, [index]: !prev[index] }));
    }
    return (
        <div className="flex gap-4 pl-4 ">
            <div className="border-[0.1px] border-bordercolor"></div>
            <div className="flex flex-col gap-4 ">
                {navProject.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <Link  href={item.path} className="flex gap-2 text-base" onClick={(e) => {
                            
                            handleAddLink(item.name, item.path, index);}}>
                            <ReactItemSvg />
                            {item.name}
                        </Link>
                        {showDetail[index] && <ProjectItem  />}
                    </div>
                ))

                }

            </div>
        </div>
    )
}
export default MyWorkItem;