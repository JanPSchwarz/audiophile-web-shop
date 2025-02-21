import StorybokImage from "../general/StoryblokImage";
import extractSourcesWithPlaceholders from "@/utils/extractSources";

export default async function ProductGallery({ images }) {
  const [
    { first: firstImage },
    { second: secondImage },
    { third: thirdImage },
  ] = images;

  // const [firstImages, secondImages, thirdImages] = await Promise.all([
  //   extractSourcesWithPlaceholders(firstImage),
  //   extractSourcesWithPlaceholders(secondImage),
  //   extractSourcesWithPlaceholders(thirdImage),
  // ]);

  const firstImages = await extractSourcesWithPlaceholders(firstImage);
  const secondImages = await extractSourcesWithPlaceholders(secondImage);
  const thirdImages = await extractSourcesWithPlaceholders(thirdImage);

  const [firstImageMobile, firstImageTablet, firstImageDesktop] = firstImages;
  const [secondImageMobile, secondImageTablet, secondImageDesktop] =
    secondImages;
  const [thirdImageMobile, thirdImageTablet, thirdImageDesktop] = thirdImages;

  return (
    <>
      <div className={`flex flex-col gap-4 md:flex-row`}>
        <div className={`flex flex-col justify-between gap-4`}>
          <StorybokImage
            defaultSrc={firstImageDesktop}
            tabletSrc={firstImageTablet}
            mobileSrc={firstImageMobile}
            className={`rounded-md`}
          />
          <StorybokImage
            defaultSrc={secondImageDesktop}
            tabletSrc={secondImageTablet}
            mobileSrc={secondImageMobile}
            className={`rounded-md`}
          />
        </div>
        <StorybokImage
          defaultSrc={thirdImageDesktop}
          tabletSrc={thirdImageTablet}
          mobileSrc={thirdImageMobile}
          className={`rounded-md`}
        />
      </div>
    </>
  );
}
