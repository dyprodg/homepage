'use client'

import { PinContainer } from "./3d-pin"
import Image from 'next/image'
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";


type CardProps = {
    title: string;
    href: string;
    header: string;
    shortdescription: string;
    longdescription: string;
    image: string;
    imageAlt: string;
    github: string;
}

export default function CardComp({
    title,
    href,
    header,
    shortdescription,
    longdescription,
    image,
    imageAlt,
    github
}: CardProps) {
    return (
        <div className="flex flex-col md:flex-row w-[370px] md:w-[700px] lg:w-[1000px] justify-between bg-neutral-800 rounded-2xl p-4 mt-6 shadow-lg">
            <div className="flex flex-col justify-between m-4">
                <h1 className="text-xl md:text-2xl uppercase font-bold m-4">
                    {header}
                </h1>
                <p className="m-4">
                    {longdescription}
                </p>
                <Link
                    href={github}
                    className="w-full flex justify-center"
                >
                    <div className="border p-2 rounded-xl hover:scale-105 shadow-custom-white">
                        <VscGithub 
                            size={60}
                        />
                    </div>

                </Link>

            </div>
            <PinContainer
                title={href}
                href={href}
            >
                <Link
                    href={href}
                    target={href}
                >
                <div className="flex basis-full flex-col p-3 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    {shortdescription}
                    </span>
                </div>
                <div 
                    className="w-[300px] h-[250px] justify-center border overflow-hidden"
                    >
                <Image 
                    src={image}
                    alt={imageAlt}
                    width={500}
                    height={300}
                    loading="eager"
                    className="h-[250px] object-cover"
                />
                </div>
                
                </div>
                </Link>
            </PinContainer>
        </div>
    )
}