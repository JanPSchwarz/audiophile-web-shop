import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import StorybokImage from "../general/StorybokImage";

export default function ProductGallery({ images }) {
  const [
    { first: firstImage },
    { second: secondImage },
    { third: thirdImage },
  ] = images;

  const firstImageMobile = firstImage[0]?.mobile[0].image;
  const firstImageTablet = firstImage[1]?.tablet[0].image;
  const firstImageDesktop = firstImage[2]?.desktop[0].image;

  const secondImageMobile = secondImage[0]?.mobile[0].image;
  const secondImageTablet = secondImage[1]?.tablet[0].image;
  const secondImageDesktop = secondImage[2]?.desktop[0].image;

  const thirdImageMobile = thirdImage[0]?.mobile[0].image;
  const thirdImageTablet = thirdImage[1]?.tablet[0].image;
  const thirdImageDesktop = thirdImage[2]?.desktop[0].image;

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
