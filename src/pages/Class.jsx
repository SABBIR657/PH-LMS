import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { Accordion, AccordionItem } from '@heroui/accordion';

const Class = () => {
  // Sample YouTube video URLs
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Video 1" },
    { id: 2, url: "https://www.youtube.com/embed/9bZkp7q19f0", title: "Video 2" },
    { id: 3, url: "https://www.youtube.com/embed/kJQP7kiw5Fk", title: "Video 3" },
    { id: 4, url: "https://www.youtube.com/embed/vx6fYlq7UGI", title: "Video 4" },
    { id: 5, url: "https://www.youtube.com/embed/WchbF9FtiTo", title: "Video 5" },
    { id: 6, url: "https://www.youtube.com/embed/QyFniDPL4Jk", title: "Video 6" },
  ];

  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);
  const [videoProgress, setVideoProgress] = useState(new Array(videos.length).fill(false));

  const handleVideoCompletion = () => {
    const newProgress = [...videoProgress];
    const videoIndex = videos.findIndex((video) => video.id === currentVideoId);
    newProgress[videoIndex] = true;
    setVideoProgress(newProgress);
  };

  const handleNextVideo = () => {
    const currentIndex = videos.findIndex((video) => video.id === currentVideoId);
    if (currentIndex < videos.length - 1 && videoProgress[currentIndex]) {
      setCurrentVideoId(videos[currentIndex + 1].id);
    }
  };

  const handlePreviousVideo = () => {
    const currentIndex = videos.findIndex((video) => video.id === currentVideoId);
    if (currentIndex > 0) {
      setCurrentVideoId(videos[currentIndex - 1].id);
    }
  };

  // Helper function to split videos into pairs (e.g., 1 video per accordion, 2 videos per accordion)
  const videoChunks = [
    [videos[0]], // Accordion 1: 1 video
    [videos[1], videos[2]], // Accordion 2: 2 videos
    [videos[3]], // Accordion 3: 1 video
    [videos[4], videos[5]], // Accordion 4: 2 videos
  ];

  return (
    <div className="flex p-4">
      {/* Left Side */}
      <div className="w-2/3 pr-4">
        <iframe
          width="100%"
          height="315"
          src={videos.find((video) => video.id === currentVideoId).url}
          title={videos.find((video) => video.id === currentVideoId).title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Complete Video Button */}
        <div className="mt-4">
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={handleVideoCompletion}
            disabled={videoProgress[videos.findIndex((video) => video.id === currentVideoId)]} // Disable if already completed
          >
            Complete Video
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            onClick={handlePreviousVideo}
            disabled={currentVideoId === videos[0].id}
          >
            Previous
          </button>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleNextVideo}
            disabled={!videoProgress[videos.findIndex((video) => video.id === currentVideoId)]}
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/3 pl-4">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>

        {/* Title */}
        <h2 className="text-white text-xl mb-4">Milestone</h2>

        {/* Accordion for videos */}
        <div className="space-y-4">
          <Accordion>
            {videoChunks.map((chunk, index) => (
              <AccordionItem key={index} title={`Accordion ${index + 1}`}>
                {chunk.map((video) => {
                  const isDisabled = videoProgress[videos.findIndex((v) => v.id === video.id)] === false;
                  return (
                    <div key={video.id} className="flex items-center space-x-2 mb-4">
                      <select
                        onChange={() => setCurrentVideoId(video.id)}
                        disabled={isDisabled} // Disable if the video is locked
                        className={`w-full p-2 rounded-lg ${!isDisabled ? 'bg-blue-500' : 'bg-gray-500'} text-white`}
                      >
                        <option value={video.id}>{video.title}</option>
                      </select>
                      {/* Lock/Unlock Icon */}
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
  );
};

export default Class;
