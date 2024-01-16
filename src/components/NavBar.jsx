import { useState } from "react";
import logo from "../assets/logo.png"
import threebars from "../assets/threebars.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";


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
                <Link to="/dashboard" className="navBarContainer_navBar_navLinksContainer_selectedNavLink">
                    <p>Features</p>
                </Link>
                <a href="#" className="navLink">
                    <p>Security</p>
                </a>
                <a href="#" className="navLink">
                    <p>Documentation</p>
                </a>
            </div>

            <Link to={'/dashboard'} className="navBarContainer_navBar_navButton">
                Enter App
            </Link>

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
        <Link to="/dashboard" className="navBarContainer_navBar_navButton" style={{
            fontWeight:'500'
        }} >Enter App</Link>
    {/* }} >Enter App</Link> */}

    </div>

    </>
  )
}

export default NavBar