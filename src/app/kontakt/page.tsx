import { Background } from "@/components/background";
import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - Kontakt",
    description: "Kontaktieren Sie mich für ein Projekt oder andere Anfragen.",
    keywords: ["Kontakt", "Anfragen"],
  };


export default function ContactPage() {
    return(
        <div>
            <Background />
            <ContactForm />
            <Footer />
        </div>
    )
}