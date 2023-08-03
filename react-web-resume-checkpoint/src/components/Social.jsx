import React from 'react'
import "../components/Social.css"

function Social() {
    return (
        <div className="social-container">
            <div className="follow">Follow me</div>
            <div className="image-container">
                <object data="/icon/SOCIAL MEDIA.svg">
                </object>
                <map name="socialMap">
                    <area shape="rect" coords="0,0,240,48" href="https://www.facebook.com" alt="Facebook" />
                    <area shape="rect" coords="240,0,480,48" href="https://www.twitter.com" alt="Twitter" />
                    <area shape="rect" coords="0,48,240,96" href="https://www.instagram.com" alt="Instagram" />
                    <area shape="rect" coords="240,48,480,96" href="https://www.google.com" alt="Google" />
                </map>
                
            </div>
        </div>
    )
}

export default Social