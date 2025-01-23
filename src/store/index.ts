import { link, stat } from 'fs';
import { create } from 'zustand';
 interface Link{
    name:string;
    href:string;
 }
interface StoreState{
    stylePublic:{
        transform: string;
        transition: string;
        opacity:string
    },
    changeStyle:()=>void;

  links:Link[];
  addLink:(newlink:Link)=>void;
  setLinks: (newLinks:Link[]) => void;
  visibleExplore:boolean;
  setVisibileExplore:(value:boolean)=> void;
}

export const useStore=create<StoreState>((set)=>({
    stylePublic:{
        transform:'translateY(50%)',
        transition:"all 1s ease-in-out",
        opacity:'0.1'

    },
    changeStyle: () =>
        set(() => ({
            stylePublic: {
                transform: 'translateY(0%)',
                transition: 'all 1s ease-in-out',
                opacity:'1'
            },
        })),
        links:[],         
        addLink: (newlink) =>
            set((state) => {
                if (!state.links.find((l) => l.href === newlink.href)) {
                  return { links: [...state.links,newlink] };
                }
                return state;
              }),
        setLinks: (newLinks) => 
              set(() => ({
                  links: newLinks,
              })),
            visibleExplore:true,
            setVisibileExplore:(value)=>set({visibleExplore: value})

         
}))

