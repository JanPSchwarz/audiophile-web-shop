"use client";
import checkoutFormData from "@/lib/checkoutFormData";

import { useState, forwardRef } from "react";

import TextInput from "./TextInput";
import RadioIinput from "./RadioInput";

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
            condtionallyRequired,
            checked,
            extraSpace,
            value,
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
                    required={
                      alwaysRequired || (condtionallyRequired && !isCash)
                    }
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
      </form>
    </>
  );
});
