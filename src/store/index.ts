import { link, stat } from 'fs';
import { create } from 'zustand';

interface StoreState{
    stylePublic:{
        transform: string;
        transition: string;
        opacity:string
    },
    changeStyle:()=>void;

  links:{name:string,href:string}[];
  addLink:(newlink:{name:string,href:string})=>void;
  setLinks: (newLinks: { name: string; href: string }[]) => void;
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
        set((state) => ({
            stylePublic: {
                transform: 'translateY(0%)',
                transition: 'all 1s ease-in-out',
                opacity:'1'
            },
        })),
        links:[],         
        addLink: (newlink) =>
          set((state) => ({
              links: [...state.links, newlink]
          })),
        setLinks: (newLinks) => 
              set(() => ({
                  links: newLinks
              })),
            visibleExplore:true,
            setVisibileExplore:(value)=>set({visibleExplore: value})

         
}))

