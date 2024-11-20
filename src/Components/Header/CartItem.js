import cartImages from "@/lib/cartImages";

import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import ProductCount from "../general/ProductCount";
import useLocalStorageState from "use-local-storage-state";

export default function CartItem({ item, checkout }) {
  const { product: productName, number, price } = item;

  const { image, abbreviation } = cartImages.filter(
    ({ slug }) => slug === productName,
  )[0];

  const [cart, setCart] = useLocalStorageState(`audiophile_cart`);

  function incrementProductCount() {
    setCart((prev) =>
      prev.map((item) =>
        item.product === productName
          ? { ...item, [`number`]: number + 1 }
          : { ...item },
      ),
    );
  }

  function decremenProductCount() {
    if (number === 0) return;

    setCart((prev) =>
      prev.map((item) =>
        item.product === productName
          ? { ...item, [`number`]: number - 1 }
          : { ...item },
      ),
    );
  }

  function deleteProductFromCart() {
    setCart((prev) => prev.filter((item) => item.product !== productName));
  }

  function keepItemInCart() {
    setCart((prev) =>
      prev.map((item) =>
        item.product === productName ? { ...item, [`number`]: 1 } : { ...item },
      ),
    );
  }

  return (
    <>
      <div
        className={`relative flex w-full items-center justify-between gap-2 overflow-x-hidden`}
      >
        <ResponsiveStaticImage
          alt={productName}
          defaultSrc={image}
          className={`max-w-16 rounded-md`}
        />
        <div className={`flex flex-1 flex-col`}>
          <p
            className={`fontPreset7 text-nowrap text-left font-semibold text-primaryColor`}
          >
            {abbreviation}
          </p>
          <p
            className={`fontPreset7 text-nowrap text-left text-primaryColor text-opacity-60`}
          >
            $ {price.toLocaleString()}
          </p>
        </div>
        {checkout ? (
          <p className={`fontPreset7 text-primaryColor text-opacity-70`}>
            x{number}
          </p>
        ) : (
          <ProductCount
            count={number}
            increment={() => incrementProductCount()}
            decrement={() => decremenProductCount()}
            className={`rounded-sm px-3 py-2`}
          />
        )}
        {number === 0 && (
          <div
            className={`absolute right-0 flex justify-center gap-4 bg-secondaryColor animate-in slide-in-from-right`}
          >
            <button
              aria-label="keep item in cart"
              onClick={() => {
                keepItemInCart();
              }}
              className={`min-w-16 rounded-md bg-green-300 p-2`}
            >
              Keep
            </button>
            <button
              aria-label="delete item from cart"
              onClick={() => {
                deleteProductFromCart();
              }}
              className={`rounded-md bg-red-300 p-2`}
            >
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
}
