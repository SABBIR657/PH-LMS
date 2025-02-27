import React from "react";

const FoundationCard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 p-10 -mb-56">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-screen-xl">
                {/* First Feature Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]">
                    <div className="flex items-start w-full">
                        <img
                            src="https://web.programming-hero.com/static/media/check-circle.b5956cb2.svg"
                            alt="Check Icon"
                            className="w-6 h-6"
                        />
                        <div className="ml-4 w-full">
                            <h3 className="text-green-400 font-semibold text-lg">Foundations First</h3>
                            <p className="text-gray-300 mt-2 font-semibold">
                                Begin your journey with the basics, learning HTML, CSS, Tailwind, and DaisyUI.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Feature Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]">
                    <div className="flex items-start w-full">
                        <img
                            src="https://web.programming-hero.com/static/media/check-circle.b5956cb2.svg"
                            alt="Check Icon"
                            className="w-6 h-6"
                        />
                        <div className="ml-4 w-full">
                            <h3 className="text-green-400 font-semibold text-lg">Next Steps</h3>
                            <p className="text-gray-300 mt-2 font-semibold">
                                Move on to JavaScript, covering DOM manipulation, API integration, ES6 features, debugging, and using developer tools.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Feature Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]">
                    <div className="flex items-start w-full">
                        <img
                            src="https://web.programming-hero.com/static/media/check-circle.b5956cb2.svg"
                            alt="Check Icon"
                            className="w-6 h-6"
                        />
                        <div className="ml-4 w-full">
                            <h3 className="text-green-400 font-semibold text-lg">React and Beyond</h3>
                            <p className="text-gray-300 mt-2 font-semibold">
                                Dive into React, including React Router, hooks, context API, Tanstack query, Axios, payment method, and recharts for creating dynamic UIs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fourth Feature Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]">
                    <div className="flex items-start w-full">
                        <img
                            src="https://web.programming-hero.com/static/media/check-circle.b5956cb2.svg"
                            alt="Check Icon"
                            className="w-6 h-6"
                        />
                        <div className="ml-4 w-full">
                            <h3 className="text-green-400 font-semibold text-lg">Server-Side Skills</h3>
                            <p className="text-gray-300 mt-2 font-semibold">
                                Explore backend technologies like Firebase, Node.js, Express, and MongoDB. Learn to build secure APIs with JWT tokens.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fifth Feature Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]">
                    <div className="flex items-start w-full">
                        <img
                            src="https://web.programming-hero.com/static/media/check-circle.b5956cb2.svg"
                            alt="Check Icon"
                            className="w-6 h-6"
                        />
                        <div className="ml-4 w-full">
                            <h3 className="text-green-400 font-semibold text-lg">Practical Application</h3>
                            <p className="text-gray-300 mt-2 font-semibold">
                                Put theory into practice by working on over 45 projects throughout the course.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sixth Feature Card */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px]">
                    <div className="flex items-start w-full">
                        <img
                            src="https://web.programming-hero.com/static/media/check-circle.b5956cb2.svg"
                            alt="Check Icon"
                            className="w-6 h-6"
                        />
                        <div className="ml-4 w-full">
                            <h3 className="text-green-400 font-semibold text-lg">Engaging Learning Approach</h3>
                            <p className="text-gray-300 mt-2 font-semibold">
                                Benefit from a fun and interactive learning strategy developed by Programming Hero, refined through years of teaching experience, to help you complete the course successfully.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoundationCard;
