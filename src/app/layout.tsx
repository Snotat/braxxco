import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Braxxco-Rex Consultant Limited",
  description: "Business problems consultant",icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' }
    ],
    apple: '/apple-touch-icon.png',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` h-full bg-white relative`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
