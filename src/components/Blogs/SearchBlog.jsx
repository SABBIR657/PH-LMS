import { SearchIcon } from "lucide-react"


const SearchBlog = () => {
    return (

        <div className=" p-5 rounded-lg pt-20 px-5 md:px-10 lg:px-20">
            {/* Search Bar */}
            <div className="max-w-[725px] mb-4 mx-auto ">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-4  px-10 bg-[#2B1B42] text-white rounded-xl outline-none placeholder-gray-400"
                />
                <SearchIcon className="relative -top-10 left-2.5 text-gray-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-center">
                {/* All Category */}
                <button className="px-4 py-2 bg-[(rgba(96, 71, 236, .8))] bg-[rgba(96,71,236,.8)] text-white rounded-full font-medium">
                    All <span className="ml-1 px-2 py-1 bg-[rgba(96,71,236,0.63)] rounded-full text-xs">52</span>
                </button>

                {/* Individual Categories */}
                {[
                    { name: "Resume", count: 1 },
                    { name: "Programming Career", count: 5 },
                    { name: "Software QA & Testing", count: 1 },
                    { name: "Web Development", count: 15 },
                    { name: "Programming", count: 25 },
                    { name: "CSS", count: 1 },
                    { name: "Machine Learning", count: 1 },
                    { name: "Git and Github", count: 1 },
                    { name: "C Programming", count: 2 },
                ].map((category, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-[#2B1B42] text-gray-300 rounded-full hover:bg-[#292339] transition"
                    >
                        {category.name}
                        <span className="px-2 py-1 bg-[#d2d2d2] text-black text-xs rounded-full">{category.count}</span>
                    </button>
                ))}
            </div>
        </div>


    )
}



export default SearchBlog;