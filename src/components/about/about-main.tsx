'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Button } from '../moving-border'
import Link from 'next/link'
import { useRef } from 'react'

export default function AboutMain() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1})
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: true, amount: 0.1})
    const ref3 = useRef(null)
    const isInView3 = useInView(ref3, { once: true, amount: 0.1})
    const ref4 = useRef(null)
    const isInView4 = useInView(ref4, { once: true, amount: 0.1})
    const ref5 = useRef(null)
    const isInView5 = useInView(ref5, { once: true, amount: 0.1})
    const ref6 = useRef(null)
    const isInView6 = useInView(ref6, { once: true, amount: 0.1})
    const ref7 = useRef(null)
    const isInView7 = useInView(ref7, { once: true, amount: 0.1})

    const fadeInVariants = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    }
    
    return (
        <div className='w-full relative'>
                <div className=''>

                    <motion.div 
                        className='w-full flex flex-col md:flex-row justify-center items-center p-4'
                        ref={ref}
                        initial='hidden'
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInVariants}
                        >
                    <Image
                            alt="Switzerland"
                            src='/profile-square.jpeg'
                            width={600}
                            height={600}
                            className='rounded-3xl hidden md:block'
                        />
                    <div className='m-4'>
                        <div className="text-7xl text-center mt-16 uppercase">
                        <div className='text-blue-600 text-8xl font-bold'>Wer </div>bin ich?
                        </div>
                    </div>
                    </motion.div>


                    <motion.div 
                        className='flex flex-col items-center p-4'
                        ref={ref2}
                        initial='hidden'
                        animate={isInView2 ? 'visible' : 'hidden'}
                        variants={fadeInVariants}
                    >
                    <Image
                            alt="Switzerland"
                            src='/profile-square.jpeg'
                            width={600}
                            height={600}
                            className='rounded-3xl md:hidden block'
                        />
                    <div className='text-3xl mt-4 text-center uppercase max-w-[380px] md:max-w-[1000px]'>
                            Mein Name ist Dennis Diepolder
                        </div>
                        <div className='text-3xl text-center uppercase max-w-[380px] md:max-w-[1000px]'>
                            ich bin Webanwendungs Entwickler <br />
                            und Cloud Enthusiast
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className='w-full flex flex-col md:flex-row justify-center items-center p-4'
                    ref={ref3}
                    initial='hidden'
                    animate={isInView3 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                >
                    <div className='m-4 max-w-[380px] md:max-w-[1000px]'>
                        <div className="text-7xl text-center mt-16 uppercase">
                        <div className='text-blue-600 text-8xl font-bold'>Was </div>habe ich bis jetzt gemacht?
                        </div>
                        <div className='text-3xl mt-4 text-center uppercase'>
                            Ich habe Jahre lang im Handel gearbeitet
                        </div>
                        <div className='text-3xl text-center uppercase'>
                            {`und bin bis Heute Hobby Fotograf`}
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className='w-full flex flex-col md:flex-row justify-center md:justify-start md:ml-24 items-center p-4'
                    ref={ref4}
                    initial='hidden'
                    animate={isInView4 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                >
                    <div className='m-4 max-w-[380px] md:max-w-[1000px]'>
                        <div className="text-7xl text-center md:text-left mt-16 uppercase">
                        <div className='text-blue-600 text-8xl font-bold'>Wann </div>hab ich angefangen?
                        </div>
                        <div className='text-3xl mt-4 text-center md:text-left uppercase'>
                            Mit jahrelanger Erfahrung im Kundenservice im Handel, <br/> wechselte ich Mitte 2022 in die Tech-Branche
                        </div>
                        <div className='text-3xl text-center md:text-left uppercase'>
                            um meiner lebenslangen Leidenschaft für Computer und dem Bauen von Dingen nachzugehen
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className='w-full flex flex-col md:flex-row justify-center md:justify-end md:mr-24 items-center p-4'
                    ref={ref5}
                    initial='hidden'
                    animate={isInView5 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                >
                <div className='m-4 max-w-[380px] md:max-w-[1000px]'>
                    <div className="text-7xl text-center md:text-right mt-16 uppercase">
                        <div className='text-blue-600 text-8xl font-bold'>Warum </div>mach ich es?
                    </div>
                    <div className='text-3xl mt-4 text-center md:text-right uppercase'>
                        {`Als kreativer Kopf bin ich auch zutiefst der Technologie verpflichtet`}
                    </div>
                    <div className='text-3xl text-center md:text-right uppercase'>
                        Ich strebe immer danach, mehr über die digitale Welt zu lernen
                    </div>
                    <div className='text-3xl text-center md:text-right uppercase'>
                        Mit 13 Jahren habe ich meinen ersten Computer zusammengebaut
                    </div>
                    <div className='text-3xl text-center md:text-right uppercase'>
                        {`Seit diesem Tag bin ich fasziniert von den Möglichkeiten der Technologie`}
                    </div>
                    <div className='text-3xl text-center md:text-right uppercase'>
                        Und nutze meine Fähigkeiten, um anderen zu helfen
                    </div>
                </div>
                </motion.div>

                <motion.div 
                    className='w-full flex flex-col md:flex-row justify-center items-center p-4'
                    ref={ref6}
                    initial='hidden'
                    animate={isInView6 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                >
                <div className='m-4 max-w-[380px] md:max-w-[1000px]'>
                    <div className="text-7xl text-center mt-16 uppercase">
                        und <div className='text-blue-600 text-8xl font-bold'>jetzt</div>?
                    </div>
                    <div className='text-3xl mt-4 text-center uppercase'>
                        Ich liebe es, Websites und Code zu entwickeln
                    </div>
                    <div className='text-3xl text-center uppercase'>
                        Benutzerplattformen und Cloud-Infrastrukturen zu erstellen
                    </div>
                    <div className='text-3xl text-center uppercase'>
                        sowie Aufgaben zur Effizienzsteigerung automatisieren
                    </div>
                </div>
                </motion.div>

                <motion.div
                    className='w-full flex flex-col justify-center items-center p-4 my-20'
                    ref={ref7}
                    initial='hidden'
                    animate={isInView7 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                >
                    <div className='text-2xl text-center uppercase m-4'>
                          {`Du willst meine`} <div className='text-blue-500 font-bold'>Projekte</div> {`sehen oder mit mir in Kontakt treten?`}
                    </div>
                    <div className='flex space-x-8'>
                    <Link
                        href='/projekte'
                    >
                    <Button
                        borderRadius='1.75rem'
                        className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                    >
                        Projekte
                    </Button>
                    </Link>
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
                </motion.div>
    </div>
    )
}
