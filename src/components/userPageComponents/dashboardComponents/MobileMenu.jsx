import { motion } from "framer-motion";
import UserPageMenu from "./UserPageMenu";
import { FaTimes } from "react-icons/fa";

function MobileMenu({ setIsMenuOpen }) {
  return (
    <motion.div
      variants={{
        open: {
          x: "0%",
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
        closed: {
          x: "100%",
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
      }}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed top-0 left-0 bg-[#fff] z-[150] w-full h-screen"
    >
      <div
        className="absolute top-3 right-3"
        onClick={() => setIsMenuOpen(false)}
      >
        <FaTimes />
      </div>
      <UserPageMenu setIsMenuOpen={setIsMenuOpen} />
    </motion.div>
  );
}

export default MobileMenu;
