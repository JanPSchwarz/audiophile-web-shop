import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import LinkButton from "../general/LinkButton";

import SpeakersImageDesktop from "@/assets/images/home/desktop/image-speaker-zx7.jpg";
import SpeakersImageTablet from "@/assets/images/home/tablet/image-speaker-zx7.jpg";
import SpeakersImageMobile from "@/assets/images/home/mobile/image-speaker-zx7.jpg";

export default function SecondaryPreview({ content }) {
  const { href, image, heading, btn_text } = content;

  const mobileSrc = image[0].mobile[0];
  const tabletSrc = image[1].tablet[0];
  const desktopSrc = image[2].desktop[0];

  return (
    <>
      <div
        className={`relative flex aspect-square w-full items-center justify-start md:aspect-[2.15] lg:aspect-[3.44]`}
      >
        <ResponsiveStaticImage
          alt={heading}
          sizes="100vw"
          defaultSrc={desktopSrc}
          tabletSrc={tabletSrc}
          mobileSrc={mobileSrc}
          placeholder={true}
          placeholderClasses={`border absolute absolute w-full h-full`}
          className={`w-full rounded-md`}
          fill
          animations={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
          }}
        />
        <div
          className={`z-10 flex flex-col items-start justify-center gap-6 p-[10%]`}
        >
          <h2 className={`fontPreset4 text-primaryColor`}>{heading}</h2>
          <LinkButton href={href} text={btn_text} />
        </div>
      </div>
    </>
  );
}
