import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider/slider";
import SliderDesign from "../components/slider/sliderDesign";
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
import Head from "next/head";

function FadeDiv({ children, ...props }) {
  const fadingUp = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      animate={controls}
      variants={fadingUp}
      initial="hidden"
    >{children}</motion.div>
      )
}


const easing = [0.6, -0.05, 0.01, 0.99];

const item = {
  initial: {
    y: 50,
  opacity: 0,
  },
  animate: {
  y: 0,
  opacity: 1,
  transition: {
      duration: 0.5,
      ease: easing
  }
}
};

function Work() {
  const [toggleState, setToggleState] = useState(1);

  const handleClick = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Head>
        <title>Works | Chitru Shrestha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <FadeDiv>
      <motion.main
        className="main work"
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
          <SliderDesign/>
          </div>
          <div className={toggleState === 3 ? "active-content" : "content"}>
            Coming Soon
          </div>
        </div>
      </motion.main>
      </FadeDiv>
      <Footer />
    </div>
  );
}

export default Work;
