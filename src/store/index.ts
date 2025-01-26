
import { persist, createJSONStorage } from 'zustand/middleware'

import { create } from 'zustand';
import Link from 'next/link';

 interface Link{
    name:string;
    href:string;
 }

interface StoreState{
    

  links:Link[];
  activeLink:string|null;
  addLink:(newlink:Link)=>void;
  setLinks: (newLinks:Link[]) => void;
  setActiveLink:(href:string)=>void;
  
  visibleExplore:boolean;
  setVisibileExplore:(value:boolean)=> void;
  activeProject:string| null;
  setActiveProject:(name:string)=>void
 
}

export const useStore=create<StoreState>()(
     persist(
         (set)=>({
            links:[],  
            activeLink:null,  
            activeProject:null,     
        setActiveLink:(href)=>set({activeLink:href})  ,  
        addLink: (newlink) =>
            set((state) =>( {
                links:[...state.links,newlink]
              })),
        setLinks: (newLinks) => 
              set(() => ({
                  links: newLinks,
              })),
        setActiveProject:(name)=>
            set(()=>({
                activeProject:name
            })),
        visibleExplore:true,
        setVisibileExplore:(value)=>set({visibleExplore: value}),
         
         
    }),
     {
        name: "store-links",
        partialize: (state) => ({ links: state.links,
            activeProject:state.activeProject,
            activeLink:state.activeLink,
        }), 
      }
        
         
));

