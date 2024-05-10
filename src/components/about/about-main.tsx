'use client'

import Image from 'next/image'
import { motion, useAnimate } from 'framer-motion'
import { Button } from '../moving-border'
import Link from 'next/link'

export default function AboutMain() {
    return(
        <div className='w-full relative'>
                <div className=''>

                    <motion.div className='w-full flex flex-col md:flex-row justify-center items-center p-4'>
                    <Image
                            alt="Switzerland"
                            src='/profile-square.jpeg'
                            width={600}
                            height={600}
                            className='rounded-3xl hidden md:block'
                        />
                    <div className='m-4'>
                        <p className="text-7xl text-center mt-16 uppercase">
                        <a className='text-blue-600 text-8xl font-bold'>Who </a>am i?
                        </p>
                    </div>
                    </motion.div>


                    <motion.div className='flex flex-col items-center'>
                    <Image
                            alt="Switzerland"
                            src='/profile-square.jpeg'
                            width={600}
                            height={600}
                            className='rounded-3xl md:hidden block'
                        />
                    <p className='text-3xl mt-4 text-center uppercase'>
                            Originally from Munich, Germany
                        </p>
                        <p className='text-3xl text-center uppercase'>
                            I now reside in Kreuzlingen, Switzerland.
                        </p>
                    </motion.div>
                </div>
                
                <motion.div className='w-full flex flex-col md:flex-row justify-center items-center p-4'>
                    <div className='m-4'>
                        <p className="text-7xl text-center mt-16 uppercase">
                        <a className='text-blue-600 text-8xl font-bold'>What </a>i did?
                        </p>
                        <p className='text-3xl mt-4 text-center uppercase'>
                            I worked in retail for years
                        </p>
                        <p className='text-3xl text-center uppercase'>
                            {`and I'm still a hobby photographer.`}
                        </p>
                    </div>
                </motion.div>

                <motion.div className='w-full flex flex-col md:flex-row justify-center md:justify-start md:ml-24 items-center p-4'>
                    <div className='m-4'>
                        <p className="text-7xl text-center md:text-left mt-16 uppercase">
                        <a className='text-blue-600 text-8xl font-bold'>When </a>did I start?
                        </p>
                        <p className='text-3xl mt-4 text-center md:text-left uppercase'>
                            With years of customer service experience in retail, I shifted to the tech industry in mid-2022
                        </p>
                        <p className='text-3xl text-center md:text-left uppercase'>
                            pursuing my lifelong passion for computers and building—from gaming to website creation
                        </p>
                    </div>
                </motion.div>
                <motion.div className='w-full flex flex-col md:flex-row justify-center md:justify-end md:mr-24 items-center p-4'>
                    <div className='m-4'>
                        <p className="text-7xl text-center md:text-right mt-16 uppercase">
                        <a className='text-blue-600 text-8xl font-bold'>Why </a>am i doing it?
                        </p>
                        <p className='text-3xl mt-4 text-center md:text-right uppercase'>
                            As a creative at heart, I'm also deeply committed to technology
                        </p>
                        <p className='text-3xl text-center md:text-right uppercase'>
                            I always strive to learn more about the digital world
                        </p>
                        <p className='text-3xl text-center md:text-right uppercase'>
                            As a 13 year old, I build my first computer
                        </p>
                        <p className='text-3xl text-center md:text-right uppercase'>
                            Since that day, I'm fascinated by the possibilities of technology
                        </p>
                        <p className='text-3xl text-center md:text-right uppercase'>
                            And using my skills to help others
                        </p>
                    </div>
                </motion.div>

                <motion.div className='w-full flex flex-col md:flex-row justify-center items-center p-4'>
                    <div className='m-4'>
                        <p className="text-7xl text-center mt-16 uppercase">
                            and <a className='text-blue-600 text-8xl font-bold'>Now</a>?
                        </p>
                        <p className='text-3xl mt-4 text-center uppercase'>
                            I love building websites and code
                        </p>
                        <p className='text-3xl text-center uppercase'>
                            Create userplatforms and cloud infrastructure
                        </p>
                        <p className='text-3xl text-center uppercase'>
                            and also automate tasks for effientcy
                        </p>
                        <p className='text-3xl text-center uppercase'>
                            always looking for new challenges and opportunities to learn and grow
                        </p>
                        <p className='text-3xl text-center uppercase'>
                            I'm currently self-studying cybersecurity to protect the digital assets I develop
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='w-full flex flex-col justify-center items-center p-4 my-20 '
                >
                    <p className='text-2xl text-center uppercase m-4'>
                          Wanna See the <a className='text-blue-500 font-bold'>Projects</a> I've worked on? Or get in touch with me? 
                    </p>
                    <div className='flex space-x-8'>
                    <Link
                        href='/projects'
                    >
                    <Button
                        borderRadius='1.75rem'
                        className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                    >
                        Projects
                    </Button>
                    </Link>
                    <Link
                        href='/projects'
                    >
                    <Button
                        borderRadius='1.75rem'
                        className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                    >
                        Contact
                    </Button>
                    </Link>
                    </div>
                </motion.div>
            </div>
    )
}