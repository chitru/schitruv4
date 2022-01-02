import React from 'react'
import Link from 'next/link'
import Social from './social'
import { MISC } from './misc'

function Footer() {
    return(
        <footer className="footer">
        <main className="main">
          <h3>{MISC.secret} <span>getting started</span></h3>
          <p className="email-link">Hire me now: <Link href="mailto:schitru@gmail.com">schitru@gmail.com</Link></p>
          <div className="footer__social">
            <div><p>Always move forward.</p></div>
            <div><Social site="Github" url="https://github.com/chitru"/> | <Social site="Twitter" url="https://twitter.com/xtru1990" /></div>
          </div>
        </main>
      </footer>
    )
}
export default Footer