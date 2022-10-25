import React from 'react'
import Heading from '../components/Layout/Heading'
import styles from '../styles/Services.module.css'
import {services} from '../components/data/data.js'
export default function Services() {
  return (
    <>
    <section className={styles.services}>
            <Heading title="SERVICES" />
        <div className={styles.container}>
            <div className={styles.content_grid3}>
            {
              services.map((item,i)=>(
                <div className={styles.box} key={i} data-aos='flip-left'>
                  <i>{item.icon}</i>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))
            }
            </div>
        </div>
    </section>
    </>
  )
}
