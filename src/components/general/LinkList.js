import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function LinkList({ className, links }) {
  return (
    <>
      {links?.map(({ name, href }, i) => {
        return (
          <Link
            key={i}
            href={href}
            className={twMerge(`fontPreset8 text-secondaryColor`, className)}
          >
            {name.toUpperCase()}
          </Link>
        );
      })}
    </>
  );
}
