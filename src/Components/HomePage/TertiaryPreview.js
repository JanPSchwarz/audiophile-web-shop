import EarphoneImage from "@/assets/images/home/tablet/image-earphones-yx1.jpg";
import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import LinkButton from "../general/LinkButton";

export default function TertiaryPreview() {
  return (
    <>
      <div className={`flex flex-col gap-4 md:flex-row`}>
        <div
          className={`relative aspect-[1.69] w-full md:aspect-[1.05] md:flex-1 lg:aspect-[1.69]`}
        >
          <ResponsiveStaticImage
            defaultSrc={EarphoneImage}
            sizes="50vw"
            alt={"YX1 Earphones"}
            fill
            className={`rounded-md object-cover`}
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
            <h2 className={`fontPreset4 text-primaryColor`}>YX1 EARPHONES</h2>
            <LinkButton href={"earphones/yx1-earphones"} text={"SEE PRODUCT"} />
          </div>
        </div>
      </div>
    </>
  );
}
