import { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using axios for API calls
import Cookies from "js-cookie";

const Quiz = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData.MCQSet.length).fill(null) // Initialize with null values
  );
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [error, setError] = useState(null);

  const currentQuestion = quizData.MCQSet[currentQuestionIndex];

  const token = Cookies.get("user");
  const axiosInstance = axios.create({
    baseURL: "https://ph-clone-alchemy.onrender.com/api/v1", // Replace with your base URL
    headers: {
      Authorization: token, // Include the token in the header
    },
  });

  // Start Quiz API
  useEffect(() => {
    const startQuiz = async () => {
      try {
        const response = await axiosInstance.post(`/exam/start`, {
          startTime: Date.now().toString(),
          questionPaperId: quizData._id,
        });

        console.log("Quiz started:", response.data);
        setStartTime(Date.now());
      } catch (error) {
        console.error("Error starting quiz:", error);
      }
    };

    startQuiz();
  }, [quizData.questionPaperId, axiosInstance, quizData._id]);

  // Handle user answer selection
  const handleAnswerSelect = (selectedOptionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOptionIndex + 1; // Update the selected answer
    setUserAnswers(newAnswers);

    // Check if the selected answer is correct
    if (selectedOptionIndex === currentQuestion.correctAns) {
      setScore(score + 1);
    }
  };

  // Navigate to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.MCQSet.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Navigate to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Submit Quiz API
  const handleSubmitQuiz = async () => {
    try {
      const answerSheet = quizData.MCQSet.map((question, index) => ({
        mcqId: question.mcqId, // Use mcqId instead of _id
        answer: userAnswers[index], // Use the selected answer index (or null if not answered)
      }));

      const payload = {
        questionPaperId: quizData._id, // Use questionPaperId instead of _id
        isSubmitted: true,
        endTime: Date.now(), // Ensure endTime is a number
        answerSheet,
      };

      console.log("Payload being sent:", payload); // Debugging: Log the payload

      const response = await axiosInstance.post(`/exam/submit`, payload);

      console.log("Quiz submitted:", response.data);
      setIsQuizCompleted(true);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      setError(error)
    }
  };

  // Render quiz completion screen
  if (isQuizCompleted) {
    return (
      <div className="w-full h-[450px] bg-[#101544] rounded-xl text-white flex justify-center items-center">
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} out of {quizData.MCQSet.length}
          </p>
        </div>
      </div>
    );
  }
  if (error) {
    // console.log(error)
    return (
      <div className="w-full h-[450px] bg-[#101544] rounded-xl text-white flex justify-center items-center">
        <div>
          <h2>{error?.response?.data?.message}</h2>
          {/* <p>
            Your score: {score} out of {quizData.MCQSet.length}
          </p> */}
        </div>
      </div>
    );
  }
  

  //   console.log(quizData, "quizData from mahim in line 5555555555555");

  // Render the quiz questions
  return (
    <div className="w-full h-[450px] bg-[#101544] rounded-xl text-white p-4">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#CC44E1] to-[#700AEB] bg-clip-text text-transparent">{currentQuestion.question}</h2>
      <ul>
        {Array.isArray(currentQuestion.options) &&
          currentQuestion.options.map((option, index) => (
            <li key={index} className="mb-2">
              <button
                className={`w-full text-left px-4 py-4 rounded-xl ${
                  userAnswers[currentQuestionIndex] === index + 1
                    ? "bg-blue-500"
                    : "bg-[#160A2A]"
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </button>
            </li>
          ))}
      </ul>
      <div className="mt-4 flex gap-4">
        <button
          className="px-4 py-2 bg-gray-700 rounded"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        {currentQuestionIndex < quizData.MCQSet.length - 1 ? (
          <button
            className="px-4 py-2 bg-blue-500 rounded bg-gradient-to-r from-[#5344E1] to-[#CA0AEB]"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 rounded"
            onClick={handleSubmitQuiz}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
