import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Zeta Edge",
  description: "The Ultimate Tech Store for All Your Gadget Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-base-300 font-sans min-h-screen border-2'
      >
        <div className="w-10/12 mx-auto py-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
