import React from "react";
import { motion } from "framer-motion";
import "./LoaderHome.css";

const LoaderHome = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        transition: { duration: 1, delay: 2 },
      }}
      exit={{ y: window.innerWidth }}
      className="loaderHome"
    >
      <div className="containerLoaderHome">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: { display: "none" },
          }}
          transition={{ duration: 1 }}
          className="loaderText"
        >
          Halo
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: { display: "none" },
          }}
          transition={{ duration: 1 }}
          className="loaderText"
        >
          Hello
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: { display: "none" },
          }}
          transition={{ duration: 1 }}
          className="loaderText"
        >
          مرحبًا
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: { display: "none" },
          }}
          transition={{ duration: 1 }}
          className="loaderText"
        >
          Bonjur
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7 },
          }}
          transition={{ duration: 1 }}
          className="loaderText"
        >
          こんにちは
        </motion.span>
      </div>
    </motion.section>
  );
};

export default LoaderHome;
