import PreviewProductCard from "@/components/categoryPage/PreviewProductCard";
import getProducts from "@/lib/server-side-fetching/fetchProducts";

export default async function CategoryProducts({ category }) {
  const data = await getProducts();

  // sorts after 'new'-key (truthy first) and 'price'-key (highest first)
  const products = data
    .filter((product) => product.category === category)
    .sort((a, b) => b.new - a.new)
    .sort((a, b) => b.price - a.price);

  if (products.length == 0) throw new Error("Loading data not possible.");

  return (
    <>
      {products.map((product, index) => {
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
    </>
  );
}
