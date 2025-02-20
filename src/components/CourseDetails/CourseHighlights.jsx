import React from "react";
import { FaVideo, FaLightbulb, FaCode } from "react-icons/fa";

const CourseHighlights = () => {
    const highlights = [
        {
            icon: 'https://web.programming-hero.com/static/media/video-player.1d490ac7.svg',
            title: "950+ Videos",
            description:
                "The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack...",
            borderColor: "border-purple-500",
        },
        {
            icon: 'https://web.programming-hero.com/static/media/bulb.1a694506.svg',
            title: "45+ Projects",
            description:
                "The course includes 45 projects that give students many chances to practice what they learn. These projects...",
            borderColor: "border-orange-500",
        },
        {
            icon: 'https://web.programming-hero.com/static/media/code.a637b9b9.svg',
            title: "10+ Assignments",
            description:
                "The course has 12 assignments that help check how well students understand and use what they’ve learned...",
            borderColor: "border-green-500",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 p-8 bg-gray-900">
            {highlights.map((item, index) => (
                <div
                    key={index}
                    className={`border-2 ${item.borderColor} p-6 rounded-xl text-white bg-gray-800 hover:shadow-lg transition-all duration-300`}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <img src={item.icon} alt="" />
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-gray-400 text-center">{item.description}</p>
                        <a href="#" className="text-orange-400 font-semibold">
                            Read More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseHighlights;