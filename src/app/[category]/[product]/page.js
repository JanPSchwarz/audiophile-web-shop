import { notFound } from "next/navigation";
import DetailsProductCard from "@/components/productPage/DetailsProductCard";
import getProducts from "@/lib/server-side-fetching/fetchProducts";

export default async function DetailPage({ params }) {
  const { product: productParam, category: categoryParam } = await params;

  const products = await getProducts();

  const productData = products.filter(
    (product) =>
      product.slug === productParam && product.category === categoryParam,
  );

  return (
    <>
      <DetailsProductCard category={categoryParam} product={productData[0]} />
    </>
  );
}
