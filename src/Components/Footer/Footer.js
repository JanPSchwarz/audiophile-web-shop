import LinkList from "../General/LinkList";
import Socials from "./Socials";

import Logo from "@/assets/svgs/logo.svg";
import InstagramIcon from "@/assets/svgs/icon-instagram.svg";
import FaceBookIcon from "@/assets/svgs/icon-facebook.svg";
import TwitterIcon from "@/assets/svgs/icon-twitter.svg";

export default function Footer() {
  const socials = [
    { name: "facebook", logo: FaceBookIcon, link: "" },
    { name: "twitter", logo: TwitterIcon, link: "" },
    { name: "instagram", logo: InstagramIcon, link: "" },
  ];

  return (
    <>
      <footer
        className={`relative flex w-full flex-col items-center justify-center gap-12 bg-primaryColorLight px-10 py-12 before:absolute before:top-0 before:h-1 before:w-1/4 before:max-w-[100px] before:bg-accentColor before:content-[""] md:items-start lg:px-24`}
      >
        <div
          className={`flex w-full flex-col items-center justify-center gap-12 md:items-start lg:flex-row lg:justify-between`}
        >
          <div className={``}>
            <Logo className={``} />
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-4 md:flex-row`}
          >
            <LinkList className={`fontPreset9`} />
          </div>
        </div>
        <div
          className={`fontPreset7 flex flex-col flex-wrap items-start justify-start gap-12 text-pretty text-center text-secondaryColor text-opacity-60 md:justify-start md:text-left lg:max-w-[40vw]`}
        >
          <p className={``}>
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
        </div>
        <div
          className={`fontPreset7 flex w-full flex-col items-center justify-center gap-12 text-secondaryColor text-opacity-60 md:flex-row md:justify-between`}
        >
          <p className={``}>Copyright 2021. All Rights Reserved</p>
          <div className={`flex gap-4 lg:-translate-y-12 lg:scale-110`}>
            <Socials socials={socials} />
          </div>
        </div>
      </footer>
    </>
  );
}
