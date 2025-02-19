"use client";

import DefaultError from "@/components/general/DefaultError";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [url, setURL] = useState();

  useEffect(() => {
    setURL(window.location.href);
  }, []);

  return (
    <>
      <DefaultError
        errorMessage={`404 - requested source doesn't exist:\n\n${url}`}
        notFound={true}
      />
    </>
  );
}
