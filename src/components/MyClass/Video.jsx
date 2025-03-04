const Video = ({ video, setVideoSrc, index }) => {
  // console.log(video, "video from maaaaaaahiiiiiiim in line 217");
  return (
    <div className="py-5 ">
      <button
        className="px-2 border-b-2 py-4 w-full  text-start bg-gradient-to-r from-[#CC44E1] to-[#700AEB] bg-clip-text text-transparent font-bold"
        onClick={() => {
          const videoId = video.videoURL.split("v=")[1]?.split("&")[0]; // Extract video ID
          setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
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
