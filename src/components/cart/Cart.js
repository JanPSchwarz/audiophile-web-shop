"use client";

import Modal from "../general/Modal";
import CartItem from "./CartItem";
import LinkButton from "../general/LinkButton";
import { useState, useEffect } from "react";
import { useStore } from "@/context/Store";

export default function Cart({ closeCart }) {
  const [confirmDeletion, setConfirmDeletion] = useState(false);

  const { cart, emptyCart, stopPropagation } = useStore();

  const totalAmount = cart.reduce(
    (memo, { price, quantity }) => memo + price * quantity,
    0,
  );

  useEffect(() => {
    function handleKeyEvent(event) {
      if (event.code === "Escape") {
        closeCart();
      }
    }

    window.addEventListener(`keydown`, handleKeyEvent);

    return () => window.removeEventListener(`keydown`, handleKeyEvent);
  }, [closeCart]);

  const cartEmpty = cart.length === 0;

  function handleShowConfirmMessage() {
    setConfirmDeletion(!confirmDeletion);
  }

  return (
    <>
      <Modal
        className={`m-auto flex h-[100dvh] w-[100dvh] items-center justify-center overflow-x-hidden overflow-y-scroll bg-transparent p-0 animate-in slide-in-from-right`}
        closeModal={closeCart}
      >
        <div
          onClick={stopPropagation}
          className={`relative flex max-h-[100dvh] min-w-[350px] flex-col gap-12 overflow-y-scroll rounded-md bg-secondaryColor p-8 pb-12 md:absolute md:right-0 md:top-[90px]`}
        >
          <div className={`flex w-full justify-between`}>
            <h2 className={`fontPreset6`}>CART({cart.length})</h2>
            {!cartEmpty && (
              <button
                onClick={handleShowConfirmMessage}
                className={`fontPreset7 text-primaryColor text-opacity-70 underline`}
              >
                Remove all
              </button>
            )}
          </div>
          <div
            className={`flex min-h-min flex-col items-center justify-center gap-8 overflow-y-scroll`}
          >
            {!cartEmpty ? (
              cart.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <p className={`fontPreset7 text-primaryColor`}>
                Your cart is empty...
              </p>
            )}
          </div>
          {!cartEmpty && (
            <div className={`flex w-full justify-between`}>
              <p className={`text-primaryColor text-opacity-60`}>TOTAL</p>
              <p className={`fontPreset6 text-primaryColor`}>
                $ {totalAmount.toLocaleString()}
              </p>
            </div>
          )}

          {!cartEmpty && (
            <LinkButton
              href={"/checkout"}
              primary
              highlighted
              text={"CHECKOUT"}
              className={`rounded-sm`}
            />
          )}
          {confirmDeletion && (
            <div
              className={`absolute bottom-1/2 right-1/2 flex min-w-[300px] translate-x-1/2 translate-y-1/2 flex-col items-center justify-center gap-6 border-[3px] border-primaryColor bg-secondaryColor p-12 animate-in spin-in`}
            >
              <p className={`fontPreset7 text-center font-bold`}>
                Delete all Items from Cart?
              </p>
              <div className={`flex gap-8`}>
                <LinkButton
                  button
                  clickFunction={() => {
                    emptyCart();
                    handleShowConfirmMessage();
                  }}
                  text={"YES"}
                  className={`p-2 px-4`}
                />
                <LinkButton
                  button
                  text={"NO"}
                  clickFunction={() => handleShowConfirmMessage()}
                  className={`border-primaryColor p-2 px-4`}
                />
              </div>
            </div>
          )}
          <button
            onClick={closeCart}
            aria-label="close cart modal"
            className={`fontPreset7 absolute bottom-0 right-4 p-2 text-primaryColor text-opacity-60 underline`}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
