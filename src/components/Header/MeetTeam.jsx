import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import profile7 from "../../assets/profile7.png";
import profile8 from "../../assets/profile8.png";
import profile9 from "../../assets/profile9.png";

const teamMembers = [
  {
    id: 1,
    name: "Md S Arfin ",
    position: "Founder & CEO",
    image: profile1,
  },
  {
    id: 2,
    name: "Sabbir Rahman ",
    position: "Software Engineer",
    image: profile2,
  },
  {
    id: 3,
    name: "Sazzad Mahim",
    position: "AI Researcher",
    image: profile3,
  },
  {
    id: 4,
    name: "Habib Rifat",
    position: "UX Designer",
    image: profile4,
  },
  {
    id: 5,
    name: "Abdul Quedir",
    position: "CS Instructor",
    image: profile5,
  },
  {
    id: 6,
    name: "Jayed Bin Nazir",
    position: "Software Engineer",
    image: profile6,
  },
  {
    id: 7,
    name: "Md Sakib Mia",
    position: "AI Researcher",
    image: profile7,
  },
  {
    id: 8,
    name: "Md Munna Ahommed",
    position: "UX Designer",
    image: profile8,
  },
  {
    id: 8,
    name: "Engr Abdul Alim ",
    position: "UX Designer",
    image: profile9,
  },
];

const MeetTeam = () => {
  return (
    <div className="mt-20 mb-20 px-5">
      <h1 className="text-4xl md:text-6xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
        Meet Our Team
      </h1>
      <p className="text-lg text-gray-400 text-center mb-8 px-2">
        Over 130 dedicated professionals drive our success through their
        expertise, collaboration, and innovation, ensuring we lead in our
        industry.
      </p>

      {/* Responsive Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-cyan-400 cursor-pointer"
            />
            <motion.div
              className="absolute bottom-14 bg-green-500 text-black text-sm px-3 py-1 rounded-lg shadow-md opacity-0 hover:opacity-100"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              <strong>{member.name}</strong>
              <p className="text-xs">{member.position}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
