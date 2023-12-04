import React from 'react'
import logo from "../assets/logo.png"
import threebars from "../assets/threebars.svg"

const NavBar = () => {
  return (
    <div className='navBarContainer'>
        <div className="navBar">
            <div className="logoContainer">
                <img src={logo} alt="Natrium Logo" />
                <h1>Natrium</h1>
            </div>
            <div className="navLinksContainer">
                <div className="selectedNavLink">
                    <p>Features</p>
                </div>
                <div className="navLink">
                    <p>Security</p>
                </div>
                <div className="navLink">
                    <p>Documentation</p>
                </div>
            </div>
            <div className="navButton">
                <p>Enter App</p>
            </div>
            <div className="navToggle">
                <img src={threebars} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NavBar