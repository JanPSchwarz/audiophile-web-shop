import LinkButton from "../general/LinkButton";
import StorybokImage from "../general/StorybokImage";

export default function Hero({ content }) {
  const { heading, btn_text, superscript, text, href, image } = content;

  const mobileSrc = image[0].mobile[0].image;
  const tabletSrc = image[1].tablet[0].image;
  const desktopSrc = image[2].desktop[0].image;

  return (
    <>
      <div
        className={`relative flex items-center justify-center before:absolute before:top-0 before:z-10 before:h-[1px] before:w-screen before:bg-secondaryColor before:bg-opacity-20 before:content-[""] md:before:w-full lg:justify-start`}
      >
        <StorybokImage
          defaultSrc={desktopSrc}
          tabletSrc={tabletSrc}
          mobileSrc={mobileSrc}
          className={`translate-y-[7%] scale-[1.15] bg-black object-cover object-bottom brightness-75`}
          priority={true}
          sizes={"100vw"}
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
              {superscript}
            </p>
            <h2 className={`fontPreset3 md:fontPreset1`}>{heading}</h2>
            <p className={`fontPreset7 leading-6 md:w-5/6 lg:w-3/5`}>{text}</p>
            <LinkButton
              href={href}
              primary={true}
              highlighted={true}
              text={btn_text}
              className={``}
            />
          </div>
        </div>
      </div>
    </>
  );
}
