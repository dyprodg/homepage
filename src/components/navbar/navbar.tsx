'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname(); 


    const isActive = (path: string) => pathname === path;

    return(
        <div className="flex h-[50px] fixed md:text-2xl top-0 z-50 w-full text-white uppercase justify-center">
            <motion.div className="flex items-center p-4 rounded-full md:mt-2 bg-black"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 120, delay: 2}}
            >
                <Link href="/">
                    <p className={`p-4 font-bold transition duration-100 ease-in-out ${isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                        Home
                    </p>
                </Link>
                <Link href="/about">
                    <p className={`p-4 font-bold transition duration-100 ease-in-out ${isActive('/about') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                        About
                    </p>
                </Link>
                <Link href="/projects">
                    <p className={`p-4 font-bold transition duration-100 ease-in-out ${isActive('/projects') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                        Projects
                    </p>
                </Link>
                <Link href="/contact">
                    <p className={`p-4 font-bold transition duration-100 ease-in-out ${isActive('/contact') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                        Contact
                    </p>
                </Link>
            </motion.div>
        </div>
    );
}
