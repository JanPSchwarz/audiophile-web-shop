import { twMerge } from "tailwind-merge";

export default function Socials({ socials, className }) {
  return (
    <>
      {socials.map(({ name, logo: Logo, link }) => {
        return (
          <a key={name} href={link}>
            <Logo
              aria-label={`social media link for ${name}`}
              className={twMerge(``, className)}
            />
          </a>
        );
      })}
    </>
  );
}
