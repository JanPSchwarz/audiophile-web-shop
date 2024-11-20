"use client";

import { twMerge } from "tailwind-merge";

export default function ProductCount({
  count,
  increment,
  decrement,
  className,
}) {
  return (
    <>
      <div
        className={twMerge(
          `grid grid-cols-3 items-center justify-center gap-4 rounded-sm bg-lightColor`,
          className,
        )}
      >
        <button
          aria-label="decrease number of products to add to cart"
          onClick={decrement}
          className={`fontPreset7 text-primaryColor text-opacity-50`}
        >
          -
        </button>
        <p className={`fontPreset6 text-center text-primaryColor`}>{count}</p>
        <button
          aria-label="increase number of products to add to cart"
          onClick={increment}
          className={`fontPreset7 text-primaryColor text-opacity-50`}
        >
          +
        </button>
      </div>
    </>
  );
}
