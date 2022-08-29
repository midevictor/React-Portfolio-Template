import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" rel="noreferrer" target="_blank"><AiFillLinkedin/></a>
      <a href="https://github.com"  rel="noreferrer" target="_blank"><AiFillGithub/></a>
      <a href="https://twitter.com" rel="noreferrer"  target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials 