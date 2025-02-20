import React, { useState } from "react";
import Title from "../ReusedabaleComponenet/Title";

const VideoFrame = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div>
            <Title title="What you will learn_ from this course?" subtitle="Programming Hero's dynamic course guides students from MERN stack basics to complete mastery, ensuring a strong foundation. This comprehensive approach makes the learning journey smooth and engaging.
" />
            <div className="flex justify-around">
                <div class="w-auto bg-[#54241c] text-orange-600 py-2 px-6 rounded-md cursor-pointer">
                    HTML
                </div>
                <div class="w-auto bg-[#040c25] text-sky-700 py-2 px-6 rounded-md cursor-pointer ">
                    CSS
                </div>
                <div class="w-auto bg-[#091f35] text-orange-600 py-2 px-6 rounded-md cursor-pointer ">
                    Tailwind
                </div>
                <div class="w-auto bg-[#847c1c] text-[#dec71c] py-2 px-6 rounded-md cursor-pointer ">
                    JavaScript
                </div>
                <div class="w-auto bg-orange-400 text-orange-600 py-2 px-6 rounded-md cursor-pointer ">
                    React
                </div>
                <div class="w-auto bg-orange-400 text-orange-600 py-2 px-6 rounded-md cursor-pointer ">
                    Firebase
                </div>
                <div class="w-auto bg-orange-400 text-orange-600 py-2 px-6 rounded-md cursor-pointer ">
                    Node JS
                </div>
                <div class="w-auto bg-orange-400 text-orange-600 py-2 px-6 rounded-md cursor-pointer ">
                    Express JS
                </div>
                <div class="w-auto bg-orange-400 text-orange-600 py-2 px-6 rounded-md cursor-pointer ">
                    MongoDB
                </div>


            </div>
            <div className="relative h-auto flex justify-center mb-10">
                {/* Image with play icon */}
                <div className="relative">
                    <img
                        src="https://web.programming-hero.com/static/media/courseThumbnail.6c6380ce.jpg"
                        alt="Course Thumbnail"
                        className="lg:max-w-[1320px] lg:max-h-[559px] object-cover border-4 border-solid border-gray-300 rounded-2xl"
                    />



                    <button
                        onClick={handleOpenModal}
                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>

                {/* Modal for YouTube video */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="relative w-full h-full lg:w-[80%] lg:h-[80%]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/nNOQQGszHVA?autoplay=1"
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-0 right-0 p-4 text-white"
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>


    );
};

export default VideoFrame;
