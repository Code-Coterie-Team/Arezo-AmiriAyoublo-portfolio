import type { Metadata } from "next";

import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Activiybar from "../components/Activitybar";
import Explore from "../components/Explore";
import Headermain from "../components/Headermain";

export const metadata: Metadata = {
  title: "Arezoo Amiri Ayobloo",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased  h-screen w-screen">
        <div className="  grid grid-rows-16 w-screen h-screen   text-fontcolor">
          <Header />
          <div className="grid row-start-2 row-end-16   grid-cols-6 md:grid-cols-16 w-full h-full    ">
            <Activiybar />
            <Explore />
            <div className="col-start-2 col-end-7 w-full md:col-start-6  md:col-end-17  overflow-hidden h-full flex flex-col ">
              <Headermain />
              <div className="overflow-y-auto overflow-x-hidden ">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
