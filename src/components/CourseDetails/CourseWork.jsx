import React from "react";
import "./CourseWork.css";

const CourseWork = () => {
    const cardData = [
        {
            icon: "⏰",
            title: "Module Release Time",
            description:
                "Every day we will be given a module/practice task. Videos will be released at 10:00 PM. Smart students may trick our system to get module access 2 hours earlier than everyone else.",
        },
        {
            icon: "💻",
            title: "Watch Time Duration",
            description:
                "A full module has approximately 10 videos (each video 12-14 min). You have to spend 4-5 hours watching, practicing the contents. We recommend allocating 6-8 hours everyday for this course.",
        },
        {
            icon: "📚",
            title: "Search Similar Topic Online",
            description:
                "Keep 1-2 hours everyday to clear our doubts from google, or using our support system. If you do not have any doubts, we recommend you search the similar topic of the module online",
        },
        {
            icon: "🎯",
            title: "Live Conceptual Session",
            description:
                "You will have a practice day after every 2-4 modules. And there will be a conceptual session on that practice day. We highly recommend our students to join the live conceptual session.",
        },
        {
            icon: "📈",
            title: "Assignment Submit",
            description:
                "After every 4-7 modules, you will have an assignment. Finish the assignment on time to be considered for 60 marks. If you are late by one day, you will be considered for 50 marks. And if you submit the assignment late, you will be considered for 30 marks.",
        },
        {
            icon: "🧑‍🏫",
            title: "SCIC",
            description:
                "If you finish our main course on time with good marks, you will qualify for the SCIC. You will have to stay focused and dedicated to finish the course on time.",
        },
        {
            icon: "🧑‍🏫",
            title: "Support Session",
            description:
                "We will answer every question related to our course within 10 hours. Also, you may join our live support session three times a day. Friday morning there won't be any live support session.",
        },
        {
            icon: "🧑‍🏫",
            title: "20 Week Course",
            description:
                "We believe there is no shortcut, other than hard work. So, be committed to invest 6-8 hours every single day for the next 20 weeks to finish our main course on time.",
        },
    ];

    return (
        <div className="bg-black min-h-screen flex items-start justify-center p-8">
            <div className="max-w-7xl w-full flex justify-between">
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-white space-y-6">
                    <h2 className="text-4xl font-bold">How Will This Course Work_?</h2>
                    <p className="text-gray-300 text-lg">
                        This course guides you from basics to mastering the MERN stack with step-by-step lessons, hands-on projects, and assessments.
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg font-semibold text-white hover:opacity-80 transition duration-300">
                        Enroll Now
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 h-[400px] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 gap-6 mt-6">
                        {/* Render Cards from array */}
                        {cardData.map((card, index) => (
                            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg">
                                <span className="text-3xl">{card.icon}</span>
                                <h3 className="text-xl font-semibold mt-3">{card.title}</h3>
                                <p className="text-gray-400 mt-2">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseWork;
