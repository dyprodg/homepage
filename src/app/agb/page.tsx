import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - AGB",
    description: "Dies sind die allgemeinen Geschäftsbedingungen.",
    keywords: ["AGB", "Geschäftsbedingungen"],
};

export default function AGB() {
    return (
      <div className="w-full flex flex-col bg-black h-screen uppercase mt-20 space-y-1 p-8">
            <div className="text-5xl font-bold">Allgemeine Geschäftsbedingungen</div>
            <div>
              <div>
                <h1 className="text-2xl font-bold">Allgemeine Geschäftsbedingungen</h1>
                <h1 className="text-xl font-bold mt-2">1. Geltungsbereich</h1>
                <div>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Nutzer der Website. Durch die Nutzung der Website stimmen Sie diesen Bedingungen zu.
                </div>
                <h1 className="text-xl font-bold mt-2">2. Urheberrecht</h1>
                <div>
                  Alle Inhalte auf dieser Website, einschließlich Texte, Logos und Bilder, sind Eigentum des Unternehmens und durch das Urheberrecht geschützt. Die Nutzung der Inhalte, einschließlich Vervielfältigung, Veränderung, Verbreitung oder Reproduktion ohne vorherige schriftliche Zustimmung des Unternehmens ist strengstens untersagt.
                </div>
                <h1 className="text-xl font-bold mt-2">3. Cookies</h1>
                <div>
                  Diese Website verwendet Cookies, die für den Betrieb und die Sicherheit der Website erforderlich sind. Diese Cookies sammeln keine persönlichen Daten und dienen ausschließlich dazu, die Funktionalität der Website sicherzustellen.
                </div>
                <h1 className="text-xl font-bold mt-2">4. Haftungsausschluss</h1>
                <div>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Haftung übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </div>
                <h1 className="text-xl font-bold mt-2">5. Änderungen der Allgemeinen Geschäftsbedingungen</h1>
                <div>
                  Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Die aktuelle Version der Allgemeinen Geschäftsbedingungen kann auf unserer Website eingesehen werden.
                </div>
                <h1 className="text-xl font-bold mt-2">6. Einwilligung zur Datenverarbeitung durch Kontaktformular</h1>
                <div>
                  Durch das Absenden des Kontaktformulars erklären Sie sich damit einverstanden, dass Ihre eingegebenen Daten (Name, E-Mail-Adresse und andere im Formular angegebenen Informationen) von der Firma gespeichert und verarbeitet werden, um Ihre Anfrage zu bearbeiten. Ihre Daten werden vertraulich behandelt und ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                  <div>
                    Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Der Widerruf Ihrer Einwilligung berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung Ihrer Daten. Weitere Informationen zur Verarbeitung Ihrer Daten finden Sie in unserer Datenschutzerklärung.
                  </div>
                </div>
                <h1 className="text-xl font-bold mt-2">7. Schlussbestimmungen</h1>
                <div>
                  Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen oder undurchführbaren Bestimmung gilt die wirksame und durchführbare Bestimmung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen oder undurchführbaren Bestimmung am nächsten kommt. Die vorstehenden Bestimmungen gelten entsprechend für den Fall, dass sich die Allgemeinen Geschäftsbedingungen als lückenhaft erweisen.
                </div>
              </div>
            </div>
            <Footer />
      </div>
    );
}
