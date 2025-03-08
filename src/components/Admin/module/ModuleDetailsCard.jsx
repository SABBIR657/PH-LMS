/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Button, Spinner } from "@heroui/react";
import { Link } from "react-router-dom";
import GradientTitle from "../components/typography/GradientTitle";
import  Cookies  from "js-cookie";

const ModuleDetailsCard = ({ moduleDetails, isLoading, isSuccess }) => {
  const [quizData, setQuizData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMCQModalOpen, setIsAddMCQModalOpen] = useState(false);
  const [newMCQ, setNewMCQ] = useState({
    question: "",
    options: ["", ""],
    correctAns: 0,
    mark: 0,
  });
  

  const handleViewQuiz = async (quizId) => {
    try {
      const response = await axios.get(
        `https://ph-clone-alchemy.onrender.com/api/v1/questionPaper/getSingleQuestionPaper?qp_id=${quizId}`
      );
      setQuizData(response.data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  const handleAddMCQ = async () => {
    try {
      const response = await axios.patch(
        `https://ph-clone-alchemy.onrender.com/api/v1/questionPaper/addNewMCQ?qp_id=${quizData._id}`,
        newMCQ,
        {
          headers: {
            Authorization: `${Cookies.get("user")}`,
          },
        }
      );

      if (response.data.data.acknowledged) {
        // Update the MCQ set in the UI
        setQuizData((prev) => ({
          ...prev,
          MCQSet: [...prev.MCQSet, newMCQ],
        }));

        // Close the Add MCQ modal
        setIsAddMCQModalOpen(false);

        // Reset the newMCQ state
        setNewMCQ({
          question: "",
          options: ["", ""],
          correctAns: 0,
          mark: 0,
        });
      }
    } catch (error) {
      console.error("Error adding MCQ:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openAddMCQModal = () => {
    setIsAddMCQModalOpen(true);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newMCQ.options];
    updatedOptions[index] = value;
    setNewMCQ({ ...newMCQ, options: updatedOptions });
  };

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
          <GradientTitle title="Module Details" />

          {/* Module Header */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900">
                {moduleDetails.moduleName}
              </h2>
            </div>
          </div>

          {/* Module Details Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Module Description
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              This comprehensive bootcamp will teach you everything you need to
              know to become a full-stack web developer. We will cover HTML,
              CSS, JavaScript, Node.js, React, and much more. You&apos;ll work
              on real-world projects and have access to a community of
              developers.
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

          {/* Video Section */}
          <div className="mt-8">
            <p className="text-xl font-semibold text-gray-800">
              Total Videos: {moduleDetails.videoList.length}
            </p>
          </div>
          <div>
            quiz: {moduleDetails.quizId}
            <Button
              color="primary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
              onClick={() => handleViewQuiz(moduleDetails.quizId)}
            >
              View Quiz
            </Button>
          </div>

          {/* Optional: Add a button for further actions */}
          <div className="mt-8 text-center">
            <Link to="/modules">
              <Button
                color="primary"
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
              >
                View Videos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Quiz: {quizData.subject}</h2>
            <div className="space-y-4">
              {quizData.MCQSet.map((mcq, index) => (
                <div key={mcq._id} className="border p-4 rounded-lg">
                  <p className="font-semibold">
                    {index + 1}. {mcq.question}
                  </p>
                  <div className="mt-2 space-y-2">
                    {mcq.options.map((option, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center ${
                          idx === mcq.correctAns
                            ? "text-green-600 font-semibold"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`mcq-${index}`}
                          value={idx}
                          className="mr-2"
                        />
                        <label>{option}</label>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Mark: {mcq.mark}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right space-x-4">
              <Button
                color="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
                onClick={openAddMCQModal}
              >
                Add MCQ
              </Button>
              <Button
                color="primary"
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
                onClick={closeModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add MCQ Modal */}
      {isAddMCQModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Add New MCQ</h2>
      <div className="space-y-4">
        {/* Question Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Question
          </label>
          <input
            type="text"
            value={newMCQ.question}
            onChange={(e) =>
              setNewMCQ({ ...newMCQ, question: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Options Input */}
        {newMCQ.options.map((option, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">
              Option {index + 1}
            </label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        ))}

        {/* Add Option Button */}
        <div>
          <Button
            color="primary"
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-200"
            onClick={() =>
              setNewMCQ((prev) => ({
                ...prev,
                options: [...prev.options, ""], // Add a new empty option
              }))
            }
          >
            Add Option
          </Button>
        </div>

        {/* Correct Answer Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correct Answer (Index)
          </label>
          <input
            type="number"
            value={newMCQ.correctAns}
            onChange={(e) =>
              setNewMCQ({ ...newMCQ, correctAns: parseInt(e.target.value) })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Mark Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mark
          </label>
          <input
            type="number"
            value={newMCQ.mark}
            onChange={(e) =>
              setNewMCQ({ ...newMCQ, mark: parseInt(e.target.value) })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="mt-6 text-right space-x-4">
        <Button
          color="primary"
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          onClick={handleAddMCQ}
        >
          Save MCQ
        </Button>
        <Button
          color="primary"
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
          onClick={() => setIsAddMCQModalOpen(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ModuleDetailsCard;