import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@heroui/react";
import { X } from "lucide-react";

// Import StudentPopup if it's in a separate file
// import StudentPopup from "./StudentPopup"; 

const SuccessStudentList = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);

    const studentsData = {
        "Batch 9": [
            {
                name: "Md. Adnan Shafiq",
                role: "Support Engineer",
                company: "DORIK",
                story: "I don’t have an interesting story. But in short, the controlled and reward-based delivery system helped me a lot as I am a procrastinator. It pushed me to get things done. Thank you for the support.",
                image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1718429548468.jpg",
            },
            {
                name: "Md. Ashik Hassan Bhuljan",
                role: "Full Stack Developer",
                company: "EKSHOP (A21)",
                story: "Before starting the course, with the guidance of my friend who is a Senior...",
                image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1718429717885.jpg",
            },
            {
                name: "Jahid Hasan Rony",
                role: "Full Stack Developer",
                company: "BUSINESS AUTOMATION",
                story: "attrition figure only sets as value and flexibility, flexible, efficient...",
                image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1733663413358.png",
            },
            {
                name: "Al Amin",
                role: "Front End Developer",
                company: "SCOPIDE",
                story: "I want to express my heartfelt gratitude to Jhankar Mahbub Sir and the Prog...",
                image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1733667714119.png",
            },
            {
                name: "Tofayel Ahmed",
                role: "Junior Software Developer",
                company: "ANZA CORPORATION LTD",
                story: "After graduating from Daffodil International University, I found myself at ...",
                image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1733668310297.png",
            },
            {
                name: "Tofayel Ahmed",
                role: "Junior Software Developer",
                company: "ANZA CORPORATION LTD",
                story: "After graduating from Daffodil International University, I found myself at ...",
                image: "	https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1733679320258.jpg",
            },
            {
                name: "Tofayel Ahmed",
                role: "Junior Software Developer",
                company: "ANZA CORPORATION LTD",
                story: "After graduating from Daffodil International University, I found myself at ...",
                image: "	https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1718013608397.jpg",
            },
            {
                name: "Tofayel Ahmed",
                role: "Junior Software Developer",
                company: "ANZA CORPORATION LTD",
                story: "After graduating from Daffodil International University, I found myself at ...",
                image: "	https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1627885984709.jpg",
            },
        ],
    };

    return (
        <div className="p-6 font-sans">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Successful Students</h1>
                    <p className="text-white">
                        আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে <br />
                        তাদের মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো ।
                    </p>
                </div>

                <div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Batch Students" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>All Batch Students</SelectLabel>
                                <SelectItem value="all">All Batch Students</SelectItem>
                                <SelectItem value="batch2">Batch 2</SelectItem>
                                <SelectItem value="batch3">Batch 3</SelectItem>
                                <SelectItem value="batch4">Batch 4</SelectItem>
                                <SelectItem value="batch5">Batch 5</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {Object.entries(studentsData).map(([batch, students]) => (
                <div key={batch} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">{batch}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {students.map((student, index) => (
                            <StudentCard key={index} student={student} onSeeMore={() => setSelectedStudent(student)} />
                        ))}
                    </div>
                </div>
            ))}

            {selectedStudent && <StudentPopup student={selectedStudent} onClose={() => setSelectedStudent(null)} />}
        </div>
    );
};

const StudentCard = ({ student, onSeeMore }) => {
    return (
        <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex gap-4">
            <img
                src={student.image}
                alt={student.name}
                className="w-[171px] h-[150px] rounded-[12px] object-cover"
            />

            <div>
                <h4 className="text-[#8d79a5] font-bold text-[16px] uppercase tracking-[1px] mb-[10px] font-['Space_Grotesk','Hind_Siliguri',sans-serif]">
                    {student.company}
                </h4>

                <h3 className="text-[20px] font-bold text-[#eee0ff]">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.role}</p>
                <p className="text-sm text-gray-500">{student.story}</p>
                <button
                    onClick={onSeeMore}
                    className="mt-4 text-yellow-600 hover:text-blue-400 text-sm font-medium"
                >
                    See More
                </button>
            </div>
        </div>
    );
};

// StudentPopup Component (Fixed the missing definition)
const StudentPopup = ({ student, batch, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-black p-6 rounded-lg w-[600px] shadow-xl border border-purple-600">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-red-500 hover:text-gray-800 font-bold"
                >
                    <X size={30} />
                </button>


                {/* Content */}
                <Button className="w-auto bg-[#37da5a23] text-[#42c436] font-bold py-2 px-6 rounded-md cursor-pointer mb-4 md:mb-0">
                    Batch 9
                </Button>

                <h2 className="text-[22px] font-bold text-white mt-4">{student.name}</h2>
                <p className="text-gray-400 text-sm">{student.role}</p>
                <p className="mt-2 text-gray-400 leading-relaxed">{student.story}</p>
                <h4 className="text-purple-700 font-semibold text-[14px] uppercase tracking-wide mt-3">
                    {student.company}
                </h4>
            </div>
        </div>
    );
};

export default SuccessStudentList;
