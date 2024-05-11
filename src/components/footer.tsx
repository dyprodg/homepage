import Link from "next/link"

export default function Footer() {
    return (
        <div className="w-full flex justify-evenly relative z-50 bg-transparent p-4 uppercase">
            <Link href={'/impressum'} className="hover:text-blue-500 transition ease-in-out duration-200">Impressum</Link>
            <Link href={'/agb'} className="hover:text-blue-500 transition ease-in-out duration-200">AGB</Link>
            <Link href={'/privacy'} className="hover:text-blue-500 transition ease-in-out duration-200">Privacy Terms</Link>
        </div>
    )
}