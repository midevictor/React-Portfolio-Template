import React from 'react'
import "./Footer.css" // import css file
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"


function Footer() {
  return (
    <footer>
      <a href="#home" className='footer_logo'>EHIZ DEV</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer_socials">
        <a href="https://github.com/"><AiFillGithub/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
        <a href="https://www.linkedin.com"><AiFillLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EHIZ DEV. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer