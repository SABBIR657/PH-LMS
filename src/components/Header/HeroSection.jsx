import WaveGrid from "./WaveGrid";
import { FaUserPlus } from "react-icons/fa";
import logo from "../../assets/logo.png";
import sun from "../../assets/sun1.png";

const HeroSection = () => {
  return (
    <div className="">
      <div
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${sun})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a051c] to-[#1a103c] opacity-50" />
        <div className="relative z-10 container mx-auto px-6 pt-32">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Hide image on small devices and show on medium+ devices */}
              <div className="hidden md:block">
                <img src={logo} alt="Logo" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="mt-40 text-[50px] md:text-[100px] font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent hover:animate-shake">
                  Let&apos;s Code
                  <br />
                  Your Career!
                </h1>
              </div>
            </div>

            <div
              className="fixed bottom-10 left-14 text-black p-4 rounded-lg shadow-lg"
              style={{
                background:
                  "linear-gradient(287.98deg, rgb(227, 251, 239) 68.02%, rgba(227, 251, 239, 0) 163.74%)",
              }}
            >
              <div className="flex m-2">
                <FaUserPlus className="mr-3 mb-2" />
                <p className="text-sm">
                  এনরোলমেন্ট শুরু:{" "}
                  <span className="text-base font-normal text-gray-700">
                    10th Jun, 2025
                  </span>
                </p>
              </div>

              <div className="flex m-2">
                <FaUserPlus className="mr-3 mb-2 " />
                <p className="text-sm mr-2">
                  এনরোলমেন্ট শেষ:{" "}
                  <span className="text-base font-normal text-gray-700">
                    24th Jun, 2025
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveGrid />
        <div
          className="fixed bottom-10 left-14 text-black p-4 rounded-lg shadow-lg"
          style={{
            background:
              "linear-gradient(287.98deg, rgb(227, 251, 239) 68.02%, rgba(227, 251, 239, 0) 163.74%)",
          }}
        >
          <div className="flex m-2">
            <FaUserPlus className="mr-3 mb-2" />
            <p className="text-sm">
              এনরোলমেন্ট শুরু:{" "}
              <span className="text-base font-normal text-gray-700">
                10th Jun, 2025
              </span>
            </p>
          </div>
          <div className="flex m-2">
            <FaUserPlus className="mr-3 mb-2 " />
            <p className="text-sm mr-2">
              এনরোলমেন্ট শেষ:{" "}
              <span className="text-base font-normal text-gray-700">
                24th Jun, 2025
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
