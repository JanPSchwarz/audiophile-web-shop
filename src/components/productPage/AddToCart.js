"use client";

import ProductCount from "../general/ProductCount";
import LinkButton from "../general/LinkButton";
import { useReducer } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function AddToCart({ product }) {
  const [count, dispatch] = useReducer(reducer, 1);

  const { slug: productSlug, price: productPrice } = product;

  function reducer(state, action) {
    switch (action) {
      case "decrement":
        return state > 1 ? state - 1 : state;
      case "increment":
        return state + 1;

      default:
        throw new Error(`Unknown action argument: ${action}`);
    }
  }

  const [cart, setCart] = useLocalStorageState(`audiophile_cart`, {
    defaultValue: [],
  });

  //* creates [{product: "xx59-headphones, number: 1"}, {...}]
  function addProductToCart() {
    if (count === 0) return;
    //* creates new object if not yet existing
    else if (!cart.map((item) => item.product).includes(productSlug)) {
      setCart((prev) => [
        ...prev,
        {
          [`product`]: productSlug,
          [`number`]: count,
          [`price`]: productPrice,
        },
      ]);
    } else {
      //* transforms object if existing
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.product === productSlug
            ? { ...cartItem, [`number`]: cartItem.number + count }
            : { ...cartItem },
        ),
      );
    }
  }

  return (
    <>
      <ProductCount
        count={count}
        increment={() => dispatch("increment")}
        decrement={() => dispatch("decrement")}
        className={`min-w-28 lg:min-w-36`}
      />
      <LinkButton
        button
        clickFunction={addProductToCart}
        primary
        highlighted
        text={"ADD TO CART"}
        className={`lg:min-w-44`}
      />
    </>
  );
}
