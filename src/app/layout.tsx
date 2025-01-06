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
      <body className={`${sourcesanPro.className} antialiased `} >
        {children}
      </body>
    </html>
  );
}
