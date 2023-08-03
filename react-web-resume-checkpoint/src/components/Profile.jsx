import React from 'react'
import "../components/Profile.css"
import Social from './Social'
import profileImage from "../images/selfie2301.jpg";

function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-detail'>
            <p>Hi!</p>
            <h2>I'm Wattana Kaotantong.</h2>
            <h2>a Frontend Developer.</h2>
            <p>Frontend developer based in Thailand.</p>
            <p>I am coding with a clean and beautiful problem</p>
            <p>solving in mind.</p>
            <Social/>
            <button className='request-btn'>Send Request</button> 
            <button className='download-btn'>Download CV</button>
        </div>
        <div className='profile-image-container'><div className='profile-image'><img src={profileImage} alt="" /></div></div>
    </div>
    
  )
}

export default Profile