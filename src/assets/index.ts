import ArowSvg from "./arow.svg";
import AboutSvg from "./aboutsvg.svg";
import BranchSvg from "./branch.svg";
import ContactSvg from "./contact.svg";
import Skillitem from "./skillitem.svg";
import ExtentionSvg from "./extentionitem.svg";
import FileSvg from "./file.svg";
import GithubSvg from "./github.svg";
import MyworkiconSvg from "./myworicon.svg";
import MywokrSvg from "./mywork.svg";
import NextitemSvg from "./nextitem.svg";
import NodeitemSvg from "./nodeitem.svg";
import ProjectSvg from "./project.svg";
import PublicitemSvg from "./publicitem.svg";
import RunitemSvg from "./runitem.svg";
import SearchSvg from "./searchsvg.svg";
import SettingSvg from "./setting.svg";
import SkillsSvg from "./skills.svg";
import StarSvg from "./starsvg.svg";
import VscodeSvg from "./vscode.svg";
import WorkSvg from "./worksvg.svg";
import SuitcaSvg from "./suticas.svg";
import GiticonSvg from "./giticon.svg";
import EsllintSvg from "./eslinticon.svg";
import GitignoreSvg from "./gitignore.svg";
import JsonpakageSvg from "./jsonpakage.svg";
import NextSvg from "./nexticon.svg";
import TailwindSvg from "./tailwind.svg";
import TsconfigSvg from "./tsconfig.svg";
import SidewindowSvg from "./sidewindow.svg";
import HorizWindowSvg from "./horizwindow.svg";
import ActiveWindowSvg from "./activwindow.svg";
import BackgroundSvg from "./background.svg";
import SrcSvg from "./src.svg";
import WorksrcSvg from "./worksrc.svg";
import ContactMeSvg from "./contacttome.svg";
import ReactItemSvg from "./reactItem.svg";
import ProjectAboutSvg from "./aboutproject.svg";
import ChallengeSvg from "./challenge.svg";
import SolutionSvg from "./solution.svg";
import TechnologySvg from "./Thechnology.svg";
import DeletSvg from "./delete.svg";
import BorderSvg from "./border.svg";
import { StoreState } from "@/store";
import { create } from "zustand";
export {
  ArowSvg,
  AboutSvg,
  BranchSvg,
  ContactSvg,
  ExtentionSvg,
  FileSvg,
  GithubSvg,
  MywokrSvg,
  NextitemSvg,
  NodeitemSvg,
  ProjectSvg,
  PublicitemSvg,
  RunitemSvg,
  SearchSvg,
  SettingSvg,
  SkillsSvg,
  StarSvg,
  VscodeSvg,
  WorkSvg,
  SuitcaSvg,
  Skillitem,
  GiticonSvg,
  EsllintSvg,
  GitignoreSvg,
  JsonpakageSvg,
  NextSvg,
  TailwindSvg,
  TsconfigSvg,
  HorizWindowSvg,
  SidewindowSvg,
  ActiveWindowSvg,
  BackgroundSvg,
  SrcSvg,
  WorksrcSvg,
  MyworkiconSvg,
  ContactMeSvg,
  ReactItemSvg,
  ProjectAboutSvg,
  ChallengeSvg,
  SolutionSvg,
  TechnologySvg,
  DeletSvg,
  BorderSvg,
};
export const useStore = create<StoreState>((set) => ({
  stylePublic: {
    transform: "translateY(50%)",
    transition: "all 1s ease-in-out",
    opacity: "0.1",
  },
  changeStyle: () =>
    set((state) => ({
      stylePublic: {
        transform: "translateY(0%)",
        transition: "all 1s ease-in-out",
        opacity: "1",
      },
    })),
  links: [],
  addLink: (newlink) =>
    set((state) => ({
      links: [...state.links, newlink],
    })),
  setLinks: (newLinks) =>
    set(() => ({
      links: newLinks,
    })),
  visibleExplore: true,
  setVisibileExplore: (value) => set({ visibleExplore: value }),
}));
