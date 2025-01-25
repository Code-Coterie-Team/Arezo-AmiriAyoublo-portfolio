import { link, stat } from 'fs';
import { create } from 'zustand';
 interface Link{
    name:string;
    href:string;
 }
interface StyleChange{
    transform:string,
    transition:string,
    opacity:string,
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
  
  styleChange:StyleChange;
  styleChangeMain:()=>void;
}

export const useStore=create<StoreState>((set)=>({
    stylePublic:{
        transform:'translateY(20px)',
        transition:"all 0.6 ease-in-out forwards",
        opacity:'0.1'

    },
    
    changeStyle: () =>
        set(() => ({
            stylePublic: {
                transform: 'translateY(0px)',
                transition: 'all 0.6s ease-in-out forwards',
                opacity:'1'
            },
        })),
        links:[],         
        addLink: (newlink) =>
            set((state) =>( {
                links:[...state.links,newlink]
              })),
        setLinks: (newLinks) => 
              set(() => ({
                  links: newLinks,
              })),


        visibleExplore:true,
        setVisibileExplore:(value)=>set({visibleExplore: value}),
         
         styleChange:{
            transform: "translateX(-20%)",
            transition: "all 1s ease-in-out",
            opacity: '0.8',
         },
         styleChangeMain:()=> set({styleChange:{
            transform: "translateX(0%)",
            transition: "all 1s ease-in-out",
            opacity: '1',
         }

         })
            
         
}))

