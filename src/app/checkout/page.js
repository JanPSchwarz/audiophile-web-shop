"use client";
import { useRef, useState } from "react";
import { useStore } from "../context/Store";

import OrderForm from "@/components/checkout/OrderForm";
import Summary from "@/components/checkout/Summary";
import GoBack from "@/components/general/GoBack";
import SuccessMessage from "@/components/checkout/SuccessMessage";

export default function Checkout() {
  const { cart } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalAmount = cart.reduce(
    (memo, { price, quantity }) => memo + price * quantity,
    0,
  );

  //* ref from OrderForm component
  const formRef = useRef();

  //* gets form data from the ref
  function handleSubmit() {
    const form = formRef.current;

    if (!form || cart.length === 0) return;
    else if (!form.reportValidity()) return;
    else {
      const formData = new FormData(form);

      const data = Object.fromEntries(formData.entries());

      //* only loggs data to the console for know
      console.log("Your Fake-Order:");
      console.table(cart);
      console.table(data);

      //* triggers success message
      setIsSubmitted(true);
    }
  }

  return (
    <>
      <div>
        <div className={`my-4 flex flex-col gap-4`}>
          <GoBack href={"/"} />
          <h1 className={`fontPreset5 text-primaryColor`}>CHECKOUT</h1>
        </div>
        <div
          className={`my-8 grid w-full grid-cols-1 items-start justify-start gap-6 lg:grid-cols-3`}
        >
          <OrderForm onSubmit={handleSubmit} ref={formRef} />
          <Summary
            onSubmit={handleSubmit}
            totalAmount={totalAmount}
            cart={cart}
          />
        </div>
        {isSubmitted && <SuccessMessage totalAmount={totalAmount} />}
      </div>
    </>
  );
}
