import React from "react"
import Link from "next/link"

const MISC = {
  secret: "The secret of getting ahead is",
  email: "schitru@gmail.com",
  footNote: "Always move forward.",
}

function Social(props) {
  return(
      <div>
          <Link href={props.siteURL}>{props.site}</Link>
      </div>
  )
}

function Footer() {
    return(
        <footer className="footer">
        <main className="main">
          <h3>{MISC.secret} <span>getting started</span></h3>
          <p className="email-link">Hire me now: <Link href="mailto:schitru@gmail.com">schitru@gmail.com</Link></p>
          <div className="footer__social">
            <div><p>Always move forward.</p></div>
            <div><Social site="Github" siteURL="https://github.com/chitru"/> | <Social site="Twitter" siteURL="https://twitter.com/xtru1990" /></div>
          </div>
        </main>
      </footer>
    )
}
export default Footer