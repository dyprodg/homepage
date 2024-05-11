import Link from "next/link"

export default function Navbar() {
    return(
        <div className="flex h-[50px] absolute top-0 z-50 w-full text-white uppercase justify-center">
            <Link
                className="p-4 text-2xl font-bold hover:text-blue-500 transition duration-100 ease-in-out"
                href="/"
            >Home
            </Link>
            <Link
                className="p-4 text-2xl font-bold hover:text-blue-500 transition duration-100 ease-in-out"
                href="/about"
            >About Me
            </Link>
            <Link
                className="p-4 text-2xl font-bold hover:text-blue-500 transition duration-100 ease-in-out"
                href="/contact"
            >Contact
            </Link>
        </div>
    )
}