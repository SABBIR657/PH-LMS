import React from "react";
import video from "../../assets/video.webm";
const VideoFram = () => {
    return (
        <div className=" h-auto flex justify-center gap-[10px] mb-10">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="lg:max-w-[1320px] lg:max-h-[559px] object-cover"
            >
                <source src={video} type="video/webm" />
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoFram;