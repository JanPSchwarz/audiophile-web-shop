import DetailsProductCard from "@/components/productPage/DetailsProductCard";
import getProducts from "@/utils/server-side-fetching/fetchProducts";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }) {
  const { product: productParam, category: categoryParam } = await params;

  const products = await getProducts();

  const productData = products.filter(
    (product) =>
      product.slug === productParam && product.category === categoryParam,
  );

  if (productData.length === 0) notFound();

  let test;

  return (
    <>
      <DetailsProductCard category={categoryParam} product={productData[0]} />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  const params = products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));

  return params;
}
