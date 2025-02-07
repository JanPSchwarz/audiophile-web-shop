import CategoryProducts from "@/components/categoryPage/CategoryProducts";
import CategorySkeleton from "@/components/categoryPage/LoadingCategory";

import { Suspense } from "react";

export default async function Category({ params }) {
  const { category } = await params;

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
          <CategoryProducts category={category} />
        </Suspense>
      </div>
      
    </>
  );
}
