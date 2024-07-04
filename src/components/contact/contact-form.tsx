'use client';
import { useState } from "react";
import { sendMail } from "@/app/actions";
import { Button } from "../moving-border";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const response = await sendMail(name, email, message);
        console.log(response);
        if (response.message === "Email send successfully") {
            setName("");
            setEmail("");
            setMessage("");
            setAgreed(false);
        }
        setLoading(false);
    };

    const isDisabled = !name || !email || !message || !agreed || loading;

    return (
        <div className="w-full h-screen flex justify-center items-center text-white relative z-30">
            {/* Formular */}
            <div className="flex flex-col border border-blue-500 shadow-blue w-[370px] md:w-[600px] rounded-3xl p-4">
                <input 
                    className="flex p-2 m-4 outline-white rounded-full border-2 border-gray-400 bg-neutral-800 active:border-white text-white placeholder:text-gray-400 text-lg"
                    placeholder="Name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    className="flex p-2 m-4 outline-white rounded-full border-2 border-gray-400 bg-neutral-800 active:border-white text-white placeholder:text-gray-400 text-lg"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea 
                    className="flex p-2 m-4 outline-white rounded-3xl resize-none border-2 border-gray-400 bg-neutral-800 active:border-white text-white placeholder:text-gray-400 text-lg"
                    placeholder="Ihre Nachricht"
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <div className="flex items-center p-2">
                    <input 
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        required
                    />
                    <span className="ml-2">
                        Ich akzeptiere die <a href="/agb" target="_blank" className="text-blue-500 underline">AGB</a> und <a href="/datenschutz" target="_blank" className="text-blue-500 underline">Datenschutzbedingungen</a>.
                    </span>
                </div>
                {!isDisabled && ( <div className="flex justify-center items-center w-full h-16 relative z-30">
                    <Button
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        className="text-xl hover:scale-105"
                    >
                        {loading ? <div>Lädt...</div> : <div>Senden</div>}
                    </Button>
                </div>)}
            </div>
        </div>
    )
}
