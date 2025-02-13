import LinkButton from "../general/LinkButton";
import StorybokImage from "../general/StoryblokImage";

export default function SecondaryPreview({ content }) {
  const { href, image, heading, btn_text } = content;

  const mobileSrc = image[0].mobile[0].image;
  const tabletSrc = image[1].tablet[0].image;
  const desktopSrc = image[2].desktop[0].image;

  return (
    <>
      <div className={`relative flex w-full`}>
        <StorybokImage
          defaultSrc={desktopSrc}
          tabletSrc={tabletSrc}
          mobileSrc={mobileSrc}
          placeholder
          sizes="100vw"
          className={`w-full rounded-md`}
          animations={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
          }}
        />
        <div
          className={`absolute bottom-[10%] left-[5%] z-10 flex flex-col items-start justify-center gap-6`}
        >
          <h2 className={`fontPreset4 text-primaryColor`}>{heading}</h2>
          <LinkButton href={href} text={btn_text} />
        </div>
      </div>
    </>
  );
}
