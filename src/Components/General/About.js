"use client";

import ResponsiveStaticImage from "./ResponsiveStaticImage";
import BestGearTabletPic from "@/assets/images/shared/tablet/image-best-gear.jpg";
import { usePathname } from "next/navigation";

export default function About({ params }) {
  const path = usePathname();

  const isNotCheckout = path !== "/checkout";

  return (
    <>
      {isNotCheckout && (
        <section
          className={`my-32 flex flex-col items-center justify-center gap-10 lg:flex-row-reverse`}
        >
          <div
            className={`relative aspect-[1.09] w-full md:aspect-[2.29] lg:aspect-[1.09] lg:flex-1`}
          >
            <ResponsiveStaticImage
              alt={"model wearing audiophile headphones"}
              defaultSrc={BestGearTabletPic}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`rounded-md object-cover`}
              fill
              animations={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1 },
              }}
            />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-10 text-center md:w-4/5 lg:flex-1 lg:text-left`}
          >
            <h2 className={`fontPreset4 md:fontPreset2 text-primaryColor`}>
              BRINGING YOU THE <span className={`text-accentColor`}>BEST</span>{" "}
              AUDIO GEAR
            </h2>
            <p className={`fontPreset7 text-primaryColor text-opacity-60`}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
