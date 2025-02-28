const Video = ({
  video,
  setVideoSrc,
  index,
  setCurrentVideoIndex,
  mainIndex,
}) => {
  // console.log(video, "video from maaaaaaahiiiiiiim in line 217");
  // console.log("is getting index", mainIndex);
  return (
    <div className="py-5 ">
      <button
        className="hero-button px-2 py-4 w-full rounded-xl text-start font-bold"
        onClick={() => {
          const videoId = video.videoURL.split("v=")[1]?.split("&")[0]; // Extract video ID
          setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
          setCurrentVideoIndex(mainIndex);
        }}
      >
        {video
          ? `${index}. ${video.videoName}`
          : "No video found, please contact the admin"}
      </button>
    </div>
  );
};

export default Video;
