import Title from "../ReusedabaleComponenet/Title";
import "./CourseWork.css";

const CourseDetailsModule = () => {
    const modules = [
        "Module -1: Welcome Video",
        "Module 0: Orientation. How To Get Ready For This Course",
        "Module 1: Learn And Explore HTML",
        "Module 2: Learn And Explore CSS",
        "Module 3: Git, Source Control, GitHub And Hosting",
        "Module 4: JavaScript Basics",
        "Module 5: Advanced JavaScript",
        "Module 6: React Basics",
        "Module 7: Advanced React",
        "Module 8: Project Deployment & Optimization",
    ];

    return (
        <div className="min-h-screen flex justify-center items-center max-auto">
            <div className="w-[1400px]">
                <Title
                    title="Course Curriculum"
                    subtitle="Programming Hero's dynamic course guides students from MERN stack basics to complete mastery, ensuring a strong foundation. This comprehensive approach makes the learning journey smooth and engaging."
                />
                <div className="w-full mx-auto bg-[#0D0D0D] rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-white text-lg font-semibold">
                        Course Module
                    </div>

                    <div className="h-96 overflow-y-auto custom-scrollbar scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-900 text-gray-300 border-b border-gray-800 hover:bg-purple-700 transition ease-in-out duration-300 flex items-center space-x-4"
                            >
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                                    {index + 1}
                                </div>
                                <div className="text-sm font-medium">
                                    {module}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsModule;
