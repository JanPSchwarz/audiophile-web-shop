"use client";

import { createContext, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StorageProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorageState(`audiophile_cart`, {
    defaultValue: [],
  });

  /*
   * modell of object in cart:
   * {product: "xx-59-headphones", number: "1", price: 899}
   */

  function createCartItem(slug, count, price) {
    setCart((prev) => [
      ...prev,
      {
        [`product`]: slug,
        [`quantity`]: count,
        [`price`]: price,
      },
    ]);
  }

  function updateCartItem(slug, count) {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.product === slug
          ? { ...cartItem, [`quantity`]: cartItem.quantity + count }
          : { ...cartItem },
      ),
    );
  }
  function deleteCartItem(slug) {
    setCart((prev) => prev.filter((item) => item.product !== slug));
  }

  function incrementCartItem(slug) {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.product === slug
          ? { ...cartItem, [`quantity`]: cartItem.quantity + 1 }
          : { ...cartItem },
      ),
    );
  }

  function decrementCartItem(slug) {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.product === slug
          ? { ...cartItem, [`quantity`]: cartItem.quantity - 1 }
          : { ...cartItem },
      ),
    );
  }

  function emptyCart() {
    setCart([]);
  }

  const store = {
    cart,
    incrementCartItem,
    decrementCartItem,
    deleteCartItem,
    createCartItem,
    updateCartItem,
    emptyCart,
  };

  return <Store.Provider value={store}>{children}</Store.Provider>;
};
