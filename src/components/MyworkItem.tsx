'use client'
import { JsonpakageSvg, ReactItemSvg } from "@/assets";
import Link from "next/link"

import { useStore } from '@/store';
import ProjectItem from "./Projectitem";
import { useState } from "react";

const MyWorkItem = () => {
    const links=useStore((state)=>state.links)
    const { addLink } = useStore();
    const activeProject=useStore((state)=>state.activeProject)
    const {setActiveProject}=useStore()
    const{setActiveLink}=useStore()
   
    const navProject = [
        {
            path: '/apps/kanban',
            name: 'Kanban',
            svg:<ReactItemSvg />,

        },
        {
            path: '/apps/real-state',
            name: 'Real State',
            svg:<ReactItemSvg />,
        },
        {
            path: '/apps/calculator',
            name: 'Calculator',
            svg:<ReactItemSvg />,
        },
        {
            path:'/apps/product-list',
            name:'product-list',
            svg:<JsonpakageSvg/>,
        }
    ]
   

    const handleAddLink = (name: string, href: string) => {
            const existlink=links.some((l:any)=>l.href===href);
            if(!existlink){
                addLink({ name, href });
                setActiveLink(href);
            }
           
            setActiveProject(name)
        
    }

    return (
        <div className="flex gap-4 pl-4 ">
            <div className="border-[0.1px] border-bordercolor"></div>
            <div className="flex flex-col gap-4 ">
                {navProject.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <Link href={item.path} className={`flex gap-1 text-base font-medium ${activeProject === item.name ? 'bg-gray-800' : ''}`} onClick={() => {

                            handleAddLink(item.name, item.path);
                        }}>
                            {item.svg}
                            
                            {item.name}
                        </Link>
                        {activeProject === item.name && <ProjectItem />}
                    </div>
                ))

                }
               
                

            </div>
        </div>
    )
}
export default MyWorkItem;