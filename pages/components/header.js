import React from "react"
import Image from "next/image"
import Link from "next/link"

const NavItems = [
    {
      title: "work",
      url: "/work",
      cName: "nav-item" 
    },
    {
      title: "blog",
      url: "https://medium.com/@chitru-shrestha",
      cName: "nav-item"
    }
  ]

  
function Header() {
    return(
        <header>
        <main className="main">
            <div className="header">
              <div className="header__logo">
                <Image src="/logo.png" width={120} height={70} alt="logo"/>
              </div>
              <div>
                <ul className="header__menu" >
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
        </header>
    )
}

export default Header