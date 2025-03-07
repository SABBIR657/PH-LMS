import { Button } from "@heroui/react";
import { FaCircleArrowRight } from "react-icons/fa6";

import { useState } from "react";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Scribbles Cafe",
    image:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75",
  },
  {
    title: "Scribbles Cafe",
    image:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcareer-hub.png&w=256&q=75",
  },
  {
    title: "Scribbles Cafe",
    image:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fdragon-news.png&w=256&q=75",
  },
  {
    title: "Scribbles Cafe",
    image:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Femporium.png&w=256&q=75",
  },
  {
    title: "Scribbles Cafe",
    image:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fcar-doctor.png&w=256&q=75",
  },
  {
    title: "Scribbles Cafe",
    image:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fboss-restaurant.png&w=256&q=75",
  },
];

const ProjectBuild = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-64  md:mb-52 lg:mb-44 xl:mb-22">
        <h1 className="text-6xl font-semibold text-center mb-4 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
          Projects you will build
        </h1>

        <div className="min-h-screen mt-10 flex items-center justify-center bg-[#060022] p-10 -mb-56">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-screen-xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-[#1b0e3f] text-white p-6 rounded-2xl shadow-lg w-full max-w-[628px] h-[174px] group"
              >
                <div className="absolute inset-0 flex items-center justify-center ml-[400px] mt-4">
                  <button onClick={() => navigate("/all-build-projects")}>
                    <FaCircleArrowRight className="w-10 h-10 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
                <div className="flex justify-center items-start w-full">
                  <div className="ml-4 w-full mt-12">
                    <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <img
                    src={feature.image}
                    alt="Check Icon"
                    className="w-[164px] -mt-4 h-[154px] rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Button
          onClick={() => navigate("/all-project")}
          className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition"
        >
          All Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectBuild;
