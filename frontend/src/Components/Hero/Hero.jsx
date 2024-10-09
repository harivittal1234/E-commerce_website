import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>ALL NEW!!!</p>
                    <img src={hand_icon} alt='hand icon'/>
                </div>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero img" />
            
        </div>
        
    </div>
  )
}
//You must not write the word "Image" in alt as it was already read aloud by the img tag as image and its redundant and retarded. 
export default hero