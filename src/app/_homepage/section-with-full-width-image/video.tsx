"use client";
import { useRef, useState } from "react";

const Video = ({ url = "" }: { url: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, isPlaying] = useState<Boolean>(false);

  return (
    <div className="h-full w-full bg-slate-50 relative">
      <div
        className="absolute top-[50%] left-[50%] w-[75px] h-[75px] cursor-pointer translate-x-[-50%] translate-y-[-50%] border-[2px] border-[#E3FFB5] rounded-full z-10 hover:bg-black/20 flex justify-center items-center"
        onClick={() => {
          if (videoRef.current?.paused) {
            videoRef.current?.play();
            isPlaying(true);
          } else {
            videoRef.current?.pause();
            isPlaying(false);
          }
        }}
      >
        <div>
          {!playing ? (
            <div className="h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#FF0EE5]"></div>
          ) : (
            <div>
              <span className="h-[20px] w-[5px] bg-[#FF0EE5] mr-2 inline-block"></span>
              <span className="h-[20px] w-[5px] bg-[#FF0EE5] inline-block"></span>
            </div>
          )}
        </div>
      </div>
      <video
        ref={videoRef}
        src={url}
        className="h-full w-full object-cover cursor-pointer"
      ></video>
    </div>
  );
};

export default Video;
