import CategoryPreviewLinks from "@/components/general/CategoryPreviewLinks";
import Hero from "@/components/homePage/Hero";
import PrimaryPreview from "@/components/homePage/PrimaryPreview";
import SecondaryPreview from "@/components/homePage/SecondaryPreview";
import TertiaryPreview from "@/components/homePage/TertiaryPreview";
import getLandingPageContent from "@/lib/server-side-fetching/fetchLandingPageContent";
import About from "@/components/general/About";

import getTestImages from "@/lib/server-side-fetching/fetchTestImages";
import RemoteImage from "@/components/general/StorybokImage";

export default async function Home() {
  const data = await getLandingPageContent();

  const testImages = await getTestImages();

  const heroData = data.hero[0];
  const primaryPreviewData = data.primary_preview[0];
  const secondaryPreviewData = data.secondary_preview[0];
  const tertiaryPreviewData = data.tertiary_preview[0];

  return (
    <>
      <div className={`flex flex-col gap-6`}>
        <section className={``}>
          <Hero content={heroData} testImage={testImages.desktop[0].image} />
        </section>
        {/* <RemoteImage
          defaultSrc={testImages.desktop[0].image}
          tabletSrc={testImages.tablet[0].image}
          className={`translate-y-[7%] scale-[1.15] bg-black object-cover object-bottom brightness-75`}
          priority={true}
          sizes={"100vw"}
          animations={{
            initial: { filter: "blur(5px)", opacity: 0 },
            animate: { filter: "blur(0)", opacity: 1 },
            transition: { duration: 1 },
          }}
        /> */}
        <section
          className={`md:py-t-36 flex flex-col gap-16 pb-16 pt-48 md:mt-24 md:flex-row`}
        >
          <CategoryPreviewLinks />
        </section>
        <section
          className={`flex max-h-[90vh] flex-col gap-10 overflow-hidden rounded-md bg-accentColor px-10 py-16 lg:flex-row`}
        >
          <PrimaryPreview content={primaryPreviewData} />
        </section>
        <section className={``}>
          <SecondaryPreview content={secondaryPreviewData} />
        </section>
        <section className={``}>
          <TertiaryPreview content={tertiaryPreviewData} />
        </section>
      </div>
      <About />
    </>
  );
}
