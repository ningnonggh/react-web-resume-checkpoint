import React from 'react'
import "./WhyHireMe.css"

function WhyHireMe() {
  return (
    <div className='skill-container'>
        <div className='skill-title'>Why Hire Me?</div>
        <div className='skill-content'>
            <div className='skill-post'><img src="/icon/ProIcon.svg" alt="" /><h3>Communicative</h3><p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
            <div className='skill-post'><img src="/icon/ComIcon.svg" alt="" /><h3>Professional</h3><p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
            <div className='skill-post'><img src="/icon/CollaIcon.svg" alt="" /><h3>Collaborative​</h3><p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
            <div className='skill-post'><img src="/icon/ClientIcon.svg" alt="" /><h3>Client's Favourite</h3><p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>           
        </div>
    </div>
  )
}

export default WhyHireMe