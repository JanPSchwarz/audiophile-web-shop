import ResponsiveStaticImage from "../General/ResponsiveStaticImage";

export default function ProductGallery({ images, alt }) {
  const { first: firstImage, second: secondImage, third: thirdImage } = images;

  return (
    <>
      <div className={`flex flex-col gap-4 md:flex-row`}>
        <div className={`flex flex-col justify-between gap-4`}>
          <ResponsiveStaticImage
            alt={alt}
            defaultSrc={firstImage?.desktop}
            tabletSrc={firstImage?.tablet}
            mobileSrc={firstImage?.mobile}
            placeholder
            placeholderClasses={`w-full`}
            className={`rounded-md`}
          />
          <ResponsiveStaticImage
            alt={alt}
            defaultSrc={secondImage?.desktop}
            tabletSrc={secondImage?.tablet}
            mobileSrc={secondImage?.mobile}
            placeholder
            placeholderClasses={`w-full`}
            className={`rounded-md`}
          />
        </div>
        <ResponsiveStaticImage
          alt={alt}
          defaultSrc={thirdImage?.desktop}
          tabletSrc={thirdImage?.tablet}
          mobileSrc={thirdImage?.mobile}
          placeholder
          placeholderClasses={`w-full`}
          className={`rounded-md`}
        />
      </div>
    </>
  );
}
