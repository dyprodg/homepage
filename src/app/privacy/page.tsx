import Footer from "@/components/footer";

export const metadata = {
    title: "Dennis Diepolder - Projects Policy",
    description: "This is the privacy policy.",
    keywords: ["Privacy", "Policy"],
  };

export default function Privacy() {
    return (
        <div className="w-full relative flex flex-col h-screen justify-center items-center bg-black z-30">
            <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4 uppercase">
                <h1 className="font-bold text-2xl">Privacy</h1>

                <h1 className="font-bold text-xl mt-4">General</h1>
                <p className="mt-2">
                Your privacy is important to me. Below I inform you
                about how I handle your personal data that you
                provide via this contact form:
                </p>
                <p className="mt-2">
                I use the information you provide (name and
                email address) exclusively to respond to your request.
                I do not share your data with third parties and store it only
                as long as necessary for the processing of your request.
                </p>
                <p className="mt-2">
                By submitting this form, you agree
                that I may use your data in accordance with my
                privacy policy.
                </p>
                <p className="mt-2">
                For more information about my privacy practices and
                your rights, please contact me.
                </p>
            </div>
            <Footer />
        </div>
    )
}