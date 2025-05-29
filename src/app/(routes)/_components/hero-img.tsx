import { FC } from "react";
import Img from "@/components/shared/img";

interface HeroImgProps {
  src?: string;
}

const HeroImg: FC<HeroImgProps> = ({ src }) => {
  return (
    <div className="group dark:bg-secondary/50 shadow-foreground/20 relative w-full overflow-hidden rounded-[30px] border p-1 shadow-2xl transition-all duration-300 sm:rounded-[44px] dark:shadow-black">
      <div className="bg-secondary relative aspect-[1.4] overflow-hidden rounded-[25px] sm:rounded-[39px] dark:border">
        <Img
          src={src ?? ""}
          alt="Placeholder Image"
          fill
          priority
          quality={100}
          className="origin-center object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-125"
        />
      </div>
    </div>
  );
};

export default HeroImg;
