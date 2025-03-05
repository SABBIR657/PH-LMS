import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.png";
import image5 from "../../assets/img4.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "একটা কম্প্লিট জার্নি",
    description:
      "এই কোর্স এবং কোর্সের লাইভ প্রসেস ফলো করে যদি কেউ ওয়েব ডেভেলপার না হতে পারে, তাহলে দুনিয়ার আর কেউ তাকে ওয়েব ডেভেলপার বানাতে পারবে না।",
    bgColor: "bg-blue-950",
    img: image1,
  },
  {
    id: 2,
    title: "চাকরি/ইন্টার্ন গ্যারান্টি?",
    description:
      "তুমি প্রতিদিন ৬-৮ ঘণ্টা সময় দিয়ে আমাদের মেন্টর লাইন কোর্স আর SCIC ফিনিশ করে এবং প্রজেক্টের থিমের সাথে চেষ্টা চালিয়ে যাবার গ্যারান্টি দিলে আমরা তোমাকে জব/ইন্টার্ন পাওয়ার গ্যারান্টি দিবো।",
    bgColor: "bg-green-500",
    img: image2,
  },
  {
    id: 3,
    title: "চাকরি/ইন্টার্ন গ্যারান্টি?",
    description:
      "তুমি প্রতিদিন ৬-৮ ঘণ্টা সময় দিয়ে আমাদের মেন্টর লাইন কোর্স আর SCIC ফিনিশ করে এবং প্রজেক্টের থিমের সাথে চেষ্টা চালিয়ে যাবার গ্যারান্টি দিলে আমরা তোমাকে জব/ইন্টার্ন পাওয়ার গ্যারান্টি দিবো।",
    bgColor: "bg-purple-900",
    img: image3,
  },
  {
    id: 4,
    title: "চাকরি/ইন্টার্ন গ্যারান্টি?",
    description:
      "তুমি প্রতিদিন ৬-৮ ঘণ্টা সময় দিয়ে আমাদের মেন্টর লাইন কোর্স আর SCIC ফিনিশ করে এবং প্রজেক্টের থিমের সাথে চেষ্টা চালিয়ে যাবার গ্যারান্টি দিলে আমরা তোমাকে জব/ইন্টার্ন পাওয়ার গ্যারান্টি দিবো।",
    bgColor: "bg-yellow-500",
    img: image4,
  },
  {
    id: 5,
    title: "চাকরি/ইন্টার্ন গ্যারান্টি?",
    description:
      "তুমি প্রতিদিন ৬-৮ ঘণ্টা সময় দিয়ে আমাদের মেন্টর লাইন কোর্স আর SCIC ফিনিশ করে এবং প্রজেক্টের থিমের সাথে চেষ্টা চালিয়ে যাবার গ্যারান্টি দিলে আমরা তোমাকে জব/ইন্টার্ন পাওয়ার গ্যারান্টি দিবো।",
    bgColor: "bg-purple-900",
    img: image5,
  },
];

const XFactor = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.children;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
        scale: 0.966922,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      }
    );

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "bottom top",
      onEnter: () => {
        console.log("Next component visible now!");
      },
    });
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
        X-Factors of <br /> Programming Hero
      </h1>
      <div className="flex justify-center items-center">
        <div
          ref={containerRef}
          className="w-full sm:w-[900px] flex flex-col items-center gap-6"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-full sm:w-[85%] h-[350px] sm:h-[400px] relative rounded-xl text-white flex items-center overflow-hidden ${card.bgColor}`}
            >
              <p className="absolute top-2 left-2 text-sm font-bold px-6 py-4 rounded-md bg-opacity-70 backdrop-blur-md">
                {card.title}
              </p>
              <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold sm:text-3xl">{card.title}</h2>
                <p className="mt-2 sm:text-lg">{card.description}</p>
              </div>
              <img
                src={card.img}
                alt="icon"
                className="w-[350px] h-[350px] rounded-tr-2xl rounded-br-2xl mx-auto hidden sm:block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XFactor;
