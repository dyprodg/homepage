import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - Datenschutzrichtlinie",
    description: "Dies ist die Datenschutzrichtlinie.",
    keywords: ["Datenschutz", "Richtlinie"],
};

export default function Privacy() {
    return (
        <div className="w-full relative flex flex-col h-screen justify-center items-center bg-black z-30">
            <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4 uppercase">
                <h1 className="font-bold text-2xl">Datenschutz</h1>

                <h1 className="font-bold text-xl mt-4">Allgemein</h1>
                <p className="mt-2">
                Ihre Privatsphäre ist mir wichtig. Nachfolgend informiere ich Sie
                darüber, wie ich Ihre persönlichen Daten, die Sie
                über dieses Kontaktformular zur Verfügung stellen, handhabe:
                </p>
                <p className="mt-2">
                Ich verwende die von Ihnen bereitgestellten Informationen (Name und
                E-Mail-Adresse) ausschließlich, um auf Ihre Anfrage zu antworten.
                Ich teile Ihre Daten nicht mit Dritten und speichere sie nur
                so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist.
                </p>
                <p className="mt-2">
                Durch das Absenden dieses Formulars stimmen Sie zu,
                dass ich Ihre Daten gemäß meiner
                Datenschutzrichtlinie verwenden darf.
                </p>
                <p className="mt-2">
                Für weitere Informationen über meine Datenschutzpraktiken und
                Ihre Rechte kontaktieren Sie mich bitte.
                </p>
            </div>
            <Footer />
        </div>
    )
}
