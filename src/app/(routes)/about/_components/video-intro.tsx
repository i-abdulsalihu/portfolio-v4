import Video from "next-video";

import demo from "@/videos/get-started.mp4";
import { Wrapper } from "@/components/shared/wrapper";
import MotionTrigger from "@/components/shared/trigger";

const VideoIntro = () => {
  return (
    <Wrapper className="border-b py-12 md:py-16 lg:py-20">
      <MotionTrigger className="group dark:bg-secondary/50 shadow-foreground/10 h-auto rounded-[30px] border p-1 shadow-2xl sm:aspect-video sm:rounded-[44px] sm:p-2 dark:shadow-black">
        <div className="bg-secondary relative h-auto w-full overflow-hidden rounded-[25px] sm:rounded-[37px] dark:border">
          <Video src={demo} className="object-contain" />
        </div>
      </MotionTrigger>
    </Wrapper>
  );
};

export default VideoIntro;
