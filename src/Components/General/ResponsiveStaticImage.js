"use client";

import Image from "next/image";
import useClientWidth from "@/hooks/useClientWidth";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export default function ResponsiveStaticImage({
  defaultSrc,
  tabletSrc,
  mobileSrc,
  alt,
  className,
  placeholder,
  placeholderClasses,
  placeholderText,
  placeholderTextClasses,
  animations,
  ...props
}) {
  /* 
  * Usage:
  
  * This component is to be used with either a single `defaultSrc` or multiple sources. In case of `singleSource` (defaultSrc provided) the Image is rendered immediatly with its auto-generated blur-placeholder just as nextjs Image component is used to work. 
  
  * When using multiple sources (mobileSrc + tabletSrc) there is a optional placeholder-div rendered as long as the `imageSrc` is not setted and the placeholder prop is true. The reason behind this option: in case of slow internet there can be quite a time before the `imageSrc` is setted using the useClientWidth-Hook which leads to potential layout shifts + no blur-data. To make UX better you can set a placeholder to take the space while the `viewportWidth` is calculated and the `imageSrc` setted to the targeted source. The placeholder aspect-ratio doesn't need to be passed or calculated becaus its provided through the passed image object and infused with nextJS CSS-in-JS solution <style jsx> which provides it in build time.

  * The NextJS Image component is currently not supporting different image sources dependent on media queries (called "Art-Directory").
   */

  //! source validation
  if (!defaultSrc) {
    throw new Error(
      "Missing defaultSrc in 'ResponsiveImage'-Component: You must define a 'defaultSrc' as a fallback/default image. Optionally you can also provide a 'mobileSrc' (< 768px) and/or a 'tabletSrc' (>= 768 && < 1024px).",
    );
  }

  //! validation of animations prop
  if (animations) {
    //* validates if Object like {}
    if (Object.prototype.toString.call(animations) !== "[object Object]")
      throw new Error("'animations' prop must be of type Object like {}.");

    const whiteList = ["initial", "animate", "transition"];
    let wrongKey = [];

    //* keys are in the whitelist?
    Object.keys(animations).map((key) => {
      const valid = whiteList.includes(key);
      if (!valid) wrongKey.push(key);
    });

    if (wrongKey.length > 0)
      throw new Error(
        `Invalid Key(s) --> ${wrongKey.join(", ")} \nComponent acceptes 'initial', 'animate' and 'transition'. Either include the key in the components whitelist or change the prop.`,
      );
  }

  const [imageSrc, setImageSrc] = useState();

  const singleSource = !mobileSrc && !tabletSrc;
  const viewportWidth = useClientWidth({ disable: singleSource });

  //* set imageSrc dependent on viewPortWidth
  useEffect(() => {
    //* only needed when there are mutliple sources
    if (singleSource) return;

    const isMobile = viewportWidth < 768;
    const isTablet = viewportWidth < 1024 && viewportWidth >= 768;

    if (mobileSrc && isMobile) {
      setImageSrc(mobileSrc);
    } else if (tabletSrc && isTablet) {
      setImageSrc(tabletSrc);
    } else {
      setImageSrc(defaultSrc);
    }
  }, [mobileSrc, defaultSrc, tabletSrc, viewportWidth, singleSource]);

  //* creates Image component that excepts motion-framer animation values
  const MotionImage = motion.create(
    forwardRef(function MotionImage(props, ref) {
      return <Image ref={ref} alt={alt} {...props} />;
    }),
  );

  const SharedImage = ({ src }) => {
    return (
      <MotionImage
        initial={{ ...animations?.initial }}
        animate={{ ...animations?.animate }}
        transition={{ ...animations?.transition }}
        alt={alt}
        src={src}
        placeholder="blur"
        className={twMerge(``, className)}
        {...props}
      />
    );
  };

  return (
    <>
      {singleSource ? (
        <SharedImage src={defaultSrc} />
      ) : imageSrc ? (
        <SharedImage src={imageSrc} />
      ) : (
        placeholder && (
          <>
            {/* for injecting ratio dynamically and fast */}
            <style jsx>{`
              #flexPlaceholder {
                aspect-ratio: ${mobileSrc?.width / mobileSrc?.height};
              }

              @media (min-width: 768px) {
                #flexPlaceholder {
                  aspect-ratio: ${tabletSrc?.width / tabletSrc?.height};
                }
              }
              @media (min-width: 1024px) {
                #flexPlaceholder {
                  aspect-ratio: ${defaultSrc?.width / defaultSrc?.height};
                }
              }
            `}</style>
            <div
              id="flexPlaceholder"
              className={twMerge(
                `flex items-center justify-center`,
                className,
                placeholderClasses,
              )}
            >
              {placeholderText && (
                <p className={placeholderTextClasses}>{placeholderText}</p>
              )}
            </div>
          </>
        )
      )}
    </>
  );
}
