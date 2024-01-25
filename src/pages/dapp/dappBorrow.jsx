import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AppContext from "../../context/Appcontext";
import { ethers } from "ethers";
import { Abi } from "../../constants/abi";
import { Spin, Table } from "antd";

const DappBorrow = () => {

    const { sideNav, UpdatesideNav, user_account, main_contract, signer, irm_contract, oracle_contract,notification, RpcUrl } = useContext(AppContext)

    const [ isLoading, setisLoading ] = useState(false)

    const [ modal, setmodal ] = useState(false)

    const [ openModal, setopenModal ] = useState(false);

    const [ collateralAmount, setcollateralAmount ] = useState('')
    const [ borrowAmount, setborrowAmount ] = useState('')
    const [ repayAmount, setrepayAmount ] = useState('')
    const [ wcollateralAmount, setwcollateralAmount ] = useState('')

    const [ collateralBalance, setcollateralBalance ] = useState('')
    const [ loanBalance, setloanBalance ] = useState('')
    const [ Percentage, setPercentage ] = useState(90)

    const loanToken = '0xC734D5f31C61a1b716017E0BcF7698Fe01BC2717'
    const loanTokenName = 'Dai'
    const loanTokenPrice = '1'
    const collateralToken = '0x167287Ae959fb06C6e6b50844fe8a970bED2689a'
    const collateralTokenName = 'Weth'
    const collateralTokenPrice = '2200'
    const lltv = '900000000000000000'
    





    const getCollateralBalance = async () => {

        try{

            const mainS = await signer()
            // const provider = new ethers.JsonRpcApiProvider(RpcUrl)
            // const erc20 = new ethers.Contract(token.tokenAddress,ERC20ABI,provider)

            const contract = new ethers.Contract(
                collateralToken,
                Abi.ERC20ABI,
                mainS
            )

            const contract2 = new ethers.Contract(
                loanToken,
                Abi.ERC20ABI,
                mainS
            )

            const balance = await contract.balanceOf(user_account);
            const balance2 = await contract2.balanceOf(user_account);
            setloanBalance(Number(balance2)/1000000000000000000)
            
            setcollateralBalance(Number(balance)/1000000000000000000)

        }
        catch(error){
            console.log(error)
        }

    }

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

        const updatedcollateralAmount = `${collateralAmount}000000000000000000`;

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

            setTimeout(() => {
                
            }, 5000);

            const supplyCollateral = await contract.supplyCollateral({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv
            },updatedcollateralAmount,user_account,'0x')

            if ( supplyCollateral.hash ) {
                setcollateralAmount('')
                // setisLoading(false);
                // notification('success','Success',`Collateral of ${collateralAmount} ${collateralTokenName} was successfully supplied`)
                HandleBorrow()
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

        let updatedborrowAmount = Math.round(borrowAmount)
            // updatedborrowAmount = updatedborrowAmount * 1000000000000000000
            updatedborrowAmount = `${String(borrowAmount)}000000000000000000`

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
                lltv:lltv
            },updatedborrowAmount,0,user_account,user_account)

            // console.log(borrowTokrn)

            if ( borrowTokrn.hash ) {
                setborrowAmount('')
                setisLoading(false);
                notification('success','Success',`You ve successfully borrowed ${borrowAmount} ${loanTokenName} please check your wallet`)
            }

        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error', error.reason ? error.reason : 'Something went wrong while processing your transaction')
            return;
        }

    }

    const HandleRepay = async () => {

        setisLoading(true)

        if (!user_account) {
            notification('error','Error','Please connect your wallet')
            setisLoading(false);
            return;
        }

        if ( repayAmount === '' ) {
            notification('error','Error','Please fill all fields')
            setisLoading(false);
            return;
        }

        const updatedrepayAmount = `${repayAmount}000000000000000000`

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const approveRepay = new ethers.Contract(
                loanToken,
                Abi.ERC20ABI,
                mainS
            )

            await approveRepay.approve(
                main_contract,
                updatedrepayAmount
            )

            const repayTokrn = await contract.repay({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`900000000000000000`
            },updatedrepayAmount,0,user_account,'0x')

            // console.log(repayTokrn)

            if ( repayTokrn.hash ) {
                setrepayAmount('')
                // setisLoading(false);
                notification('success','Success',`You ve successfully repaid your loan of ${repayAmount} ${loanTokenName}`)
                HandlewCollateral()
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

            const wCollateral = await contract.withdrawCollateral({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:`900000000000000000`
            },updatedwcollateralAmount,user_account,user_account)

            // console.log(wCollateral)

            if ( wCollateral.hash ) {
                setwcollateralAmount('')
                setisLoading(false);
                notification('success','Success',`You ve successfully withdrawn your collateral of ${wcollateralAmount} ${collateralTokenName}`)
            }
            
        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error', error.reason ? error.reason : 'Something went wrong while processing your transaction')
            return;
        }
    }






    useEffect( () => {

        if ( user_account ) {
            
            setInterval(() => {
                getCollateralBalance()
            }, 4000);

        }

    }, [user_account] )
 




    return (

        <>
            <div className="dappDashboard" >
                <DappHeader
                    title={"Borrow"}
                    subTitle={"Borrow Crypto Assets"}
                />

                <div className="dappDashboard_body" style={{
                    overflowX:'auto'
                }} >
    {/* 
                    <div className="dappDashboard_nowallet" >

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

                        <div className="borrowTable_btm" style={{
                            cursor:"pointer",
                        }} onClick={ () => setopenModal(true) }  >
                            
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

                    <div className="borrow_dialog" style={{ display: openModal ? 'block' : 'none' }} >
                        
                        <div className="borrow_dialog_top" >
                            <button className={ modal ? "borrow_dialog_top_1" : "borrow_dialog_top_2" } onClick={ () => setmodal(true) } >Borrow</button>
                            <button className={ !modal ? "borrow_dialog_top_1" : "borrow_dialog_top_2" } onClick={ () => setmodal(false) } >Repay</button>
                        </div>

                        <div className="borrow_dialog_main" >

                            { modal ? 
                            
                                <>
                                    <div className="borrow_dialog_main_2div" >

                                        <div className="borrow_dialog_main_2div_part" >

                                            <h4 className="borrow_dialog_main_2div_part_top" >{collateralBalance} {collateralTokenName}</h4>
                                            <div className="borrow_dialog_main_2div_part_btm" >

                                                <div className="borrow_dialog_main_2div_part_btm_left" >
                                                    <h4>Collateral ({collateralTokenName})</h4>
                                                </div>

                                                <div className="borrow_dialog_main_2div_part_btm_right" >
                                                    <input placeholder="0.00" value={collateralAmount} onChange={ (e) => setcollateralAmount(e.target.value) } />
                                                    <button onClick={ () => setcollateralAmount(collateralBalance) } >Max</button>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="borrow_dialog_main_2div_part" >

                                            <h4 className="borrow_dialog_main_2div_part_top" >{loanBalance} {loanTokenName}</h4>
                                            <div className="borrow_dialog_main_2div_part_btm" >

                                                <div className="borrow_dialog_main_2div_part_btm_left" >
                                                    <h4>Debt ({loanTokenName})</h4>
                                                </div>

                                                <div className="borrow_dialog_main_2div_part_btm_right" >
                                                    <input placeholder="0.00" value={borrowAmount} onChange={ (e) => setborrowAmount(e.target.value) } />
                                                    <button onClick={ () => {
                                                        if ( collateralAmount === '' ) {
                                                            return
                                                        }

                                                        let newCol = collateralAmount * collateralTokenPrice
                                                        newCol = newCol * 0.9

                                                        setborrowAmount(newCol)
                                                        setPercentage(90)


                                                    } } >Max</button>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="borrow_dialog_main_2div_lltv" >
                                            <h4>Liquidation Price (DAI/WETH)</h4>
                                            <div>{Percentage}%</div>
                                        </div>

                                        <input type="range" className="borrow_dialog_main_2div_slider" value={Percentage} onChange={ (e) => {
                                            let newCol = collateralAmount * collateralTokenPrice
                                            var perc = e.target.value/100
                                            newCol = newCol * perc
                                            setPercentage(e.target.value)
                                            setborrowAmount(newCol)
                                        } } max={90} min={10} />

                                        <button className="borrow_dialog_main_2div_btn" onClick={ () => HandleSupplyCollateral() } >
                                            { isLoading ? <Spin/> : 'Borrow' }
                                        </button>

                                    </div>
                                
                                </>

                            :
                            
                            
                                <>
                                    <div className="borrow_dialog_main_2div" >

                                        <div className="borrow_dialog_main_2div_part" >

                                            <h4 className="borrow_dialog_main_2div_part_top" >{loanBalance} {loanTokenName}</h4>
                                            <div className="borrow_dialog_main_2div_part_btm" >

                                                <div className="borrow_dialog_main_2div_part_btm_left" >
                                                    <h4>Debt ({loanTokenName})</h4>
                                                </div>

                                                <div className="borrow_dialog_main_2div_part_btm_right" >
                                                    <input placeholder="0.00" value={repayAmount} onChange={ (e) => {
                                                        
                                                        setrepayAmount(e.target.value)
                                                        setwcollateralAmount(e.target.value/collateralTokenPrice)

                                                    } } />
                                                    <button onClick={ () => {
                                                        if ( loanBalance === '' ) {
                                                            return
                                                        }

                                                        setrepayAmount(loanBalance)
                                                        setPercentage(90)
                                                        setwcollateralAmount(loanBalance/collateralTokenPrice)



                                                    } } >Max</button>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="borrow_dialog_main_2div_part" >

                                            <h4 className="borrow_dialog_main_2div_part_top" >{collateralBalance} {collateralTokenName}</h4>
                                            <div className="borrow_dialog_main_2div_part_btm" >

                                                <div className="borrow_dialog_main_2div_part_btm_left" >
                                                    <h4>Collateral ({collateralTokenName})</h4>
                                                </div>

                                                <div className="borrow_dialog_main_2div_part_btm_right" >
                                                    <input placeholder="0.00" value={wcollateralAmount} onChange={ (e) => setwcollateralAmount(e.target.value) } />
                                                    {/* <button onClick={ () => setcollateralAmount(collateralBalance) } >Max</button> */}
                                                </div>

                                            </div>

                                        </div>

                                        <button className="borrow_dialog_main_2div_btn" onClick={ () => HandleRepay() } >
                                            { isLoading ? <Spin/> : 'Repay Loan' }
                                        </button>

                                    </div>
                                </>
                            
                            }

                        </div>

                    </div>
                </div>

            </div>

            <div className="back_drop_borrow" style={{ display: openModal ? 'block' : 'none' }} onClick={ () => setopenModal(false) } >

            </div>


        </>
    );

}

export default DappBorrow;