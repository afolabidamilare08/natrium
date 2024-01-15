import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { LuLayoutDashboard } from "react-icons/lu";
import { BiDollarCircle } from "react-icons/bi";
import { IoArrowDownCircleOutline, IoCloseSharp } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { GoArrowUpRight, GoMoon } from "react-icons/go";
import LogoImg from '../../assets/miniLogo.png';
import { RiFeedbackLine } from "react-icons/ri";
import { FaAnglesLeft, FaShop } from "react-icons/fa6";
import { useContext, useState } from 'react';
import AppContext from '../../context/Appcontext';
import { ethers } from 'ethers';
import { Abi } from '../../constants/abi';
import { Spin } from 'antd';
// import WeiImg from '../../assets/wei.png';
// import { IoArrowBackOutline } from "react-icons/io5";


const DappIndex = ({Component,path}) => {

    const { sideNav, UpdatesideNav, user_account, main_contract, signer, irm_contract, oracle_contract,notification } = useContext(AppContext)

    const [ openModal, setopenModal ] = useState(false)
    const [ modalContnet, setmodalContnet ] = useState('create_market')
    const [ isLoading, setisLoading ] = useState(false)

    const [ createMarket_params, setcreateMarket_params ] = useState({
        loanToken:'',
        collateralToken:'',
        lltv:''
    })


    const CreateMarketFunction = async () => {

        setisLoading(true)

        if (!user_account) {
            notification('error','Error','Please connect your wallet')
            setisLoading(false);
            return;
        }

        if ( createMarket_params.loanToken === '' || 
             createMarket_params.collateralToken === '' || 
             createMarket_params.lltv === '' ) {
            setisLoading(false);
            notification('error','Error','Please fill all fields')
            return
        }

        try{


            const mainS = await signer()
            
            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const createTraderesponse = await contract.createMarket({
                loanToken:createMarket_params.loanToken,
                collateralToken:createMarket_params.collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`${createMarket_params.lltv}00000000000000000`
            })
            console.log('got_here')

            console.log(createTraderesponse)

            if ( createTraderesponse.hash ) {
                setisLoading(false);
                notification('success','Success','Market was created successfully')
            }

        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error','Something went wrong while processing your transaction')
            return;
        }

    }


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

                    <Link className="dappIndex_left_pack_link" to={'#'} onClick={ () => {
                        setmodalContnet('create_market')
                        setopenModal(true)
                    } } style={{
                        backgroundColor: path === 'market' ? '#083A2B' : 'transparent'
                    }} >
                        <FaShop className="dappIndex_left_pack_link_ic" />
                        <h6>Create Market</h6>
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

        <div className='main_backdrop' style={{
            display: openModal ? 'block' : 'none'
        }} onClick={ () => {
            setopenModal(false)
        } } >

        </div>

        <div className='create_market_drop' style={{
            display: openModal && modalContnet === 'create_market' ? 'block' : 'none'
        }} >

            <h5 className='create_market_drop_top' >Create Markets: (Configure isolated markets permissionlessly)</h5>

            <div className='create_market_drop_box' >

                <div className='create_market_drop_box_div' >
                    <h5>Loan token:</h5>
                    <input type='text' onChange={ (e) => setcreateMarket_params({
                        ...createMarket_params,
                        loanToken:e.target.value
                    }) } />
                </div>

                <div className='create_market_drop_box_div' >
                    <h5>Collateral token:</h5>
                    <input type='text' onChange={ (e) => setcreateMarket_params({
                        ...createMarket_params,
                        collateralToken:e.target.value
                    }) } />
                </div>

                <div className='create_market_drop_box_div' >
                    <h5>Oracle:</h5>
                    <input type='text' value={oracle_contract} disabled />
                </div>

                <div className='create_market_drop_box_div' >
                    <h5>Interest rate models:</h5>
                    <input type='text'  value={irm_contract} disabled  />
                </div>

                <div className='create_market_drop_box_div' >
                    <h5>Liquidation loan to value ratio:</h5>
                    <input type='text' onChange={ (e) => setcreateMarket_params({
                        ...createMarket_params,
                        lltv:e.target.value
                    }) } />
                </div>

            </div>

            <button className='create_market_drop_box_btn' onClick={() =>  CreateMarketFunction()} >
                { isLoading ? <Spin/> : 'Create market' }
            </button>

        </div>

        {/* 

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

                    <Link className="dappIndex_left_pack_link" to={'#'} onClick={ () => {
                        setmodalContnet('create_market')
                        setopenModal(true)
                    } } style={{
                        backgroundColor: path === 'market' ? '#083A2B' : 'transparent'
                    }} >
                        <FaShop className="dappIndex_left_pack_link_ic" />
                        <h6>Create Market</h6>
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