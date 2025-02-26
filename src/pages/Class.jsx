import { useEffect, useState } from "react";
import { Lock, Unlock } from "lucide-react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import CommonWrapper from "../components/CommonWrapper";
import axios from "axios";

const Class = () => {
  const [milestones, setMilestones] = useState([]);
  const [modules, setModules] = useState([]);
  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [videoProgress, setVideoProgress] = useState([]);

  // **Fetch data from APIs**
  useEffect(() => {
    const fetchData = async () => {
      try {
        const milestoneResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/milestone/all-milestones`
        );
        const moduleResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/module/all-modules`
        );
        const videoResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/video/all-videos`
        );

        setMilestones(milestoneResponse?.data.data);
        setModules(moduleResponse?.data.data);
        setVideos(videoResponse?.data.data);

        // **Automatically unlock the first video and set it in the left div**
        const firstMilestone = milestoneResponse.data.data[0];
        if (firstMilestone) {
          const firstModuleId = firstMilestone.moduleList[0];
          const firstModule = moduleResponse.data.data.find(
            (mod) => mod._id === firstModuleId
          );
          if (firstModule) {
            const firstVideoId = firstModule.videoList[0];
            if (firstVideoId) {
              setCurrentVideoId(firstVideoId);
            }
          }
        }

        // **Initialize videoProgress** (first video unlocked, others locked)
        const initialProgress = milestoneResponse.data.data.map((milestone) =>
          milestone.moduleList.map((moduleId, moduleIndex) => {
            const module = moduleResponse.data.data.find(
              (mod) => mod._id === moduleId
            );
            if (!module || module.videoList.length === 0) return [];

            return module.videoList.map(
              (videoId, videoIndex) => videoIndex === 0
            );
          })
        );
        setVideoProgress(initialProgress);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // **Handle next video unlock**
  const handleNextVideo = () => {
    let milestoneIndex, moduleIndex, videoIndex;

    // Find the current video in the milestones and modules
    milestones.forEach((milestone, mIndex) => {
      milestone.moduleList.forEach((moduleId, modIndex) => {
        const module = modules.find((mod) => mod._id === moduleId);
        if (module && module.videoList.includes(currentVideoId)) {
          milestoneIndex = mIndex;
          moduleIndex = modIndex;
          videoIndex = module.videoList.indexOf(currentVideoId);
        }
      });
    });

    if (
      milestoneIndex === undefined ||
      moduleIndex === undefined ||
      videoIndex === undefined
    ) {
      return; // No valid video found
    }

    const currentModule = modules.find(
      (mod) => mod._id === milestones[milestoneIndex].moduleList[moduleIndex]
    );

    if (!currentModule) return;

    // Check if there's a next video in the same module
    if (videoIndex < currentModule.videoList.length - 1) {
      const nextVideoId = currentModule.videoList[videoIndex + 1];

      // Unlock the next video
      setVideoProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[milestoneIndex][moduleIndex][videoIndex + 1] = true;
        return newProgress;
      });

      // Update the current video ID to play the next video
      setCurrentVideoId(nextVideoId);
    }
  };

  // **Handle previous video navigation**
  const handlePreviousVideo = () => {
    const allVideos = videos.map((video) => video._id);
    const currentIndex = allVideos.indexOf(currentVideoId);
    if (currentIndex > 0) {
      setCurrentVideoId(allVideos[currentIndex - 1]);
    }
  };

  // **Render milestones with modules and videos**
  const renderMilestones = () => {
    return milestones.map((milestone, milestoneIndex) => (
      <AccordionItem
        key={milestone._id}
        title={milestone.milestoneName}
        className="mb-5 bg-[#160929] px-4 py-7 rounded-xl"
      >
        {/* **Render Modules (Always Visible, Not Locked)** */}
        {milestone.moduleList.map((moduleId, moduleIndex) => {
          const module = modules.find((mod) => mod._id === moduleId);
          if (!module) return null;

          return (
            <Accordion key={module._id}>
              <AccordionItem title={module.moduleName} className="mb-4">
                {/* **Render Videos (Locked by Default Except First One)** */}
                {module.videoList.map((videoId, videoIndex) => {
                  const video = videos.find((v) => v._id === videoId);
                  if (!video) return null;

                  const isDisabled =
                    !videoProgress[milestoneIndex]?.[moduleIndex]?.[videoIndex];

                  return (
                    <div
                      key={video._id}
                      className="flex items-center space-x-2 mb-4"
                    >
                      <button
                        onClick={() => setCurrentVideoId(video._id)}
                        disabled={isDisabled}
                        className={`w-full p-2 rounded-lg ${
                          !isDisabled ? "bg-blue-500" : "bg-gray-500"
                        } text-white`}
                      >
                        {video.videoName}
                      </button>
                      {isDisabled ? (
                        <Lock color="red" size={20} />
                      ) : (
                        <Unlock color="blue" size={20} />
                      )}
                    </div>
                  );
                })}
              </AccordionItem>
            </Accordion>
          );
        })}
      </AccordionItem>
    ));
  };

  return (
    <div>
      <CommonWrapper>
        <div className="flex p-4">
          {/* **Left Video Player** */}
          <div className="w-2/3 pr-4">
            {currentVideoId && (
              <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${
                  videos
                    .find((video) => video._id === currentVideoId)
                    ?.videoURL.split("v=")[1]
                    ?.split("&")[0]
                }`}
                title={
                  videos.find((video) => video._id === currentVideoId)
                    ?.videoName
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}

            <div className="mt-4 flex justify-between gap-4">
              <button
                className="px-6 py-2 bg-transparent border-hero-button text-white rounded-lg border-2 border-hero-button cursor-pointer"
                onClick={handlePreviousVideo}
                disabled={currentVideoId === videos[0]?._id}
              >
                Previous
              </button>
              <button
                className="px-6 py-2 text-white rounded-lg hero-button cursor-pointer"
                onClick={handleNextVideo}
                disabled={
                  !videoProgress.find((progress) => progress[currentVideoId])
                }
              >
                Next
              </button>
            </div>
          </div>

          {/* **Right Side - Accordion for Milestones, Modules, and Videos** */}
          <div className="w-1/3 pl-4">
            <h2 className="text-white text-xl mb-4">Milestone</h2>
            <div className="space-y-4">
              <Accordion>{renderMilestones()}</Accordion>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Class;
