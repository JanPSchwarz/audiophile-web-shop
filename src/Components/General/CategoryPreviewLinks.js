"use client";

import Link from "next/link";
import StorybokImage from "./StoryblokImage";
import IconArrowRight from "@/assets/svgs/icon-arrow-right.svg";
import useSWR from "swr";
import { fetcher } from "@/utils/SWRfetcher";

export default function CategoryPreviewLinks() {
  const { data, error, isLoading } = useSWR(`/api/categoryLinks`, fetcher);

  const linkList = data?.categoryLinks || [];

  return (
    <>
      {linkList.map(({ category, image }, i) => {
        return (
          <Link key={i} className={`w-full`} href={`/${category}`}>
            <div
              className={`relative flex h-[18vh] max-h-[160px] w-full flex-col items-center justify-end rounded-md bg-lightColor landscape:h-[18vw]`}
            >
              <StorybokImage
                defaultSrc={image}
                placeholder
                className={`absolute w-[clamp(8rem,_20vw,_12rem)] -translate-y-[clamp(10px,_8vh,_80px)] landscape:w-[clamp(8rem,_30vh,_12rem)] landscape:-translate-y-[clamp(10px,_10vw,80px)]`}
              />
              <div
                className={`flex flex-col items-center justify-center gap-2 pb-4`}
              >
                <p className={`fontPreset7 font-bold tracking-wider`}>
                  {category.toUpperCase()}
                </p>
                <p
                  className={`fontPreset9 relative text-primaryColor text-opacity-50`}
                >
                  SHOP
                  <IconArrowRight
                    className={`absolute top-1/2 inline -translate-y-1/2 translate-x-3`}
                  />
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
