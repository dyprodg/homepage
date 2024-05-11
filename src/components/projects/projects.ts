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

export const projects: CardProps[] = [
    {
        title: 'Eagler',
        href: 'https://justanothersocialmedia.net',
        header: 'Eagler - Just Another Social Media',
        shortdescription: 'Photo upload and sharing platform',
        longdescription:  'A social media platform built with Next.js and Tailwind CSS. Users can create an account, upload, like, and comment on pictures. It features a responsive design and is hosted on a custom EC2 Cluster on AWS, with a PostgreSQL database and S3/CloudFront. More details on Github.'
        ,
        image: '/eagler.jpeg',
        imageAlt: 'Eagler Picture',
        github: 'https://github.com/dyprodg/eagler',
    },
    {
        title: 'Projekt 2',
        href: '/projekt-2',
        header: 'Header 2',
        shortdescription: 'Kurze Beschreibung 2',
        longdescription: 'Lange Beschreibung 2',
        image: '/profile-square.jpeg',
        imageAlt: 'Bild 2',
        github: 'https://github.com/projekt-1',
    },
]