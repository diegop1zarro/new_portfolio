import React, { useState } from 'react'
import styles from '../styles/Skills.module.css'
import {skills} from '../components/data/data.js'
import Image from 'next/image'
import { Visibility } from '@mui/icons-material'
import Heading from '../components/Layout/Heading.jsx'
import { Icon } from '@iconify/react'


const allCategory = ["all",...new Set(skills.map(item=>item.category))]
export default function Skills() {
    const [list , setList] = useState(skills)
    const [category , setCategory] = useState(allCategory)
    function filterItems(category){
        const newItems = skills.filter(item=> item.category === category)
        setList(newItems)
        if(category === "all"){
            setList(skills)
        }
    }
  return (
    <article className={styles.skills}>
        <div className={styles.container}>
            <Heading title="SKILLS"/>
            <div className={styles.catButton}>
                {
                    category.map((category,i)=>(
                        <button className={styles.primaryButton} key={i} onClick={()=> filterItems(category)}  data-aos='zoom-out-down'>
                            {category}
                        </button>
                    ))
                }
            </div>
            <div className={styles.content_grid3}>
            {
                list.map((items,i)=>(
                    <div key={i} className={styles.box} data-aos='fade-up'>
                        {/* <div className={styles.img}> */}
                            {/* <Image src={items.cover} alt='' width="400px" height="400px"/> */}
                            <Icon
                          icon={items.cover}
                          className={styles.img}
                          alt={items.name}
                             />
                        {/* </div> */}
                        <div className={styles.overlay}>
                            <h3>{items.title}</h3>
                            <span>{items.name}</span>
                            <Visibility />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </article>
  )
}
