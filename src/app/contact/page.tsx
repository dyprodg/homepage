import { Background } from "@/components/background";
import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - Contact",
    description: "Contact me for a project or any other inquiries.",
    keywords: ["Contact", "Inquiries"],
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