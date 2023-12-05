import { useState } from "react";
import logo from "../assets/logo.png"
import threebars from "../assets/threebars.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from 'framer-motion';


const NavBar = () => {

    const [ openModal, setopenModal ] = useState(false)

  return (
    <>
    <div className='navBarContainer'>

        <div className="navBarContainer_navBar">

            <div className="navBarContainer_navBar_logoContainer">
                <img src={logo} alt="Natrium Logo" />
                <h1>Natrium</h1>
            </div>

            <div className="navBarContainer_navBar_navLinksContainer">
                <a href="#" className="navBarContainer_navBar_navLinksContainer_selectedNavLink">
                    <p>Features</p>
                </a>
                <a href="#" className="navLink">
                    <p>Security</p>
                </a>
                <a href="#" className="navLink">
                    <p>Documentation</p>
                </a>
            </div>

            <button className="navBarContainer_navBar_navButton">
                Enter App
            </button>

            <GiHamburgerMenu className="toggleIcon" onClick={ () => setopenModal(true) } />

        </div>


    </div>

    <div className="backDrop" onClick={ () => setopenModal(false) } style={{
        display: openModal ? 'block' : 'none'
    }} >

    </div>

    <div className="slider" style={{
        display: openModal ? 'block' : 'none'
    }}>

        <a href="#">Features</a>
        <a href="#">Security</a>
        <a href="#">Documentations</a>
        <a href="#" className="navBarContainer_navBar_navButton" style={{
            fontWeight:'500'
        }} >Enter App</a>

    </div>

    </>
  )
}

export default NavBar