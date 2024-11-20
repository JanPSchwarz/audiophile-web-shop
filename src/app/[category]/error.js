"use client";

import DefaultError from "@/Components/General/DefaultError";

export default function ErrorComponent({ error, reset }) {
  return (
    <>
      <DefaultError errorMessage={error.message} reset={reset} />
    </>
  );
}
