import { link } from 'fs';
import { create } from 'zustand';

interface StoreState{
    stylePublic:{
        transform: string;
        transition: string;
        opacity:string
    },
    changeStyle:()=>void;

  links:{name:string,href:string}[];
  addLink:(link:{name:string ; href:string})=>void;
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
        addLink: (link) =>
            set((state) => {
              if (!state.links.find((l) => l.href === link.href)) {
                return { links: [...state.links, link] };
              }
              return state;
            }),
         
}))

