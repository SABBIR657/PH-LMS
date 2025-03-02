import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
    {
        id: 1,
        name: "M Mahmud Hossain",
        position: "CS Instructor",
        image: "https://file.portal.gov.bd/files/sylhet.gov.bd/officer_list/d97aa06d_c39d_493c_8522_b524c1aa7db5/24b0a463a15dfd05ba80a3c7987351f1.png",
        x: 110,
        y: 150,
    },
    {
        id: 2,
        name: "John Doe",
        position: "Software Engineer",
        image: "https://static01.nyt.com/images/2013/10/04/opinion/Anan-contributor/contributors-images-slide-1OZF-superJumbo.jpg",
        x: 200,
        y: 110,
    },
    {
        id: 3,
        name: "Jane Smith",
        position: "AI Researcher",
        image: "https://www.apcom.org/wp-content/uploads/2021/08/Tushar-Baidya-modified.png",
        x: 300,
        y: 150,
    },

    {
        id: 5,
        name: "M Mahmud Hossain",
        position: "CS Instructor",
        image: "https://api.kyamch.org/asset/img/doctors/dr-abdullah-al-mamun.png",
        x: 150,
        y: 250,
    },
    {
        id: 6,
        name: "John Doe",
        position: "Software Engineer",
        image: "https://rukminim2.flixcart.com/image/850/1000/ko382a80/shirt/n/1/t/46-efsnj13packof2-ruan-original-imag2msdgrgcfuup.jpeg?q=90&crop=false",
        x: 400,
        y: 250,
    },
    {
        id: 7,
        name: "Jane Smith",
        position: "AI Researcher",
        image: "https://i.pinimg.com/736x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg",
        x: 250,
        y: 250,
    },
    {
        id: 8,
        name: "Alice Johnson",
        position: "UX Designer",
        image: "https://png.pngitem.com/pimgs/s/507-5077806_transparent-women-professional-business-woman-transparent-background-hd.png",
        x: 400,
        y: 150,
    },
];

const MeetTeam = () => {
    const [positions, setPositions] = useState(teamMembers);

    useEffect(() => {
        const interval = setInterval(() => {
            setPositions((prevPositions) =>
                prevPositions.map((member) => ({
                    ...member,
                    x: member.x + (Math.random() * 50 - 25),
                    y: member.y + (Math.random() * 50 - 25),
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="mt-32">
                <h1 className="text-6xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
                    Meet Our Team
                </h1>
                <p className="text-lg text-gray-400  flex flex-col items-center justify-center mb-12 ">
                    Over 130 dedicated professionals drive our success through their expertise, collaboration, and innovation, ensuring we lead in our industry.
                </p>
            </div>

            <div className="text-white ml-96 -mt-40 relative w-full min-h-screen flex flex-col items-center justify-center">


                {positions.map((member) => (
                    <motion.div
                        key={member.id}
                        initial={{ x: member.x, y: member.y }}
                        animate={{ x: member.x, y: member.y }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute flex flex-col items-center mt-90 ml-20"
                        style={{
                            left: `${member.x}px`,
                            top: `${member.y}px`,
                            margin: "0 10px", // Reduced margin for closer images
                        }}
                    >
                        <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full border-2 border-cyan-400 cursor-pointer"
                            whileHover={{ scale: 1.2 }}
                        />
                        <motion.div
                            className="absolute bottom-14 bg-green-500 text-black text-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100"
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
