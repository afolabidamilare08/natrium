import React from 'react'
import firsticon from "../assets/firsticon.svg"

const ProtocolFeeSection = () => {
  return (
    <div className='pfContainer'>
      <div className="pfHeader">
            <div className="whiteleft"><></></div>
            <h1>Protocol Architecture</h1>
            <div className="whiteright"><></></div>
      </div>
      <div className="pfSubHeader">
        <h2>Protocol Fee Structure</h2>
      </div>
      <div className="pfBoxes">
        <div className="pfBox">
          <div className="pfbContent">
            <div className="pfbIcon">
              <img src={firsticon} alt="movie icon" />
            </div>
            <h2>Bucket Creation Fee:</h2>
            <p>Users engaging in the creation of silos within the protocol will incur a fee.</p>
            <p>This fee is intended to support the ongoing development, maintenance, and improvement of the protocol.</p>
          </div>
          <div className="pfbButton">
            <p>Learn More</p>
          </div>
        </div>

        <div className="pfBox">
          <div className="pfbContent">
            <div className="pfbIcon">
              <img src={firsticon} alt="movie icon" />
            </div>
            <h2>Shuffler Creation Fee:</h2>
            <p>Users initiating the creation of shuffler within the system will be subject to a fee. This fee contributes to the sustainability and enhancement of the protocol's functionality.</p>
          </div>
          <div className="pfbButton">
            <p>Learn More</p>
          </div>
        </div>

        <div className="pfBox">
          <div className="pfbContent">
            <div className="pfbIcon">
              <img src={firsticon} alt="movie icon" />
            </div>
            <h2>Deposit and Withdrawal Fees:</h2>
            <p>Transactions involving deposits and withdrawals within the protocol will be subject to fees. These fees are implemented to ensure the integrity and efficiency of the system, supporting its overall stability and continuous development.</p>
          </div>
          <div className="pfbButton">
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtocolFeeSection