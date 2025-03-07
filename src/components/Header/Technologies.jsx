import React from "react";

const technologies = [
  {
    name: "React",
    description:
      "Move on to JavaScript, covering DOM manipulation, API integration, ES6 features, debugging, and using developer tools.",
    img: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
  },
  {
    name: "React Router",
    description:
      "Move on to JavaScript, covering DOM manipulation, API integration, ES6 features, debugging, and using developer tools.",
    img: "https://cdn.worldvectorlogo.com/logos/react-router.svg",
  },
  {
    name: "Redux Toolkit",
    description:
      "Master state management with Redux Toolkit, covering store setup, reducers, actions, and middleware integration.",
    img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    name: "Tailwind CSS",
    description:
      "Learn to style applications efficiently using utility-first CSS with Tailwind for modern UI design.",
    img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
];

const Technologies = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 bg-gray-950 text-white">
      <h1 className="text-3xl md:text-4xl text-purple-400 font-bold text-center mb-8">
        Technologies Covered
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <img src={tech.img} alt={tech.name} className="w-16 h-16" />
            <h3 className="text-2xl font-semibold mt-4">{tech.name}</h3>
            <p className="text-gray-300 mt-2 font-medium text-sm md:text-base">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
