import React from "react";
import { motion } from "framer-motion";
import "./loaderMe.css";

const LoaderMe = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        transition: {
          duration: 1,
          delay: 2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="loaderMe"
    >
      <div className="containerLoaderMe">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          More Info
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: .8 },
            transitionEnd: { display: "none" },
          }}
          className="loaderText"
        >
          &
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.3 },
          }}
          className="loaderText"
        >
          Contact
        </motion.span>
      </div>
    </motion.section>
  );
};

export default LoaderMe;
