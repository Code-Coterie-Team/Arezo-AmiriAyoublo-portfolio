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
      <body className={` antialiased min-h-screen max-h-screen text-fontcolor`} >
        
          <div className=" grid grid-rows-16 h-screen  ">
            <Header />
            <div className="grid row-start-2 row-end-16 grid-cols-12   md:grid-cols-16  ">
              <Activiybar />
              <Explore />
              <div className="col-start-6  col-end-17 overflow-hidden ">
                <Headermain />
                <div className=" overflow-y-auto h-screen " style={{ minHeight: '1500 px' }}>{children}</div>
              </div>
            </div>
            <Footer />
          </div>
        

        </body>
      
    </html>
  );
}
