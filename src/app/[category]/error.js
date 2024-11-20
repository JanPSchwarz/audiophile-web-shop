"use client";

import DefaultError from "@/components/General/DefaultError";

export default function ErrorComponent({ error, reset }) {
  return (
    <>
      <DefaultError errorMessage={error.message} reset={reset} />
    </>
  );
}
