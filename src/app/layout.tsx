import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { jetBrainsMono, sourcesanPro } from "./ui/font";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Activiybar from "./components/Activitybar";
import Explore from "./components/Explore";
import Headermain from "./components/Headermain";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     
    <html lang="en">
      <body className={` antialiased h-screen  max-h-screen text-fontcolor`} >
        <Header/>
        <div className="grid grid-cols-16 h-[88%] ">
          <Activiybar/>
          <Explore/>
          <div className="col-start-6  col-end-17  w-full h-full">
              <Headermain/>
              <div>{children}</div>
          </div>
        </div>
        <Footer/>

        
      </body>
    </html>
  );
}
