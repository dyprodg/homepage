import CardComp from "./card";
import { projects } from "./projects";


export default function CardSection() {
    return (
        <div className="w-full flex flex-col items-center space-y-8">
            {projects.map((project, index) => (
                <CardComp key={index} {...project} />
            ))}
        </div>
    )
}
