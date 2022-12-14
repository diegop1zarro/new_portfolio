import React from 'react'
import {home} from './data/data.js'
import styles from '../styles/Hero.module.css'
// import TypeWriter from 'TypeWriter-effect'

export default function Hero() {
  return (
    <>
        <seccion className={styles.hero}>
            {
                home.map((val,i)=>(
                    <div key={i} className={styles.heroContainer}>
                        <h3 style={{"font-size":"30px"}} data-aos='fade-right'>{val.text}</h3>
                        <h1 data-aos='fade-up-right'>
                            {val.name}
                            {/* <TypeWriter 
                            options={{strings:[`${val.name}`,`${val.post}`,`${val.design}`],
                            autoStart:true , loop: true
                              }}/> */}
                        </h1>
                        <h2 data-aos='fade-left'>{val.post}, {val.design}</h2>
                        <p>{val.desc}</p>
                        <div className={styles.container_a}>
                        <a href='/files/CV_ingles.pdf' target='_blank' rel="noopener noreferrer" className={styles.primaryBtn}>English CV</a>
                        <a href='/files/CV.pdf' target='_blank' rel="noopener noreferrer" className={styles.primaryBtn}>Spanish CV</a>               
                        </div>     
                     </div>
                ))
            }
        </seccion>
    </>
  )
}
