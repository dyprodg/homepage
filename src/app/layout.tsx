import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import CookieBanner from "@/components/cookie-banner";

const poppins = Poppins({ weight: '400', subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Dennis Diepolder - Fullstack Entwickler und DevOps Ingenieur",
  description: "Dennis Diepolder ist ein Fullstack Entwickler und DevOps Ingenieur mit Sitz in der Schweiz.",
  keywords: ["Dennis Diepolder", "Fullstack Entwickler", "DevOps Ingenieur", "Schweiz"],
  creator: "Dennis Diepolder",
  publisher: "Dennis Diepolder",
  authors: [
    { name: "Dennis Diepolder", url: "https://dennisdiepolder.com"}
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [{ url: "https://d3nohlcdf7fia8.cloudfront.net/dennisdiepolder-thumbnail.png"}],
    type: "website",
    locale: "eu_CH",
    siteName: "Dennis Diepolder - Fullstack Entwickler und DevOps Ingenieur",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
