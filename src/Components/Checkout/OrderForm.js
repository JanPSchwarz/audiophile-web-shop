"use client";
import checkoutFormData from "@/lib/checkoutFormData";

import { useState, forwardRef } from "react";

import TextInput from "./TextInput";
import RadioIinput from "./RadioInput";
import CashSVG from "@/assets/svgs/icon-cash-on-delivery.svg";

export default forwardRef(function OrderForm({ onSubmit }, formRef) {
  const [isCash, setIsCash] = useState(false);

  function handleIsCash() {
    setIsCash(!isCash);
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        onKeyDown={(event) => {
          if (event.code === "Enter" && formRef.current) {
            onSubmit();
          }
        }}
        ref={formRef}
        className={`grid w-full grid-cols-1 gap-6 rounded-md border-2 p-4 md:grid-cols-2 lg:col-span-2`}
      >
        {checkoutFormData.map(
          ({
            name,
            label,
            type,
            id,
            placeholder,
            alwaysRequired,
            checked,
            extraSpace,
            value,
            validationPattern,
            invalidText,
            conditionalRender,
          }) => {
            return (
              <>
                {type === "sectionHeading" && (
                  <h2
                    key={id}
                    className={`fontPreset7 col-span-1 font-bold text-accentColor md:col-span-2`}
                  >
                    {label}
                  </h2>
                )}
                {type !== "radio" && type !== "sectionHeading" && (
                  <TextInput
                    key={id}
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    required={type !== "tel" && (alwaysRequired || !isCash)}
                    pattern={validationPattern}
                    invalidText={invalidText}
                    hide={conditionalRender && isCash}
                    wrapperClasses={extraSpace && `md:col-span-2`}
                  />
                )}
                {type === "radio" && (
                  <RadioIinput
                    key={id}
                    name={name}
                    label={label}
                    type={type}
                    id={id}
                    value={value}
                    checked={checked}
                    onChange={() => handleIsCash()}
                  />
                )}
              </>
            );
          },
        )}
        {isCash && (
          <>
            <div
              className={`m-2 flex items-start justify-center gap-4 md:col-span-full md:m-8 md:items-center`}
            >
              <CashSVG className={`min-w-12`} />
              <p
                className={`fontPreset7 text-balance text-primaryColor text-opacity-60 md:text-center lg:text-pretty`}
              >
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </>
        )}
      </form>
    </>
  );
});
