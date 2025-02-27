import { Accordion, AccordionItem } from "@heroui/react";
import { useEffect, useState } from "react";
import Video from "./Video";

const Module = ({ module, setVideoSrc }) => {
  const moduleId = module?._id;
  //   console.log(module, "module from maaaaaaahiiiiiiim in line 5");
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/module/allVideosByModuleId/${moduleId}`
        );
        const data = await response.json();
        // console.log(data, "data in fetchModule in line 16");
        setVideo(data.data);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchModule();
  }, [moduleId]);

  //   console.log(video, "video from maaaaaaahiiiiiiim in line 27");

  return (
    <div className="">
      {/* <Video /> */}

      {Array.isArray(video.videoList) &&
        video?.videoList?.map((video, index) => (
          <Video
            key={video?._id}
            video={video}
            setVideoSrc={setVideoSrc}
            className="mb-2"
            index={index + 1}
          />
        ))}
    </div>
  );
};

export default Module;
