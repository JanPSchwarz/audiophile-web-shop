import StorybokImage from "./StorybokImage";
import getAbout from "@/lib/server-side-fetching/fetchAboutContent";

import { StoryblokRichText } from "@storyblok/react";

export default async function About() {
  const data = await getAbout();

  const richText = data.heading.content;

  const text = data.text;

  const defaultImageSrc = data.image[1].image;
  const tabletSrc = data.image[2].image;

  return (
    <>
      <section
        className={`my-32 flex flex-col items-center justify-center gap-10 lg:flex-row-reverse`}
      >
        <StorybokImage
          defaultSrc={defaultImageSrc}
          tabletSrc={tabletSrc}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`flex-1 rounded-md object-fill`}
          // fill
          animations={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
          }}
        />
        <div
          className={`flex flex-col items-center justify-center gap-10 text-center md:w-4/5 lg:flex-1 lg:text-left`}
        >
          <h2 className={`fontPreset4 md:fontPreset2 text-primaryColor`}>
            <StoryblokRichText doc={richText} />
          </h2>
          <p className={`fontPreset7 text-primaryColor text-opacity-60`}>
            {text}
          </p>
        </div>
      </section>
    </>
  );
}
