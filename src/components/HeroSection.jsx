import heroimg from "../assets/heroimg.png"
import outterImg from "../assets/spinouter.png"
import innerImg from "../assets/spin_center.png"
import { useContext } from "react"
import AppContext from "../context/Appcontext"

const HeroSection = () => {

    const { enableWeb3, isWeb3Enabled, displayAccount, closeWeb3 } = useContext(AppContext)

  return (
    <div className='heroContainer'>

        <div className="heroContainer_top">

            <h4 className="heroContainer_top_txt" >
                Natrium
                <br/>
                Protocol
            </h4>

            {/* <img src={heroimg} alt="hero image" className="heroContainer_top_img" /> */}

            <div className="heroContainer_top_img" >
                <img src={outterImg} className="heroContainer_top_img_outter" />
                <img src={innerImg} className="heroContainer_top_img_inner" />
            </div>

        </div>

        <div className="heroContainer_btm" >

            <div className="heroContainer_btm_txt">
                Revolutionary non-custodial lending protocol for unparalleled efficiency and flexibility
            </div>

            {/* <button className="heroContainer_btm_button" onClick={ isWeb3Enabled ? closeWeb3 : enableWeb3} >
                { isWeb3Enabled ? displayAccount : 'Connect Wallet' }
            </button> */}

            <button className="heroContainer_btm_button" >
                { isWeb3Enabled ? displayAccount : 'Launch Dapp' }
            </button>

        </div>
        
    </div>
  )
}

export default HeroSection