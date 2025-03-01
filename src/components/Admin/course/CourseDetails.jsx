/* eslint-disable react/prop-types */

import { Button, Spinner } from "@heroui/react";
import { Link } from "react-router-dom";

const CourseDetails = ({ courseDetails, isLoading, isSuccess }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden mt-28">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Course Details
          </h1>

          {/* Course Header */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900">
                {courseDetails.courseName}
              </h2>
              <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
                <span className="text-2xl font-bold text-green-600">
                  ${courseDetails.amount || 0}
                </span>
                <span className="text-lg text-gray-500">
                  Duration: 12 weeks
                </span>
              </div>
            </div>
          </div>

          {/* Course Details Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Course Description
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              This comprehensive bootcamp will teach you everything you need to
              know to become a full-stack web developer. We will cover HTML, CSS,
              JavaScript, Node.js, React, and much more. You&apos;ll work on
              real-world projects and have access to a community of developers.
            </p>
          </div>

          {/* Instructor Section */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Instructor"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  Instructor: John Doe
                </p>
                <p className="text-sm text-gray-500">
                  Experienced Web Developer & Instructor
                </p>
              </div>
            </div>
          </div>

          {/* Milestone Section */}
          <div className="mt-8">
            <p className="text-xl font-semibold text-gray-800">
              Total Milestones: {courseDetails.milestoneList.length}
            </p>
          </div>

          {/* Enroll Button */}
          <div className="mt-8 text-center">
            <Link to="/enroll">
              <Button
                color="primary"
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
              >
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;