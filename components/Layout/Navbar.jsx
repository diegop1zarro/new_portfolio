import React ,{useState} from 'react'
import Image from 'next/image'
import {navlink} from '../data/data.js'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import { Menu } from '@mui/icons-material'

export default function Navbar() {
  const [responsive, setResponsive]= useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.container_flexsb}> 
        <div className={styles.logo}>
           <Image src="/img/logo.png" alt="" width="30" height="30"/>
        </div>
        <div className={responsive? styles.hideMenu : styles.nav}>
          {
            navlink.map((link,i)=>(
                <Link href={link.url} key={i}>
                  {link.text}
                </Link>
            ))
          }
        </div>
        <button className={styles.button} onClick={()=> setResponsive(!responsive)}>
          <Menu className={styles.icon}>
          </Menu>
        </button>
       </div>
    </header>
  )
}
