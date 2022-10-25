import React from 'react'
import Heading from '../components/Layout/Heading'
import styles from '../styles/Projects.module.css'
import { blog } from '../components/data/data'
import Image from 'next/image'

export default function Projects() {
  return (
    <section>
        <div className={styles.container}> 
            <Heading title="PROJECTS" />
            <div className={styles.content_grid3}>
            {blog.map((val , i)=>(
                <div className={styles.box} key={i} data-aos='flip-left'>
                    <div className={styles.img}>
                        <Image src={val.cover} alt="" width='400px' height='300px' objectFit='content' data-aos='fade-down' /> 
                    </div>
                    <div className={styles.text}>
                        <h3 data-aos='fade-right'>{val.title}</h3>
                        <label data-aos='fade-left'>
                            By {val.author} {val.date}
                        </label>
                        <p data-aos='fade-up-right'>{val.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}
