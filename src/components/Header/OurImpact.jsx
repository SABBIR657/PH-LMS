import { useState, useEffect } from "react";

const OurImpact = () => {
    const [jobPlacements, setJobPlacements] = useState(0);
    const [connectedCompanies, setConnectedCompanies] = useState(0);
    const [executives, setExecutives] = useState(0);

    useEffect(() => {
        const animateValue = (setter, target, duration) => {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 5;
                setter(start);
                if (start >= target) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        animateValue(setJobPlacements, 4300, 1500);
        animateValue(setConnectedCompanies, 2280, 1500);
        animateValue(setExecutives, 18, 1500);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#060022] text-white px-4 md:px-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text leading-[1.167] text-center md:text-right capitalize">
                Our <br /> Impact_
            </h2>

            <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{jobPlacements}+</h3>
                    <p className="text-lg">Job placement <br /> worldwide</p>
                </div>
                <div className="border-t md:border-l md:border-white w-full md:h-16"></div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{connectedCompanies}+</h3>
                    <p className="text-lg">Connected <br /> companies</p>
                </div>
                <div className="border-t md:border-l md:border-white w-full md:h-16"></div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">{executives}+</h3>
                    <p className="text-lg">Dedicated Job <br /> Placement Executives</p>
                </div>
            </div>
        </div>
    );
};

export default OurImpact;
