"use client";

import { FC, useEffect, useRef, useState } from "react";
import PlayButton from "@/public/svg/play.svg";
import PauseButton from "@/public/svg/pause.svg";

import { Wrapper } from "@/components/shared/wrapper";

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);

      // Listen for when the video ends
      const handleVideoEnd = () => {
        setIsPaused(true); // Set to paused when video ends
        setVideoProgress(0); // Reset progress
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const video = videoRef.current;
    if (video && videoDuration != null) {
      const updateProgress = () => {
        setVideoProgress(video.currentTime / videoDuration);
      };

      const interval = setInterval(updateProgress, 10);

      return () => clearInterval(interval);
    }
  }, [isPaused, videoDuration]);

  function togglePauseButton() {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  }

  return (
    <Wrapper className="border-b py-10 lg:!py-20">
      <figure className="relative w-full overflow-hidden rounded-md">
        <div className="absolute right-4 top-4 z-10">
          <VideoPlayerControls
            isPaused={isPaused}
            progress={videoProgress}
            onPlayPause={togglePauseButton}
          />
        </div>

        <video ref={videoRef} className="w-full">
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </figure>
    </Wrapper>
  );
};

export default VideoIntro;

interface VideoPlayerControlsProps {
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  size?: number | undefined;
  width?: number | undefined;
}

const VideoPlayerControls: FC<VideoPlayerControlsProps> = ({
  isPaused,
  onPlayPause,
  progress,
  size = 48,
  width = 3,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div
      data-pointer="cursor"
      className="relative flex items-center justify-center"
      onClick={onPlayPause}
    >
      <svg
        width={size}
        height={size}
        style={{
          transform: "rotate(-90deg)",
        }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={width}
          stroke="#999"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={width}
          stroke="#fff"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute">
        <button className="group flex items-center justify-center">
          <div className="fill-background transition-colors duration-200 ease-in-out group-hover:fill-[#999]">
            {isPaused ? <PlayButton /> : <PauseButton />}
          </div>
        </button>
      </div>
    </div>
  );
};
