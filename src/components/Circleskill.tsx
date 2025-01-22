import {  ReactElement, useState } from "react"
import Image from "next/image";
interface ISkill {
    title: string,
    icon:{image:string,name:string}[]
}
export default function CircleSkill({ title,icon }: ISkill) {
    const [aciveItem,setAcitveItem]=useState()
    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            <div className="text-3xl font-semibold text-white">{title}</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
               {icon.map((item,index)=>(
                  <div key={index} className="flex flex-col gap-2 justify-center items-center">
                      <Image src={item.image}  alt="" width={60} height={60}/>
                    
                    <div className="bg-white p-1 text-skillcolor text-sm font-bold rounded-3xl text-center">{item.name}</div>
                  </div>
               ))}

            </div>
        </div>

    )
}