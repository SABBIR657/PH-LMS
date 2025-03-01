import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as Tooltip from "@radix-ui/react-tooltip";

const employees = [
    {
        name: "MD HASIBUL HASAN",
        position: "Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://img.freepik.com/free-photo/happiness-courageous-pretty-male-tailor_1304-961.jpg?t=st=1740808132~exp=1740811732~hmac=bbcfc9a80353e907e5d10c556bfa443bb92d97c5b8c12c620292506c074d9cb3&w=996",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Jr Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20297.jpg?t=st=1740808162~exp=1740811762~hmac=0b19f3e019e56fcd5094e3d320ed93fbf66705d67e0399a0141d056447134aff&w=996",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://img.freepik.com/free-photo/charming-guy-enjoying-his-break-garden_23-2147562344.jpg?t=st=1740808215~exp=1740811815~hmac=5d730cb5987986ec9e553fc666fdec44ec048e4c635acd1394ed4f315113a2a3&w=1060",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Jr Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://i.pinimg.com/236x/1a/e4/a9/1ae4a97002850532f48e61cb35e0da02.jpg",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009150531.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20250228%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250228T111352Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=187a14ce3b09f424266a660a8b58983ec5d06f80421f830a121f2f9b627208b7397cbfbd9b4031fccf58bed331eb30e5872448078c135920cb9f320a1f9c0f74744425648b93b11b3a31da3f8dd3910fcbc4fb3a166ca893c6c47ce8fe7ee88a7cfa8983e9f4806602f7eab8a52049a95c5defbb4088d9dbbeb19c33915a630dbec26a3a575aa2e90797a8a82ef5b49a6833fb381c49386d898dcd0bb68567152434666c458bb9fa9b2a9ad25c23de0529084d1a2cf1d1e3416eeea6dfd7b555b221ce06cd26121dbb3d2189c0c8dbf68830fe8839dfadc333190338237d4865e0992a63b53d2872e06882e83c6d64f96e16064ef5394ab7dde040cb646fbfcb",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009150745.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20250228%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250228T111352Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=9c319722bbb3de23998b8b0c71440f33fcc3f008af69157bf70fe52c11064f1bbd63ce6cacacc753b529a8bd51f78adbc422e901d9e48b0a4c5fa8eef48db1068acf90251b0dc34766d3071e3d4c35aa1cbcc971003a8ad397848e7186ecfd8fd03f420581e017b5bbd574c5853ce30acf39996e9b4b1aa91884b73db2616f417bed5a5ffbf6e81b22e0f437cf23bd4912fb035c7932ba0cb54b0bf67db0fd5666ad3d2a6ef02b2892ca3f125813b207a0b2754004272ca1f86af4831633f5e2b6b124a30ebff8e0dd011fee300ceab54f71d3fcd055c6c3d6920136fb61a1781082c87e60663522a422e52213217a562da9d04b928d37045c0133158cbe8ead",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Jr Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Jr Software Engineer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
    {
        name: "MD HASIBUL HASAN",
        position: "Web Developer",
        batch: "BATCH-6",
        company: "EWS",
        image: "https://freepngimg.com/save/22654-man/594x600",
        companyLogo: "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
    },
];

const TopCompanies = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(galleryRef.current, {
            x: "-90%", // Move the gallery completely to the left
            duration: 100, // Adjust the speed of the scroll
            ease: "linear",
            repeat: -3, // Continuous movement
        });
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex flex-col justify-center items-center">
            <h1 className="text-6xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                Heroes In Top Companies
            </h1>

            <p className="text-gray-400 text-center mb-6">
                যারা মেইন কোর্স এবং SCIC অনটাইমে ভালোভাবে ফিনিশ করে তাদের ৭০-৮০% স্টুডেন্ট কোর্স ফিনিশ করার <br /> ৩-৬ মাসের মধ্যে ইন্টার্ন/চাকরি পেয়ে যায়।
            </p>

            <div className="relative w-[1200px] flex justify-center items-center overflow-hidden">
                <div
                    ref={galleryRef}
                    className="flex flex-nowrap w-max"
                    style={{ display: "flex" }}
                >
                    {/* Loop through employee images */}
                    {employees.concat(employees).map((emp, index) => (
                        <div key={index} className="w-1/4 p-4 relative group cursor-pointer">
                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <div className="">
                                        <div className="w-[200px]">
                                            <Tooltip.Trigger asChild>
                                                <img
                                                    src={emp.image}
                                                    alt={emp.name}
                                                    className="w-full h-36 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </Tooltip.Trigger>
                                        </div>
                                        <div className="w-[200px]">
                                            <Tooltip.Trigger asChild>
                                                <img
                                                    src={emp.image}
                                                    alt={emp.name}
                                                    className="w-full h-36 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </Tooltip.Trigger>
                                        </div>
                                    </div>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            className="bg-gradient-to-br from-purple-800 to-blue-600 text-white p-4 rounded-lg shadow-xl text-sm max-w-xs w-full"
                                            side="top"
                                            align="center"
                                        >
                                            <div className="flex flex-col items-center space-y-3">
                                                <img
                                                    src={emp.companyLogo}
                                                    alt={emp.company}
                                                    className="w-16 h-16 rounded-full border-2 border-gray-600"
                                                />
                                                <div className="text-start">
                                                    <p className="font-semibold text-lg">{emp.name}</p>
                                                    <p className="text-sm text-gray-300">{emp.position}</p>
                                                    <p className="text-xs text-gray-400">{emp.batch}</p>
                                                </div>
                                            </div>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>

                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </div>
                    ))}
                </div>
            </div>

            {/* "See Your Picture" button */}
            <div className="mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[18px] px-8 py-4 rounded font-semibold hover:from-[rgb(255, 55, 242)] hover:to-[rgb(64, 90, 255)] transition duration-300">
                    See Your Picture Here
                </button>
            </div>
        </div>
    );
};

export default TopCompanies;
