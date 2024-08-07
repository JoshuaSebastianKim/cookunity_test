import { motion } from "framer-motion";
import { fadeIn } from "../_animations/fadeIn";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function Loading(_props, ref) {
  return (
    <motion.div
      className="min-h-80 flex justify-center items-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn}
      ref={ref}
    >
      No results
    </motion.div>
  );
});
