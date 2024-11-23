"use client";

import cartImages from "@/lib/cartImages";

import ResponsiveStaticImage from "../general/ResponsiveStaticImage";
import ProductCount from "../general/ProductCount";
import { useStore } from "@/context/Store";

import DeleteIcon from "@/assets/svgs/x-circle.svg";

export default function CartItem({ item, checkout }) {
  const { product: productName, quantity, price } = item;

  const { image, abbreviation } = cartImages.filter(
    ({ slug }) => slug === productName,
  )[0];

  const { incrementCartItem, decrementCartItem, deleteCartItem } = useStore();

  function handleAddProduct() {
    incrementCartItem(productName);
  }

  function handleSubtractProduct() {
    if (quantity === 0) return;
    decrementCartItem(productName);
  }

  function deleteProduct() {
    deleteCartItem(productName);
  }

  function keepItemInCart() {
    incrementCartItem(productName);
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
            x{quantity}
          </p>
        ) : (
          <ProductCount
            count={quantity}
            increment={() => handleAddProduct()}
            decrement={() => handleSubtractProduct()}
            className={`w-[35%] gap-0 rounded-sm px-1 py-2`}
          />
        )}
        {quantity === 0 && (
          <div
            className={`absolute right-0 flex justify-center gap-4 bg-secondaryColor animate-in slide-in-from-right`}
          >
            <button
              aria-label="keep item in cart"
              onClick={keepItemInCart}
              className={`min-w-16 rounded-md bg-green-300 p-2 hover:text-secondaryColor`}
            >
              Keep
            </button>
            <button
              aria-label="delete item from cart"
              onClick={deleteProduct}
              className={`rounded-md bg-red-300 p-2`}
            >
              <DeleteIcon className={`size-7 hover:fill-secondaryColor`} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
