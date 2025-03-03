import { Button } from "@heroui/react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Build a Stunningly Simple Developer Portfolio Website (HTML & CSS Only!) This website clarifies the purpose (building a portfolio website) and emphasizes simplicity (using only HTML and CSS).",
    imageUrl:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fportfolio.png&w=1920&q=75",
    learnMoreLink: "#",
  },
  {
    id: 2,
    title: "Bike Dekho",
    description:
      "Build a Responsive Website with Tailwind and DaisyUI. You will use daisyUI built-in Components, Utilities, and Layout. You Will Experience The Productivity That A Css Framework Can Provide.",
    imageUrl:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fbike-dekho.png&w=1920&q=75",
    learnMoreLink: "#",
  },
  {
    id: 3,
    title: "Tea House",
    description:
      "Build a Responsive Website with Tailwind and DaisyUI. You will use daisyUI built-in Components, Utilities, and Layout. You Will Experience The Productivity That A Css Framework Can Provide.",
    imageUrl:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Ftea-house.png&w=1920&q=75",
    learnMoreLink: "#",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "Create a modern e-commerce platform with advanced features like product management, cart functionality, and payment processing.",
    imageUrl:
      "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fprojects%2Fportfolio.png&w=1920&q=75",
    learnMoreLink: "#",
  },
];

const AllProjects = () => {
  return (
    <div className="mt-20 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-indigo-200 to-purple-200">
        Projects You Will Build
      </h1>

      <p className="text-sm md:text-lg text-gray-400 text-center mb-10 px-2">
        Imagine building 45 projects in this course. At least 20 projects will
        be in the content, 15+ in the conceptual session, and 10+ practice
        projects.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#071828] rounded-xl border shadow-lg overflow-hidden p-6"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-6 pt-4">
                <h2 className="text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-indigo-200 to-purple-200 font-semibold mb-4">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-indigo-200 to-purple-200 mb-6">
                  {project.description}
                </p>
                <Button
                  onClick={() => (window.location.href = project.learnMoreLink)}
                  color="primary"
                  variant="bordered"
                  className="text-[#68dda8] border-[#68dda8] w-full md:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
