import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Portfolio.css"

function Portfolio() {
  const navigate = useNavigate();
  const handleSeeMoreClick = () => {
    navigate('/portfolio-page');
  };
  return (
    <div className='portfolio-container'>
        <div className='portfolio-head'>
            <div className='portfolio-title'>Portfolio</div>
            <div className='see-more' onClick={handleSeeMoreClick}>see more<img src="/icon/SMarrow.svg" alt="See More" /></div>
        </div>
        <div className='portfolio-group'>
            <div className='portfolio-card'><img src="/images/Image.png" alt="" /></div>
            <div className='portfolio-card'><img src="/images/Image (1).png" alt="" /></div>
            <div className='portfolio-card'><img src="/images/Image (2).png" alt="" /></div>
            <div className='portfolio-card'><img src="/images/Image (3).png" alt="" /></div>
            <div className='portfolio-card'><img src="/images/Image (4).png" alt="" /></div>
            <div className='portfolio-card'><img src="/images/Image (5).png" alt="" /></div>
        </div>
    </div>
  )
}

export default Portfolio