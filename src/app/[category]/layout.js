"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import CategoryPreviewLinks from "@/Components/General/CategoryPreviewLinks";

import data from "@/lib/data";

export default function Layout({ children }) {
  const allParams = useParams();
  const router = useRouter();

  const { category: categoryParam, slug: slugParam } = allParams;

  /* 
  note:
  Route-Validation is based directly on product-data (resolves in no data available practically). Should be changed to other data to rely on or hard-coded array to handle errors more detailed more sensible.
   */
  const whiteList = {
    category: getValidationArray("category", data),
    product: getValidationArray("slug", data),
  };

  //* redirects user to correct URL if first route segment contains product name
  if (
    Object.keys(allParams).length === 1 &&
    whiteList.product.includes(categoryParam)
  ) {
    const correctCategory = data.find(
      ({ slug }) => slug === categoryParam,
    ).category;

    const productName = categoryParam;

    router.push(`/${correctCategory}/${productName}`);
  }

  //* validates every route segment seperately
  for (const key in allParams) {
    validateRoute(allParams[key], whiteList[key]);
  }

  //* check if route segment exists an array-oject
  function validateRoute(routeSegment, validationArray) {
    if (!validationArray.includes(routeSegment)) notFound();
  }

  //* returns array of strings for validation reference
  function getValidationArray(key, data) {
    //* Set erases double values from map-array
    return [...new Set(data.map((entry) => entry[key]))];
  }

  return (
    <>
      {children}{" "}
      <div className={`mt-36 flex flex-col gap-16 md:flex-row lg:mt-56`}>
        <CategoryPreviewLinks />
      </div>
    </>
  );
}
