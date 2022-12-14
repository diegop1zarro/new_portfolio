import React from 'react'
import Heading from '../components/Layout/Heading'
import styles from '../styles/Projects.module.css'
import { projects } from '../components/data/data'
import Image from 'next/image'

export default function Projects() {
  return (
    <section>
        <div className={styles.container}> 
            <Heading title="PROJECTS" />
            <div className={styles.content_grid3}>
            {projects.map((val , i)=>(
                <div className={styles.box} key={i} data-aos='flip-left'>
                    <div className={styles.img}>
                        <Image src={val.cover} alt="" width='400px' height='300px' objectFit='cover' data-aos='fade-down' /> 
                    </div>
                    <div className={styles.text}>
                        <h3 data-aos='fade-right'>{val.title}</h3>
                        <label data-aos='fade-left'>
                            By {val.author} {val.date}
                        </label>
                        <p data-aos='fade-up-right'>{val.desc}</p>
                    </div>
                    <div className={styles.container_a}>
                        <a href={val.code} target='_blank' rel="noopener noreferrer" className={styles.primaryBtn}>Code</a>
                        <a href={val.page} target='_blank' rel="noopener noreferrer" className={styles.primaryBtn}>Page</a>
                        </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}
