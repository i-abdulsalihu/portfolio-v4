import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/kibo-ui/video-player";
import MotionTrigger from "@/components/shared/trigger";
import { Wrapper } from "@/components/shared/wrapper";

const controls = [
  { key: "play", Component: VideoPlayerPlayButton },
  { key: "backward", Component: VideoPlayerSeekBackwardButton },
  { key: "forward", Component: VideoPlayerSeekForwardButton },
  { key: "range", Component: VideoPlayerTimeRange },
  { key: "display", Component: () => <VideoPlayerTimeDisplay showDuration /> },
  { key: "mute", Component: VideoPlayerMuteButton },
  { key: "volume", Component: VideoPlayerVolumeRange },
];

const VideoIntro = () => {
  return (
    <Wrapper className="border-b py-12 md:py-16 lg:py-20">
      <MotionTrigger className="group dark:bg-secondary/50 shadow-foreground/10 h-auto rounded-[30px] border p-1.5 pb-0 shadow-2xl sm:aspect-video sm:rounded-[44px] sm:p-2 sm:pb-0.5 dark:shadow-black">
        <VideoPlayer className="bg-secondary relative h-auto w-full overflow-hidden rounded-[25px] sm:rounded-[37px] dark:border">
          <VideoPlayerContent
            suppressHydrationWarning
            crossOrigin=""
            muted
            preload="auto"
            slot="media"
            autoPlay
            loop
            src="https://cdn.pixabay.com/video/2018/11/26/19575-303404028_large.mp4"
          />
          <VideoPlayerControlBar>
            {controls.map(({ key, Component }) => (
              <Component key={key} />
            ))}
          </VideoPlayerControlBar>
        </VideoPlayer>
      </MotionTrigger>
    </Wrapper>
  );
};

export default VideoIntro;
