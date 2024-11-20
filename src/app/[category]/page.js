import data from "@/lib/data";

import PreviewProductCard from "@/Components/CategoryPage/PreviewProductCard";

export default async function Category({ params }) {
  const { category } = await params;

  // sorts after 'new'-key (truthy first) and 'price'-key (highest first)
  const products = data
    .filter((product) => product.category === category)
    .sort((a, b) => b.new - a.new)
    .sort((a, b) => b.price - a.price);

  if (products.length == 0) throw new Error("Loading data not possible.");

  return (
    <>
      <div
        className={`absolute left-1/2 flex w-screen -translate-x-1/2 items-center justify-center bg-primaryColor py-4 before:absolute before:top-0 before:z-10 before:h-[1px] before:w-screen before:bg-secondaryColor before:bg-opacity-20 before:content-[""] md:py-10`}
      >
        <h2 className={`fontPreset4 md:fontPreset3 text-secondaryColor`}>
          {category.toUpperCase()}
        </h2>
      </div>
      <div className={`my-16 mt-28 flex flex-col gap-20 md:mt-48`}>
        {products.map((product, index) => {
          const even = (index + 1) % 2 == 0;
          return (
            <PreviewProductCard
              category={category}
              key={product.id}
              data={product}
              reverse={even}
            />
          );
        })}
      </div>
    </>
  );
}
