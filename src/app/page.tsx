import Image from "next/image";
import RootLayout from "./layout";
import Header from "@/app/components/Header";
import Activiybar from "./components/Activitybar";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Main from "./components/Main";
import { jetBrainsMono } from "./ui/font";
import Headermain from "./components/Headermain";
import React from "react";


export default function Home({children}:{children:React.ReactNode}) {

  return (
    
    
    <div className="h-screen" >
      <Header />
      <div className="flex ">
        <Activiybar />
        <Explore />
        <div className="flex flex-col">
          <Headermain />
          <div>{children}</div>
        </div>

      </div>
      <Footer />

    </div>
   
    
  );
}
