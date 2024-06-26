import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - Impressum",
    description: "These are my contact details.",
    keywords: ["Contact", "Details", "Impressum"],
  };


export default function Impressum() {
    return (
        <div className="w-full relative flex flex-col h-screen justify-center items-center bg-black z-30">
            <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4 uppercase">
                <h1 className="font-bold text-2xl">Impressum</h1>
                <p>Dennis Diepolder</p>
                <p>Ringstrasse 30</p>
                <p>82279 Eching</p>
                <p>DE</p>
                <p>Phone: +49 160 9120 8750</p>
                <p>info@dennisdiepolder.com</p>
            </div>
            <Footer />
        </div>
    )
}