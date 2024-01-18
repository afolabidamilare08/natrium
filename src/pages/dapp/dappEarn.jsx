import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';
import EthImg from '../../assets/eth.png';
import natImg from '../../assets/nat.png';
import financeImg from '../../assets/mdi_finance.png'; 
import asteriskImg from '../../assets/fontisto_asterisk.png'; 
import heroIcon from '../../assets/heroicons.png';
import dollarIcon from '../../assets/dollars.png';
import finIcon from '../../assets/fin.png';
import userIcon from '../../assets/user.png';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import AppContext from '../../context/Appcontext';
import { ethers } from 'ethers';
import { Abi } from '../../constants/abi';
import { Spin } from 'antd';

const DappEarn = () => {

    const { sideNav, UpdatesideNav, user_account, main_contract, signer, irm_contract, oracle_contract,notification } = useContext(AppContext)

    const [ isLoading, setisLoading ] = useState(false)

    const [ openModal, setopenModal ] = useState(true)
    
    const [ collateralAmount, setcollateralAmount ] = useState('')
    const [ borrowAmount, setborrowAmount ] = useState('')
    const [ repayAmount, setrepayAmount ] = useState('')
    const [ wcollateralAmount, setwcollateralAmount ] = useState('')

    const loanToken = '0xC734D5f31C61a1b716017E0BcF7698Fe01BC2717'
    const loanTokenName = 'Dai'
    const collateralToken = '0x167287Ae959fb06C6e6b50844fe8a970bED2689a'


    const HandleSupplyCollateral = async () => {

        setisLoading(true)

        if (!user_account) {
            notification('error','Error','Please connect your wallet')
            setisLoading(false);
            return;
        }

        if ( collateralAmount === '' ) {
            notification('error','Error','Please fill all fields')
            setisLoading(false);
            return;
        }

        const updatedcollateralAmount = `${collateralAmount}000000000000000000`

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const approveCollateral = new ethers.Contract(
                loanToken,
                Abi.ERC20ABI,
                mainS
            )

            await approveCollateral.approve(
                main_contract,
                updatedcollateralAmount
            )

            const supplyCollateral = await contract.supply({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`900000000000000000`
            },updatedcollateralAmount,0,user_account,'0x')

            if ( supplyCollateral.hash ) {
                setcollateralAmount('')
                setisLoading(false);
                notification('success','Success',`${collateralAmount} ${loanTokenName} was supplied successfully`)
            }

        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error', error.reason ? error.reason : 'Something went wrong while processing your transaction')
            return;
        }

    }

    const HandlewCollateral = async () => {

        setisLoading(true)

        if (!user_account) {
            notification('error','Error','Please connect your wallet')
            setisLoading(false);
            return;
        }

        if ( wcollateralAmount === '' ) {
            notification('error','Error','Please fill all fields')
            setisLoading(false);
            return;
        }

        const updatedwcollateralAmount = `${wcollateralAmount}000000000000000000`

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const wCollateral = await contract.withdraw({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`900000000000000000`
            },updatedwcollateralAmount,0,user_account,user_account)

            // console.log(wCollateral)

            if ( wCollateral.hash ) {
                setwcollateralAmount('')
                setisLoading(false);
                notification('success','Success',`You ve successfully withdrawn ${wcollateralAmount} ${loanTokenName}`)
            }
            
        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error', error.reason ? error.reason : 'Something went wrong while processing your transaction')
            return;
        }
    }




    return (

        <>

            <div className="dappDashboard" >
                <DappHeader
                    subTitle={""}
                    title={"Earn"}
                />

                <div className="earn_body" >

                    <div className="earn_body_top" >

                        <div className="earn_body_top_left" >
                            
                            <h4>A Better Way to earn interest in Defi</h4>

                            <h5>Deposit asset in a Natrium vault to start earning passive yield and $Natrium tokens</h5>

                            <button>Learn More</button>

                        </div>

                        <img className="earn_body_top_right" src={natImg} />

                    </div>

                    <div className="earn_body_mid" >

                        <div className="earn_body_mid_div" >

                            <div className="earn_body_mid_div_top" >
                                <img src={financeImg} />
                            </div>

                            <h4>Better Yield</h4>

                            <p>Dynamic rebalancing across Morpho Blue's capital-efficient markets to improve returns.</p>

                        </div>

                        <div className="earn_body_mid_div" >

                            <div className="earn_body_mid_div_top" >
                                <img src={asteriskImg} />
                            </div>

                            <h4>Curated Risk</h4>

                            <p>Each vault caters to a different risk profile instead of the traditional one-size-fits-all approach.</p>

                        </div>

                        <div className="earn_body_mid_div" >

                            <div className="earn_body_mid_div_top" >
                                <img src={heroIcon} />
                            </div>

                            <h4>Transparent</h4>

                            <p>Vaults are noncustodial with immutable logic and verifiable allocations.</p>

                        </div>

                    </div>

                    <div className="earn_body_foot" style={{
                        justifyContent:'center'
                    }} >

                        {/* <div className="earn_body_foot_div" >

                            <div className="earn_body_foot_div_top" >Featured vaults</div>

                            <div className="earn_body_foot_div_mid" >

                                <div className="earn_body_foot_div_mid_cover" >
                                    <img src={EthImg} />
                                </div>

                                <h4>Default Goerli Weth Natrium</h4>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={dollarIcon} />
                                    <h6>$21k TVL</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={EthImg} />
                                    <h6>WETH</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={finIcon} />
                                    <h6>0.01%</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={userIcon} />
                                    <h6>0x50d0..6644</h6>
                                </div>

                                <button>Supply</button>

                                <Link>View Vault</Link>

                            </div>

                        </div> */}

                        <div className="earn_body_foot_div" >

                            <div className="earn_body_foot_div_top" >Featured vaults</div>

                            <div className="earn_body_foot_div_mid" >

                                <div className="earn_body_foot_div_mid_cover" >
                                    <img src={WeiImg} />
                                </div>

                                <h4>Default Goerli Dai Natrium</h4>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={dollarIcon} />
                                    <h6>$21k TVL</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={WeiImg} />
                                    <h6>DAI</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={finIcon} />
                                    <h6>0.01%</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={userIcon} />
                                    <h6>0x50d0..6644</h6>
                                </div>

                                {/* <button>Supply</button>

                                <Link>View Vault</Link> */}

                            </div>

                        </div>
{/* 
                        <div className="earn_body_foot_div" >

                            <div className="earn_body_foot_div_top" >Featured vaults</div>

                            <div className="earn_body_foot_div_mid" >

                                <div className="earn_body_foot_div_mid_cover" >
                                    <img src={DaiImg} />
                                </div>

                                <h4>Default Goerli Weth Natrium</h4>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={dollarIcon} />
                                    <h6>$21k TVL</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={DaiImg} />
                                    <h6>USDC</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={finIcon} />
                                    <h6>0.01%</h6>
                                </div>

                                <div className="earn_body_foot_div_mid_split" >
                                    <img src={userIcon} />
                                    <h6>0x50d0..6644</h6>
                                </div>

                                <button>Supply</button>

                                <Link>View Vault</Link>

                            </div>

                        </div> */}

                    </div>

                    <div style={{
                        marginBottom:'2rem',
                        width:'100%',
                        padding:'2rem'
                    }} >
                        
                        <div className="borrow_dialog_main_div" >

                            <div className="borrow_dialog_main_div_right" >
                                <h4>{loanTokenName}</h4>
                                <div className="borrow_dialog_main_div_right_btm" >
                                    <input placeholder="0.00" value={collateralAmount} onChange={ (e) => setcollateralAmount(e.target.value) } />
                                    <button>Max</button>
                                </div>
                            </div>
                        
                            <button className="borrow_dialog_main_div_left" onClick={ () => HandleSupplyCollateral() } >
                               { isLoading ? <Spin/> :  'Supply Token'}
                            </button>

                        </div>

                        <div className="borrow_dialog_main_div" style={{
                            marginTop:'1rem'
                        }} >

                            <div className="borrow_dialog_main_div_right" >
                                <h4>{loanTokenName}</h4>
                                <div className="borrow_dialog_main_div_right_btm" >
                                    <input placeholder="0.00" value={wcollateralAmount} onChange={ (e) => setwcollateralAmount(e.target.value) } />
                                    <button >Max</button>
                                </div>
                            </div>

                            <button className="borrow_dialog_main_div_left_2" onClick={ () => HandlewCollateral() } >
                               { isLoading ? <Spin/> :  'Withdraw Token'}
                            </button>

                        </div>
                    
                    </div>

                </div>

            </div>
        </>

    );

}

export default DappEarn;