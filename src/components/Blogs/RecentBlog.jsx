import { useState } from "react";
import { FaBackward, FaForward } from "react-icons/fa6";
import CommonWrapper from "../CommonWrapper";
import SearchBar from "./SearchBar";

export const blogs = [
  {
    id: 1,
    category: "Software QA & Testing ",
    title:
      "What To Do When There's a Bug in Production & How to Handel Production Bugs",
    description:
      "What To Do When There's a Bug in Production How to Handel Production Bugs: - Acknowledge the Issuecheck the stage server;- ch",
    author: "Jhankar Mahbub",
    date: "Dec 02, 2022",
    image:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1693318086202.png",
    tagColor: "bg-purple-600",
  },
  {
    id: 2,
    category: "Programming Career",
    title: "Your Dream Developer Job Can Be Within Your Reach.",
    description:
      "“𝐏𝐥𝐞𝐚𝐬𝐮𝐫𝐞 in the job puts professiona in the work .” -𝐀𝐫𝐢𝐬𝐭𝐨𝐭𝐥𝐞.Pleasure and passion for your work are importan",
    author: "Jhankar Mahbub",
    date: "Nov 29, 2022",
    image:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669676678947.png",
    tagColor: "bg-purple-600",
  },
  {
    id: 3,
    category: "Web Development",
    title: "ওয়েব ডেভেলপমেন্ট পরিচিতি যা কিছু জানা প্রয়োজন",
    description:
      "প্রোগ্রামিং হিরো জব প্লেসমেন্ট রিপোর্ট কার্ড:গত এক বছরে ( মে ২০২২ থেকে মে ২০২৩: যদিও মে ২০২৩ এর পোস্টার পাবলিশ হইছে জুন ৬, ২০২৩ এ)জব পোষ্টার পাবলিশ কর",
    author: "Rebeka Putul",
    date: "Nov 29, 2022",
    image:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669700493261.png",
    tagColor: "bg-yellow-500",
  },
  {
    id: 4,
    category: "Web Development",
    title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা কেমন?",
    description:
      "ওয়েব ডেভেলপমেন্টে তবুও ওয়েবের চাহিদা ক্রমাগত বাড়তেই থাকবে...",
    author: "Jhankar Mahbub",
    date: "Dec 02, 2022",
    image:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1693318086202.png",
    tagColor: "bg-purple-600",
  },
  {
    id: 5,
    category: "Web Development",
    title: "আমি একজন ওয়েব ডেভেলপার হতে চাই? কিভাবে শুরু করতে পারি?",
    description:
      "ওয়েব ডেভেলপমেন্ট শেখার পীচটা সেটিংয়ে আছে, শুরু করুন freeCodeCamp...",
    author: "Jhankar Mahbub",
    date: "Nov 29, 2022",
    image:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669676678947.png",
    tagColor: "bg-purple-600",
  },
  {
    id: 6,
    category: "Web Development",
    title: "ওয়েব ডেভেলপমেন্ট পরিচিতি যা কিছু জানা প্রয়োজন",
    description:
      "ওয়েব ডেভেলপমেন্ট কি? আমাদের প্রথমে জানতে হবে যে এটি আসলে কি...",
    author: "Rebeka Putul",
    date: "Nov 29, 2022",
    image:
      "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669700493261.png",
    tagColor: "bg-yellow-500",
  },
  // Your blog data here...
];

const RecentBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on the search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <CommonWrapper>
        <div className=" p-5 rounded-lg pt-20 px-5 md:px-10 lg:px-20">
          <div className="max-w-[725px] mb-4 mx-auto ">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {/* <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full py-4  px-10 bg-[#2B1B42] text-white rounded-xl outline-none placeholder-gray-400"
          />
          <SearchIcon className="relative -top-10 left-2.5 text-gray-400" /> */}
          </div>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-center">
            <button className="px-4 py-2 bg-[(rgba(96, 71, 236, .8))] bg-[rgba(96,71,236,.8)] text-white rounded-full font-medium">
              All{" "}
              <span className="ml-1 px-2 py-1 bg-[rgba(96,71,236,0.63)] rounded-full text-xs">
                52
              </span>
            </button>

            {[
              { name: "Resume", count: 1 },
              { name: "Programming Career", count: 1 },
              { name: "Software QA & Testing", count: 2 },
              { name: "Web Development", count: 1 },
              { name: "Programming", count: 15 },
              { name: "CSS", count: 25 },
              { name: "Machine Learning", count: 1 },
              { name: "Git and Github", count: 1 },
              { name: "C Programming", count: 5 },
            ].map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-[#2B1B42] text-gray-300 rounded-full hover:bg-[#292339] transition"
              >
                {category.name}
                <span className="px-2 py-1 bg-[#d2d2d2] text-black text-xs rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </CommonWrapper>
      <CommonWrapper>
        <div className="bg-[#0b0b13] py-20 px-5 md:px-10 lg:px-20">
          <h2 className="text-white text-lg md:text-xl font-semibold mb-6">
            Recent Blogs
          </h2>

          <div className=" mx-auto">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-[#2B1B42] rounded-xl shadow-lg overflow-hidden mx-auto cursor-pointer transition-transform duration-300 transform group hover:scale-105"
                  >
                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
                      />
                      {/* Tag */}
                      <div className="absolute top-3 left-3 bg-[rgba(96,71,236,0.6)] text-white text-xs md:text-sm px-4 py-2 rounded-full">
                        {blog.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 py-7">
                      <h3 className="text-white text-2xl font-semibold pb-4">
                        {blog.title}
                      </h3>
                      <p className="text-gray-400 text-lg pb-5">
                        {blog.description}
                      </p>

                      {/* Author & Date */}
                      <div className="flex justify-between items-center text-white text-md mt-4 border-t border-gray-700 pt-3">
                        <span>{blog.author}</span>
                        <span className="text-gray-400 font-medium text-[17px] leading-[180%]">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">
                  No blogs found matching your search.
                </p>
              )}
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
      </CommonWrapper>
    </div>
  );
};

export default RecentBlog;
