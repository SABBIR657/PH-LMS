import { useState, useEffect } from "react";

const OurImpact = () => {
  const [jobPlacements, setJobPlacements] = useState(0);
  const [connectedCompanies, setConnectedCompanies] = useState(0);
  const [executives, setExecutives] = useState(0);

  useEffect(() => {
    const animateValue = (setter, target, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 10;
        setter(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue(setJobPlacements, 4300, 1500);
    animateValue(setConnectedCompanies, 2280, 1500);
    animateValue(setExecutives, 18, 1500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#060022] text-white py-4 px-4 mb-20 -mt-5 sm:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-center sm:text-right capitalize">
        Our <br className="hidden sm:block" /> Impact_
      </h2>

      {/* Stats Container */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center w-full max-w-4xl h-[250px]">
        {/* Job Placements */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
            {jobPlacements}+
          </h3>
          <p className="text-sm sm:text-base lg:text-lg">
            Job placement <br /> worldwide
          </p>
        </div>

        {/* Divider */}
        <div className="border-l border-white h-12 sm:h-16 hidden sm:block"></div>

        {/* Connected Companies */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {connectedCompanies}+
          </h3>
          <p className="text-sm sm:text-base lg:text-lg">
            Connected <br /> companies
          </p>
        </div>

        {/* Divider */}
        <div className="border-l border-white h-12 sm:h-16 hidden sm:block"></div>

        {/* Executives */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {executives}+
          </h3>
          <p className="text-sm sm:text-base lg:text-lg">
            Dedicated Job <br /> Placement Executives
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
