import React from 'react'
import heroimg from "../assets/heroimg.png"

const HeroSection = () => {
  return (
    <div className='heroContainer'>
        <div className="heroSection">
            <h1>Natrium<br/>Protocol</h1>
            <div className="heroImg">
                <img src={heroimg} alt="hero image" />
            </div>
            <div className="heroText">
                <p>Revolutionary non-custodial lending protocol for unparalleled efficiency and flexibility.</p>
            </div>
            <div className="heroButton">
                <p>Connect Wallet</p>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection