"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Modal({ children, closeModal, className }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (dialogRef) dialogRef.current.showModal();
  }, []);

  function handleClose() {
    if (closeModal) closeModal();
  }

  function handleKeyEvent(event) {
    if (event.code === "Escape" && dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      className={twMerge(
        `flex flex-col backdrop:bg-primaryColor backdrop:bg-opacity-40`,
        className,
      )}
      ref={dialogRef}
      onClick={handleClose}
      onKeyDown={handleKeyEvent}
    >
      {children}
    </dialog>
  );
}
