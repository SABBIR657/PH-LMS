import { useEffect, useRef } from "react";
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
                <div
                    ref={galleryRef}
                    className="flex w-full"
                >
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
                <path d="M4320,100 C4100,50 3900,150 3700,100 C3500,50 3300,150 3100,100 C2900,50 2700,150 2500,100 C2300,50 2100,200 1900,100 C1700,50 1500,200 1300,100 C1100,50 900,200 700,100 C500,50 300,150 100,100 C-100,50 -300,150 -400,100 C-600,50 -800,200 -1000,100 C-1200,50 -1400,150 -1600,100 C-1800,50 -2000,150"
                    fill="transparent" stroke="green" stroke-width="5">
                    <animate attributeName="d" values="M4320,100 C4100,50 3900,150 3700,100 C3500,50 3300,150 3100,100 C2900,50 2700,150 2500,100 C2300,50 2100,200 1900,100 C1700,50 1500,200 1300,100 C1100,50 900,200 700,100 C500,50 300,150 100,100 C-100,50 -300,150 -400,100 C-600,50 -800,200 -1000,100 C-1200,50 -1400,150 -1600,100 C-1800,50 -2000,150;
          M4320,150 C4100,100 3900,200 3700,150 C3500,100 3300,200 3100,150 C2900,100 2700,200 2500,150 C2300,100 2100,250 1900,150 C1700,100 1500,250 1300,150 C1100,100 900,250 700,150 C500,100 300,200 100,150 C-100,100 -300,200 -400,150 C-600,100 -800,250 -1000,150 C-1200,100 -1400,200 -1600,150 C-1800,100 -2000,200;
          M4320,200 C4100,150 3900,250 3700,200 C3500,150 3300,250 3100,200 C2900,150 2700,250 2500,200 C2300,150 2100,300 1900,200 C1700,150 1500,300 1300,200 C1100,150 900,300 700,200 C500,150 300,250 100,200 C-100,150 -300,250 -400,200 C-600,150 -800,300 -1000,200 C-1200,150 -1400,250 -1600,200 C-1800,150 -2000,250"
                        dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" />
                </path>

                <path d="M4320,300 C4100,250 3900,350 3700,300 C3500,250 3300,350 3100,300 C2900,250 2700,350 2500,300 C2300,250 2100,400 1900,300 C1700,250 1500,400 1300,300 C1100,250 900,400 700,300 C500,250 300,350 100,300 C-100,250 -300,350 -400,300 C-600,250 -800,400 -1000,300 C-1200,250 -1400,350 -1600,300 C-1800,250 -2000,350"
                    fill="transparent" stroke="green" stroke-width="5">
                    <animate attributeName="d" values="M4320,300 C4100,250 3900,350 3700,300 C3500,250 3300,350 3100,300 C2900,250 2700,350 2500,300 C2300,250 2100,400 1900,300 C1700,250 1500,400 1300,300 C1100,250 900,400 700,300 C500,250 300,350 100,300 C-100,250 -300,350 -400,300 C-600,250 -800,400 -1000,300 C-1200,250 -1400,350 -1600,300 C-1800,250 -2000,350;
          M4320,350 C4100,300 3900,400 3700,350 C3500,300 3300,400 3100,350 C2900,300 2700,400 2500,350 C2300,300 2100,450 1900,350 C1700,300 1500,450 1300,350 C1100,300 900,450 700,350 C500,300 300,400 100,350 C-100,300 -300,400 -400,350 C-600,300 -800,450 -1000,350 C-1200,300 -1400,400 -1600,350 C-1800,300 -2000,400"
                        dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" />
                </path>
            </svg>

            {/* "See Your Picture" button */}
            <div className="-mt-32">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[24px] px-6 py-3 rounded font-semibold hover:from-[rgb(255, 55, 242)] hover:to-[rgb(64, 90, 255)] transition duration-300 MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium">
                    Join Now
                </button>

            </div>
        </div>
    );
};

export default Learn;
