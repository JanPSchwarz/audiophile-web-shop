"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Modal({ children, closeModal, className }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (dialogRef) dialogRef.current.showModal();
  }, []);

  return (
    <dialog
      className={twMerge(
        `flex flex-col backdrop:bg-primaryColor backdrop:bg-opacity-40`,
        className,
      )}
      ref={dialogRef}
      onClick={() => {
        if (closeModal) closeModal();
      }}
    >
      {children}
    </dialog>
  );
}
