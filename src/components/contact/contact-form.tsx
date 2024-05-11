'use client';
import { useState } from "react";
import { sendMail } from "@/app/actions";
import { Button } from "../moving-border";


export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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
        }
        setLoading(false);
      };

    return(
        <div className="w-full h-screen flex justify-center items-center text-white relative z-30">
            {/* Form */}
            <div className="flex flex-col border border-blue-500 shadow-blue w-[370px] md:w-[600px] rounded-3xl p-4">
                <input 
                    className="flex p-2 m-4 outline-white rounded-full border-2 border-gray-400 bg-neutral-800 active:border-white text-white placeholder:text-gray-400 text-lg"
                    placeholder="Name"
                    value={name}
                    type="test"
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
                    placeholder="Your Message"
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <div
                    className="flex justify-center items-center w-full h-16 relative z-30"
                >
                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="text-xl hover:scale-105"
                    >
                    {loading ? (
                    <p>Loading...</p>
                ) :
                     <p>
                        Send
                    </p>}
                    
                </Button>
                </div>
            </div>
            
        </div>
    )
}