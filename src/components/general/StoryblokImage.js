"use client";

import useBreakpoints from "@/hooks/useBreakpoints";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export default function StoryblokImage({
  defaultSrc,
  tabletSrc,
  mobileSrc,
  className,
  fill,
  priority,
  sizes,
  animations,
  ...props
}) {
  const singleSource = !mobileSrc && !tabletSrc;

  const { isMobile, isTablet } = useBreakpoints({ disable: singleSource });

  const currentImage =
    (isMobile && mobileSrc) || (isTablet && tabletSrc) || defaultSrc;

  const { alt } = defaultSrc;

  function processImageData(image) {
    const { filename } = image;

    // example base filename which format doesn't change:
    // https://a.storyblok.com/f/324015/1440x729/cb8f2a7bb9/image-hero.jpg
    const sizesArray = filename?.split("/")[5].split("x");

    const width = sizesArray && sizesArray[0];
    const height = sizesArray && sizesArray[1];
    const aspectRatio = width / height;

    // retrieves webP format over the storybok image-service
    const optimizedSource = `${filename}/m/${width}x${height}`;

    return {
      ...image,
      source: optimizedSource,
      width,
      height,
      aspectRatio,
    };
  }

  //* creates Image component that excepts motion-framer animation values
  const MotionImage = motion.create(
    forwardRef(function MotionImage(props, ref) {
      return <Image ref={ref} alt={alt} {...props} />;
    }),
  );

  const { source, width, height, blurData } = processImageData(currentImage);

  return (
    <>
      <MotionImage
        src={source}
        width={width}
        height={height}
        priority={priority}
        fill={fill}
        className={twMerge(``, className)}
        sizes={sizes}
        placeholder={blurData && "blur"}
        blurDataURL={blurData}
        initial={{ ...animations?.initial }}
        animate={{ ...animations?.animate }}
        transition={{ ...animations?.transition }}
        {...props}
      />
    </>
  );
}
