import ResponsiveStaticImage from "../General/ResponsiveStaticImage";
import ProductGallery from "./ProductGallery";
import ProductsPreview from "./ProductsPreview";
import GoBack from "../General/GoBack";
import AddToCart from "./AddToCart";

export default function DetailsProductCard({ product, category }) {
  const {
    new: isNew,
    image: { mobile: mobileSrc, tablet: tabletSrc, desktop: defaultSrc } = {},
    name = "missing data",
    description = "missing data",
    price,
    features = "missing data",
    includes = [{ item: "missing data" }],
    gallery,
    others,
    slug,
  } = product;

  return (
    <>
      <div className={`my-4 md:my-8 lg:my-12`}>
        <GoBack text={category} href={`/${category}`} />
      </div>
      <div className={`flex flex-col gap-16`}>
        <div className={`flex flex-col gap-6 md:flex-row lg:gap-20`}>
          <div className={`md:flex md:flex-1`}>
            {defaultSrc ? (
              <ResponsiveStaticImage
                alt={name}
                defaultSrc={defaultSrc}
                mobileSrc={mobileSrc}
                tabletSrc={tabletSrc}
                placeholder
                className={`rounded-md`}
              />
            ) : (
              <p className={`mx-auto my-36 w-full text-center md:my-auto`}>
                Missing image...
              </p>
            )}
          </div>
          <div
            className={`flex flex-col gap-4 md:flex-1 md:justify-evenly md:gap-0`}
          >
            {isNew && (
              <p
                className={`fontPreset7 py-2 tracking-[0.6rem] text-accentColorLight`}
              >
                NEW PRODUCT
              </p>
            )}
            <h1
              className={`fontPreset4 md:fontPreset3 lg:fontPreset2 text-primaryColor`}
            >
              {name.split(" ").slice(0, -1).join(" ")}
              <span className={`block`}>{name.split(" ").slice(-1)}</span>
            </h1>
            <p className={`fontPreset7 text-primaryColor text-opacity-70`}>
              {description}
            </p>
            <p className={`fontPreset6 text-primaryColor`}>$ {price}</p>
            <div
              className={`my-6 flex justify-center gap-6 lg:justify-start lg:gap-16`}
            >
              <AddToCart product={{ slug, price }} />
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-10 md:gap-20 lg:flex-row`}>
          <div className={`flex flex-col gap-6 lg:flex-[2]`}>
            <h2 className={`fontPreset5 text-primaryColor`}>FEATURES</h2>
            <p
              className={`fontPreset7 whitespace-pre-line text-primaryColor text-opacity-70 lg:text-balance`}
            >
              {features}
            </p>
          </div>
          <div
            className={`flex flex-col gap-6 md:flex-row md:gap-[30%] lg:flex-1 lg:flex-col lg:gap-6`}
          >
            <h2 className={`fontPreset5 text-primaryColor`}>IN THE BOX</h2>
            <ul className={`flex flex-col gap-2`}>
              {includes.map(({ quantity, item }, index) => {
                return (
                  <li
                    key={index}
                    className={`fontPreset7 flex gap-2 text-primaryColor text-opacity-70`}
                  >
                    {quantity && (
                      <span className={`font-semibold text-accentColor`}>
                        {quantity}x
                      </span>
                    )}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>{gallery && <ProductGallery alt={name} images={gallery} />}</div>
        <div className={`flex flex-col items-center gap-4`}>
          <h2 className={`fontPreset5`}>YOU MAY ALSO LIKE</h2>
          <div className={`flex flex-col md:flex-row md:gap-12`}>
            <ProductsPreview products={others} />
          </div>
        </div>
      </div>
    </>
  );
}
