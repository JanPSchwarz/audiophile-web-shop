import CategorySkeleton from "@/components/categoryPage/LoadingCategory";
import getProducts from "@/utils/server-side-fetching/fetchProducts";
import PreviewProductCard from "@/components/categoryPage/PreviewProductCard";
import { Suspense } from "react";
import { notFound } from "next/navigation";

export default async function Category({ params }) {
  const { category } = await params;

  const productsData = await getProducts();

  const filteredAndSortedProducts = productsData
    .filter((product) => product.category === category)
    .sort((a, b) => b.new - a.new)
    .sort((a, b) => b.price - a.price);

  if (filteredAndSortedProducts.length === 0) notFound();

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
        <Suspense fallback={<CategorySkeleton />}>
          {filteredAndSortedProducts.map((product, index) => {
            const even = (index + 1) % 2 == 0;
            return (
              <PreviewProductCard
                category={category}
                key={product._uid}
                product={product}
                reverse={even}
              />
            );
          })}
        </Suspense>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  const paths = products.map((product) => ({
    category: product.category,
  }));

  return paths;
}
