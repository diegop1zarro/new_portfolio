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
                        <a className={styles.cinta}>
                        <Image src={val.cover} alt="img about" width="300px" height="400px" objectFit="cover"/>
                        </a>
                    </div>
                    <div className={styles.right}  data-aos='fade-down-left'>
                        <Heading title="ABOUT ME"/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        <a href='/files/CV_ingles.pdf' target='_blank' rel="noopener noreferrer" className={styles.primaryBtn}>English CV</a>
                        <a href='/files/CV.pdf' target='_blank' rel="noopener noreferrer" className={styles.primaryBtn}>Spanish CV</a>
                    </div>
                    </>
                ))
            }
        </div>
        </seccion>
    </>
  )
}
