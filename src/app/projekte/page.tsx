import { Background } from "@/components/background"
import CardSection from "@/components/projects/card-section"
import { Button } from "@/components/moving-border"
import Link from "next/link"
import Footer from "@/components/footer"

export const metadata = {
    title: "Dennis Diepolder - Projekte",
    description: "Hier sind einige der Projekte, an denen er gearbeitet hat.",
    keywords: ["Projekte", "Portfolio"],
};

export default function ProjectPage() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Background />
            <div className="w-full flex flex-col relative z-30 mt-20 items-center">
                <h1 className="uppercase font-bold text-7xl md:text-9xl text-blue-500">
                    Projekte
                </h1>
                <div className="w-11/12 md:w-3/4 lg:w-1/2 mt-8 md:mt-12">
                    <div className="text-xl md:text-2xl text-center">
                        Hier sind einige der Projekte, an denen ich gearbeitet habe. Ich habe Erfahrung mit einer Vielzahl von Technologien und Werkzeugen. Ich habe an Projekten gearbeitet, die von kleinen persönlichen Projekten bis hin zu groß angelegten Anwendungen reichen.
                    </div>
                </div>
                <CardSection />
                <div className="mt-12 w-full flex flex-col items-center text-center uppercase">
                    <h2 className="text-5xl md:text-7xl p-4">
                        Mehr <div className="text-blue-500">Projekte</div> kommen bald!
                    </h2>
                    <div className="w-[360px] md:w-[700px] lg:w-[800px] text-xl p-4">
                        Ich arbeite ständig an neuen Projekten und lerne neue Technologien. Schauen Sie bald wieder vorbei, um zu sehen, woran ich gearbeitet habe!
                    </div>
                </div>
                <div
                    className='w-full flex flex-col justify-center items-center p-4 my-20'
                >
                    <div className='text-2xl text-center uppercase m-4'>
                          {`Möchten Sie`} <div className='text-blue-500 font-bold'>Kontakt</div> {`mit mir für ein Projekt aufnehmen?`}
                    </div>
                    <div className='flex space-x-8'>
                    <Link
                        href='/kontakt'
                    >
                    <Button
                        borderRadius='1.75rem'
                        className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                    >
                        Kontakt
                    </Button>
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
