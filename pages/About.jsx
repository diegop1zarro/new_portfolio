import React from 'react'
import {about} from '../components/data/data.js'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import Heading from '../components/Layout/Heading.jsx'

export default function About() {
  return (
    <>
    <seccion className={styles.about}>
        <div className={styles.aboutContainer}>
            {
                about.map((val,i)=>(
                    <>
                    <div key={i} className={styles.left} data-aos='fade-up-right'>
                        <Image src={val.cover} alt="img about" width="300px" height="400px" objectFit="cover"/>
                    </div>
                    <div className={styles.right}  data-aos='fade-down-left'>
                        <Heading title="ABOUT ME"/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        <button className={styles.primaryBtn}>Download CV</button>
                    </div>
                    </>
                ))
            }
        </div>
        </seccion>
    </>
  )
}
