import { Accordion, AccordionItem } from "@heroui/react";
import { useEffect, useState } from "react";
import Video from "./Video";
import { addPlaylist } from "../../redux/new store/playlistSlice";
import { useDispatch } from "react-redux";
import useFetchQuery from "../../hooks/shared/useFetch";

const Module = ({ module, setVideoSrc, setCurrentVideoIndex }) => {
  const dispatch = useDispatch();
  const moduleId = module?._id;
  //   console.log(module, "module from maaaaaaahiiiiiiim in line 5");
  const [video, setVideo] = useState([]);

  // useEffect(() => {
  //   const fetchModule = async () => {
  //     try {
  //       const response = await fetch(
  //         `${
  //           import.meta.env.VITE_BACKEND_URL
  //         }/module/allVideosByModuleId/${moduleId}`
  //       );
  //       const data = await response.json();
  //       // console.log(data, "data in fetchModule in line 16");
  //       setVideo(data.data);
  //     } catch (error) {
  //       console.error("Error fetching courses: ", error);
  //     }
  //   };

  //   fetchModule();
  // }, [moduleId]);

  const response = useFetchQuery(`module/allVideosByModuleId/${moduleId}`);

  useEffect(() => {
    if (response.isSuccess) {
      setVideo(response?.data?.data);
    }
  }, [response]);

  useEffect(() => {
    if (video?.videoList?.length) {
      console.log("video has come", video?.videoList?.length);
      dispatch(addPlaylist(video?.videoList));
    }
  }, [video]);

  // console.log(video, "video from maaaaaaahiiiiiiim in line 27");

  // console.log(module, "single module from module component");

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
            setCurrentVideoIndex={setCurrentVideoIndex}
            mainIndex={index}
          />
        ))}
    </div>
  );
};

export default Module;
