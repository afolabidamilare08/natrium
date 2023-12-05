import React from 'react'
import discordicon from "../assets/discordicon.svg"
import mediumicon from "../assets/mediumicon.png"
import twittericon from "../assets/twittericon.svg"
import telegramicon from "../assets/telegramicon.svg"






const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="footer">
            <div className="leftFooter">
                <div className="footerItem">
                    <p>©2023 Natrium</p>
                </div>
            </div>
            <div className="rightFooter">
                <div className="footerItem">
                    <img src={mediumicon} alt="" />
                    <p>Medium</p>
                </div>
                <div className="footerItem">
                    <img src={telegramicon} alt="" />
                    <p>Telegram</p>
                </div>
                <div className="footerItem">
                    <img src={twittericon} alt="" />
                    <p>Twitter</p>
                </div>
                <div className="footerItem">
                    <img src={discordicon} alt="" />
                    <p>Discord</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer