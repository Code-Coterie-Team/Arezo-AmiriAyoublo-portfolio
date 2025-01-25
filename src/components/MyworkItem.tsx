'use client'
import { JsonpakageSvg, ReactItemSvg } from "@/assets";
import Link from "next/link"

import { useStore } from '@/store';
import ProjectItem from "./Projectitem";
import { useState } from "react";

const MyWorkItem = () => {
    const links=useStore((state)=>state.links)
    const { addLink } = useStore();
    const [showDetail, setShowDetail] = useState<{ [key: number]: boolean }>({})
    const [activeProject, setActiveProject] = useState<string>('')
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
        },
    ]
    const handleAddLink = (name: string, href: string) => {
            const existlink=links.some((l:any)=>l.href===href);
            if(!existlink){
                addLink({ name, href });
            }
           
            setActiveProject(name)
        
    }

    return (
        <div className="flex gap-4 pl-4 ">
            <div className="border-[0.1px] border-bordercolor"></div>
            <div className="flex flex-col gap-4 ">
                {navProject.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <Link href={item.path} className={`flex gap-2 text-base font-medium ${activeProject === item.name ? 'bg-gray-800' : ''}`} onClick={() => {

                            handleAddLink(item.name, item.path);
                        }}>
                            <ReactItemSvg />
                            {item.name}
                        </Link>
                        {activeProject === item.name && <ProjectItem />}
                    </div>
                ))

                }
                <div className="flex flex-col">
                    <Link href='/apps/prdocut-list' className={`flex gap-2 text-base font-medium ${activeProject ==='product-list' ? 'bg-gray-800' : ''}`} onClick={() => {

                        handleAddLink('prdocut-list', '/apps/prdocut-list');
                    }}>
                        <JsonpakageSvg/>
                        Prdouct List
                    </Link>

                </div>

            </div>
        </div>
    )
}
export default MyWorkItem;