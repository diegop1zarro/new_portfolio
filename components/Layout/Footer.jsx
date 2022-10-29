import React from 'react'
import {social} from '../data/data.js'
export default function Footer() {
  return (
    <footer>
        {
            social.map((val,i)=>(
                    <a href={val.link} target="_blank" key={i} rel="noopener noreferrer"> 
                        {val.icon}
                    </a>
                
            ))
        }
        <p>diegop1zarro 2022</p>
    </footer>
  )
}
