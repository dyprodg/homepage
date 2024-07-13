
import ServicesMain from '@/components/services/services-main';
import { Background } from '@/components/background';
import Footer from '@/components/footer';
import VideoPlayer from '@/components/video-player';

export const metadata = {
    title: "Dennis Diepolder - Services",
    description: "Entdecken Sie die Dienstleistungen und Services, die Dennis Diepolder anbietet.",
    keywords: ["Dienstleistungen", "Dennis Diepolder", "Services"],
};


export default function ServicesPage() {
    return(
        <div className="w-full flex flex-col">
            <Background />
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center relative z-30 mt-16 p-4 text-center">
                <div>
                    <div className="text-8xl md:text-9xl uppercase">
                        Meine
                    </div>
                    <div className="text-7xl md:text-[10rem] font-bold uppercase text-blue-600"> 
                        Services
                    </div>
                </div>
                {/* Video Player 
                <div className='m-8'>
                    <VideoPlayer />
                </div>
                */}
            </div>
            <ServicesMain />
            <Footer />
        </div>
    )
}