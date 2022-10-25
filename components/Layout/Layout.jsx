import React from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
