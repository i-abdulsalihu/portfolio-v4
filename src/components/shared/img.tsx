"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState, useEffect, FC } from "react";

interface ImgProps extends ImageProps {
  fallbackSrc?: string;
}

const Img: FC<ImgProps> = ({
  src,
  alt,
  fallbackSrc = "/svg/placeholder.svg",
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      priority
      quality={100}
      unoptimized={
        imgSrc.toString().toLowerCase().includes(".gif") ? true : false
      }
      className={cn(
        "origin-center object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-125",
        className,
      )}
    />
  );
};

export default Img;
