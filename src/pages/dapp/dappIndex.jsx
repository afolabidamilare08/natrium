import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { LuLayoutDashboard } from "react-icons/lu";
import { BiDollarCircle } from "react-icons/bi";
import { IoArrowDownCircleOutline, IoCloseSharp } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { GoArrowUpRight, GoMoon } from "react-icons/go";
import LogoImg from '../../assets/miniLogo.png';
import { RiFeedbackLine } from "react-icons/ri";
import { FaAnglesLeft } from "react-icons/fa6";
import { useContext } from 'react';
import AppContext from '../../context/Appcontext';
// import WeiImg from '../../assets/wei.png';
// import { IoArrowBackOutline } from "react-icons/io5";


const DappIndex = ({Component,path}) => {

    const { sideNav, UpdatesideNav } = useContext(AppContext)

    return (

        <>

        { sideNav ? 
        
        <div className='header_backdrop' >
                <div>
                        
                    <div className="dappIndex_left_top" >

                        <img src={Logo} alt='img'/>

                        <h6>Natrium</h6>

                        <IoCloseSharp style={{
                            color:"white",
                            width:'1.5rem',
                            height:'1.5rem',
                            marginLeft:'4rem'
                        }} onClick={ () => UpdatesideNav() } />

                    </div>

                    <div className='dappIndex_left_pack' >

                    <Link className="dappIndex_left_pack_link" to={'/dashboard'} style={{
                        backgroundColor: path === 'dashboard' ? '#083A2B' : 'transparent'
                    }} >
                        <LuLayoutDashboard className="dappIndex_left_pack_link_ic" />
                        <h6>Position</h6>
                    </Link>

                    <Link className="dappIndex_left_pack_link" to={'/earn'} style={{
                        backgroundColor: path === 'earn' ? '#083A2B' : 'transparent'
                    }} >
                        <BiDollarCircle className="dappIndex_left_pack_link_ic" />
                        <h6>Earn</h6>
                    </Link>

                    <Link className="dappIndex_left_pack_link" to={'/borrow'} style={{
                        backgroundColor: path === 'borrow' ? '#083A2B' : 'transparent'
                    }} >
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
        </div>
        
        : <></> }

        {/* <div className='backdrop' >

        </div>

        <div className='backdrop_2' >

            <div className='backdrop_2_mid' >

                <div className='backdrop_2_mid_back' >
                    <IoArrowBackOutline/>
                    <h3>close</h3>
                </div>

                <div className='backdrop_2_mid_w' >0.000 DAI</div>

                <div className='backdrop_2_mid_main' >

                    <div className='backdrop_2_mid_main_left' >
                        <h4>Collateral (DAI)</h4>
                        <img src={WeiImg} alt='mn' />
                    </div>

                    <div className='backdrop_2_mid_main_right' >

                        <input placeholder='0.00' />

                        <button>
                            Max
                        </button>

                    </div>

                </div>

                <div className='backdrop_2_mid_main' >

                    <div className='backdrop_2_mid_main_left' >
                        <h4>Debt (WETH)</h4>
                        <img src={WeiImg} alt='mn' />
                    </div>

                    <div className='backdrop_2_mid_main_right' >

                        <input placeholder='0.00' />

                        <button>
                            Max
                        </button>

                    </div>

                </div>

                <div className='backdrop_2_mid_main' >

                    <h2>Liquidation Price (DAI/WETH)</h2>

                    <div className='backdrop_2_mid_main_nA' >
                        n/a
                    </div>

                </div>

                <div className='backdrop_2_mid_range' >
                    <h4>Borrow Capacity</h4>
                    <div>0%</div>
                    <input type="range" />
                </div>

            </div>

            <div className='backdrop_2_down' >
                <button>Add To Bundler</button>
                <button>Finalize Borrow</button>
            </div>

        </div> */}

        <div className="dappIndex" >
            
            <section className="dappIndex_left" >

                <div>
                
                <div className="dappIndex_left_top" >

                    <img src={Logo} alt='img'/>

                    <h6>Natrium</h6>

                    </div>

                    <div className='dappIndex_left_pack' >

                    <Link className="dappIndex_left_pack_link" to={'/dashboard'} style={{
                        backgroundColor: path === 'dashboard' ? '#083A2B' : 'transparent'
                    }} >
                        <LuLayoutDashboard className="dappIndex_left_pack_link_ic" />
                        <h6>Position</h6>
                    </Link>

                    <Link className="dappIndex_left_pack_link" to={'/earn'} style={{
                        backgroundColor: path === 'earn' ? '#083A2B' : 'transparent'
                    }} >
                        <BiDollarCircle className="dappIndex_left_pack_link_ic" />
                        <h6>Earn</h6>
                    </Link>

                    <Link className="dappIndex_left_pack_link" to={'/borrow'} style={{
                        backgroundColor: path === 'borrow' ? '#083A2B' : 'transparent'
                    }} >
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