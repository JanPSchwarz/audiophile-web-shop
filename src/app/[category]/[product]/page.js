import { notFound } from "next/navigation";
import DetailsProductCard from "@/components/productPage/DetailsProductCard";

import data from "@/lib/data";

export default async function DetailPage({ params }) {
  const { product, category } = await params;

  const productData = data.filter(
    (entry) => entry.slug === product && entry.category === category,
  );

  if (productData.length == 0) notFound();

  return (
    <>
      <DetailsProductCard category={category} product={productData[0]} />
    </>
  );
}
