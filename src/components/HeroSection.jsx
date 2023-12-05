import heroimg from "../assets/heroimg.png"

const HeroSection = () => {
  return (
    <div className='heroContainer'>

        <div className="heroContainer_top">

            <h4 className="heroContainer_top_txt" >
                Natrium
                <br/>
                Protocol
            </h4>

            <img src={heroimg} alt="hero image" className="heroContainer_top_img" />

        </div>

        <div className="heroContainer_btm" >

            <div className="heroContainer_btm_txt">
                Revolutionary non-custodial lending protocol for unparalleled efficiency and flexibility
            </div>

            <button className="heroContainer_btm_button">
                Connect Wallet
            </button>

        </div>
        
    </div>
  )
}

export default HeroSection