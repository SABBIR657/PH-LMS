import React from "react";
import { useNavigate } from "react-router-dom";

const NotPermitted = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <div className="text-red-600 text-6xl mb-6">
          <i className="fas fa-ban"></i>{" "}
          {/* You can use a FontAwesome icon here */}
        </div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          You do not have permission to view this page.
        </p>
        <button
          onClick={goHome}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotPermitted;
