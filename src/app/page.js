import CategoryPreviewLinks from "@/Components/General/CategoryPreviewLinks";
import Hero from "@/Components/HomePage/Hero";
import PrimaryPreview from "@/Components/HomePage/PrimaryPreview";
import SecondaryPreview from "@/Components/HomePage/SecondaryPreview";
import TertiaryPreview from "@/Components/HomePage/TertiaryPreview";

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
          className={`flex max-h-[90dvh] flex-col gap-10 overflow-hidden rounded-md bg-accentColor px-10 py-16 lg:flex-row`}
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
