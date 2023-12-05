import aboutimg from "../assets/aboutimg.png"



const AboutSection = () => {
  return (
    <div className='aboutContainer'>

        <div className="aboutContainer_Header">
            <div className="aboutContainer_Header_whiteleft"><></></div>
            <h5>Protocol Architecture</h5>
            <div className="aboutContainer_Header_whiteright"><></></div>
        </div>

        <div className="aboutContainer_body" >

            <div className="aboutContainer_body_left">
                <p className="aboutContainer_body_left_title" >About Us</p>
                <div className="aboutContainer_body_left_body">
                    <p>Natrium introduces an innovative framework empowering individuals to establish a dynamic monetary market for various tokens</p>
                    <p>Through a groundbreaking two-layer architecture, Natrium effectively addresses liquidity challenges by segregating risk between assets.</p>
                    <p>At its core, Natrium employs risk-isolated pools for robust risk management.</p>
                    <p>Building upon this foundation, a shuffler layer allows lenders to selectively designate collateral assets for deployment, preserving risk isolation integrity while providing a nuanced and customizable approach to collateral selection.</p>
                </div>
                
            </div>

            <img src={aboutimg} alt="" />

        </div>

        {/* <div className="aboutBody">
            
        </div> */}
    </div>
  )

}

export default AboutSection