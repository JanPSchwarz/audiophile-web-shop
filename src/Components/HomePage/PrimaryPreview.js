import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import LinkButton from "../general/LinkButton";
import SpeakersImageDesktop from "@/assets/images/home/mobile/image-speaker-zx9.png";
import Circles from "@/assets/svgs/pattern-circles.svg";

export default function PrimaryPreview({ content }) {
  const { text, href, image, heading, btn_text } = content;

  const firstPartHeading = heading.split(" ")[0];
  const secondPartHeading = heading.split(" ")[1];

  const desktopSrc = image[0];

  return (
    <>
      <div
        className={`relative flex items-center justify-center lg:flex-1 lg:translate-y-12 lg:items-end`}
      >
        <ResponsiveStaticImage
          alt={heading}
          sizes="100vw"
          defaultSrc={desktopSrc}
          className={`z-20 w-[clamp(10rem,_50vw,_24rem)] landscape:w-[clamp(10rem,_70vh,_48rem)]`}
          animations={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
          }}
        />
        <Circles
          className={`absolute top-1/2 -translate-y-1/2 scale-[65%] stroke-secondaryColor md:scale-90`}
        />
      </div>
      <div
        className={`z-10 flex flex-col items-center justify-center lg:flex-1`}
      >
        <div
          className={`flex flex-col items-center justify-center gap-6 text-center md:w-3/4 md:gap-10 lg:items-start lg:text-left`}
        >
          <h2 className={`fontPreset2 md:fontPreset1 text-secondaryColor`}>
            <span className={`block`}>{firstPartHeading}</span>
            {secondPartHeading}
          </h2>
          <p
            className={`fontPreset7 font-light text-secondaryColor md:w-3/4 lg:w-full`}
          >
            {text}
          </p>
          <LinkButton primary text={btn_text} href={href} className={``} />
        </div>
      </div>
    </>
  );
}
