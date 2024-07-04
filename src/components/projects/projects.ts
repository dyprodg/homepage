type CardProps = {
    title: string;
    href: string;
    header: string;
    shortdescription: string;
    longdescription: string;
    image: string;
    imageAlt: string;
    github?: string;
}

export const projects: CardProps[] = [
    {
        title: 'Plattform',
        href: 'https://github.com/dyprodg/eagler',
        header: 'Eagler - Just Another Social Media',
        shortdescription: 'Plattform zum Hochladen und Teilen von Fotos',
        longdescription: 'Eine Social-Media-Plattform, die mit Next.js und Tailwind CSS gebaut wurde. Benutzer können ein Konto erstellen, Bilder hochladen, liken und kommentieren. Die Plattform verfügt über ein responsives Design und wird auf einem benutzerdefinierten EC2-Cluster auf AWS gehostet, mit einer PostgreSQL-Datenbank und S3/CloudFront. Weitere Details auf Github.',
        image: '/eagler.jpeg',
        imageAlt: 'Eagler Bild',
        github: 'https://github.com/dyprodg/eagler',
    },
    {
        title: 'Website',
        href: 'https://freihaus.ch',
        header: 'Freihaus GmbH Website',
        shortdescription: 'Kunden-Website für ein lokales Unternehmen',
        longdescription: 'Eine Website, die für ein lokales Unternehmen mit Next.js und Tailwind CSS erstellt wurde. Die Seite verfügt über ein responsives Design, ein benutzerdefiniertes Logo und wird auf AWS Amplify gehostet. Weitere Details finden Sie auf der Projektseite auf Github.',
        image: '/freihaus.jpeg',
        imageAlt: 'Freihaus Bild',
        github: 'https://github.com/freihaus/freihaus'
    },
    {
        title: 'IT-Support',
        href: 'https://freihaus.ch',
        header: 'Freihaus GmbH IT-Support',
        shortdescription: 'Kunden-IT-Support für ein lokales Unternehmen',
        longdescription: 'IT-Support für ein lokales Unternehmen. Von Webhosting und AWS-Kontoadministration bis hin zur Netzwerk- und E-Mail-Server-Einrichtung biete ich Unterstützung für eine Vielzahl von IT-Dienstleistungen.',
        image: '/freihaus2.png',
        imageAlt: 'Freihaus Logo',
    },
    {
        title: 'API-Integration',
        href: 'https://dev.d2zi9qfn5dqc9g.amplifyapp.com/',
        header: 'API Speed Test',
        shortdescription: 'Backend-API-Test',
        longdescription: 'Dies ist ein einfacher API-Test, der mit Amplify, AWS API Gateway und Lambda erstellt wurde. Es manipuliert den von Ihnen gesendeten String auf verschiedene Arten und gibt ihn zurück. Ich habe Python, Node.js und Go für die serverlosen Funktionen verwendet. Das Frontend wurde mit Next.js erstellt. Weitere Details auf Github.',
        image: '/api-test.jpeg',
        imageAlt: 'API-Test Bild',
        github: 'https://github.com/dyprodg/amplify-aws-api-speedtest'
    },
    {
        title: 'Website-Spiel',
        href: 'https://cookiegame.vercel.app/',
        header: 'Kleines Cookie-Clicker-Spiel',
        shortdescription: 'Website-Spiel',
        longdescription: 'Dies ist nur ein kleines Spaßprojekt, aber ich denke, es ist dennoch erwähnenswert. Es ist ein einfaches Cookie-Clicker-Spiel, das mit Next.js und Tailwind CSS erstellt wurde. Das Spiel wird auf Vercel gehostet. Weitere Details auf Github.',
        image: '/cookie-game.jpeg',
        imageAlt: 'Cookie-Game Bild',
        github: 'https://github.com/dyprodg/cookiegame/tree/main'
    },
]
