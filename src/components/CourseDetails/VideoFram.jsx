import React, { useState } from "react";
import Title from "../ReusedabaleComponenet/Title";
import CommonWrapper from "../CommonWrapper";

const VideoFrame = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <CommonWrapper>
            <div>
                <Title title="What you will learn_ from this course?
" />
                <div className="flex flex-wrap justify-around mb-16">
                    <div className="bg-[#54241c] text-orange-600 py-2 px-6 rounded-md cursor-pointer flex items-center justify-center mb-4 md:mb-0">
                        HTML
                    </div>

                    <div className="w-auto bg-[#040c25] text-sky-700 py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        CSS
                    </div>

                    <div className="w-auto bg-[#091f35] text-[#2e97d4] py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        Tailwind
                    </div>

                    <div className="w-auto bg-[#e1ec3b41] text-[#fcf049] py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        JavaScript
                    </div>

                    <div className="w-auto bg-[#091f35] text-[#65b0fa] py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        React
                    </div>

                    <div className="w-auto bg-[#54241c] text-orange-600 py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        Firebase
                    </div>

                    <div className="w-auto bg-[#1e863460] text-[#42c436] py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        Node JS
                    </div>

                    <div className="w-auto bg-[#e1ec3b41] text-[#fcf049] py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                        Express JS
                    </div>

                    <div className="w-auto bg-[#1e863460] text-[#42c436] py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
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
        </CommonWrapper>



    );
};

export default VideoFrame;
