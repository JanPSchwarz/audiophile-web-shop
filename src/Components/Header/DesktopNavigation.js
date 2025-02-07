"use client";

import LinkList from "../general/LinkList";
import { motion } from "framer-motion";
import getNavigation from "@/lib/client-side-fetching/fetchNavigation";

export default function DesktopNavigation({ isVisible }) {
  const { navigation: links, isLoading } = getNavigation();

  return (
    <>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex justify-around`}
        >
          <LinkList links={links} />
        </motion.nav>
      )}
    </>
  );
}
