"use client";

import { AnimatePresence, motion } from "framer-motion";
import CategoryPreviewLinks from "../general/CategoryPreviewLinks";
import { useStore } from "@/context/Store";

export default function MobileNavigation({ closeNavigation, isVisible }) {
  const { stopPropagation } = useStore();

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeNavigation}
            className={`fixed z-30 h-[calc(100dvh-90px)] w-full bg-gray-500 bg-opacity-30`}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4 }}
              onClick={stopPropagation}
              className={`flex min-h-[35%] flex-col items-center justify-center gap-16 rounded-b-md bg-secondaryColor px-4 py-[10vh] md:flex-row landscape:flex-row landscape:py-[10vw]`}
            >
              <CategoryPreviewLinks />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
