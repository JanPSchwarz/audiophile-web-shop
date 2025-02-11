import CategoryPreviewLinks from "@/components/general/CategoryPreviewLinks";
import About from "@/components/general/About";

export default function Layout({ children }) {
  return (
    <>
      {children}{" "}
      <div className={`mt-36 flex flex-col gap-16 md:flex-row lg:mt-56`}>
        <CategoryPreviewLinks />
      </div>
      <About />
    </>
  );
}
