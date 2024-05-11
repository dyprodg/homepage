import { Background } from "@/components/background"
import CardSection from "@/components/projects/card-section"

export default function ProjectPage() {
    return (
        <div className="flex w-full h-screen">
            <Background />
            <div className="w-full flex flex-col relative z-30 mt-20 items-center">
                <h1 className="uppercase font-bold text-7xl md:text-9xl ">
                    Projects
                </h1>
                <div className="w-11/12 md:w-3/4 lg:w-1/2 mt-8 md:mt-12">
                    <p className="text-xl md:text-2xl text-center">
                        Here are some of the projects that I have worked on. I have experience working with a variety of technologies and tools. I have worked on projects ranging from small personal projects to large scale applications.
                    </p>
                </div>
                <CardSection />
            </div>
        </div>
    )
}