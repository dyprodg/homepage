import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import CookieBanner from "@/components/cookie-banner";
import Footer from "@/components/footer";

const poppins = Poppins({ weight: '400', subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Dennis Diepolder - Fullstack Developer and DevOps Engineer",
  description: "Dennis Diepolder is a Fullstack Developer and DevOps Engineer based in Switzerland.",
  keywords: ["Dennis Diepolder", "Fullstack Developer", "DevOps Engineer", "Switzerland"],
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
    siteName: "Dennis Diepolder - Fullstack Developer and DevOps Engineer",
  }
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
