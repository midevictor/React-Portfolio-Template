import React from 'react'
import "./Contact.css" // import css file
import {MdEmail} from  "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>midevictor90@gmail.com</h5>
            <a href="mailto:midevictor90@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348024380274</h5>
            <a href="https://wa.me/08024380274" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <AiOutlineTwitter className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>+2348024380274</h5>
            <a href="https://api.whatsapp.com/send?phone+2348024380274" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder='Your Message' row="10"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact