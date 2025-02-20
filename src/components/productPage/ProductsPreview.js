import LinkButton from "../general/LinkButton";
import StorybokImage from "../general/StoryblokImage";
import extractSourcesWithPlaceholders from "@/utils/extractSources";

export default async function ProductsPreview({ products }) {
  return (
    <>
      {products.map(async ({ name, slug, image, category }, index) => {
        const [mobileSrc, tabletSrc, defaultSrc] =
          await extractSourcesWithPlaceholders(image);

        return (
          <div key={index} className={`my-8 flex flex-col items-center gap-6`}>
            <StorybokImage
              defaultSrc={defaultSrc}
              tabletSrc={tabletSrc}
              mobileSrc={mobileSrc}
              className={`rounded-md`}
            />
            <h2 className={`fontPreset5`}>{name.toUpperCase()}</h2>
            <LinkButton
              text={"SEE PRODUCT"}
              primary
              highlighted
              href={`/${category}/${slug}`}
            />
          </div>
        );
      })}
    </>
  );
}
