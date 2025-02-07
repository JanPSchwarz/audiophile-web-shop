import ResponsiveStaticImage from "../general/ResponsiveStaticImage";

export default function ProductGallery({ images, alt }) {
  const [
    { first: firstImage },
    { second: secondImage },
    { third: thirdImage },
  ] = images;

  const [
    {
      mobile: [firstImageMobile],
    },
    {
      tablet: [firstImageTablet],
    },
    {
      desktop: [firstImageDesktop],
    },
  ] = firstImage;

  const [
    {
      mobile: [secondImageMobile],
    },
    {
      tablet: [secondImageTablet],
    },
    {
      desktop: [secondImageDesktop],
    },
  ] = secondImage;

  const [
    {
      mobile: [thirdImageMobile],
    },
    {
      tablet: [thirdImageTablet],
    },
    {
      desktop: [thirdImageDesktop],
    },
  ] = thirdImage;

  /// alternative structure

  // const firstImageMobile = firstImage[0]?.mobile[0];
  // const firstImageTablet = firstImage[1]?.tablet[0];
  // const firstImageDesktop = firstImage[2]?.desktop[0];

  // const secondImageMobile = secondImage[0]?.mobile[0];
  // const secondImageTablet = secondImage[1]?.tablet[0];
  // const secondImageDesktop = secondImage[2]?.desktop[0];

  // const thirdImageMobile = thirdImage[0]?.mobile[0];
  // const thirdImageTablet = thirdImage[1]?.tablet[0];
  // const thirdImageDesktop = thirdImage[2]?.desktop[0];

  return (
    <>
      <div className={`flex flex-col gap-4 md:flex-row`}>
        <div className={`flex flex-col justify-between gap-4`}>
          <ResponsiveStaticImage
            alt={alt}
            defaultSrc={firstImageDesktop}
            tabletSrc={firstImageTablet}
            mobileSrc={firstImageMobile}
            placeholder
            placeholderClasses={`w-full`}
            className={`rounded-md`}
          />
          <ResponsiveStaticImage
            alt={alt}
            defaultSrc={secondImageDesktop}
            tabletSrc={secondImageTablet}
            mobileSrc={secondImageMobile}
            placeholder
            placeholderClasses={`w-full`}
            className={`rounded-md`}
          />
        </div>
        <ResponsiveStaticImage
          alt={alt}
          defaultSrc={thirdImageDesktop}
          tabletSrc={thirdImageTablet}
          mobileSrc={thirdImageMobile}
          placeholder
          placeholderClasses={`w-full`}
          className={`rounded-md`}
        />
      </div>
    </>
  );
}
