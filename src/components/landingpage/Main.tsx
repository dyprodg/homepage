'use client'
import Image from "next/image"
import { TextGenerateEffect } from "../text-generate"
import { motion } from "framer-motion"
import { Tooltip } from "./tooltipp"
import { Button } from "../moving-border"
import Link from "next/link"
import { useState } from "react"
import Footer from "../footer"



export default function MainBodyDesktop() {
  const [yValue, setYValue] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 300
  );

    return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center relative z-20 ">
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center mt-20">
        <motion.div className="p-4"> 
            {/* Main Text*/}
            <motion.div
                className="max-w-[500px] md:max-w-[800px] text-center md:text-left"
                initial={{ y: yValue }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 4, type: "spring", stiffness: 30}}
            >
            <TextGenerateEffect
                className="text-4xl"
                words={`Hi, my name is Dennis Diepolder and I'm a Fullstack Developer and Cloud Engineer.`} 
             />
             </motion.div>
            {/* Second Text*/}
             <motion.div 
                className="max-w-[500px] md:max-w-[800px] text-center md:text-right"
                initial={{ x: -1300 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, delay: 4.5, type: "spring", stiffness: 80}}
             >
                <div className="hidden md:block text-2xl mt-20">
                    {`I have a passion for building websites, platforms and cloud infrastructure. I am experienced in developing serverless web applications, cloud infrastructure, and automation tools. I'm always looking for new challenges and opportunities to learn and grow.`}
                </div>
             </motion.div>
            {/* Third Text*/}
             <motion.div
                className="max-w-[500px] md:max-w-[800px] justify-center flex my-12 md:my-0 md:mt-20"
                initial={{ x: -1300 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, delay: 4.8, type: "spring", stiffness: 80}}
             >
              {/* More Button Here */}
              <Link
                href="/about"
              >
                <Button
                  orderRadius="1.75rem"
                  className="bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100"
                >
                  More
                </Button>
              </Link>
              
             </motion.div>
             
        </motion.div>
        
        {/* Image */}
        <motion.div className="hidden md:flex rounded-full object-cover overflow-hidden relative m-4 mt-4 z-40"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 4, type: "spring", stiffness: 30}}
        >
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 2}}
          >
            <Image
                alt="Dennis Diepolder"
                src='/profile-small.jpg'
                width={400}
                height={800}
            />
            </motion.div>
        </motion.div>

                {/* Mobile */}
                <motion.div className="flex md:hidden rounded-3xl object-cover overflow-hidden relative mx-4 z-40"
            initial={{ x: 800, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: 1, delay: 4.5, type: "spring", stiffness: 80}}
        >
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 2}}
          >
            <Image
                alt="Dennis Diepolder"
                src='/profile-small.jpg'
                width={400}
                height={800}
            />
            </motion.div>
        </motion.div>
      </div>

        {/* Tech Stack */}
      <motion.div className="flex flex-col items-center text-center md:text-left md:mt-20 justify-center md:flex-row relative z-20"
        initial={{ y: 600 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 5, type: "spring", stiffness: 30}}
      >
        <div className="p-4 text-4xl">
            My <span className="text-blue-600">Tech Stack</span> to achieve this goal:
        </div>

        <div>
            <Tooltip />
        </div>
      </motion.div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 2, delay: 6}}
      >
        <Footer />
      </motion.div>
      
    </div>
    )
}