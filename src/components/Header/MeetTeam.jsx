import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "M Mahmud Hossain",
    position: "CS Instructor",
    image:
      "https://file.portal.gov.bd/files/sylhet.gov.bd/officer_list/d97aa06d_c39d_493c_8522_b524c1aa7db5/24b0a463a15dfd05ba80a3c7987351f1.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Software Engineer",
    image:
      "https://static01.nyt.com/images/2013/10/04/opinion/Anan-contributor/contributors-images-slide-1OZF-superJumbo.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "AI Researcher",
    image:
      "https://www.apcom.org/wp-content/uploads/2021/08/Tushar-Baidya-modified.png",
  },
  {
    id: 4,
    name: "Alice Johnson",
    position: "UX Designer",
    image:
      "https://png.pngitem.com/pimgs/s/507-5077806_transparent-women-professional-business-woman-transparent-background-hd.png",
  },
  {
    id: 5,
    name: "M Mahmud Hossain",
    position: "CS Instructor",
    image: "https://api.kyamch.org/asset/img/doctors/dr-abdullah-al-mamun.png",
  },
  {
    id: 6,
    name: "John Doe",
    position: "Software Engineer",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/ko382a80/shirt/n/1/t/46-efsnj13packof2-ruan-original-imag2msdgrgcfuup.jpeg?q=90&crop=false",
  },
  {
    id: 7,
    name: "Jane Smith",
    position: "AI Researcher",
    image:
      "https://i.pinimg.com/736x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg",
  },
  {
    id: 8,
    name: "Alice Johnson",
    position: "UX Designer",
    image:
      "https://png.pngitem.com/pimgs/s/507-5077806_transparent-women-professional-business-woman-transparent-background-hd.png",
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
