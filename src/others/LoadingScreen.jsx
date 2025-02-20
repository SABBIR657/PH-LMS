// import { Spinner } from "@heroui/react";
import { Progress } from "@heroui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoaderScreen = () => {
  const [value, setValue] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 100 : v + 5));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariant}
      className="container mx-auto h-screen flex flex-col justify-center items-center gap-3"
    >
      {/* <Spinner color="#FFB457" /> */}

      <div to={"/"} className="flex items-center justify-center text-[80px]">
        
      </div>
      <Progress
        aria-label="Downloading..."
        size="sm"
        value={value}
        color="#FFB457"
        showValueLabel={true}
        className="max-w-sm"
      />
    </motion.div>
  );
};

export default LoaderScreen;


const containerVariant = {
  hidden: {
    opacity: 0,
  },
  exit: {
    x: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 80,
    },
  },
};