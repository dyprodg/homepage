import { Background } from "@/components/background"
import CardSection from "@/components/projects/card-section"
import { Button } from "@/components/moving-border"
import Link from "next/link"
import Footer from "@/components/footer"

export default function ProjectPage() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Background />
            <div className="w-full flex flex-col relative z-30 mt-20 items-center">
                <h1 className="uppercase font-bold text-7xl md:text-9xl text-blue-500">
                    Projects
                </h1>
                <div className="w-11/12 md:w-3/4 lg:w-1/2 mt-8 md:mt-12">
                    <div className="text-xl md:text-2xl text-center">
                        Here are some of the projects that I have worked on. I have experience working with a variety of technologies and tools. I have worked on projects ranging from small personal projects to large scale applications.
                    </div>
                </div>
                <CardSection />
                <div className="mt-12 w-full flex flex-col items-center text-center uppercase">
                    <h2 className="text-5xl md:text-7xl p-4">
                        More <div className="text-blue-500">projects</div> coming soon!
                    </h2>
                    <div className="w-[360px] md:w-[700px] lg:w-[800px] text-xl p-4">
                        I am always working on new projects and learning new technologies. Check back soon to see what I have been working on!
                    </div>
                    <div className="w-[360px] md:w-[700px] lg:w-[800px] text-xl p-4">
                        This is just all my custom projects. I worked through a lot of tutorials and courses to learn new technologies. I have experience with a lot of different technologies and tools. If you want to know more about my skills and experience, check out my resume or contact me directly.
                    </div>
                </div>
                <div
                    className='w-full flex flex-col justify-center items-center p-4 my-20'
                >
                    <div className='text-2xl text-center uppercase m-4'>
                          {`Wanna`} <div className='text-blue-500 font-bold'>Contact</div> {`me for a project?`}
                    </div>
                    <div className='flex space-x-8'>
                    <Link
                        href='/contact'
                    >
                    <Button
                        borderRadius='1.75rem'
                        className='bg-slate-900 text-white border-slate-800 text-xl hover:scale-110 transition ease-in-out duration-100'
                    >
                        Contact
                    </Button>
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}