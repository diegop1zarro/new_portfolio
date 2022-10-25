import React from 'react'
import {social} from '../data/data.js'
export default function Footer() {
  return (
    <footer>
        {
            social.map((val,i)=>(
                    <i key={i}> 
                        {val.icon}
                    </i>
                
            ))
        }
        <p>ALL Right Rescved 2022</p>
    </footer>
  )
}
