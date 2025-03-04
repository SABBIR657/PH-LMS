import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as Tooltip from "@radix-ui/react-tooltip";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import { Link } from "react-router-dom";

const employees = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
];

const Learn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(galleryRef.current, {
      x: "-150%",
      y: "+=20",
      duration: 100,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[1c1726px] overflow-hidden flex flex-col justify-center items-center">
      {/* Responsive Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
        what will you learn?_
      </h1>

      {/* Responsive Paragraph */}
      <p className="text-sm md:text-base lg:text-lg text-gray-400 text-center mb-6 px-4">
        কি নাই এই কোর্সে। ৮০+ মডিউল, ২৫+ প্রজেক্ট কোর্সে দেখানো হবে। ১২ টি
        এসাইনমেন্ট। আরো কত কি?
      </p>

      {/* Responsive Gallery */}
      <div className="relative w-full overflow-hidden">
        <div ref={galleryRef} className="flex w-full">
          {employees.concat(employees).map((emp, index) => (
            <div
              key={index}
              className="w-full sm:w-[500px] md:w-1/2 h-[500px] p-2 md:p-4 relative group cursor-pointer"
            >
              <Tooltip.Provider>
                <Tooltip.Root>
                  <div className="">
                    <div className="w-[250px] sm:w-[180px] lg:h-[270px] lg:w-[250px]">
                      <Tooltip.Trigger asChild>
                        <img
                          src={emp.image}
                          alt="Employee"
                          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </Tooltip.Trigger>
                    </div>
                  </div>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive SVG */}
      <div className="-mt-60 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4320 400"
          width="100%"
          height="300"
          className=""
        >
          <path
            d="M4320,100 C4100,50 3900,150 3700,100 C3500,50 3300,150 3100,100 C2900,50 2700,150 2500,100 C2300,50 2100,200 1900,100 C1700,50 1500,200 1300,100 C1100,50 900,200 700,100 C500,50 300,150 100,100 C-100,50 -300,150 -400,100 C-600,50 -800,200 -1000,100 C-1200,50 -1400,150 -1600,100 C-1800,50 -2000,150"
            fill="transparent"
            stroke="green"
            strokeWidth="5"
          >
            <animate
              attributeName="d"
              values="M4320,100 C4100,50 3900,150 3700,100 C3500,50 3300,150 3100,100 C2900,50 2700,150 2500,100 C2300,50 2100,200 1900,100 C1700,50 1500,200 1300,100 C1100,50 900,200 700,100 C500,50 300,150 100,100 C-100,50 -300,150 -400,100 C-600,50 -800,200 -1000,100 C-1200,50 -1400,150 -1600,100 C-1800,50 -2000,150;
                        M4320,150 C4100,100 3900,200 3700,150 C3500,100 3300,200 3100,150 C2900,100 2700,200 2500,150 C2300,100 2100,250 1900,150 C1700,100 1500,250 1300,150 C1100,100 900,250 700,150 C500,100 300,200 100,150 C-100,100 -300,200 -400,150 C-600,100 -800,250 -1000,150 C-1200,100 -1400,200 -1600,150 C-1800,100 -2000,200"
              dur="6s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M4320,300 C4100,250 3900,350 3700,300 C3500,250 3300,350 3100,300 C2900,250 2700,350 2500,300 C2300,250 2100,400 1900,300 C1700,250 1500,400 1300,300 C1100,250 900,400 700,300 C500,250 300,350 100,300 C-100,250 -300,350 -400,300 C-600,250 -800,400 -1000,300 C-1200,250 -1400,350 -1600,300 C-1800,250 -2000,350"
            fill="transparent"
            stroke="green"
            strokeWidth="5"
          >
            <animate
              attributeName="d"
              values="M4320,300 C4100,250 3900,350 3700,300 C3500,250 3300,350 3100,300 C2900,250 2700,350 2500,300 C2300,250 2100,400 1900,300 C1700,250 1500,400 1300,300 C1100,250 900,400 700,300 C500,250 300,350 100,300 C-100,250 -300,350 -400,300 C-600,250 -800,400 -1000,300 C-1200,250 -1400,350 -1600,300 C-1800,250 -2000,350"
              dur="6s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Responsive "Join Now" Button */}
      <div className="-mt-20 md:-mt-10">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg md:text-[24px] px-4 py-2 md:px-6 md:py-3 rounded font-semibold hover:from-[rgb(255, 55, 242)] hover:to-[rgb(64, 90, 255)] transition duration-300"
        >
          Join Now
        </button>
      </div>

      {/* Responsive Popup Modal */}
      {isOpen && (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50 overflow-y-auto">
          <div
            className="justify-center w-full p-4 md:p-8 rounded-2xl shadow-2xl max-w-md md:max-w-3xl relative transform scale-100 md:scale-105 transition-transform duration-300 hover:scale-105"
            style={{
              backdropFilter: "blur(24px)",
              background:
                "linear-gradient(90deg, rgba(232, 85, 222, 0.2) -0.19%, rgba(109, 15, 235, 0.2) 82.93%, rgba(84, 0, 238, 0.2) 100.2%)",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-red-500 text-2xl md:text-3xl font-semibold"
            >
              &times;
            </button>

            {/* Rocket Icon */}
            <div className="flex justify-center items-center mb-6 md:mb-12 mt-6 md:mt-10">
              <img
                src="https://web.programming-hero.com/home/icons/enroll-rocket.svg"
                alt="Rocket Icon"
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>

            <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-4 md:mb-6 leading-tight">
              ৬ মাসে একজন জুনিয়র ওয়েব ডেভেলপার হয়ে জব/ইন্টার্ন পাওয়ার চ্যালেঞ্জ
              নিতে চাইলে মাষ্ট এনরোল করে ফেলবে--
            </h2>
            <p className="text-sm md:text-base text-center text-white mb-4">
              গড়ে ৭০-৮০% স্টুডেন্ট কোর্স ফিনিশ করার ৩-৬ মাসের মধ্যে
              ইন্টার্ন/চাকরি পেয়ে যায়।
            </p>
            <hr />
            <div className="text-center mb-6 md:mb-10">
              <p className="text-base md:text-lg font-medium mb-2 md:mb-4 mt-2 md:mt-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                এনরোলমেন্ট শুরু: <span className="font-bold">১০ জুন, ২০২৫</span>
              </p>
              <p className="text-base md:text-lg font-medium bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                এনরোলমেন্ট শেষ: <span className="font-bold">২৪ জুন, ২০২৫</span>
              </p>
            </div>

            <div className="flex justify-center mt-auto mb-4 md:mb-8">
              <Link to="/signup">
                <button className="bg-gradient-to-r from-purple-800 to-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:from-purple-800 hover:to-purple-900 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
