import React, { useState } from "react";

const CourseHighlights = () => {
    const highlights = [
        {
            icon: 'https://web.programming-hero.com/static/media/video-player.1d490ac7.svg',
            title: "950+ Videos",
            description:
                "The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack technologies. These videos are designed to cater to learners at all levels, from beginners to advanced developers. Each video is structured to explain concepts clearly and concisely, ensuring that students grasp both fundamental and complex topics effectively.",
            borderColor: "border-purple-500",
            bgGradient: "bg-gradient-to-b from-purple-600/30 to-transparent", // Smooth fading effect
        },
        {
            icon: 'https://web.programming-hero.com/static/media/bulb.1a694506.svg',
            title: "45+ Projects",
            description:
                "The course includes 45 projects that give students many chances to practice what they learn. These projects help reinforce concepts, improve coding skills, and build a portfolio that can be used for job applications.",
            borderColor: "border-orange-500",
            bgGradient: "bg-gradient-to-b from-orange-500/30 to-transparent",
        },
        {
            icon: 'https://web.programming-hero.com/static/media/code.a637b9b9.svg',
            title: "10+ Assignments",
            description:
                "The course has 12 assignments that help check how well students understand and use what they’ve learned. These assignments cover real-world scenarios and are designed to challenge students in practical web development tasks.",
            borderColor: "border-green-500",
            bgGradient: "bg-gradient-to-b from-green-500/30 to-transparent",
        },
    ];

    const textColor = ["text-purple-400", "text-orange-400", "text-green-400"];

    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 p-8 -mb-12">
            {highlights.map((item, index) => {
                const [showFullText, setShowFullText] = useState(false);

                return (
                    <div
                        key={index}
                        className={`border-2 ${item.borderColor} p-6 rounded-xl text-white bg-[#2B1B42] hover:shadow-lg transition-all duration-300 relative overflow-hidden w-full`}
                    >
                        <div className={`absolute inset-0 ${item.bgGradient} pointer-events-none`} />
                        <div className="relative z-10">
                            <img src={item.icon} alt="" />
                            <h2 className={`text-xl font-semibold ${textColor[index]} mt-3`}>{item.title}</h2>
                            <div className={`overflow-hidden transition-all duration-500 ${showFullText ? "h-auto" : "h-20"}`}>
                                <p className="text-gray-400 text-start">
                                    {showFullText ? item.description : `${item.description.substring(0, 100)}...`}
                                </p>
                            </div>

                            <button
                                onClick={() => setShowFullText(!showFullText)}
                                className="text-orange-400 font-semibold focus:outline-none mt-2"
                            >
                                {showFullText ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CourseHighlights;
