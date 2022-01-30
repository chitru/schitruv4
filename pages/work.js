import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider/slider";
import { motion } from "framer-motion";

const item = {
  hidden: { 
    y:200, 
    opacity: 0 
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
        ease: [.6, 0.1, -.05, 0.95],
    }
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut"
    }
  }
}

function Work() {
  const [toggleState, setToggleState] = useState(1);

  const handleClick = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Header />

      <motion.main className="main work"
      variants={item}
      initial="hidden"
      animate="animate"
      >
        <div className="tab-title">
          <ul>
            <li
              className={toggleState === 1 ? "active-tab" : ""}
              onClick={() => {
                handleClick(1);
              }}
            >
              UI/UX Design
            </li>
            <li
              className={toggleState === 2 ? "active-tab" : ""}
              onClick={() => {
                handleClick(2);
              }}
            >
              Design
            </li>
            {/* <li
              className={toggleState === 3 ? "active-tab" : ""}
              onClick={() => {
                handleClick(3);
              }}
            >
              Marketing
            </li> */}
          </ul>
        </div>
        <div className="tab-content">
          <div className={toggleState === 1 ? "active-content" : "content"}>
            <Slider />
          </div>
          <div className={toggleState === 2 ? "active-content" : "content"}>
            Coming Soon
          </div>
          <div className={toggleState === 3 ? "active-content" : "content"}>
            Coming Soon
          </div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default Work;


