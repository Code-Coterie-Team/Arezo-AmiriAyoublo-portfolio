"use client";

import Link from "next/link";

import { useStore } from "@/store";
import ProjectItem from "./Projectitem";
import ReactItem from "@/icon/ReactItem";
import JsonPackageSvg from "@/icon/JsonPackageSvg";


const MyWorkItem = () => {
  const links = useStore((state) => state.links);
 
  const activeProject = useStore((state) => state.activeProject);
  const { setActiveProject,setActiveLink,addLink,setShowAboutme } = useStore();
  

  const navProject = [
    {
      path:"/dashboard",
      name:"CryptoDashboard",
      svg:<ReactItem/>,
    },
    {
      path: "/kanban",
      name: "Kanban",
      svg: <ReactItem />,
    },
    {
      path: "/real-state",
      name: "Real State",
      svg: <ReactItem />,
    },
    {
      path: "/calculator",
      name: "Calculator",
      svg: <ReactItem/>,
    },
    {
      path: "/product-list",
      name: "product-list",
      svg: <JsonPackageSvg />,
    },
    
  ];


  const handleAddLink = (name: string, href: string) => {
    const existlink = links.some((l) => l.href === href);
    if (!existlink) {
      addLink({ name, href });
      
    }
    setActiveLink(href);
    setActiveProject(name);
    setShowAboutme(false);
  };

  return (
    <div className="flex gap-2 pt-2 pl-4 text-base flex-grow-0 ">
      <div className="border-[0.1px] border-bordercolor"></div>
      <div className="flex flex-col  gap-2 ">
        {navProject.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Link
              href={item.path}
              className="flex gap-1 font-normal"
              onClick={() => {
                handleAddLink(item.name, item.path);
              }}
            >
              {item.svg}

              {item.name}
            </Link>
            {activeProject === item.name && <ProjectItem />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyWorkItem;
