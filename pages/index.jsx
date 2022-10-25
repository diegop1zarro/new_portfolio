import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Layout/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return(
    <div>
      <div className={styles.container}>
         <Hero/>
      </div>
      <div className={styles.container}>
         <About/>
      </div>
      <div className={styles.container}>
         <Services/>
      </div>
      <div className={styles.container}>
         <Skills/>
      </div>
      <div className={styles.container}>
         <Projects/>
      </div>
      <div className={styles.container}>
         <Contact/>
      </div>
    </div>
  )
}