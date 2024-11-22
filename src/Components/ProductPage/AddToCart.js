"use client";

import ProductCount from "../general/ProductCount";
import LinkButton from "../general/LinkButton";
import { useReducer } from "react";
import { useStore } from "@/app/context/Store";

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

  const { cart, createCartItem, updateCartItem } = useStore();

  //* creates [{product: "xx59-headphones, number: 1"}, {...}]
  function addProductToCart() {
    if (count === 0) return;
    //* creates new object if not yet existing
    else if (!cart.map((item) => item.product).includes(productSlug)) {
      createCartItem(productSlug, count, productPrice);
    } else {
      //* transforms object if existing
      updateCartItem(productSlug, count);
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
