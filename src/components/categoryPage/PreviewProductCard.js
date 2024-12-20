import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import LinkButton from "../general/LinkButton";

export default function CategoryProductCard({ data, reverse, category }) {
  const {
    id,
    categoryImage = {},
    description = "missing data",
    name = "missing data",
    slug,
    new: isNew = false,
  } = data;

  const {
    mobile: mobileImage,
    tablet: tabletImage,
    desktop: defaultSrc,
  } = categoryImage;

  return (
    <>
      <div
        className={`lg: flex flex-col items-center justify-center gap-10 ${reverse ? `lg:flex-row-reverse` : `lg:flex-row`} lg:gap-16`}
      >
        <div className={`w-full lg:flex-1`}>
          {defaultSrc ? (
            <ResponsiveStaticImage
              alt={name}
              defaultSrc={defaultSrc}
              tabletSrc={tabletImage}
              mobileSrc={mobileImage}
              className={`rounded-md`}
              placeholder={true}
              placeholderClasses={`w-full border`}
            />
          ) : (
            <p>No image defined</p>
          )}
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-8 text-center lg:flex-1 lg:items-start`}
        >
          {isNew && (
            <p
              className={`fontPreset7 md:fontPreset7 tracking-[0.4rem] text-accentColor`}
            >
              NEW PRODUCT
            </p>
          )}
          <h2
            className={`fontPreset4 md:fontPreset2 text-primaryColor md:w-1/2 lg:w-full lg:text-left`}
          >
            {name.toUpperCase()}
          </h2>
          <p
            className={`text-balance text-primaryColor text-opacity-60 md:w-3/4 lg:w-full lg:text-left`}
          >
            {description}
          </p>
          <LinkButton
            className={``}
            href={`/${category}/${slug}`}
            primary
            highlighted
            text={"SEE PRODUCT"}
          />
        </div>
      </div>
    </>
  );
}
