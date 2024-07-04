import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - Impressum",
    description: "Dies sind meine Kontaktdaten.",
    keywords: ["Kontakt", "Details", "Impressum"],
};

export default function Impressum() {
    return (
        <div className="w-full relative flex flex-col h-screen justify-center items-center bg-black z-30">
            <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4 uppercase">
                <h1 className="font-bold text-2xl">Impressum</h1>
                <p>Dennis Diepolder</p>
                <p>Rankstrasse 3</p>
                <p>8280 Kreuzlingen</p>
                <p>CH</p>
                <p>Telefon: +49 160 9120 8750</p>
                <p>info@dennisdiepolder.com</p>
            </div>
            <Footer />
        </div>
    )
}
