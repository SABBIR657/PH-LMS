import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as Tooltip from "@radix-ui/react-tooltip";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";

const employees = [
    { image: photo1 },
    { image: photo2 },
    { image: photo3 },
    { image: photo4 },
    { image: photo1 },
    { image: photo2 },
    { image: photo3 },
    { image: photo4 },
];

const Learn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(galleryRef.current, {
            x: "-150%", // Increase movement to 150% for visibility
            y: "+=20",  // Increased up/down movement for visibility
            duration: 100,
            ease: "linear",
            repeat: -1, // Continuous movement
            yoyo: true, // Bounce effect
        });
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[1c1726px] overflow-hidden flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                what will you learn?_
            </h1>

            <p className="text-gray-400 text-center mb-6">
                কি নাই এই কোর্সে। ৮০+ মডিউল, ২৫+ প্রজেক্ট কোর্সে দেখানো হবে। ১২ টি এসাইনমেন্ট। আরো কত কি?
            </p>

            <div className="relative w-full overflow-hidden">
                <div ref={galleryRef} className="flex w-full">
                    {/* Loop through employee images */}
                    {employees.concat(employees).map((emp, index) => (
                        <div key={index} className="w-1/4 p-4 relative group cursor-pointer">
                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <div className="">
                                        <div className="w-[200px]">
                                            <Tooltip.Trigger asChild>
                                                <img
                                                    src={emp.image}
                                                    alt="Employee"
                                                    className="w-full h-54 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </Tooltip.Trigger>
                                        </div>
                                    </div>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </div>
                    ))}
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4320 400" width="100%" height="400">
                <path
                    d="M4320,100 C4100,50 3900,150 3700,100 C3500,50 3300,150 3100,100 C2900,50 2700,150 2500,100 C2300,50 2100,200 1900,100 C1700,50 1500,200 1300,100 C1100,50 900,200 700,100 C500,50 300,150 100,100 C-100,50 -300,150 -400,100 C-600,50 -800,200 -1000,100 C-1200,50 -1400,150 -1600,100 C-1800,50 -2000,150"
                    fill="transparent" stroke="green" strokeWidth="5">
                    <animate
                        attributeName="d"
                        values="M4320,100 C4100,50 3900,150 3700,100 C3500,50 3300,150 3100,100 C2900,50 2700,150 2500,100 C2300,50 2100,200 1900,100 C1700,50 1500,200 1300,100 C1100,50 900,200 700,100 C500,50 300,150 100,100 C-100,50 -300,150 -400,100 C-600,50 -800,200 -1000,100 C-1200,50 -1400,150 -1600,100 C-1800,50 -2000,150;
                        M4320,150 C4100,100 3900,200 3700,150 C3500,100 3300,200 3100,150 C2900,100 2700,200 2500,150 C2300,100 2100,250 1900,150 C1700,100 1500,250 1300,150 C1100,100 900,250 700,150 C500,100 300,200 100,150 C-100,100 -300,200 -400,150 C-600,100 -800,250 -1000,150 C-1200,100 -1400,200 -1600,150 C-1800,100 -2000,200"
                        dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite"
                    />
                </path>

                <path
                    d="M4320,300 C4100,250 3900,350 3700,300 C3500,250 3300,350 3100,300 C2900,250 2700,350 2500,300 C2300,250 2100,400 1900,300 C1700,250 1500,400 1300,300 C1100,250 900,400 700,300 C500,250 300,350 100,300 C-100,250 -300,350 -400,300 C-600,250 -800,400 -1000,300 C-1200,250 -1400,350 -1600,300 C-1800,250 -2000,350"
                    fill="transparent" stroke="green" strokeWidth="5">
                    <animate
                        attributeName="d"
                        values="M4320,300 C4100,250 3900,350 3700,300 C3500,250 3300,350 3100,300 C2900,250 2700,350 2500,300 C2300,250 2100,400 1900,300 C1700,250 1500,400 1300,300 C1100,250 900,400 700,300 C500,250 300,350 100,300 C-100,250 -300,350 -400,300 C-600,250 -800,400 -1000,300 C-1200,250 -1400,350 -1600,300 C-1800,250 -2000,350"
                        dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite"
                    />
                </path>
            </svg>

            {/* "Join Now" Button */}
            <div className="-mt-32">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[24px] px-6 py-3 rounded font-semibold hover:from-[rgb(255, 55, 242)] hover:to-[rgb(64, 90, 255)] transition duration-300"
                >
                    Join Now
                </button>
            </div>

            {/* Popup Modal */}
            {isOpen && (
                <div className="fixed  top-44 inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50">
                    <div className=" justify-center w-full p-8 rounded-2xl shadow-2xl max-w-3xl relative transform scale-105 transition-transform duration-300 hover:scale-110"
                        style={{
                            backdropFilter: "blur(24px)",
                            background: "linear-gradient(90deg, rgba(232, 85, 222, 0.2) -0.19%, rgba(109, 15, 235, 0.2) 82.93%, rgba(84, 0, 238, 0.2) 100.2%)"
                        }}>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-red-500 text-3xl font-semibold"
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-bold text-center text-white mb-6 leading-tight">
                            ৬ মাসে একজন জুনিয়র ওয়েব ডেভেলপার হয়ে জব/ইন্টার্ন পাওয়ার চ্যালেঞ্জ নিতে চাইলে মাষ্ট এনরোল করে ফেলবে--
                        </h2>
                        <div className="text-center text-white mb-6">
                            <p className="text-lg font-medium">এনরোলমেন্ট শুরু: <span className="font-bold">১০ জুন, ২০২৫</span></p>
                            <p className="text-lg font-medium">এনরোলমেন্ট শেষ: <span className="font-bold">২৪ জুন, ২০২৫</span></p>
                        </div>
                        <div className="flex justify-center mt-auto mb-8">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-gradient-to-r from-blue-500 to-purple-600  text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-800 hover:to-purple-900 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                            >
                                Register Now
                            </button>

                        </div>
                    </div>
                </div>

            )}

        </div>
    );
};

export default Learn;
