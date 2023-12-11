import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { LuLayoutDashboard } from "react-icons/lu";
import { BiDollarCircle } from "react-icons/bi";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { GoArrowUpRight, GoMoon } from "react-icons/go";
import LogoImg from '../../assets/miniLogo.png';
import { RiFeedbackLine } from "react-icons/ri";
import { FaAnglesLeft } from "react-icons/fa6";



const DappIndex = ({Component}) => {

    return (

        <>

        <div className='backdrop' >

        </div>

        <div className="dappIndex" >
            
            <section className="dappIndex_left" >

                <div>
                
                <div className="dappIndex_left_top" >

                    <img src={Logo} alt='img'/>

                    <h6>Natrium</h6>

                    </div>

                    <div className='dappIndex_left_pack' >

                    <Link className="dappIndex_left_pack_link" to={'/#'} >
                        <LuLayoutDashboard className="dappIndex_left_pack_link_ic" />
                        <h6>Dashboard</h6>
                    </Link>

                    <Link className="dappIndex_left_pack_link" to={'/#'} >
                        <BiDollarCircle className="dappIndex_left_pack_link_ic" />
                        <h6>Earn</h6>
                    </Link>

                    <Link className="dappIndex_left_pack_link" to={'/#'} >
                        <IoArrowDownCircleOutline className="dappIndex_left_pack_link_ic" />
                        <h6>Borrow</h6>
                    </Link>

                </div>

                </div>

                <div className='dappIndex_left_lastP' >

                    <Link className='dappIndex_left_lastP_link' >
                        
                        <div className='dappIndex_left_lastP_link_left' >
                            <FaRegFileAlt className='dappIndex_left_lastP_link_left_ic' />
                            <h6>Natrium Docs</h6>
                        </div>

                        <GoArrowUpRight className='dappIndex_left_lastP_link_ic' />
                    </Link>

                    <Link className='dappIndex_left_lastP_link' >
                        
                        <div className='dappIndex_left_lastP_link_left' >
                            <img src={LogoImg} alt='img' />
                            <h6>Natrium Optimizers</h6>
                        </div>

                        <GoArrowUpRight className='dappIndex_left_lastP_link_ic' />
                    </Link>

                    <Link className='dappIndex_left_lastP_link' >
                        
                        <div className='dappIndex_left_lastP_link_left' >
                            <RiFeedbackLine className='dappIndex_left_lastP_link_left_ic' />
                            <h6>Feedback</h6>
                        </div>

                        <GoArrowUpRight className='dappIndex_left_lastP_link_ic' />
                    </Link>

                    <div className='dappIndex_left_split' >

                        <div className='dappIndex_left_split_left' >
                            <FaAnglesLeft className='dappIndex_left_split_left_ic' />
                        </div>

                        <GoMoon className='dappIndex_left_split_right' />

                    </div>

                </div>

            </section>

            <section className="dappIndex_right" >

                {Component}

            </section>

        </div>

        </>

    );

}

export default DappIndex;