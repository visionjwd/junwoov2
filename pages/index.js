import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/Home.module.css'

import About from '../Components/About'
import Projects from '@/Components/Projects'
import Media from '@/Components/Media'
import Contact from '@/Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>JunWoo&#39;s Website</title>
        <meta name="description" content="JunWoo's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className = {style.home}>
        <div className = {style.main}>
          <div className = {style.centre}>
          <p>- Portfolio -</p>
          <h1>Hi, I&#39;m <span id = "letter">J</span>
                          <span id = "letter">u</span>
                          <span id = "letter">n</span>
                          <span id = "letter">W</span>
                          <span id = "letter">o</span>
                          <span id = "letter">o</span>
                          <br/><span>Engineer</span>,<span> Developer</span>,<span> Creator</span> </h1>
          <Link href = '/#projects'>
            <button>Explore</button>
          </Link>
          </div>
        </div>
        <About/>
        <Projects/>
        <Media/>
        <Contact/>
      </main>
    </>
  )
}
