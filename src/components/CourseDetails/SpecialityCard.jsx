import React from "react";
import Title from "../ReusedabaleComponenet/Title";
import courselogo1 from "../../assets/courselogo1.svg";
import courselogo2 from "../../assets/courselogo2.svg";
import courselogo3 from "../../assets/courselogo3.svg";
import courselogo4 from "../../assets/courselogo4.svg";
import courselogo5 from "../../assets/courselogo5.svg";
import courselogo6 from "../../assets/courselogo6.svg";

const features = [
  {
    icon: <img src={courselogo1} alt="Web Development" className="w-14 h-14" />,
    title: "Web Development Complete Course",
    description:
      "By watching a few videos, you will learn HTML, CSS and create two beautiful websites. And you can share those links with anyone.",
  },
  {
    icon: (
      <img src={courselogo2} alt="Unlimited Support" className="w-14 h-14" />
    ),
    title: "Unlimited Support",
    description:
      "Any questions you may have will be answered within 24 hours during the course (except holidays).",
  },
  {
    icon: (
      <img
        src={courselogo3}
        alt="Special Interview Preparation Group"
        className="w-8 h-8"
      />
    ),
    title: "Special Interview Preparation Group",
    description:
      "Those who will work daily. 6 to 8 hours will be given daily. Determine the course with passion and seriousness.",
  },
  {
    icon: (
      <img src={courselogo4} alt="Job Placement Coach" className="w-14 h-14" />
    ),
    title: "Job Placement Coach",
    description:
      "A couple of concepts to learn may not be clear to everyone at first glance. This is very normal about this.",
  },
  {
    icon: (
      <img
        src={courselogo5}
        alt="Live Conceptual Session"
        className="w-14 h-14"
      />
    ),
    title: "Live Conceptual Session",
    description:
      "A couple of concepts to learn may not be clear to everyone at first glance. This is very normal about this.",
  },
  {
    icon: (
      <img
        src={courselogo6}
        alt="Advance Crash Course (ACC)"
        className="w-14 h-14"
      />
    ),
    title: "Advance Crash Course (ACC)",
    description:
      "You're not just enrolling in a course at Programming Hero. Rather on a mission to learn lifelong web development.",
  },
  {
    icon: (
      <img
        src={courselogo3}
        alt="Live Conceptual Session"
        className="w-14 h-14"
      />
    ),
    title: "Option to watch offline videos",
    description:
      "You do not have broadband! Mobile data or buy MB to watch videos? Like int to watch the same video over and over again.",
  },
  {
    icon: (
      <img
        src={courselogo1}
        alt="Advance Crash Course (ACC)"
        className="w-14 h-14"
      />
    ),
    title: "International Job Placement",
    description:
      "In the era of globalization, why is your job placement target only Bangladesh? Rather that of the world..",
  },
];

const SpecialityCard = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[1400px] "
      style={{
        backgroundImage:
          "url('https://web.programming-hero.com/static/media/curve.cc103f94.png')",
        clipPath: "ellipse(200% 98% at 50% 0%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-b from-black to-purple-900 text-white py-16 px-6">
        <Title title="What Is The Specialty_ Of This Course?" />
        <div className="h-[600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1b0d3a] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-b from-pink-400 to-red-500 flex flex-col justify-between"
              style={{ minHeight: "300px" }}
            >
              <div className="flex items-center ">{feature.icon}</div>
              <h3 className="text-3xl mb-4  font-bold">{feature.title}</h3>

              <p className="text-gray-300 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
