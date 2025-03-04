import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as Tooltip from "@radix-ui/react-tooltip";

const employees = [
  {
    name: "MD HASIBUL HASAN",
    position: "Software Engineer",
    batch: "BATCH-6",
    company: "EWS",
    image: "https://freepngimg.com/save/22654-man/594x600",
    companyLogo:
      "https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Web Developer",
    batch: "BATCH-6",
    company: "Jira Company",
    image:
      "https://img.freepik.com/free-photo/happiness-courageous-pretty-male-tailor_1304-961.jpg?t=st=1740808132~exp=1740811732~hmac=bbcfc9a80353e907e5d10c556bfa443bb92d97c5b8c12c620292506c074d9cb3&w=996",
    companyLogo:
      "https://e7.pngegg.com/pngimages/149/630/png-clipart-jira-software-full-logo-tech-companies-thumbnail.png",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Jr Software Engineer",
    batch: "BATCH-6",
    company: "Vivasoft",
    image:
      "https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20297.jpg?t=st=1740808162~exp=1740811762~hmac=0b19f3e019e56fcd5094e3d320ed93fbf66705d67e0399a0141d056447134aff&w=996",
    companyLogo:
      "https://cdn.vivasoftltd.com/wp-content/uploads/2024/03/Logo-1.svg",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Web Developer",
    batch: "BATCH-6",
    company: "brainstation-23 ",
    image:
      "https://img.freepik.com/free-photo/charming-guy-enjoying-his-break-garden_23-2147562344.jpg?t=st=1740808215~exp=1740811815~hmac=5d730cb5987986ec9e553fc666fdec44ec048e4c635acd1394ed4f315113a2a3&w=1060",
    companyLogo:
      "https://brainstation-23.com/wp-content/uploads/2024/08/bs23_logo.png",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Software Engineer",
    batch: "BATCH-6",
    company: "Enosis",
    image:
      "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
    companyLogo:
      "https://www.enosisbd.com/wp-content/uploads/2020/07/enosis-logo.png",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Web Developer",
    batch: "BATCH-6",
    company: "TIger IT",
    image:
      "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg",
    companyLogo: "https://www.tigerit.com/img/ti-logo.png",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Jr Software Engineer",
    batch: "BATCH-6",
    company: "Cefalo",
    image:
      "https://i.pinimg.com/236x/1a/e4/a9/1ae4a97002850532f48e61cb35e0da02.jpg",
    companyLogo: "https://www.cefalo.com/hubfs/logo/white-logo.svg",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Web Developer",
    batch: "BATCH-6",
    company: "LEAD Ltd",
    image: "https://freepngimg.com/save/22654-man/594x600",
    companyLogo:
      "https://leads.com.bd/wp-content/uploads/2022/02/LEADS-1-150x29.png",
  },
  {
    name: "MD HASIBUL HASAN",
    position: "Web Developer",
    batch: "BATCH-6",
    company: "Pridesys",
    image: "https://freepngimg.com/save/22654-man/594x600",
    companyLogo:
      "https://pridesys.com/wp-content/uploads/2024/08/Pridesys-It-Ltd.svg",
  },

  {
    name: "MD HASIBUL HASAN",
    position: "Web Developer",
    batch: "BATCH-6",
    company: "BJIT",
    image: "https://freepngimg.com/save/22654-man/594x600",
    companyLogo: "https://bjitgroup.com/static/svg/common/bjit-logo2.svg",
  },
];

const TopCompanies = () => {
  const galleryRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <div>
      <div className="relative w-full min-h-screen bg-[#060022] overflow-hidden flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
          Heroes In Top Companies
        </h1>

        <p className="text-gray-400 text-center mb-6">
          যারা মেইন কোর্স এবং SCIC অনটাইমে ভালোভাবে ফিনিশ করে তাদের ৭০-৮০%
          স্টুডেন্ট কোর্স ফিনিশ করার <br /> ৩-৬ মাসের মধ্যে ইন্টার্ন/চাকরি পেয়ে
          যায়।
        </p>

        <div className="relative w-[1200px] flex justify-center items-center overflow-hidden">
          <div
            ref={galleryRef}
            className="flex flex-nowrap w-max"
            style={{ display: "flex" }}
          >
            {/* Loop through employee images */}
            {employees.concat(employees).map((emp, index) => (
              <div
                key={index}
                className="w-1/4 p-4 relative group cursor-pointer"
              >
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <div className="">
                      <div className="w-[200px] relative group">
                        <Tooltip.Trigger asChild>
                          <img
                            src={emp.image}
                            alt={emp.name}
                            className="w-full h-36 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                          />
                        </Tooltip.Trigger>
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center text-2xl p-1">
                          {emp.company}
                        </h1>
                      </div>

                      <div className="w-[200px] relative group">
                        <Tooltip.Trigger asChild>
                          <img
                            src={emp.image}
                            alt={emp.name}
                            className="w-full h-36 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                          />
                        </Tooltip.Trigger>
                        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center text-2xl p-1">
                          {emp.company}
                        </h1>
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
                            <p className="text-sm text-gray-300">
                              {emp.position}
                            </p>
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
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[18px] px-8 py-4 rounded font-semibold hover:from-[rgb(255, 55, 242)] hover:to-[rgb(64, 90, 255)] transition duration-300"
          >
            See Your Picture Here
          </button>
        </div>
      </div>
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed top-44 inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50">
          <div
            className="justify-center w-full p-8 rounded-2xl shadow-2xl max-w-3xl relative transform scale-105 transition-transform duration-300 hover:scale-110"
            style={{
              backdropFilter: "blur(24px)",
              background:
                "linear-gradient(90deg, rgba(232, 85, 222, 0.2) -0.19%, rgba(109, 15, 235, 0.2) 82.93%, rgba(84, 0, 238, 0.2) 100.2%)",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-red-500 text-3xl font-semibold"
            >
              &times;
            </button>

            {/* Rocket Icon placed at top center */}
            <div className="flex justify-center items-center mb-12 mt-10">
              <img
                src="https://web.programming-hero.com/home/icons/enroll-rocket.svg"
                alt="Rocket Icon"
                className="w-16 h-16" // Adjust size as needed (64x64)
              />
            </div>

            <h2 className="text-3xl font-bold text-center text-white mb-6 leading-tight mr-8">
              ৬ মাসে একজন জুনিয়র ওয়েব ডেভেলপার হয়ে জব/ইন্টার্ন পাওয়ার চ্যালেঞ্জ
              নিতে চাইলে মাষ্ট এনরোল করে ফেলবে--
            </h2>
            <p className="text-center text-white mb-4">
              গড়ে ৭০-৮০% স্টুডেন্ট কোর্স ফিনিশ করার ৩-৬ মাসের মধ্যে
              ইন্টার্ন/চাকরি পেয়ে যায়।
            </p>
            <hr />
            <div className="text-center mb-10">
              <p className="text-lg font-medium mb-4 mt-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                এনরোলমেন্ট শুরু: <span className="font-bold">১০ জুন, ২০২৫</span>
              </p>
              <p className="text-lg font-medium bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                এনরোলমেন্ট শেষ: <span className="font-bold">২৪ জুন, ২০২৫</span>
              </p>
            </div>

            <div className="flex justify-center mt-auto mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-purple-800 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-800 hover:to-purple-900 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopCompanies;
