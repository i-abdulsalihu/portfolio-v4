"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, FC } from "react";

interface ImgProps extends ImageProps {
  fallbackSrc?: string;
}

const Img: FC<ImgProps> = ({
  src,
  alt,
  fallbackSrc = "/svg/placeholder.svg",
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
    />
  );
};

export default Img;
