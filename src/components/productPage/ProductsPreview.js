import LinkButton from "../general/LinkButton";
import ResponsiveStaticImage from "../general/ResponsiveStaticImage";

export default function ProductsPreview({ products }) {
  return (
    <>
      {products.map(({ name, slug, image }, index) => {
        const [
          {
            mobile: [mobileSrc],
          },
          {
            tablet: [tabletSrc],
          },
          {
            desktop: [defaultSrc],
          },
        ] = image;

        return (
          <div key={index} className={`my-8 flex flex-col items-center gap-6`}>
            {defaultSrc && (
              <ResponsiveStaticImage
                alt={name}
                defaultSrc={defaultSrc}
                tabletSrc={tabletSrc}
                mobileSrc={mobileSrc}
                className={`rounded-md`}
              />
            )}
            <h2 className={`fontPreset5`}>{name.toUpperCase()}</h2>
            <LinkButton
              text={"SEE PRODUCT"}
              primary
              highlighted
              href={`/${slug}`}
            />
          </div>
        );
      })}
    </>
  );
}
