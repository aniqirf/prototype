import React from "react";
import TypingEffect from "react-typing-effect";
import background from "../../assets/videos/bg-harbour.mp4";
import { FaNewspaper } from "react-icons/fa";

const newsItems = [
    "🚢 Harbour Expansion Project Completed!",
    "🌊 Weather Update: Calm Seas Expected This Week.",
    "📦 New Warehouse Space Now Available!",
    "⚓ All-Weather Port Ready for Operations.",
    "👷 Hiring Skilled Workers – Apply Now!",
];

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={background}
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <TypingEffect
                            text={["Welcome to Our Site", "Discover Something New", "Elevate Your Experience"]}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                        />
                    </h1>
                    <p className="text-lg md:text-xl">Your journey starts here.</p>
                </div>
            </div>

            <div className="absolute bottom-0 w-full bg-gray-600 text-white py-3 overflow-hidden shadow-lg">
                <div className="flex items-center space-x-3 px-6">
                    <FaNewspaper className="text-2xl text-yellow-300" />
                    <div className="w-full overflow-hidden">
                        <div className="inline-block animate-marquee whitespace-nowrap">
                            {newsItems.map((item, index) => (
                                <span key={index} className="mx-10 text-lg font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tailwind Animation */}
            <style>
                {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default Hero;
