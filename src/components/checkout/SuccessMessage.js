"use client";

import Modal from "../general/Modal";
import TickSVG from "@/assets/svgs/icon-order-confirmation.svg";
import LinkButton from "../general/LinkButton";
import CartItem from "../cart/CartItem";
import { useEffect, useState } from "react";
import { useStore } from "@/app/context/Store";

export default function SuccessMessage({ totalAmount }) {
  const [showAllItems, setShowAllItems] = useState(false);

  const { cart, emptyCart } = useStore();

  useEffect(() => {
    //* empties local storage on dismount
    return () => {
      emptyCart();
    };
  }, []);

  return (
    <>
      <Modal className={`animte-in duration-300 zoom-in`}>
        <div
          className={`m-6 grid grid-cols-5 gap-6 md:m-12 md:gap-12`}
          onClick={(event) => event.stopPropagation()}
        >
          <TickSVG />
          <h2
            className={`fontPreset4 md:fontPreset2 col-span-5 text-primaryColor`}
          >
            THANK YOU{" "}
            <span className={`block text-nowrap`}>FOR YOUR ORDER</span>
          </h2>
          <p
            className={`fontPreset7 col-span-5 text-primaryColor text-opacity-60`}
          >
            You will receive an email confirmation shortly.
          </p>
          <div className={`col-span-5 grid md:grid-cols-5`}>
            <div
              className={`col-span-5 flex flex-col items-center justify-center gap-4 rounded-t-md bg-lightColor px-4 py-8 transition-all duration-500 md:col-span-3 md:gap-8 md:rounded-s-md`}
            >
              {cart.map((carItem, index) => {
                return (
                  <>
                    {index === 0 ? (
                      <CartItem key={index} item={carItem} checkout={true} />
                    ) : (
                      <div
                        className={`${showAllItems ? `block` : `hidden`} w-full transition-all duration-500 animate-in zoom-in`}
                      >
                        <CartItem key={index} item={carItem} checkout={true} />
                      </div>
                    )}
                  </>
                );
              })}
              <div
                className={`relative bottom-0 h-[0.1rem] w-full bg-primaryColor bg-opacity-20`}
              />
              {cart.length > 1 && (
                <>
                  <button
                    className={`fontPreset7 font-semibold text-primaryColor text-opacity-60 transition-all`}
                    onClick={() => setShowAllItems(!showAllItems)}
                  >
                    {showAllItems
                      ? `show less`
                      : `and ${cart.length - 1} other item(s)`}
                  </button>
                </>
              )}
            </div>
            <div
              className={`col-span-5 flex flex-col justify-end gap-4 rounded-b-md bg-primaryColor px-6 py-8 md:col-span-2 md:rounded-e-md`}
            >
              <p
                className={`fontPreset6 md:fontPreset5 text-secondaryColor text-opacity-70`}
              >
                GRAND TOTAL
              </p>
              <p className={`fontPreset6 md:fontPreset5 text-secondaryColor`}>
                ${totalAmount.toLocaleString()}
              </p>
            </div>
          </div>
          <LinkButton
            href={"/"}
            className={`col-span-full rounded-sm`}
            primary
            highlighted
            text={"BACK TO HOME"}
          />
        </div>
      </Modal>
    </>
  );
}
