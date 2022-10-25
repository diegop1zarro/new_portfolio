import React from 'react'
import styles from '../../styles/Heading.module.css'

export default function Heading({title}) {
  return (
    <h2 className={styles.heading}>{title}</h2>
  )
}
