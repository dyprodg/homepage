
import AboutMain from '@/components/about/about-main';
import { Background } from '@/components/background';
import Footer from '@/components/footer';
import VideoPlayer from '@/components/video-player';

export const metadata = {
    title: "Dennis Diepolder - Über mich",
    description: "Lernen Sie Dennis Diepolder kennen.",
    keywords: ["Über mich", "Dennis Diepolder"],
};


export default function AboutPage() {
    return(
        <div className="w-full flex flex-col">
            <Background />
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center relative z-30 mt-16 p-4">
                <div>
                    <div className="text-8xl md:text-9xl">
                        LASS MICH
                    </div>
                    <div className="text-6xl md:text-7xl font-bold"> 
                        MICH VORSTELLEN
                    </div>
                </div>
                {/* Video Player 
                <div className='m-8'>
                    <VideoPlayer />
                </div>
                */}
            </div>
            <AboutMain />
            <Footer />
        </div>
    )
}