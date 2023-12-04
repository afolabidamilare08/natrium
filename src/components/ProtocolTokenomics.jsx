import React from 'react'
import tokenimg from "../assets/tokenimg.png"


const ProtocolTokenomics = () => {
  return (
    <div className='ptContainer'>
        <div className="ptHeader">
            <div className="whiteleft"><></></div>
            <h1>Protocol Tokenomics</h1>
            <div className="whiteright"><></></div>
        </div>
        <div className="tokenImg">
          <img src={tokenimg} alt="" />
        </div>
    </div>
  )
}

export default ProtocolTokenomics