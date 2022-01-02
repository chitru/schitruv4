import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Skill from './components/skill'
import Footer from './components/footer'
import Header from './components/header'
import { MISC } from './components/misc'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Chitru Shrestha</title>
        <meta name="description" content="Chitru Shrestha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <section>
        <main className="main">
          <div className="hero">
            <div className="hero__text">
              <h3>Lets scale, together</h3>
              <h1>TIMELESS DESIGNS</h1>
            </div>
            <div className="hero__img">
              <Image src="/slide.png" width="500" height="400"/>
            </div>
          </div>
        </main>
      </section>

      <section className='quote'>
        <main className="main">
                <div className='mark'><Image src="/quo.png" width="32" height="32"/></div>
                <p>I create designs that will enchant your eyes,<br/>
                  enhance your business with less effort possible. <br/><br/>
                  I believe beauty is in simplicity.
                </p>
        </main>
      </section>
      
      <section className="latest-work">
        <main className="main">
                <h2 className="headings">Latest Works</h2>
                <div className='latest-work__images'>
                  <div className='image-container'>
                    <Image src="/work1.png"  layout="responsive" width="275" height="352" />
                    {/* <img src="/work1.png"/> */}
                  </div>
                  <div>
                    <Image src="/work2.png" layout="responsive" width="1250" height="800"/>
                    {/* <img src="/work2.png"/> */}
                  </div>
                </div>
        </main>
      </section>

      <section className="about">
        <main className="main">
                <h2 className="headings">I'm Full Stack Web Developer specialised in: </h2>
                <div className="about__col">
                  <div>
                    <Skill skillTitle="Wireframing" skillDetails="Figma, Adobe XD, Sketch"/>
                    <Skill skillTitle="Image, Vector, Video" skillDetails="Adobe Photoshop, Adobe Illustrator, Adobe Premier Pro"/>
                    <Skill skillTitle="Front End, Landing Page, Newsletter, Forms" skillDetails="HTML, CSS, JavaScript, AJAX"/>
                    <Skill skillTitle="Libraries, Frameworks &amp; APIs" skillDetails="Nodejs, GraphQL, REST API"/>
                  </div>
                  <div>
                    <Skill skillTitle="Backend" skillDetails="Wordpress with WooCommerce, Django"/>
                    <Skill skillTitle="SSG’s and others" skillDetails="Gatsby, Shopify, Squarespace,  SCSS, LESS, 
  GIT, Heroku, cPanel "/>
                  </div>
                </div>
        </main>
      </section>
    <Footer/>
    </div>
  )
}
