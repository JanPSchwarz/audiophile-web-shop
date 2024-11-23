"use client";

import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function LinkButton({
  text,
  className,
  primary,
  highlighted,
  href,
  button,
  clickFunction,
  ...props
}) {
  if (button && typeof button !== `boolean`)
    throw new Error("Either make button = true or erase it from passed props.");

  //* defines html tag being either the built in Link component or a <button>
  const Tag = (props) => {
    return button ? <button {...props}></button> : <Link {...props} />;
  };

  function handleOnClick() {
    if (clickFunction) clickFunction();
  }

  return (
    <>
      <Tag
        href={!button ? href : undefined}
        onClick={handleOnClick}
        className={twMerge(
          `fontPreset9 p-3 px-6 text-center font-semibold text-secondaryColor hover:text-secondaryColor`,
          primary
            ? `${highlighted ? `bg-accentColor hover:bg-accentColorLight` : `bg-primaryColor hover:bg-slate-600`}`
            : `border border-primaryColor bg-transparent text-primaryColor hover:bg-primaryColor hover:text-secondaryColor`,
          className,
        )}
        {...props}
      >
        {text}
      </Tag>
    </>
  );
}
