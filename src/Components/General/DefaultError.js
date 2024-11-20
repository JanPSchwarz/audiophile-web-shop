"use client";

import ErrorSvg from "@/assets/svgs/alert-circle-outline.svg";
import LinkButton from "./LinkButton";
import { useRouter } from "next/navigation";

export default function DefaultError({ reset, errorMessage }) {
  const router = useRouter();
  console.log(errorMessage);
  return (
    <>
      <div
        className={`my-16 flex flex-col items-center justify-center gap-16 lg:w-3/4`}
      >
        <h2 className={`md:fontPreset3 fontPreset4`}>
          Sorry, there was a mistake loading the resource.
        </h2>
        <div
          className={`flex w-full flex-col items-center justify-center gap-4 md:flex-row landscape:flex-row`}
        >
          <ErrorSvg className={`size-1/3 fill-red-500 md:flex-1`} />
          <div
            className={`flex flex-col items-start justify-center gap-12 md:flex-[2]`}
          >
            <h2 className={`fontPreset6 text-primaryColor`}>Error</h2>
            <p
              className={`fontPreset5 max-w-full whitespace-pre-line text-pretty break-words break-all text-primaryColor`}
            >
              {errorMessage}
            </p>
            <div className={`flex w-full items-center justify-center gap-4`}>
              <LinkButton
                href={"/"}
                highlighted
                primary
                text={"HOMEPAGE"}
                className={`max-w-80 flex-1`}
              />
              {reset ? (
                <LinkButton
                  button
                  text={"TRY AGAIN"}
                  className={`max-w-80 flex-1`}
                  clickFunction={reset}
                />
              ) : (
                <LinkButton
                  button
                  text={"GO BACK"}
                  className={`max-w-80 flex-1`}
                  clickFunction={router.back}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
