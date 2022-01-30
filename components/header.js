import React from "react"
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"

const NavItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-item"
  },
    {
      title: "Work",
      url: "/work",
      cName: "nav-item" 
    },
    {
      title: "Blog",
      url: "https://medium.com/@chitru-shrestha",
      cName: "nav-item"
    }
  ]

  
  const menuVariant = {
    initial: {
      y: -50, 
      opacity: 0 
    },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: 
        { 
          delay: .7,
          ease: [0.6, -0.05, 0.01, 0.95]
        } 
      },
    exit: {
      y: -100,
      opacity: 0,
    }
  }

function Header() {
    return(
        <motion.header
          variants={menuVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
        <main className="main">
            <div className="header">
              <div className="header__logo">
                <Link href="../"><Image src="/logo.png" width={75} height={70} alt="logo"/></Link>
              </div>
              <div>
                <ul className="header__menu">
                  {
                    NavItems.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}><Link href={item.url}>{item.title}</Link></li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
        </main>
        </motion.header>
    )
}

export default Header