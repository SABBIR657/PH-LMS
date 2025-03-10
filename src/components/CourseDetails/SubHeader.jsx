import logon11 from "../../assets/logon11.png";
import logon12 from "../../assets/logon22.png";

const SubHeader = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#140022] to-[#2b0142] text-center text-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        Breakthroughs Begin With Learning, Reach <br />
        For The Future You Deserve
      </h2>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
        Master MongoDB, Express, React, and Node.js to build efficient,
        full-stack web applications from scratch. Connect front-end and back-end
        seamlessly for a smooth user experience.
      </p>

      <div>
        {/* First image with up-down animation */}
        <img
          src={logon11}
          alt="HTML"
          className="absolute top-16 left-32 w-[55px] h-[55px] animate-up-down hidden lg:block"
        />

        {/* Other images */}
        <img
          src="https://web.programming-hero.com/assets/React-D9kjSCAT.svg"
          alt="React"
          className="absolute top-16 right-32 w-[55px] h-[55px] rounded-full shadow-lg animate-spin-slow hidden lg:block"
        />

        <img
          src={logon12}
          alt="Tailwind CSS"
          className="absolute bottom-16 right-44 w-[55px] h-[55px] rounded-full p-2 shadow-lg animate-up-down hidden lg:block"
        />
        <img
          src="https://web.programming-hero.com/assets/React-D9kjSCAT.svg"
          alt="React"
          className="absolute bottom-16 left-44 w-[55px] h-[55px] rounded-full shadow-lg animate-spin-slow hidden lg:block"
        />
      </div>

      {/* Custom Animation for the first image */}
      <style>
        {`
                    @keyframes up-down {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-16px); 
                        }
                    }

                    .animate-up-down {
                        animation: up-down 3s infinite ease-in-out; /* Slower animation (3s duration) */
                    }
                        @keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 4s linear infinite;
}

                `}
      </style>
    </div>
  );
};

export default SubHeader;
