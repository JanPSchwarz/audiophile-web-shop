"use client";

import LinkList from "../general/LinkList";
import { motion } from "framer-motion";
import useSWR from "swr";
import { fetcher } from "@/utils/SWRfetcher";

export default function DesktopNavigation({ isVisible }) {
  const { data, error, isLoading } = useSWR(`/api/navigation`, fetcher);

  const links = data?.navigation_links;

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
