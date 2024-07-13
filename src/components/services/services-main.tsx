import Image from 'next/image'
import { Button } from '../moving-border'
import Link from 'next/link'

const services = [
    {
        title: 'Responsive Web Development',
        subtitle: 'Moderne und responsive Webseiten',
        description: 'Erstellung moderner und responsiver Webseiten, die auf allen Geräten perfekt aussehen.',
        price: 'Ab 3000 CHF'
    },
    {
        title: 'Web App Entwicklung',
        subtitle: 'Backend und APIs',
        description: 'Entwicklung benutzerfreundlicher und leistungsstarker Web Apps, inklusive Backend und API-Integration.',
        price: 'Ab 5000 CHF'
    },
    {
        title: 'Einfache E-Commerce Webseiten',
        subtitle: 'Online Shops',
        description: 'Erstellung einfacher E-Commerce-Webseiten für einen erfolgreichen Online-Shop.',
        price: 'Ab 10000 CHF'
    },
    {
        title: 'Komplexe Shop Seiten',
        subtitle: 'Mit Datenbanken und Integration',
        description: 'Komplexe Shop Seiten mit Datenbank-Integration oder custom-made Warenwirtschafts-Integration.',
        price: 'Preis auf Anfrage'
    },
    {
        title: 'Wartung & Support',
        subtitle: 'Technische Unterstützung',
        description: 'Wartung und technischer Support für Ihre Webseite oder App. Monatlich, jährlich oder auf Anfrage.',
        price: 'Ab 100 CHF'
    },
    {
        title: 'Zusatz Paket für Weblösungen',
        subtitle: 'Design, Fotos und SEO',
        description: 'Komplettpaket für Ihre Weblösung inkl. Design, Fotos und SEO als Zusatzpaket.',
        price: 'Ab 1000 CHF'
    }
];


export default function ServicesMain() {
    return (
        <div className='w-full relative flex flex-col items-center'>
            <div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className='group flex flex-col justify-between items-center p-4 text-center max-w-[380px] md:max-w-[400px] m-6 border-2 border-blue-500 rounded-lg shadow-lg shadow-blue-500'
                    >
                        <div className='flex flex-col justify-between h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110'>
                            <div>
                                <h2 className='text-3xl font-bold'>{service.title}</h2>
                                <h3 className='text-2xl text-gray-600'>{service.subtitle}</h3>
                            </div>
                            <div>
                                <p className='text-center my-4 text-xl'>{service.description}</p>
                            </div>
                        </div>
                        <Link href='/kontakt'>
                            <Button
                                borderRadius='1.75rem'
                                className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                            >
                                {service.price}
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>

            <div
                className='w-full flex flex-col justify-center items-center p-4 my-20'
            >
                <div className='text-2xl text-center uppercase m-4'>
                    {`Du willst meine`} <div className='text-blue-500 font-bold'>Projekte</div> {`sehen oder mit mir in Kontakt treten?`}
                </div>
                <Image
                    src='/profile-square.jpeg'
                    alt='Dennis Diepolder Profilbild'
                    width={400}
                    height={400}
                    className='rounded-full'
                />
                <div className='flex space-x-8'>
                    <Link href='/projekte'>
                        <Button
                            borderRadius='1.75rem'
                            className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                        >
                            Projekte
                        </Button>
                    </Link>
                    <Link href='/kontakt'>
                        <Button
                            borderRadius='1.75rem'
                            className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                        >
                            Kontakt
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
