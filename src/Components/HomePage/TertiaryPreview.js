import StorybokImage from "../general/StoryblokImage";
import LinkButton from "../general/LinkButton";
import getPlaceholder from "@/utils/getPlaceholder";

export default async function TertiaryPreview({ content }) {
  const { href, image, heading, btn_text } = content;

  const defaultSrc = image[0].image;

  const defaultPlaceholder = await getPlaceholder(defaultSrc.filename);

  return (
    <>
      <div className={`flex flex-col gap-4 md:flex-row`}>
        <div className={`relative w-full md:flex-1`}>
          <StorybokImage
            defaultSrc={defaultSrc}
            sizes="50vw"
            className={`w-full rounded-md object-fill`}
            animations={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1 },
            }}
          />
        </div>
        <div
          className={`flex w-full items-center justify-start rounded-md bg-gray-100 md:flex-1`}
        >
          <div className={`flex flex-col items-start gap-6 p-[10%]`}>
            <h2 className={`fontPreset4 text-primaryColor`}>{heading}</h2>
            <LinkButton href={href} text={btn_text} />
          </div>
        </div>
      </div>
    </>
  );
}
