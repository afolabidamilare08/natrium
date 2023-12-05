import React from 'react'
import tokenimg from "../assets/tokenimg.png"


const ProtocolTokenomics = () => {
  return (
    <div className='ptContainer'>

        <div className="aboutContainer_Header">
            <div className="aboutContainer_Header_whiteleft"><></></div>
            <h5>Protocol Fees</h5>
            <div className="aboutContainer_Header_whiteright"><></></div>
        </div>

          <img src={tokenimg} alt="" />
    </div>
  )
}

export default ProtocolTokenomics