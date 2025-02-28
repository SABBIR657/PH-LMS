import React from "react";
import { Button, Spinner } from "@heroui/react";
import { Link } from "react-router-dom";

const VideoDetailsCard = ({ videoDetails, isLoading, isSuccess }) => {
  console.log(videoDetails);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />;
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-grays-600 py-5 shadow-sm rounded-lg bg-gray-100 mb-4">
        Video Details
      </h1>
      <div className="max-w-4xl mx-auto p-6  shadow-md rounded-lg">
        {/* Course Header */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              {videoDetails?.videoName || ""}
            </h2>
            {/* <div className="mt-4 flex items-center justify-center md:justify-start">
              <span className="text-xl font-bold text-green-600">
                ${videoDetails.amount || 0}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                Duration: 12 weeks
              </span>
            </div> */}
          </div>
        </div>

        {/* Course Details Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Video Description
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            This comprehensive bootcamp will teach you everything you need to
            know to become a full-stack web developer. We will cover HTML, CSS,
            JavaScript, Node.js, React, and much more. You'll work on real-world
            projects and have access to a community of developers.
          </p>
        </div>

        {/* Instructor Section */}
        {/* <div className="mt-8 flex items-center">
          <div className="">
            <p className="text-lg font-semibold text-gray-800">
              Instructor: John Doe
            </p>
            <p className="text-sm text-gray-500">
              Experienced Web Developer & Instructor
            </p>
          </div>
        </div> */}

        {/* <div className="mt-8">
          <p className="text-lg font-semibold text-gray-800">
            Total Video: {videoDetails.videoList.length}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default VideoDetailsCard;
