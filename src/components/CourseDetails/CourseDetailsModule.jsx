import Title from "../ReusedabaleComponenet/Title";
import "./CourseWork.css";

const CourseDetailsModule = () => {
    const modules = [
        "Module -1: Welcome Video",
        "Module 0: Orientation. How To Get Ready For This Course",
        "Module 1: Learn And Explore HTML",
        "Module 2: Learn And Explore CSS",
        "Module 3: Git, Source Control, GitHub And Hosting",
        "Module 4: More About HTML",
        "Module 5: Build A Beautiful Portfolio Website",
        "Module 6: Build Your Flower Shop Website",
        "Module 6.5: [Bonus] Pseudo Class, Elements, Position",
        "Module 7: Responsive Website Layout",
        "Module 8: More Responsive Layout and Responsive Portfolio",
        "Module 9: HTML CSS Only Landing Page - G3 Architects",
        "Module 10: Optimize Images, Icon and More CSS",
        "Module 11: Responsive Website Assignment",
        "Module 11.5: [Bonus] UI UX, Future Strategy About HTML, CSS",
        "Module 12: Introduction to Tailwind",
        "Module 13: Biker Zone with Daisy UI",
        "Module 14: Tea Landing Page with DaisyUI",
        "Module 15: Responsive Landing Page with Framework Assignment",
        "Module 15_5: HTML, CSS, Framework Bonus",
        "Module 16: Introduction to JavaScript",
        "Module 17: Fundamental Concepts Array and Conditionals",
        "Module 18: Loop and Practice Problems",
        "Module 19: Core Concepts, Functions and Objects",
        "Module 20: Apply JavaScript Concepts",
        "Module 21: JavaScript Simple Coding Problems",
        "Module 22: More JS Coding Problems",
        "Module 23: Assignment",
        "Module 23.5: Basic JavaScript Bonus Module",
        "Module 24: Tour of DOM (Document Object Model)",
        "Module 25: Event, addEventListener, Event Bubble",
        "Module 26: Simple Interactive Bank Website (Baap Er Bank)",
        "Module 27: Bank Calculation Using Functions (Advanced)",
        "Module 28: DOM Manipulation with Geometry Genius",
        "Module 29: Build Summer Sale Using DOM Manipulation",
        "Module 29.5: Integrate JavaScript Bonus Content",
        "Module 30: JS Recap and Basic ES6, ES5",
        "Module 31: (Advanced) More ES6",
        "Module 32: Understand Common JavaScript Concepts",
        "Module 33: API, JSON, Data Load, Dynamic Website",
        "Module 34: API Recap with Phone Hunter",
        "Module 35: More About JavaScript",
        "Module 36: ES6 and API Related Assignment",
        "Module 36.5: Browser Storage",
        "Module 36.6: [Optional] Browser & Debugging",
        "Module 36.7: [Optional] Introduction to Devtool",
        "Module 37: JavaScript You Need to Know for React",
        "Module 38: React Core Concept (Part 1)",
        "Module 39: React Core Concept (Part 2)",
        "Module 40: Simple React Rest Countries",
        "Module 41: Modules and Data Storage Integration",
        "Module 42: Simple React SPA with Knowledge Cafe",
        "Module 43: React SPA Assignment",
        "Module 43.5: Simple React Bonus",
        "Module 44: Tailwind CSS, Axios, Rechart, Awesome Components",
        "Module 45: React Router Concept",
        "Module 46: React Core Concept (Part 3)",
        "Module 47: CareerHub with Router",
        "Module 48: Assignment 8",
        "Module 48.5: Router Bonus",
        "Module 49: Simple React Firebase Authentication",
        "Module 50: Email Password Authentication, Login Form",
        "Module 51: React Auth Integration and Private Route",
        "Module 52: Build Dragon News Layout",
        "Module 52.5: Authentication with Dragon News",
        "Module 53: React Auth Assignment",
        "Module 53.5: NodeJS Bonus Content",
        "Module 54: Getting Started with Node, Express and API",
        "Module 55: Know More About Node JS, Express JS, MongoDB and CRUD Operation",
        "Module 56: CRUD with Espresso Emporium Using MongoDB",
        "Module 56.5: Authentication with Espresso Emporium, Deploy & Practice Task",
        "Module 57: Assignment 10",
        "Module 57.5: Bonus Module",
        "Module 58: CRUD Recap with Genius Car",
        "Module 59: Genius Car Node Mongo CRUD Recap",
        "Module 60: Introduction to JWT and Axios Interceptor",
        "Module 60.5: (Important) How to Create Unique Projects and Unique Profile",
        "Module 61: Recap JWT and Interceptor with Genius Car",
        "Module 62: Pagination and Load Data by Filter",
        "Module 63: CRUD with JWT Assignment",
        "Module 63.5: Indexing in MongoDB",
        "Module 64: Final Project Part-1",
        "Module 65: Final Project Part-2",
        "Module 66: Final Project Part-3",
        "Module 67: Final Project Part-4",
        "Module 68: Final Project Part-5",
        "Module 69: Final Project Part-6",
        "Module 70: Final Project Part-7",
        "Module 71: Final Project Part-8",
        "Module 72: The Final Effort",
        "Module 72.5: Email Sending (Bonus)",
        "Module 73: Fundamentals of Next.js",
        "Module 74: Next Level Data Fetching in Next.js",
        "Module 75: Build a News Portal Website Using Next.js",
        "Module 76: Interview Preparation and Get Ready to be Hired"
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
