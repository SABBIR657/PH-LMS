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
        start += 30;
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
    <div className="ml-[600px] flex flex-col items-center justify-center min-h-screen bg-[#060022] text-white">
      <h2 className="text-6xl font-bold mb-8 text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text leading-[1.167] text-right capitalize">
        Our <br /> Impact_
      </h2>

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg shadow-lg flex gap-8 h-[230px] justify-center items-center">
        <div className="text-center">
          <h3 className="text-5xl font-bold">{jobPlacements}+</h3>
          <p className="text-lg">
            Job placement <br /> worldwide
          </p>
        </div>
        <div className="border-l border-white h-16"></div>
        <div className="text-center">
          <h3 className="text-5xl font-bold">{connectedCompanies}+</h3>
          <p className="text-lg">
            Connected <br /> companies
          </p>
        </div>
        <div className="border-l border-white h-16"></div>
        <div className="text-center">
          <h3 className="text-5xl font-bold">{executives}+</h3>
          <p className="text-lg">
            Dedicated Job <br /> Placement Executives
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
