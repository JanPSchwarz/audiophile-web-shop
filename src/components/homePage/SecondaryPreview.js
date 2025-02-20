import LinkButton from "../general/LinkButton";
import StorybokImage from "../general/StoryblokImage";
import extractSourcesWithPlaceholders from "@/utils/extractSources";

export default async function SecondaryPreview({ content }) {
  const { href, image, heading, btn_text } = content;

  const [mobileSrc, tabletSrc, defaultSrc] =
    await extractSourcesWithPlaceholders(image);

  return (
    <>
      <div className={`relative flex w-full`}>
        <StorybokImage
          defaultSrc={defaultSrc}
          tabletSrc={tabletSrc}
          mobileSrc={mobileSrc}
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
