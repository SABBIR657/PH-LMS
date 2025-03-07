import React from "react";
import Technologies from "./Technologies";

const AllBuildProjects = () => {
  return (
    <div>
      <div className="bg-gray-900 min-h-screen text-white p-8">
        <h1 className="text-5xl font-bold text-purple-300 text-center mb-8">
          Scribbles Cafe
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-lg flex text-black">
          <div className="w-2/3">
            <img
              src="https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fknowledge-cafe.png&w=1920&q=75"
              alt="Coding Setup"
              className="rounded-lg mb-4"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-purple-300 text-2xl font-semibold">
            What Will You Learn?
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            In this project, you will learn how to create JSON data, load that
            data, and show it on the UI. You can add blogs to the bookmark and
            select read as well. You can calculate the reading time and show it
            on the sidebar.
          </p>
        </div>
      </div>
      <Technologies />
    </div>
  );
};

export default AllBuildProjects;
