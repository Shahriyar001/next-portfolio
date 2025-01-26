import { delay, motion } from "framer-motion";
import React from "react";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calcutate the reverse index for staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stories. 
    each div will have the same animation defined by the stairsAnimation object. 
    the delay got each div is calculated sinamically bsed on it's reversed index creating a stronger effect with decresing delay for each subsecquebse step  */}
      {[...Array(6)].map((_, index) => {
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInput",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />;
      })}
    </>
  );
};

export default Stairs;
