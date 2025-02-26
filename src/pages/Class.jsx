import { useState } from "react";
import { Lock, Unlock } from "lucide-react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import CommonWrapper from "../components/CommonWrapper";

const Class = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Video 1",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      title: "Video 2",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      title: "Video 3",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/vx6fYlq7UGI",
      title: "Video 4",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/WchbF9FtiTo",
      title: "Video 5",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/QyFniDPL4Jk",
      title: "Video 6",
    },
  ];
  const textStyle = {
    backgroundImage:
      "linear-gradient(459deg, rgba(128,27,224,1) 0%, rgba(232,85,222,1) 41%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);
  const [videoProgress, setVideoProgress] = useState([
    true,
    ...new Array(videos.length - 1).fill(false),
  ]);

  const handleNextVideo = () => {
    const currentIndex = videos.findIndex(
      (video) => video.id === currentVideoId
    );
    if (currentIndex < videos.length - 1 && videoProgress[currentIndex]) {
      const newProgress = [...videoProgress];
      newProgress[currentIndex] = true;
      newProgress[currentIndex + 1] = true;
      setVideoProgress(newProgress);
      setCurrentVideoId(videos[currentIndex + 1].id);
    }
  };

  const handlePreviousVideo = () => {
    const currentIndex = videos.findIndex(
      (video) => video.id === currentVideoId
    );
    if (currentIndex > 0) {
      setCurrentVideoId(videos[currentIndex - 1].id);
    }
  };

  const videoChunks = [
    [videos[0]],
    [videos[1], videos[2]],
    [videos[3]],
    [videos[4], videos[5]],
  ];

  return (
    <div>
      <CommonWrapper>
        <div className="flex p-4">
          <div className="w-2/3 pr-4">
            <iframe
              width="100%"
              height="450"
              src={videos.find((video) => video.id === currentVideoId).url}
              title={videos.find((video) => video.id === currentVideoId).title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="mt-4 flex justify-between gap-4">
              <button
                className="px-6 py-2 bg-transparent  border-hero-button text-white rounded-lg border-2 border-hero-button cursor-pointer"
                onClick={handlePreviousVideo}
                disabled={currentVideoId === videos[0].id}
              >
                Previous
              </button>
              <button
                className="px-6 py-2  text-white rounded-lg hero-button cursor-pointer"
                onClick={handleNextVideo}
                disabled={
                  !videoProgress[
                    videos.findIndex((video) => video.id === currentVideoId)
                  ]
                }
              >
                Next
              </button>
            </div>
          </div>

          <div className="w-1/3 pl-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded-lg border bg-[#362848]"
              />
            </div>

            <h2 className="text-white text-xl mb-4">Milestone</h2>

            <div className="space-y-4">
              <Accordion>
                {videoChunks.map((chunk, index) => (
                  <AccordionItem
                    key={index}
                    title={
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(459deg, rgba(128,27,224,1) 0%, rgba(232,85,222,1) 41%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          display: "inline-block", // Ensures proper rendering
                        }}
                      >
                        {`Milestone ${index + 1}:`}
                      </span>
                    }
                    className="mb-5 bg-[#160929] px-4 py-7 rounded-xl"
                  >
                    {chunk.map((video) => {
                      const isDisabled =
                        !videoProgress[
                          videos.findIndex((v) => v.id === video.id)
                        ];
                      return (
                        <div
                          key={video.id}
                          className="flex items-center space-x-2 mb-4"
                        >
                          <select
                            onChange={() => setCurrentVideoId(video.id)}
                            disabled={isDisabled}
                            className={`w-full p-2 rounded-lg ${
                              !isDisabled ? "bg-blue-500" : "bg-gray-500"
                            } text-white`}
                          >
                            <option value={video.id}>{video.title}</option>
                          </select>
                          {isDisabled ? (
                            <Lock color="red" size={20} />
                          ) : (
                            <Unlock color="blue" size={20} />
                          )}
                        </div>
                      );
                    })}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Class;
