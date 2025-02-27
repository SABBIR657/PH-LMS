
import CommonContainer from "../../common/CommonContainer";
import { FaBackward, FaForward } from "react-icons/fa6";

export const blogs = [
    {
        id: 1,
        category: "Web Development",
        title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা কেমন?",
        description:
            "ওয়েব ডেভেলপমেন্টে তবুও ওয়েবের চাহিদা ক্রমাগত বাড়তেই থাকবে...",
        author: "Jhankar Mahbub",
        date: "Dec 02, 2022",
        image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1693318086202.png",
        tagColor: "bg-purple-600",
    },
    {
        id: 2,
        category: "Web Development",
        title: "আমি একজন ওয়েব ডেভেলপার হতে চাই? কিভাবে শুরু করতে পারি?",
        description:
            "ওয়েব ডেভেলপমেন্ট শেখার পীচটা সেটিংয়ে আছে, শুরু করুন freeCodeCamp...",
        author: "Jhankar Mahbub",
        date: "Nov 29, 2022",
        image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669676678947.png",
        tagColor: "bg-purple-600",
    },
    {
        id: 3,
        category: "Web Development",
        title: "ওয়েব ডেভেলপমেন্ট পরিচিতি যা কিছু জানা প্রয়োজন",
        description:
            "ওয়েব ডেভেলপমেন্ট কি? আমাদের প্রথমে জানতে হবে যে এটি আসলে কি...",
        author: "Rebeka Putul",
        date: "Nov 29, 2022",
        image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669700493261.png",
        tagColor: "bg-yellow-500",
    },
];


const RecentBlog = () => {
    return (

        <CommonContainer>
            <div className="bg-[#0b0b13] py-20 px-5 md:px-10 lg:px-20">
                <h2 className="text-white text-lg md:text-xl font-semibold mb-6">
                    Recent Blogs
                </h2>
                <div className=" mx-auto">
                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <div className="bg-[#2B1B42] rounded-xl shadow-lg overflow-hidden mx-auto cursor-pointer transition-transform duration-300 transform group hover:scale-105">
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={blog.image} // Replace with actual image URL
                                        alt="Your Dream Developer Job"
                                        className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
                                    />
                                    {/* Tag */}
                                    <div className="absolute top-3 left-3 bg-[rgba(96,71,236,0.6)] text-white text-xs md:text-sm px-4 py-2 rounded-full">
                                        {blog.category}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5 py-7">
                                    <h3 className="text-white text-2xl font-semibold pb-4">{blog.title}</h3>
                                    <p className="text-gray-400 text-lg pb-5">{blog.description}</p>

                                    {/* Author & Date */}
                                    <div className="flex justify-between items-center text-gray-500 text-md mt-4 border-t border-gray-700 pt-3">
                                        <span>Ahmad Tarique Hasan</span>
                                        <span className="text-gray-400">Aug 29, 2023</span>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        <button className="px-4 py-2 mx-1 bg-[#2B1B42] text-white rounded-md hover:bg-purple-600 transition">
                            <FaBackward />
                        </button>
                        <button className="px-4 py-2 mx-1 bg-[#2B1B42] text-white rounded-md hover:bg-purple-600 transition">
                            1
                        </button>
                        <button className="px-4 py-2 mx-1 bg-[#2B1B42] text-white rounded-md hover:bg-purple-600 transition">
                            2
                        </button>
                        <button className="px-4 py-2 mx-1 bg-[#2B1B42] text-white rounded-md hover:bg-purple-600 transition">
                            3
                        </button>
                        <button className="px-4 py-2 mx-1 bg-[#2B1B42] text-white rounded-md hover:bg-purple-600 transition">
                            <FaForward />
                        </button>
                    </div>
                </div>
            </div>
        </CommonContainer>

    )
}



export default RecentBlog;