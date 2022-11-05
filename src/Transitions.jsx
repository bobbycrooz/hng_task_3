import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const Transitions = ({ children }) => {
  const location = useLocation();
  const transObj = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <motion.div
      key={location.pathname}
      variants={transObj}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Transitions;
