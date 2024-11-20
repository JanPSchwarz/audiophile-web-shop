import LinkButton from "../General/LinkButton";
import ResponsiveStaticImage from "../General/ResponsiveStaticImage";

import HeadphoneImageDesktop from "@/assets/images/home/desktop/image-hero.jpg";
import HeadphoneImageTablet from "@/assets/images/home/tablet/image-hero.jpg";
import HeadphoneImageMobile from "@/assets/images/home/mobile/image-hero.jpg";

export default function Hero() {
  return (
    <>
      <div
        className={`relative flex items-center justify-center before:absolute before:top-0 before:z-10 before:h-[1px] before:w-screen before:bg-secondaryColor before:bg-opacity-20 before:content-[""] md:before:w-full lg:justify-start`}
      >
        <ResponsiveStaticImage
          alt={"XX 99 Mark II Headphones"}
          defaultSrc={HeadphoneImageDesktop}
          tabletSrc={HeadphoneImageTablet}
          mobileSrc={HeadphoneImageMobile}
          sizes="100vw"
          placeholder={true}
          placeholderClasses={`w-full`}
          className={`translate-y-[7%] scale-[1.15] object-cover object-bottom brightness-75`}
          animations={{
            initial: { filter: "blur(5px)", opacity: 0 },
            animate: { filter: "blur(0)", opacity: 1 },
            transition: { duration: 1 },
          }}
        />
        <div
          className={`absolute -z-10 h-full w-full translate-y-[7%] scale-[1.15] bg-black`}
        ></div>
        <div className={`absolute flex items-center justify-center md:w-3/5`}>
          <div
            className={`flex flex-col items-center justify-start gap-6 text-center text-secondaryColor md:gap-12 lg:items-start lg:text-left`}
          >
            <p
              className={`fontPreset7 tracking-[0.3rem] text-secondaryColor text-opacity-70 md:tracking-[0.6rem]`}
            >
              NEW PRODUCT
            </p>
            <h2 className={`fontPreset3 md:fontPreset1`}>
              XX 99 MARK II HEADPHONES
            </h2>
            <p className={`fontPreset7 leading-6 md:w-5/6 lg:w-3/5`}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <LinkButton
              href={"headphones/xx99-mark-two-headphones"}
              primary={true}
              highlighted={true}
              text={"SEE PRODUCT"}
              className={``}
            />
          </div>
        </div>
      </div>
    </>
  );
}
