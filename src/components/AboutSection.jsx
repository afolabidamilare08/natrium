import React from 'react'
import aboutimg from "../assets/aboutimg.png"



const AboutSection = () => {
  return (
    <div className='aboutContainer'>
        <div className="aboutHeader">
            <div className="whiteleft"><></></div>
            <h1>Protocol Architecture</h1>
            <div className="whiteright"><></></div>
        </div>
        <div className="aboutBody">
            <div className="aboutUs">
                <h2>About Us</h2>
                <div className="aboutText">
                    <p>Natrium introduces an innovative framework empowering individuals to establish a dynamic monetary market for various tokens</p>
                    <p>Through a groundbreaking two-layer architecture, Natrium effectively addresses liquidity challenges by segregating risk between assets.</p>
                    <p>At its core, Natrium employs risk-isolated pools for robust risk management.</p>
                    <p>Building upon this foundation, a shuffler layer allows lenders to selectively designate collateral assets for deployment, preserving risk isolation integrity while providing a nuanced and customizable approach to collateral selection.</p>
                </div>
                
            </div>
            <div className="aboutImage">
                <img src={aboutimg} alt="" />
            </div>
        </div>
    </div>
  )

}

export default AboutSection