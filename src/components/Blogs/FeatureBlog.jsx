import CommonWrapper from "../CommonWrapper";

const blogs = [
    {
        id: 1,
        category: "Web Development",
        image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1686368859721.jpg",
        title: "প্রোগ্রামিং হিরো জব প্লেসমেন্ট রিপোর্ট কার্ড মে ২০২২ - মে ২০২৩",
        description: "এই রিপোর্ট কার্ডে আমরা দেখবো, মে ২০২২ থেকে মে ২০২৩ পর্যন্ত প্রোগ্রামিং হিরোর শিক্ষার্থীরা কেমন পারফর্ম করেছে এবং কীভাবে তারা চাকরির বাজারে নিজেদের জায়গা করে নিয়েছে।",
    },
    {
        id: 2,
        category: "Web Development",
        image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669992976522.jpg",
        title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা কেমন? আর এর চাহিদা কি কমে যাবে?",
        description: "ওয়েব ডেভেলপমেন্ট কি ভবিষ্যতে টিকে থাকবে? নাকি এর চাহিদা কমে যাবে? এই ব্লগে আমরা ওয়েব ডেভেলপমেন্ট ইন্ডাস্ট্রির বর্তমান অবস্থা এবং ভবিষ্যৎ সম্ভাবনা নিয়ে আলোচনা করেছি।",
    },
    {
        id: 3,
        category: "Web Development",
        image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669700493261.png",
        title: "আমি একজন ওয়েব ডেভেলপার হতে চাই? কিভাবে শুরু করতে পারি?",
        description: "নতুনদের জন্য ওয়েব ডেভেলপমেন্ট শেখার সঠিক গাইডলাইন। কীভাবে শুরু করবেন, কোন স্কিল শেখা দরকার এবং কীভাবে চাকরির বাজারে প্রবেশ করবেন, তার বিস্তারিত দিকনির্দেশনা পাবেন এই ব্লগে।",
    },
];

const FeatureBlog = () => {
    return (
        <CommonWrapper>
            <section className="bg-[#0B0D19] py-10 px-5 md:px-10 lg:px-20">
                <h2 className="text-white text-lg md:text-xl font-semibold mb-6">
                    Featured Blogs
                </h2>
                <div className="grid grid-cols-[60%_40%] gap-x-4 relative">
                    <div className="relative rounded-xl cursor-pointer row-span-2 md:h-[320px] group overflow-hidden">
                        <div className="absolute top-4 left-4 bg-[#4e36b4] text-white px-3 py-1 rounded-lg text-sm md:text-base font-semibold z-10">
                            {blogs[0].category}
                        </div>
                        <img
                            src={blogs[0].image}
                            alt={blogs[0].title}
                            className="object-cover w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-lg md:text-xl font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                            {blogs[0].title}
                            <p className="text-gray-300 text-sm md:text-base font-normal mt-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {blogs[0].description}
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-[#4e36b4] bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-50"></div>
                    </div>

                    <div className="flex flex-col gap-10">
                        {blogs.slice(1, 3).map((blog) => (
                            <div
                                key={blog.id}
                                className="relative rounded-md cursor-pointer shadow-lg h-[120px] md:h-[140px] group overflow-hidden"
                            >
                                <div className="absolute top-4 left-4 bg-[#4e36b4] text-white px-3 py-1 rounded-lg text-sm md:text-base font-semibold z-10">
                                    {blog.category}
                                </div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-base md:text-lg font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                                    {blog.title}
                                    <p className="text-gray-300 text-xs md:text-sm font-normal mt-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        {blog.description}
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-[#4e36b4] bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-50"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </CommonWrapper>
    );
};

export default FeatureBlog;
