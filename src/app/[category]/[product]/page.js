import { notFound } from "next/navigation";
import DetailsProductCard from "@/components/productPage/DetailsProductCard";
import getProducts from "@/lib/server-side-fetching/fetchProducts";

export default async function DetailPage({ params }) {
  const { product: productParam, category: categoryParam } = await params;

  const test = await getProducts();

  const productData = test.filter(
    (product) =>
      product.slug === productParam && product.category === categoryParam,
  );

  if (productData.length == 0) notFound();

  return (
    <>
      <DetailsProductCard category={categoryParam} product={productData[0]} />
    </>
  );
}
