import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import CookieBanner from "@/components/cookie-banner";

const poppins = Poppins({ weight: '400', subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Dennis Diepolder - Fullstack Developer and DevOps Engineer",
  description: "Dennis Diepolder is a Fullstack Developer and DevOps Engineer based in Switzerland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
