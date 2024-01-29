import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AppContext from "../../context/Appcontext";
import { ethers } from "ethers";
import { Abi } from "../../constants/abi";
import { Spin, Table } from "antd";

const DappBorrow = () => {

    const { sideNav, UpdatesideNav, user_account, main_contract, market_info_contract ,signer, irm_contract, oracle_contract,notification, RpcUrl } = useContext(AppContext)

    const [ isLoading, setisLoading ] = useState(false)

    const [ modal, setmodal ] = useState(true)

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
    
    const [ marketList, setmarketList ] = useState([ '0xc6b6b56565ae8aba1d1efdab684a200229d84e523fb50a41431a89964058470c' ,'0xad6b6cfc771c88bbb79c952b5b31d145cda37c8ea96125f561e2036442325dc6' ])
    const [ marketListDetails, setmarketListDetails ] = useState()
    const [ analysisMarket, setanalysisMarket ] = useState(null)
    const [ pageLoading, setpageLoading ] = useState(false)


    useEffect(() => {
        Getallmarketdetails()
    }, [user_account])


    const Getallmarketdetails = async () => {

        try{

            let TheMarket = [] ;

            for (let k = 0; k < marketList.length; k++) {

                // console.log(getdetail)

                const marketId = marketList[k];
                const getdetail = await getMarketDetails(marketId)
                const getmarket = await getMarket(marketId)

                console.log(getdetail)


                const loanToken = getdetail[0]
                const collateralToken = getdetail[1]
                const oracleAddress = getdetail[2]
                const irmAddress = getdetail[3]
                const lltv = getdetail[4]
                const loantokenDetails = await getTokendetails(loanToken)
                const collateraltokenDetails = await getTokendetails(collateralToken)
                const Totalsupplyasset = getmarket[0]
                const totalsupplyshares = getmarket[1]
                const Totalborrowasset = getmarket[2]
                const Totalborrowshares = getmarket[3]
                const lastUpdate = getmarket[4]
                const fee = getmarket[5]
                const marketTotalborrow = await MarketTotalBorrow(
                    loanToken,
                    collateralToken,
                    oracleAddress,
                    irmAddress,
                    lltv
                )
                const marketTotalsupply = await MarketTotalSupply(
                    loanToken,
                    collateralToken,
                    oracleAddress,
                    irmAddress,
                    lltv
                )
                const borrowAPY = await getBorrowAPY(
                    loanToken,
                    collateralToken,
                    oracleAddress,
                    irmAddress,
                    lltv,
                    marketId,
                    Totalsupplyasset,
                    totalsupplyshares,
                    Totalborrowasset,
                    Totalborrowshares,
                    lastUpdate,
                    fee
                )
                const supplyAPY = await getsupplyAPY(
                    loanToken,
                    collateralToken,
                    oracleAddress,
                    irmAddress,
                    lltv,
                    marketId,
                    Totalsupplyasset,
                    totalsupplyshares,
                    Totalborrowasset,
                    Totalborrowshares,
                    lastUpdate,
                    fee
                )


                TheMarket.push({
                    market_id:marketId,
                    loan_token_address:loanToken,
                    loan_token_name:loantokenDetails.token_name,
                    loan_token_symbol:loantokenDetails.token_symbol,
                    collateral_token_address:collateralToken,
                    collateral_token_name:collateraltokenDetails.token_name,
                    collateral_token_symbol:collateraltokenDetails.token_symbol,
                    oracle_address:oracleAddress,
                    irm_address:irmAddress,
                    lltv:lltv,
                    totalsupplyasset:Totalsupplyasset,
                    totalsupplyshares:totalsupplyshares,
                    totalborrowassset:Totalborrowasset,
                    totalborrowshares:Totalborrowshares,
                    lastUpdate: lastUpdate,
                    fee: fee,
                    borrow_apy:borrowAPY,
                    supply_apy:supplyAPY,
                    market_total_borrow:marketTotalborrow,
                    market_total_supply:marketTotalsupply
                })

            }

            setmarketListDetails(TheMarket)

            console.log(TheMarket)

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

        const updatedcollateralAmount = ethers.parseEther(collateralAmount);

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const approveCollateral = new ethers.Contract(
                analysisMarket.collateral_token_address,
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
                loanToken:analysisMarket.loan_token_address,
                collateralToken:analysisMarket.collateral_token_address,
                oracle:analysisMarket.oracle_address,
                irm:analysisMarket.irm_address,
                lltv:analysisMarket.lltv
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
            updatedborrowAmount = `${updatedborrowAmount}000000000000000000`
            // updatedborrowAmount = ethers.parseEther(borrowAmount);
            

        try{


            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            // const approveBorrow = new ethers.Contract(
            //     collateralToken,
            //     Abi.ERC20ABI,
            //     mainS
            // )

            // await approveBorrow.approve(
            //     main_contract,
            //     updatedborrowAmount
            // )

            const borrowTokrn = await contract.borrow({
                loanToken:analysisMarket.loan_token_address,
                collateralToken:analysisMarket.collateral_token_address,
                oracle:analysisMarket.oracle_address,
                irm:analysisMarket.irm_address,
                lltv:analysisMarket.lltv
            },updatedborrowAmount,0,user_account,user_account)

            // console.log(borrowTokrn)

            if ( borrowTokrn.hash ) {
                setborrowAmount('')
                setisLoading(false);
                notification('success','Success',`You ve successfully borrowed ${borrowAmount} ${analysisMarket.loan_token_symbol} please check your wallet`)
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

        if ( repayAmount === '' || repayAmount === '0') {
            notification('error','Error','Please fill all fields')
            setisLoading(false);
            return;
        }

        const updatedrepayAmount = ethers.parseEther(repayAmount)

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const approveRepay = new ethers.Contract(
                analysisMarket.loan_token_address,
                Abi.ERC20ABI,
                mainS
            )

            await approveRepay.approve(
                main_contract,
                updatedrepayAmount
            )

            const repayTokrn = await contract.repay({
                loanToken:analysisMarket.loan_token_address,
                collateralToken:analysisMarket.collateral_token_address,
                oracle:analysisMarket.oracle_address,
                irm:analysisMarket.irm_address,
                lltv:analysisMarket.lltv
            },updatedrepayAmount,0,user_account,'0x')

            // console.log(repayTokrn)

            if ( repayTokrn.hash ) {
                setrepayAmount('')
                // setisLoading(false);
                notification('success','Success',`You ve successfully repaid your loan of ${repayAmount} ${analysisMarket.loan_token_symbol}`)
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

        const updatedwcollateralAmount = ethers.parseEther(wcollateralAmount)

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const wCollateral = await contract.withdrawCollateral({
                loanToken:analysisMarket.loan_token_address,
                collateralToken:analysisMarket.collateral_token_address,
                oracle:analysisMarket.oracle_address,
                irm:analysisMarket.irm_address,
                lltv:analysisMarket.lltv
            },updatedwcollateralAmount,user_account,user_account)

            // console.log(wCollateral)

            if ( wCollateral.hash ) {
                setwcollateralAmount('')
                setisLoading(false);
                notification('success','Success',`You ve successfully withdrawn your collateral of ${wcollateralAmount} ${analysisMarket.collateral_token_symbol}`)
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

        // if ( user_account ) {
            
        //     setInterval(() => {
        //         getCollateralBalance()
        //     }, 4000);

        // }

    }, [user_account] )



    const ConvertTobase256 = (unit_number,fixed_number) => {
        const TheNumber = Number(unit_number)/10**18
        return( TheNumber.toFixed( fixed_number ? fixed_number : 2 ) )
    }

    const getTokendetails = async (tokenAddress) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                tokenAddress,
                Abi.ERC20ABI,
                mainS
            )

            const tokenName = await contract.name()
            const tokenSymbol = await contract.symbol()
            return { token_name: tokenName, token_symbol: tokenSymbol }

        }
        catch(error){
            console.log(error)
        }

    }

    const getMarket = async (market_id) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const getMarketdetail = await contract.market(market_id)

            return getMarketdetail

        }
        catch(error){
            console.log(error)
        }

    }

    const getMarketDetails = async (marketId) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const getMarketdetail = await contract.idToMarketParams(marketId)

            console.log('Market - main',getMarketdetail)
            return getMarketdetail

        }
        catch(error){
            console.log("dami",error)
        }

    }

    const getCollateralBalance = async (collateral_asset) => {

        try{

            const mainS = await signer()
            const contract = new ethers.Contract(
                collateral_asset,
                Abi.ERC20ABI,
                mainS
            )

            const balance = await contract.balanceOf(user_account);

            setcollateralBalance( ConvertTobase256(balance) )


        }
        catch(error){
            console.log(error)
        }

    }

    const BorrowAssetUser = async (market) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const borrowAssetuserHadeler = await contract.borrowAssetsUser({
                loanToken:market.loan_token_address,
                collateralToken:market.collateral_token_address,
                oracle:market.oracle_address,
                irm:market.irm_address,
                lltv:market.lltv,
            },user_account)

            console.log(ConvertTobase256(borrowAssetuserHadeler))

            setrepayAmount(ConvertTobase256(borrowAssetuserHadeler))

        }
        catch(error){
            console.log(error)
        }
    }

    const SupplyAssetUser = async (market) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const supplyAssetuserHadeler = await contract.supplyAssetsUser({
                loanToken:market.loan_token_address,
                collateralToken:market.collateral_token_address,
                oracle:market.oracle_address,
                irm:market.irm_address,
                lltv:market.lltv,
            },user_account)

            settotaluserSupply(ConvertTobase256(supplyAssetuserHadeler))

        }
        catch(error){
            console.log(error)
        }
    }

    const CollateralAssetUser = async (marketId) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const collateralAssetuserHadeler = await contract.collateralAssetsUser(marketId,user_account)

            setwcollateralAmount(ConvertTobase256(collateralAssetuserHadeler))

        }
        catch(error){
            console.log(error)
        }
    }

    const MarketTotalBorrow = async (
        loanToken,
        collateralToken,
        oracleAddress,
        irmAddress,
        lltv,
    ) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const marketTotalBorrowhandler = await contract.marketTotalBorrow({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracleAddress,
                irm:irmAddress,
                lltv:lltv,
            })

            return marketTotalBorrowhandler

        }
        catch(error){
            console.log(error)
        }
    }

    const MarketTotalSupply = async (
        loanToken,
        collateralToken,
        oracleAddress,
        irmAddress,
        lltv,
    ) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const marketTotalSupplyhandler = await contract.marketTotalSupply({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracleAddress,
                irm:irmAddress,
                lltv:lltv,
            })

            return marketTotalSupplyhandler

        }
        catch(error){
            console.log(error)
        }
    }

    const getsupplyAPY = async (
        loan_token,
        collateral_token,
        oracle,
        irm,
        lltv,
        market_id,
        total_supply_assets,
        total_supply_shares,
        total_borrow_assets,
        total_borrow_shares,
        last_update,
        fee
    ) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const getSupplyAPY = await contract.supplyAPY({
                loanToken:loan_token,
                collateralToken:collateral_token,
                oracle:oracle,
                irm:irm,
                lltv:lltv,
            },{
                market:market_id,
                totalSupplyAssets:total_supply_assets,
                totalSupplyShares:total_supply_shares,
                totalBorrowAssets:total_borrow_assets,
                totalBorrowShares:total_borrow_shares,
                lastUpdate:last_update,
                fee:fee
            })

            return getSupplyAPY

        }
        catch(error){
            console.log(error)
        }

    }

    const getBorrowAPY = async (
        loan_token,
        collateral_token,
        oracle,
        irm,
        lltv,
        market_id,
        total_supply_assets,
        total_supply_shares,
        total_borrow_assets,
        total_borrow_shares,
        last_update,
        fee
    ) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const getBorrowAPY = await contract.borrowAPY({
                loanToken:loan_token,
                collateralToken:collateral_token,
                oracle:oracle,
                irm:irm,
                lltv:lltv,
            },{
                market:market_id,
                totalSupplyAssets:total_supply_assets,
                totalSupplyShares:total_supply_shares,
                totalBorrowAssets:total_borrow_assets,
                totalBorrowShares:total_borrow_shares,
                lastUpdate:last_update,
                fee:fee
            })

            return getBorrowAPY

        }
        catch(error){
            console.log(error)
        }

    }

    const userHealthFactor = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const getBorrowAPY = await contract.userHealthFactor({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            },'0xc6b6b56565ae8aba1d1efdab684a200229d84e523fb50a41431a89964058470c',user_account)

            let y = Number(getBorrowAPY) /10**18

            console.log('userHealthFactor',y.toString())

        }
        catch(error){
            console.log(error)
        }

    }
 



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

                            <h4 className="borrowTable_top_1" >Total Supplied</h4>
                            <h4 className="borrowTable_top_2" >Collateral Asset</h4>
                            <h4 className="borrowTable_top_3" >Loan Asset</h4>
                            <h4 className="borrowTable_top_4" >LLTV</h4>
                            <h4 className="borrowTable_top_5" >Liquidity</h4>
                            <h4 className="borrowTable_top_s" >Total Borrowed</h4>
                            <h4 className="borrowTable_top_6" >Market ID</h4>

                        </div>

                        { marketListDetails ?
                        
                            marketListDetails.map( (market,index) => {

                                return <div className="borrowTable_btm" style={{
                                    cursor:"pointer",
                                    alignItems:"center"
                                }} onClick={ () => {
                                    getCollateralBalance(market.collateral_token_address)
                                    setanalysisMarket(market)
                                    setopenModal(true)
                                } } key={index}  >
                                    
                                    <div className="borrowTable_btm_1" >
                                        {/* <img src={DaiImg} alt="ing" />
                                        <img src={WeiImg} alt="ing" /> */}
                                        <h5> { ConvertTobase256(market.market_total_supply,2) } {market.loan_token_symbol} </h5>
                                    </div>
        
                                    <div className="borrowTable_btm_2" >
                                        {/* <img src={WeiImg} alt="ing" /> */}
                                        <h5>{market.collateral_token_symbol}</h5>
                                    </div>
        
                                    <div className="borrowTable_btm_3" >
                                        {/* <img src={DaiImg} alt="ing" /> */}
                                        <h5>{market.loan_token_symbol}</h5>
                                    </div>
        
                                    <div className="borrowTable_btm_4" >
                                        <h5>{ConvertTobase256(market.lltv)*100}%</h5>
                                    </div>
        
                                    <div className="borrowTable_btm_5" style={{
                                        textAlign:"center"
                                    }} >
                                        {/* <img src={WeiImg} alt="ing" /> */}
                                        <h5>{ ConvertTobase256(market.market_total_supply,10) - ConvertTobase256(market.market_total_borrow,10) } {market.loan_token_symbol}</h5>
                                    </div>
        
                                    <div className="borrowTable_btm_s" >
                                        <h5>{ConvertTobase256(market.market_total_borrow,10)} {market.loan_token_symbol}</h5>
                                    </div>
        
                                    <div className="borrowTable_btm_6" >
                                        <h5>{ `${market.market_id[0]}${market.market_id[1]}${market.market_id[2]}${market.market_id[3]}${market.market_id[4]}` }</h5>
                                    </div>
        
                                </div>

                            } )
                        
                        : <Spin/> }

                    </div> 

                    <div className="borrow_dialog" style={{ display: openModal ? 'block' : 'none' }} >
                        
                        <div className="borrow_dialog_top" >
                            <button className={ modal ? "borrow_dialog_top_1" : "borrow_dialog_top_2" } onClick={ () => setmodal(true) } >Borrow</button>
                            <button className={ !modal ? "borrow_dialog_top_1" : "borrow_dialog_top_2" } onClick={ () => {
                                CollateralAssetUser(analysisMarket.market_id)
                                BorrowAssetUser(analysisMarket)
                                setmodal(false)} } >Repay</button>
                        </div>

                        <div className="borrow_dialog_main" style={{
                            display: analysisMarket ? 'block' : 'none'
                        }} >

                            { modal ? 
                            
                                analysisMarket ? <>
                                <div className="borrow_dialog_main_2div" >

                                    <div className="borrow_dialog_main_2div_part" >

                                        <h4 className="borrow_dialog_main_2div_part_top" >{collateralBalance} {analysisMarket.collateral_token_symbol}</h4>
                                        <div className="borrow_dialog_main_2div_part_btm" >

                                            <div className="borrow_dialog_main_2div_part_btm_left" >
                                                <h4>Collateral ({ analysisMarket.collateral_token_name })</h4>
                                            </div>

                                            <div className="borrow_dialog_main_2div_part_btm_right" >
                                                <input placeholder="0.00" value={collateralAmount} onChange={ (e) => setcollateralAmount(e.target.value) } />
                                                <button onClick={ () => setcollateralAmount(collateralBalance) } >Max</button>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="borrow_dialog_main_2div_part" >

                                        <h4 className="borrow_dialog_main_2div_part_top" >{ConvertTobase256(analysisMarket.market_total_supply,10) - ConvertTobase256(analysisMarket.market_total_borrow,10)} {analysisMarket.loan_token_symbol}</h4>
                                        <div className="borrow_dialog_main_2div_part_btm" >

                                            <div className="borrow_dialog_main_2div_part_btm_left" >
                                                <h4>Debt ({analysisMarket.loan_token_name})</h4>
                                            </div>

                                            <div className="borrow_dialog_main_2div_part_btm_right" >
                                                <input placeholder="0.00" value={borrowAmount} onChange={ (e) => setborrowAmount(e.target.value) } />
                                                <button onClick={ () => {
                                                    if ( collateralAmount === '' ) {
                                                        return
                                                    }

                                                    setborrowAmount(ConvertTobase256(analysisMarket.market_total_supply,10) - ConvertTobase256(analysisMarket.market_total_borrow,10))
                                                    setPercentage(90)


                                                } } >Max</button>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="borrow_dialog_main_2div_lltv" >
                                        <h4>Borrow Capacity</h4>
                                        <div>{Percentage}%</div>
                                    </div>

                                    <div className="borrow_dialog_main_2div_lltv" >
                                        <h4>Liquidation Price</h4>
                                        <div>N/A</div>
                                    </div>

                                    <input type="range" className="borrow_dialog_main_2div_slider" value={Percentage} onChange={ (e) => {
                                        let newCol
                                        var perc = e.target.value/100
                                        newCol = ConvertTobase256(analysisMarket.market_total_supply,2) - ConvertTobase256(analysisMarket.market_total_borrow,2)
                                        newCol = newCol * perc
                                        setPercentage(e.target.value)
                                        setborrowAmount(newCol)
                                    } } max={90} min={10} />

                                    <button className="borrow_dialog_main_2div_btn" onClick={ () => HandleSupplyCollateral() } >
                                        { isLoading ? <Spin/> : 'Borrow' }
                                    </button>

                                </div>
                            
                            </> : <></>

                            :
                            
                            
                                analysisMarket ? 
                                
                                <>
                                    <div className="borrow_dialog_main_2div" >

                                        <div className="borrow_dialog_main_2div_part" >

                                            <h4 className="borrow_dialog_main_2div_part_top" >{ repayAmount } {analysisMarket.loan_token_symbol}</h4>
                                            <div className="borrow_dialog_main_2div_part_btm" >

                                                <div className="borrow_dialog_main_2div_part_btm_left" >
                                                    <h4>Debt ({analysisMarket.loan_token_name})</h4>
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

                                            {/* <h4 className="borrow_dialog_main_2div_part_top" >{wcollateralAmount} {analysisMarket.collateral_token_symbol}</h4> */}
                                            <div className="borrow_dialog_main_2div_part_btm" >

                                                <div className="borrow_dialog_main_2div_part_btm_left" >
                                                    <h4>Collateral ({analysisMarket.collateral_token_name})</h4>
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
                                
                                : <></>
                            
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