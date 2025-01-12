import { create } from 'zustand';

interface StoreState{
    stylePublic:{
        transform: string;
        transition: string;
        opacity:string
    },
    changeStyle:()=>void
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
}))