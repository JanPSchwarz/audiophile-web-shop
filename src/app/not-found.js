"use client";

import DefaultError from "@/components/general/DefaultError";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();

  return (
    <>
      <DefaultError
        errorMessage={`404 - requested source doesn't exist:\n\nwww.test.de${path}`}
      />
    </>
  );
}
