import React from 'react'
import "./Nav.css" // import css file
import {AiFillHome} from  'react-icons/ai'
import {AiOutlineUser} from  'react-icons/ai'
import {AiFillBook} from  'react-icons/ai'
import {RiServiceFill} from  'react-icons/ri'
import {AiFillContacts} from  'react-icons/ai'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')}  className={activeNav ==="#header" ? "active" : ""}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}   className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick = {() => setActiveNav ("#experience")} className={activeNav === "#experience" ? "active" : ""}><AiFillBook/></a>
      <a href="#services" onClick={() => setActiveNav ("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceFill/></a>
      <a href="#contact" onClick={() => setActiveNav ("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiFillContacts/></a>
    </nav>
   
  )
}

export default Nav