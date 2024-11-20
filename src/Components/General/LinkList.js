import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function LinkList({ className }) {
  const linkList = [
    { name: "home", href: "/" },
    { name: "headphones", href: "/headphones" },
    { name: "speakers", href: "/speakers" },
    { name: "earphones", href: "/earphones" },
  ];

  return (
    <>
      {linkList.map(({ name, href }, i) => {
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
