import CategoryPreviewLinks from "@/components/general/CategoryPreviewLinks";
import Hero from "@/components/homePage/Hero";
import PrimaryPreview from "@/components/homePage/PrimaryPreview";
import SecondaryPreview from "@/components/homePage/SecondaryPreview";
import TertiaryPreview from "@/components/homePage/TertiaryPreview";

export default function Home() {
  return (
    <>
      <div className={`flex flex-col gap-6`}>
        <section className={``}>
          <Hero />
        </section>
        <section
          className={`md:py-t-36 flex flex-col gap-16 pb-16 pt-48 md:mt-24 md:flex-row`}
        >
          <CategoryPreviewLinks />
        </section>
        <section
          className={`flex max-h-[90vh] flex-col gap-10 overflow-hidden rounded-md bg-accentColor px-10 py-16 lg:flex-row`}
        >
          <PrimaryPreview />
        </section>
        <section className={``}>
          <SecondaryPreview />
        </section>
        <section className={``}>
          <TertiaryPreview />
        </section>
      </div>
    </>
  );
}
