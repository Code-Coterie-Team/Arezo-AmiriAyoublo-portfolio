import { persist, createJSONStorage } from "zustand/middleware";

import { create } from "zustand";
import Link from "next/link";


interface Link {
  name: string;
  href: string;
}

interface StoreState {
  links: Link[];
  activeLink: string | null;
  addLink: (newlink: Link) => void;
  setActiveLink: (href: string) => void;
  removeLink: (name: string) => void;

  visibleExplore: boolean;
  setVisibileExplore: (value: boolean) => void;
  activeProject: string | null;
  setActiveProject: (name: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      links: [{name:'Home',href:'/'},],
      activeLink: null,
      activeProject: null,
      setActiveLink: (href) => set({ activeLink: href }),
      addLink: (newlink) =>
        set((state) => ({
          links: [...state.links, newlink],
        })),
      removeLink: (href) => {
        const { links } = get();
        const filterLinks = links.filter((link) => link.href !== href);
        set({ links: filterLinks });
      },

      setActiveProject: (name) =>
        set(() => ({
          activeProject: name,
        })),
      visibleExplore: true,
      setVisibileExplore: (value) => set({ visibleExplore: value }),
    }),
    {
      name: "store-links",
      partialize: (state) => ({
        links: state.links,
        activeProject: state.activeProject,
        activeLink: state.activeLink,
      }),
    }
  )
);
