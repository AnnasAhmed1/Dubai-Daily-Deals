import React, { useRef, useState } from "react";
import ImageComp from "./helperComponents/image/imageComp";
import { play, web } from "../assets/asset";

const VideoComp = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div className="relative videoComp">
      <div
        className={`animation-circle ${
          isPlaying ? "playbutton_hide" : "playbutton_show"
        }`}
      >
        <ImageComp
          src={play}
          className={"pulsating-circle flex items-center justify-center"}
          width={"80px"}
          height={"80px"}
          style={{
            background: "var(--gradient-primary)",
            borderRadius: "50%",
          }}
          imageStyle={{
            borderRadius: "50%",
            objectFit: "contain",
          }}
        />
      </div>
      <video
        ref={videoRef}
        style={{
          width: "100%",
        }}
        muted={true}
        onClick={togglePlay}
        className="video"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default VideoComp;
