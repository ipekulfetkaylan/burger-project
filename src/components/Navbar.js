import React from 'react'
import { Link } from 'react-router-dom'
import burgerLogo from '../assets/burgerLogo.png'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='main'>
        <img src={burgerLogo} alt="Logo"/>
        <div className='mainLink'>
            <Link to="/">Anasayfa</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
