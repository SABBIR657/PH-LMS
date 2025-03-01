import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as Tooltip from "@radix-ui/react-tooltip";

const employees = [
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "TECH LEAD",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },

    // Add more employees with the same structure
];

const TopCompanies = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(galleryRef.current, {
            x: "-100%",
            duration: 20,
            ease: "linear",
            onComplete: () => {
                gsap.set(galleryRef.current, { x: "100%" });
            },
        });
    }, []);

    return (
        <div className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center">
            <h1 className="text-5xl font-extrabold text-purple-400 mb-6">Heroes In Top Companies</h1>
            <p className="text-gray-400 text-center max-w-2xl mb-8">
                যারা মেইন কোর্স এবং SCIC অনটাইমে ভালোভাবে ফিনিশ করে তাদের ৭০-৮০% স্টুডেন্ট কোর্স ফিনিশ করার ৩-৬ মাসের মধ্যে ইন্টার্ন/চাকরি পেয়ে যায়।
            </p>
            <div className="relative w-full flex overflow-hidden py-4">
                <div ref={galleryRef} className="flex space-x-6">
                    {employees.map((emp, index) => (
                        <Tooltip.Provider key={index}>
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    <div className="relative group cursor-pointer">
                                        <img
                                            src={emp.image}
                                            alt={emp.name}
                                            className="w-40 h-40 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content
                                        className="bg-gray-800 text-white p-4 rounded-lg shadow-xl text-sm flex items-center space-x-3"
                                        side="top"
                                        align="center"
                                    >
                                        <img src={emp.companyLogo} alt={emp.company} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <p className="font-bold text-lg">{emp.name}</p>
                                            <p className="text-sm">{emp.position}</p>
                                            <p className="text-xs text-gray-400">{emp.batch}</p>
                                        </div>
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col space-y-2">
                <p className="text-sm">📅 <span className="text-purple-400 font-semibold">এনরোলমেন্ট শুরু:</span> <span className="font-bold">10th Jun, 2025</span></p>
                <p className="text-sm">📅 <span className="text-purple-400 font-semibold">এনরোলমেন্ট শেষ:</span> <span className="font-bold">24th Jun, 2025</span></p>
            </div>
        </div>
    );
};

export default TopCompanies;