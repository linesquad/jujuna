import { motion } from "framer-motion";

function SkeletonDiv({
  style,
  children,
  firstbg = "#868e96",
  secondBg = "#343a40",
}) {
  const base = "rounded-sm [box-shadow:5px_8px_10px_0px_rgba(0,_0,_0,_0.25)] ";
  return (
    <motion.div
      animate={{
        backgroundColor: [firstbg, secondBg],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={base + style}
    >
      {children}
    </motion.div>
  );
}

export default SkeletonDiv;
