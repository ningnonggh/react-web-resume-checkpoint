import React from 'react'
import "../components/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='mail-address'><img className='mail-img' src="/icon/Squircle.svg" alt="" />wattanaktt@gmail.com</div>
        <div className='copyright'>© Copyright 2017 | B</div>
        <div className='image-link'><img className='ig-img' src="/icon/igIcon.svg" alt="" /><img className='tele-img' src="/icon/teleIcon.svg" alt="" /></div>
    </div>
  )
}

export default Footer