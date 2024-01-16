import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';
import { useContext, useState } from "react";
import AppContext from "../../context/Appcontext";
import { ethers } from "ethers";
import { Abi } from "../../constants/abi";

const DappBorrow = () => {

    const { sideNav, UpdatesideNav, user_account, main_contract, signer, irm_contract, oracle_contract,notification } = useContext(AppContext)

    const [ isLoading, setisLoading ] = useState(false)

    const [ modal, setmodal ] = useState(true)

    const [ collateralAmount, setcollateralAmount ] = useState('')
    const [ borrowAmount, setborrowAmount ] = useState('')

    const HandleSupplyCollateral = async () => {

        setisLoading(true)

        const collateralToken = '0xC734D5f31C61a1b716017E0BcF7698Fe01BC2717'
        const loanToken = '0x167287Ae959fb06C6e6b50844fe8a970bED2689a'

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
                collateralToken,
                Abi.ERC20ABI,
                mainS
            )

            await approveCollateral.approve(
                main_contract,
                updatedcollateralAmount
            )

            const supplyCollateral = await contract.supplyCollateral({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`900000000000000000`
            },updatedcollateralAmount,user_account,'0x')

            if ( supplyCollateral.hash ) {
                setcollateralAmount('')
                setisLoading(false);
                notification('success','Success','Collateral was successfully supplied')
            }

        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error', error.reason ? error.reason : 'Something went wrong while processing your transaction')
            return;
        }

    }


    const HandleBorrow = async () => {

        setisLoading(true)

        const collateralToken = '0xC734D5f31C61a1b716017E0BcF7698Fe01BC2717'
        const loanToken = '0x167287Ae959fb06C6e6b50844fe8a970bED2689a'

        if (!user_account) {
            notification('error','Error','Please connect your wallet')
            setisLoading(false);
            return;
        }

        if ( borrowAmount === '' ) {
            notification('error','Error','Please fill all fields')
            setisLoading(false);
            return;
        }

        const updatedborrowAmount = `${borrowAmount}000000000000000000`

        try{


            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const approveBorrow = new ethers.Contract(
                collateralToken,
                Abi.ERC20ABI,
                mainS
            )

            await approveBorrow.approve(
                main_contract,
                updatedborrowAmount
            )

            const borrowTokrn = await contract.borrow({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`900000000000000000`
            },updatedborrowAmount,0,user_account,user_account)

            if ( borrowTokrn.hash ) {
                setcollateralAmount('')
                setisLoading(false);
                notification('success','Success','Collateral was successfully supplied')
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

        <div className="dappDashboard" >
            <DappHeader
                title={"Borrow"}
                subTitle={"Borrow Crypto Assets"}
            />

            <div className="dappDashboard_body" >

                {/* <div className="dappDashboard_nowallet" >

                                <h4>Sign In</h4>

                                <h6>Connect your wallet to see your positions</h6>

                                <button>
                                    Connect Wallet
                                </button>

                            </div> */}

                <div className="borrowTable" >

                    <div className="borrowTable_top" >

                        <h4 className="borrowTable_top_1" >Market</h4>
                        <h4 className="borrowTable_top_2" >Collateral Asset</h4>
                        <h4 className="borrowTable_top_3" >Loan Asset</h4>
                        <h4 className="borrowTable_top_4" >LLTV</h4>
                        <h4 className="borrowTable_top_5" >Liquidity</h4>
                        <h4 className="borrowTable_top_s" >Rate & Rewards</h4>
                        <h4 className="borrowTable_top_6" >Market ID</h4>

                    </div>

                    <div className="borrowTable_btm" >
                        
                        <div className="borrowTable_btm_1" >
                            <img src={DaiImg} alt="ing" />
                            <img src={WeiImg} alt="ing" />
                            <h5>WETH (DAI, 90%)</h5>
                        </div>

                        <div className="borrowTable_btm_2" >
                            <img src={WeiImg} alt="ing" />
                            <h5>DAI</h5>
                        </div>

                        <div className="borrowTable_btm_3" >
                            <img src={DaiImg} alt="ing" />
                            <h5>WETH</h5>
                        </div>

                        <div className="borrowTable_btm_4" >
                            <h5>90.00%</h5>
                        </div>

                        <div className="borrowTable_btm_5" >
                            <img src={WeiImg} alt="ing" />
                            <h5>0.00 DAI</h5>
                        </div>

                        <div className="borrowTable_btm_s" >
                            <h5>3.47%</h5>
                        </div>

                        <div className="borrowTable_btm_6" >
                            <h5>0x3098...d5a0</h5>
                        </div>

                    </div>

                </div> 

                <div className="borrow_dialog" >
                    
                    <div className="borrow_dialog_top" >
                        <button className={ modal ? "borrow_dialog_top_1" : "borrow_dialog_top_2" } onClick={ () => setmodal(true) } >Supply</button>
                        <button className={ !modal ? "borrow_dialog_top_1" : "borrow_dialog_top_2" } onClick={ () => setmodal(false) } >withdraw</button>
                    </div>

                    <div className="borrow_dialog_main" >

                        { modal ? 
                        
                            <>
                            
                            <div className="borrow_dialog_main_div" >
                            
                                <button className="borrow_dialog_main_div_left" onClick={ () => HandleSupplyCollateral() } >
                                    Supply Collateral
                                </button>

                                <div className="borrow_dialog_main_div_right" >
                                    <h4>0.00$</h4>
                                    <div className="borrow_dialog_main_div_right_btm" >
                                        <input placeholder="0.00" value={collateralAmount} onChange={ (e) => setcollateralAmount(e.target.value) } />
                                        <button>Max</button>
                                    </div>
                                </div>

                            </div>

                            <div className="borrow_dialog_main_div" style={{
                                marginTop:'1rem'
                            }} >
                                
                                <button className="borrow_dialog_main_div_left_2" onClick={ () => HandleBorrow() } >
                                    Borrow
                                </button>

                                <div className="borrow_dialog_main_div_right" >
                                    <h4>0.00$</h4>
                                    <div className="borrow_dialog_main_div_right_btm" >
                                        <input placeholder="0.00" value={borrowAmount} onChange={ (e) => setborrowAmount(e.target.value) } />
                                        <button >Max</button>
                                    </div>
                                </div>

                            </div>
                            
                            </>

                        :
                        
                        
                        <>
                            
                            <div className="borrow_dialog_main_div" >
                            
                                <button className="borrow_dialog_main_div_left" onClick={ () => HandleSupplyCollateral() } >
                                    Withdraw Collateral
                                </button>

                                <div className="borrow_dialog_main_div_right" >
                                    <h4>0.00$</h4>
                                    <div className="borrow_dialog_main_div_right_btm" >
                                        <input placeholder="0.00" value={collateralAmount} onChange={ (e) => setcollateralAmount(e.target.value) } />
                                        <button>Max</button>
                                    </div>
                                </div>

                            </div>

                            <div className="borrow_dialog_main_div" style={{
                                marginTop:'1rem'
                            }} >
                                
                                <button className="borrow_dialog_main_div_left_2" onClick={ () => HandleBorrow() } >
                                    Repay
                                </button>

                                <div className="borrow_dialog_main_div_right" >
                                    <h4>0.00$</h4>
                                    <div className="borrow_dialog_main_div_right_btm" >
                                        <input placeholder="0.00" value={borrowAmount} onChange={ (e) => setborrowAmount(e.target.value) } />
                                        <button >Max</button>
                                    </div>
                                </div>

                            </div>
                            
                            </>
                        
                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DappBorrow;