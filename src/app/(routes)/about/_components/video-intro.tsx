"use client";

import {
  MediaPlayer,
  MediaPlayerVideo,
  MediaPlayerControls,
  MediaPlayerOverlay,
  MediaPlayerSeek,
  MediaPlayerSeekBackward,
  MediaPlayerSeekForward,
  MediaPlayerVolume,
  MediaPlayerTime,
  MediaPlayerPlaybackSpeed,
  MediaPlayerPiP,
  MediaPlayerFullscreen,
  MediaPlayerPlay,
} from "@/components/ui/media-player";
import MotionTrigger from "@/components/shared/trigger";
import { Wrapper } from "@/components/shared/wrapper";

const VideoIntro = () => {
  return (
    <Wrapper className="border-b py-12 md:py-16 lg:py-20">
      <MotionTrigger className="group dark:bg-secondary/50 shadow-foreground/10 h-auto rounded-[30px] border p-1 shadow-2xl sm:aspect-video sm:rounded-[44px] sm:p-2 dark:shadow-black">
        <div className="bg-secondary relative h-auto w-full overflow-hidden rounded-[25px] sm:rounded-[37px] dark:border">
          <MediaPlayer>
            <MediaPlayerVideo>
              <source src="/videos/holiday.mp4" type="video/mp4" />
            </MediaPlayerVideo>
            <MediaPlayerControls className="flex-col items-start gap-2.5">
              <MediaPlayerOverlay />
              <MediaPlayerSeek />
              <div className="flex w-full items-center gap-2">
                <div className="flex flex-1 items-center gap-2">
                  <MediaPlayerPlay />
                  <MediaPlayerSeekBackward />
                  <MediaPlayerSeekForward />
                  <MediaPlayerVolume expandable />
                  <MediaPlayerTime />
                </div>
                <div className="flex items-center gap-2">
                  <MediaPlayerPlaybackSpeed />
                  <MediaPlayerPiP />
                  <MediaPlayerFullscreen />
                </div>
              </div>
            </MediaPlayerControls>
          </MediaPlayer>
        </div>
      </MotionTrigger>
    </Wrapper>
  );
};

export default VideoIntro;
