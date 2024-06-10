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
        title: 'Platform',
        href: 'https://github.com/dyprodg/eagler',
        header: 'Eagler - Just Another Social Media',
        shortdescription: 'Photo upload and sharing platform',
        longdescription:  'A social media platform built with Next.js and Tailwind CSS. Users can create an account, upload, like, and comment on pictures. It features a responsive design and is hosted on a custom EC2 Cluster on AWS, with a PostgreSQL database and S3/CloudFront. More details on Github.'
        ,
        image: '/eagler.jpeg',
        imageAlt: 'Eagler Picture',
        github: 'https://github.com/dyprodg/eagler',
    },
    {
        title: 'Website',
        href: 'https://freihaus.ch',
        header: 'Freihaus GmbH Website',
        shortdescription: 'Customer Website for a local business',
        longdescription: 'A website built for a local business using Next.js and Tailwind CSS. The site features a responsive design, a custom logo, and is hosted on AWS Amplify. More details can be found on the project Github page.',
        image: '/freihaus.jpeg',
        imageAlt: 'Freihaus Picture',
        github: 'https://github.com/freihaus/freihaus'
    },
    {
        title: 'IT Support',
        href: 'https://freihaus.ch',
        header: 'Freihaus GmbH IT Support',
        shortdescription: 'Customer IT Support for a local business',
        longdescription: 'IT Support for a local business. From webhosting and AWS account admin to network and email-server setup, I provide support for a variety of IT services.',
        image: '/freihaus2.png',
        imageAlt: 'Freihaus Logo',
    },
    {
        title: 'API Integration',
        href: 'https://dev.d2zi9qfn5dqc9g.amplifyapp.com/',
        header: 'API Speed Test',
        shortdescription: 'Backend API Test',
        longdescription: 'This a simple API test built with Amplify, AWS API Gateway and Lambda. It manipulates the string you send on a few different ways and returns it. I used Python, Node.js and Go for the serverless functions. The frontend is build with Next.js. More details on Github.',
        image: '/api-test.jpeg',
        imageAlt: 'API Test Picture',
        github: 'https://github.com/dyprodg/amplify-aws-api-speedtest'
    },
    {
        title: 'Website Game',
        href: 'https://cookiegame.vercel.app/',
        header: 'Small Cookie Clicker Game',
        shortdescription: 'Website Game',
        longdescription: 'This is just a small fun project, but I think its still worth mentioning. It is a simple cookie clicker game built with Next.js and Tailwind CSS. The game is hosted on Vercel. More details on Github.',
        image: '/cookie-game.jpeg',
        imageAlt: 'Cookie Game Picture',
        github: 'https://github.com/dyprodg/cookiegame/tree/main'
    },

]