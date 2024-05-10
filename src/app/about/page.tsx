
import AboutMain from '@/components/about/about-main';
import { Background } from '@/components/background';
import VideoPlayer from '@/components/video-player';

export default function AboutPage() {
    return(
        <div className="w-full flex flex-col">
            <Background />
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center relative z-30 mt-16 p-4">
                <div>
                    <p className="text-8xl md:text-9xl">
                        LET ME
                    </p>
                    <p className="text-6xl md:text-7xl font-bold"> 
                        INTRODUCE MYSELF
                    </p>
                </div>
                <div className='m-8'>
                    <VideoPlayer />
                </div>
            </div>
            <AboutMain />
        </div>
    )
}