import Head from "next/head"
import Image from "next/image"
import Footer from "./components/footer"
import Header from "./components/header"
import Skill from "./components/skill"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react"

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

export default function Home() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  
  const fadeInUp = {
    initial: {
          y: 50,
    opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.9,
          ease: easing
      }
  }
}

const stagger = {
  animate: {
      transition: {
          staggerChildren: 0.1
      }
  }
}


  return (
    <motion.div
      exit={{opacity: 0}}
      initial='initial'
      animate='animate'
    >
      <Head>
        <title>Chitru Shrestha</title>
        <meta name="description" content="Chitru Shrestha" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>

      <FadeDiv>
      <section>
        <main className="main">
          <div className="hero">
            <motion.div className="hero__text" initial={{ x:-60, opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                transition={{delay: .7}}
                variant={stagger}>
              <h3>Lets scale, together</h3>
              <h1>TIMELESS DESIGNS</h1>
            </motion.div>
            <div className="hero__img">
              <motion.img 
                initial={{ x:-60, opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                transition={{delay: .9}}
                variant={stagger}
              src="/slide.png" width="500" height="400"/>
            </div>
          </div>
        </main>
      </section>
      </FadeDiv>

      <FadeDiv>
      <section className="quote">
        <main className="main">
                <div className="mark"><Image src="/quo.png" width="32" height="32"/></div>
                <p>I create designs that will enchant your eyes,<br/>
                  enhance your business with less effort possible. <br/><br/>
                  I believe beauty is in simplicity.
                </p>
        </main>
      </section>
      <section className="latest-work" variants={{stagger}}>
        <main className="main">
                <FadeDiv>
                <h2 className="headings">Latest Works</h2>
                <div className="latest-work__images">
                  <div className="image-container">
                    <img src="/work1.png" alt="picture.tools"/>
                  </div>
                  <div className="image-container">
                    <img src="/work2.png" alt="Aporia - Helping Creator Economy"/>
                  </div>
                </div>
                </FadeDiv>
        </main>
      </section>
      </FadeDiv>

      <section className="about">
        <main className="main">
                <FadeDiv>
                <h2 className="headings">I"m Full Stack Web Developer specialised in: </h2>
                <div className="about__col">
                  <div>
                    <Skill skillTitle="Wireframing" skillDetails="Figma, Adobe XD, Sketch"/>
                    <Skill skillTitle="Image, Vector, Video" skillDetails="Adobe Photoshop, Illustrator, Premier Pro"/>
                    <Skill skillTitle="Front End, Landing Page, Newsletter, Forms" skillDetails="HTML, CSS, JavaScript, AJAX"/>
                    <Skill skillTitle="Libraries, Frameworks & APIs" skillDetails="ReactJS, NodeJS, GraphQL, REST API"/>
                  </div>
                  <div>
                    <Skill skillTitle="Backend" skillDetails="Wordpress with WooCommerce"/>
                    <Skill skillTitle="SSG’s and others" skillDetails="Gatsby, SCSS, LESS, GIT, Heroku, cPanel "/>
                  </div>
                </div>
                </FadeDiv>
        </main>
      </section>
    <Footer/>
    </motion.div>
  )
}
