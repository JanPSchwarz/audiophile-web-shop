import Link from "next/link";
import Image from "next/image";

import EarPhoneImage from "@/assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import HeadPhoneImage from "@/assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImage from "@/assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import IconArrowRight from "@/assets/svgs/icon-arrow-right.svg";

export default function CategoryPreviewLinks() {
  const linkList = [
    { product: "headphones", image: HeadPhoneImage },
    { product: "speakers", image: SpeakerImage },
    { product: "earphones", image: EarPhoneImage },
  ];

  return (
    <>
      {linkList.map(({ product, image }, i) => {
        return (
          <Link key={i} className={`mb-8 w-full`} href={`/${product}`}>
            <div
              className={`relative flex h-[18vh] max-h-[160px] w-full flex-col items-center justify-end rounded-md bg-lightColor landscape:h-[18vw]`}
            >
              <Image
                alt={`${product} image`}
                placeholder="blur"
                src={image}
                className={`absolute w-[clamp(8rem,_20vw,_12rem)] -translate-y-[clamp(10px,_8vh,_80px)] landscape:w-[clamp(8rem,_30vh,_12rem)] landscape:-translate-y-[clamp(10px,_10vw,80px)]`}
              />
              <div
                className={`flex flex-col items-center justify-center gap-2 pb-4`}
              >
                <p className={`fontPreset7 font-bold tracking-wider`}>
                  {product.toUpperCase()}
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
