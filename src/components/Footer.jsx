import React from 'react'
import discordicon from "../assets/discordicon.svg"
import mediumicon from "../assets/123.png"
import twittericon from "../assets/twittericon.svg"
import telegramicon from "../assets/telegramicon.svg"
import gitBook from "../assets/my_g.png"






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
                <a href='https://natrium-protocol.gitbook.io/natrium-docs/overview/introducing-natrium' className="footerItem">
                    <img src={gitBook} alt="" />
                    <p>Gitbook</p>
                </a>
                <a href='https://mirror.xyz/0x0A6fD9d1F36780aF3C323770d9ac085f8e6217d3' className="footerItem">
                    <img src={mediumicon} alt="" style={{
                        width:'3rem'
                    }} />
                    <p>Mirror</p>
                </a>
                {/* <div className="footerItem">
                    <img src={telegramicon} alt="" />
                    <p>Telegram</p>
                </div> */}
                <a href="https://x.com/natriumprotocol?s=11" className="footerItem">
                    <img src={twittericon} alt="" />
                    <p>Twitter</p>
                </a>
                <a href='https://discord.com/invite/wbUvTuDDEj' className="footerItem">
                    <img src={discordicon} alt="" />
                    <p>Discord</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer