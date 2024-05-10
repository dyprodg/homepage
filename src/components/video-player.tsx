'use client'
import { useState, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function VideoPlayer() {
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const videoDuration = 26;
        const timeoutId = setTimeout(() => {
            setMuted(true);
        }, videoDuration * 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const handleMute = () => {
        setMuted(!muted);
    };

    return (
        <div className="relative">
            <video
                src="https://d3nohlcdf7fia8.cloudfront.net/raw-website-vid-en.mp4" 
                className="w-[380px] rounded-xl"
                autoPlay={true}
                muted={muted}
                loop={true}
            />

            <button 
                onClick={handleMute} 
                className="absolute top-0 right-0 m-4"
            >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
        </div>
    );
}