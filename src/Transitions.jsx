import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const Transitions = ({ children }) => {
  const location = useLocation();
  const transObj = {
    initial: { opacity: 0 , scale: 0.8},
    animate: { opacity: 1,scale: 1 },
    exit: { opacity: 0, scale: 0.8},
  };

  console.log('from transision');

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
