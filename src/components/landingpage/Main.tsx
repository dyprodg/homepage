'use client'
import Icon from "../icon"
import Image from "next/image"
import { TextGenerateEffect } from "../text-generate"
import { motion } from "framer-motion"
import { Tooltip } from "./tooltipp"


export default function MainBodyDesktop() {
    return (
    <div className="w-full h-screen bg-transparent flex flex-col justify-start md:justify-center items-center relative z-20 ">
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center lg:mt-20">
        <motion.div className="p-4"> 
            {/* Main Text*/}
            <motion.div
                className="max-w-[500px] md:max-w-[800px] text-center md:text-left"
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 4, type: "spring", stiffness: 30}}
            >
            <TextGenerateEffect
                className="text-4xl"
                words={`Hi, my name is Dennis Diepolder and I'm a Fullstack Developer and Cloud Engineer based in Switzerland.`} 
             />
             </motion.div>
            {/* Second Text*/}
             <motion.div 
                className="max-w-[500px] md:max-w-[800px] text-center md:text-left"
                initial={{ x: -1300 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, delay: 4.5, type: "spring", stiffness: 80}}
             >
                <p className="text-2xl italic mt-12">
                    {`I have a passion for building websites, platforms and cloud infrastructure. I have experience in developing serverless web applications, cloud infrastructure, and automation tools. I'm always looking for new challenges and opportunities to learn and grow.`}
                </p>
             </motion.div>
            {/* Third Text*/}
             <motion.div
                className="max-w-[500px] md:max-w-[800px] "
                initial={{ x: -1300 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, delay: 4.8, type: "spring", stiffness: 80}}
             >
             <p className="p-4 md:text-end text-center mt-6">
                    {`"My goal is to provide a comprehensive solution encompassing everything from initial design and UX to software development, continuous delivery, and deployment. As a DevOps Cloud Engineer, I specialize in delivering robust full-stack applications. Designing logos and taking photos for the website are just some of the additional services I offer, ensuring that every project is delivered from start to finish with all aspects meticulously covered."`} 
                </p>
             </motion.div>
             
        </motion.div>
        
        {/* Image */}
        <motion.div className="rounded-full object-cover overflow-hidden relative mt-4 z-40"
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
      </div>

        {/* Tech Stack */}
      <motion.div className="flex flex-col items-center text-center md:text-left mt-20 justify-center md:flex-row relative z-20"
        initial={{ y: 600 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 5, type: "spring", stiffness: 30}}
      >
        <p className="p-4 text-4xl">
            My <span className="text-blue-600">Tech Stack</span> to achieve this goal:
        </p>

        <div>
            <Tooltip />
        </div>
      </motion.div>

    </div>
    )
}