import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";


export const transObj = {
  initial: { opacity: 0 , scale: 0.8},
  animate: { opacity: 1,scale: 1 },
  exit: { opacity: 0, scale: 0.8},
};



const Transitions = ({ children }) => {
  const location = useLocation();


  const Fade = {
    initial: { opacity: 0 , y: -10 },
    animate: { opacity: 1,  y: 0 },
    exit: { opacity: 0,  y: 110},
  };

  console.log('from transision');

  return (
    <motion.div
      key={location.pathname}
      variants={Fade}
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
