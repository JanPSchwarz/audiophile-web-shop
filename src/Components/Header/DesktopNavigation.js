import LinkList from "../general/LinkList";
import { motion } from "framer-motion";

export default function DesktopNavigation({ isVisible }) {
  return (
    <>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex justify-around`}
        >
          <LinkList />
        </motion.nav>
      )}
    </>
  );
}
