import LinkList from "../general/LinkList";
import Socials from "./Socials";

import getFooterContent from "@/lib/server-side-fetching/fetchFooterContent";
import getNavigationContent from "@/lib/server-side-fetching/fetchNavigationContent";

import Logo from "@/assets/svgs/logo.svg";
import InstagramIcon from "@/assets/svgs/icon-instagram.svg";
import FaceBookIcon from "@/assets/svgs/icon-facebook.svg";
import TwitterIcon from "@/assets/svgs/icon-twitter.svg";

export default async function Footer() {
  const footerData = await getFooterContent();
  const navigationContent = await getNavigationContent();

  const { text, socials } = footerData;
  const { navigation_links } = navigationContent;

  const icons = {
    facebook: FaceBookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
  };

  const socialsWithIcons = socials.map((entry) => ({
    ...entry,
    logo: icons[entry.name],
  }));

  const year_now = new Date().getFullYear();

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
            <LinkList links={navigation_links} className={`fontPreset9`} />
          </div>
        </div>
        <div
          className={`fontPreset7 flex flex-col flex-wrap items-start justify-start gap-12 text-pretty text-center text-secondaryColor text-opacity-60 md:justify-start md:text-left lg:max-w-[40vw]`}
        >
          <p className={``}>{text}</p>
        </div>
        <div
          className={`fontPreset7 flex w-full flex-col items-center justify-center gap-12 text-secondaryColor text-opacity-60 md:flex-row md:justify-between`}
        >
          <p className={``}>Copyright {year_now}. All Rights Reserved</p>
          <div className={`flex gap-4 lg:-translate-y-12 lg:scale-110`}>
            <Socials socials={socialsWithIcons} />
          </div>
        </div>
      </footer>
    </>
  );
}
