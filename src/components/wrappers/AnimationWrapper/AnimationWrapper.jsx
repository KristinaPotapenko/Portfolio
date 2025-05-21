import { motion, AnimatePresence } from "framer-motion";

export const AnimationWrapper = ({ projects, activeSlide, children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.li
        key={projects[activeSlide].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.li>
    </AnimatePresence>
  );
};
