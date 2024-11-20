"use client";

import DefaultError from "@/components/general/DefaultError";

export default function ErrorComponent({ error, reset }) {
  return (
    <>
      <DefaultError errorMessage={error.message} reset={reset} />
    </>
  );
}
