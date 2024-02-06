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
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/Appcontext';
import { ethers } from 'ethers';
import { Abi } from '../../constants/abi';
import { FaSearch, FaArrowLeft, FaExchangeAlt, FaPiggyBank, FaCopy } from "react-icons/fa";
import { Spin, Modal } from 'antd';
import { BsBank } from "react-icons/bs";
import { PiPottedPlant } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const DappEarn = () => {

    const { sideNav, UpdatesideNav, user_account, main_contract, signer, irm_contract, market_info_contract ,oracle_contract,notification, closeWeb3, enableWeb3,isWeb3Enabled, displayAccount } = useContext(AppContext)

    const [ isLoading, setisLoading ] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [ openModal, setopenModal ] = useState(false)
    
    const [ collateralAmount, setcollateralAmount ] = useState('')
    const [ borrowAmount, setborrowAmount ] = useState('')
    const [ repayAmount, setrepayAmount ] = useState('')
    const [ wcollateralAmount, setwcollateralAmount ] = useState('')

    const loanToken = '0xC734D5f31C61a1b716017E0BcF7698Fe01BC2717';
    const loanTokenName = 'Dai';
    const collateralToken = '0x167287Ae959fb06C6e6b50844fe8a970bED2689a';
    const collateralTokenName = 'Weth';
    const lltv = '900000000000000000';

    const marketList = [ '0x2dba925e5cdab443de71527ca7014773296350b1e0099c09587048b6eae229af' ,'0x1ba5055ba04bdb2fac8bc00e674629a97c03f277e2328a75f823c87233aaafef' ]
    const marketListOracles = [ '0x5B1b6f96360b3Ca3C7018DB4d3A59Eb8784297F1' ,'0xC858A1B9ECCf8045F22701467066F7c6dCc53194' ]

    const [ marketListDetails, setmarketListDetails ] = useState()

    const [ analysisMarket, setanalysisMarket ] = useState(null)
    const [ currentBalnce, setcurrentBalnce ] = useState('')
    const [ totaluserSupply, settotaluserSupply ] = useState('')
    const [ pageLoading, setpageLoading ] = useState(false)

    const [ Searchparams ,setSearchparams ] = useState('')



    useEffect(() => {
        Getallmarketdetails()
    }, [user_account])


    const Getallmarketdetails = async () => {

        try{

            let TheMarket = [] ;

            for (let k = 0; k < marketList.length; k++) {

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

               const collateral_token_price = await getPrice(marketListOracles[k])


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
                    collateral_token_price:collateral_token_price
                })

            }

            setmarketListDetails(TheMarket)

            console.log(TheMarket)

        }
        catch(error){
            console.log(error)
        }

    }


    const SearchMarket = async () => {

        try{

            if ( Searchparams === '' ) {
                return
            }

            const getdetail = await getMarketDetails(Searchparams);
            
            if ( !getdetail ) {
                notification('error','Result not found', 'Market dose not exist')
            }

            const getmarket = await getMarket(Searchparams)

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
            const borrowAPY = await getBorrowAPY(
                loanToken,
                collateralToken,
                oracleAddress,
                irmAddress,
                lltv,
                Searchparams,
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
                Searchparams,
                Totalsupplyasset,
                totalsupplyshares,
                Totalborrowasset,
                Totalborrowshares,
                lastUpdate,
                fee
            )


            setanalysisMarket({
                market_id:Searchparams,
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

            })

            getCollateralBalance(loanToken)
            SupplyAssetUser({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracleAddress,
                irm:irmAddress,
                lltv:lltv,
            })
            setopenModal(true)

        }
        catch(error){
            console.log(error)
        }

    }


    const ConvertTobase256 = (unit_number,fixed_number) => {
        const TheNumber = Number(unit_number)/10**18
        return( TheNumber.toFixed( fixed_number ? fixed_number : 2 ) )
    }

    const getPrice = async (oracleAddress) => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                oracleAddress,
                Abi.Pricing_oracle_abi,
                mainS
            )

            const tokenPrice = await contract.price()

            const fixedPrice = ConvertTobase256(tokenPrice)/10000

            return Math.floor(fixedPrice)

        }
        catch(error){
            console.log(error)
        }

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

        const updatedcollateralAmount = ethers.parseEther(collateralAmount)

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const approveCollateral = new ethers.Contract(
                analysisMarket.loan_token_address,
                Abi.ERC20ABI,
                mainS
            )

            await approveCollateral.approve(
                main_contract,
                updatedcollateralAmount
            )

            const supplyCollateral = await contract.supply({
                loanToken:analysisMarket.loan_token_address,
                collateralToken:analysisMarket.collateral_token_address,
                oracle:analysisMarket.oracle_address,
                irm:analysisMarket.irm_address,
                lltv:analysisMarket.lltv
            },updatedcollateralAmount,0,user_account,'0x')

            if ( supplyCollateral.hash ) {
                setcollateralAmount('')
                setisLoading(false);
                notification('success','Success',`${collateralAmount} ${analysisMarket.loan_token_symbol} was supplied successfully`)
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

            const wCollateral = await contract.withdraw({
                loanToken:analysisMarket.loan_token_address,
                collateralToken:analysisMarket.collateral_token_address,
                oracle:analysisMarket.oracle_address,
                irm:analysisMarket.irm_address,
                lltv:analysisMarket.lltv
            },updatedwcollateralAmount,0,user_account,user_account)

            // console.log(wCollateral)

            if ( wCollateral.hash ) {
                setwcollateralAmount('')
                setisLoading(false);
                notification('success','Success',`You ve successfully withdrawn ${wcollateralAmount} ${analysisMarket.loan_token_symbol}`)
            }
            
        }
        catch (error) {
            console.log(error);
            setisLoading(false);
            notification('error','Error', error.reason ? error.reason : 'Something went wrong while processing your transaction')
            return;
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

            setcurrentBalnce( ConvertTobase256(balance) )


        }
        catch(error){
            console.log(error)
        }

    }

    const BorrowAssetUser = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const borrowAssetuserHadeler = await contract.borrowAssetsUser({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            },user_account)

            console.log('BorrowAssetUser',ConvertTobase256(borrowAssetuserHadeler))

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

    const CollateralAssetUser = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const collateralAssetuserHadeler = await contract.collateralAssetsUser('0xc6b6b56565ae8aba1d1efdab684a200229d84e523fb50a41431a89964058470c',user_account)

            console.log('collateralAssetUser',ConvertTobase256(collateralAssetuserHadeler))

        }
        catch(error){
            console.log(error)
        }
    }

    const MarketTotalBorrow = async () => {

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
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            })

            console.log('marketTotalBorrow',ConvertTobase256(marketTotalBorrowhandler))

        }
        catch(error){
            console.log(error)
        }
    }

    const MarketTotalSupply = async () => {

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
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            })

            console.log('marketTotalSupply',ConvertTobase256(marketTotalSupplyhandler))

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
                    subTitle={""}
                    title={"Earn"}
                />

                <div className="earn_body">

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


                    <div style={{
                        padding:'2rem'
                    }} >

                        <div className="featured_tag" >Search Markets</div>


                        <div className="search_div" >
                            <input type="search" placeholder="Search for markets" value={Searchparams} onChange={ (e) => setSearchparams(e.target.value) } />
                            <button onClick={SearchMarket} >
                                <FaSearch className="search_ic" />
                                <h4>Search</h4>
                            </button>
                        </div>
                        
                    </div>

                    <div className="earn_body_foot" style={{
                        justifyContent:'center'
                    }} >

                        { marketListDetails ? 
                        
                            marketListDetails.map( (market) => {

                                return (

                                    <div className="market_list" key={market.market_id} >

                                        <div className="market_list_top" >
                                            <h4 style={{
                                                display:'flex',
                                                alignItems:'center',
                                                justifyContent:'space-between'
                                            }} >{market.loan_token_symbol}/{market.collateral_token_symbol} <CopyToClipboard text={ market.market_id } onCopy={ () => {
                                                notification('success','Copied',`You ve successfully copied the market id`)
                                            } } >
                                                <FaCopy style={{
                                                width:'.9rem',
                                                height:'.9rem',
                                                cursor:"pointer"
                                                }} />
                                                </CopyToClipboard> </h4>
                                            <h6>{market.loan_token_name}/{market.collateral_token_name}</h6>
                                        </div>

                                        <div className="market_list_main" >
                                            <h4 style={{
                                                display:"flex",
                                                alignItems:'center'
                                            }} >
                                                <FaPiggyBank style={{
                                                    width:"1.2rem",
                                                    height:"1.2rem",
                                                    marginRight:'.5rem'
                                                }} />
                                                Total supplied</h4>
                                            <h6>{ConvertTobase256(market.totalsupplyasset)} {market.loan_token_symbol}</h6>
                                        </div>

                                        <div className="market_list_main" style={{
                                            borderBottom:"1px solid gray",
                                            paddingBottom:".5rem"
                                        }} >
                                            <h4  style={{
                                                display:"flex",
                                                alignItems:'center'
                                            }} >
                                                <PiPottedPlant style={{
                                                    width:"1.2rem",
                                                    height:"1.2rem",
                                                    marginRight:'.5rem'
                                                }} />
                                                Supply APY</h4>
                                            <h6>{ConvertTobase256(market.supply_apy)}%</h6>
                                        </div>

                                        <div className="market_list_main" >
                                            <h4 style={{
                                                display:"flex",
                                                alignItems:'center'
                                            }} >
                                                <BsBank style={{
                                                    width:"1rem",
                                                    height:"1rem",
                                                    marginRight:'.5rem'
                                                }} />
                                                Total borrowed</h4>
                                            <h6>{ConvertTobase256(market.totalborrowassset)} {market.loan_token_symbol}</h6> 
                                        </div>

                                        <div className="market_list_main" style={{
                                            borderBottom:"1px solid gray",
                                            paddingBottom:".5rem"
                                        }} >
                                            <h4 style={{
                                                display:"flex",
                                                alignItems:'center'
                                            }} >
                                                <FaHandshake style={{
                                                    width:"1.2rem",
                                                    height:"1.2rem",
                                                    marginRight:'.5rem'
                                                }} />
                                                Borrow APY</h4>
                                            <h6>{ConvertTobase256(market.borrow_apy)}%</h6>
                                        </div>

                                        <button onClick={ () => {
                                            getCollateralBalance(market.loan_token_address)
                                            SupplyAssetUser(market)
                                            setopenModal(true)
                                            setanalysisMarket(market)
                                        } } >
                                            View details
                                        </button>

                                    </div>

                                );

                            } )
                        
                            :
                        
                            pageLoading ? <Spin/>

                            :


                            <div className="dappDashboard_nowallet" style={{ display: isWeb3Enabled ? 'none' : 'block' }} >

                                <h4>Sign In</h4>

                                <h6>Connect your wallet to start earning</h6>

                                <button onClick={ isWeb3Enabled ? closeWeb3 : enableWeb3 } >
                                    { isWeb3Enabled ? displayAccount : 'Connect Wallet' }
                                </button>

                            </div>

                        
                        }

                    </div>

                </div>

                <div className="back_drop_borrow" style={{ display: openModal ? 'block' : 'none' }} onClick={ () => setopenModal(false) } >

                </div>

                <div className="side_div_nav" style={{
                    display: openModal ? 'block' : 'none'
                }} >

                    { analysisMarket ?
                    
                    
                    
                    <>
                    
                    <FaArrowLeft style={{
                        color:'white'
                    }} className="side_div_nav_back" onClick={ () => setopenModal(false) } />

                    <div className="side_div_nav_title" >
                        {/* <img src={DaiImg} className="side_div_nav_title_left" /> */}
                        <div className="side_div_nav_title_right" >
                            <h4>{analysisMarket.loan_token_name}/{analysisMarket.collateral_token_name}</h4>
                            <h5>{analysisMarket.loan_token_symbol}/{analysisMarket.collateral_token_symbol}</h5>
                        </div>
                    </div>

                    <div className="side_div_nav_tabs" >

                        <div className="side_div_nav_tabs_div" >
                            <h5>Borrow APY</h5>
                            <h6>{ConvertTobase256(analysisMarket.borrow_apy,10)}%</h6>
                        </div>

                        <div className="side_div_nav_tabs_div" >
                            <h5>Supply APY</h5>
                            <h6>{ConvertTobase256(analysisMarket.supply_apy,10)}%</h6>
                        </div>

                    </div>

                    <h5 className="side_div_nav_more" >More Details</h5>

                    <div className="side_div_nav_token_info" >
                        <div className="side_div_nav_token_info_w" >
                            <BsBank className="sside_div_nav_token_info_w_ic" />
                        </div>
                        <div className="side_div_nav_token_info_right" >
                            <h5>Collateral Token:</h5>
                            <h4>{analysisMarket.collateral_token_name}({analysisMarket.collateral_token_symbol})</h4>
                        </div>
                    </div>

                    <div className="side_div_nav_token_info" >
                        <div className="side_div_nav_token_info_w" >
                            <FaExchangeAlt className="sside_div_nav_token_info_w_ic" />
                        </div>
                        <div className="side_div_nav_token_info_right" >
                            <h5>Loan Token:</h5>
                            <h4>{analysisMarket.loan_token_name}({analysisMarket.loan_token_symbol})</h4>
                        </div>
                    </div>

                    <div className="side_div_nav_tabs" >

                        <div className="side_div_nav_tabs_div" >
                            <h5>Total Market Borrow</h5>
                            <h6>{ ConvertTobase256(analysisMarket.totalborrowassset,10) } {analysisMarket.loan_token_symbol}</h6>
                        </div>

                        <div className="side_div_nav_tabs_div" >
                            <h5>Total Market Supply</h5>
                            <h6>{ ConvertTobase256(analysisMarket.totalsupplyasset,2) } {analysisMarket.loan_token_symbol}</h6>
                        </div>

                    </div>

                    <h5 className="side_div_nav_more" >Action</h5>

                    <div className="borrow_dialog_main_2div_part" style={{
                        marginTop:'2rem'
                    }} >

                        <h4 className="borrow_dialog_main_2div_part_top" >{ currentBalnce} {analysisMarket.loan_token_symbol}</h4>
                        <div className="borrow_dialog_main_2div_part_btm" >

                            {/* <div className="borrow_dialog_main_2div_part_btm_left" >
                                <h4>Debt ({})</h4>
                            </div> */}

                            <div className="borrow_dialog_main_2div_part_btm_right" style={{
                                width:"100%"
                            }} >
                                <input placeholder="0.00" style={{
                                width:"86%"
                            }} value={collateralAmount} onChange={ (e) => setcollateralAmount(e.target.value) } />
                                <button onClick={ () => setcollateralAmount(currentBalnce) } >Max</button>
                            </div>

                        </div>

                    </div>      

                    <button className="borrow_dialog_main_2div_btn" onClick={ () => HandleSupplyCollateral() } >
                        { isLoading ? <Spin/> : `Supply ${analysisMarket.loan_token_symbol}` }
                    </button>              

                    <div className="borrow_dialog_main_2div_part" style={{
                        marginTop:'2rem'
                    }} >

                        <h4 className="borrow_dialog_main_2div_part_top" >{totaluserSupply} {analysisMarket.loan_token_symbol}</h4>
                        <div className="borrow_dialog_main_2div_part_btm" >

                            {/* <div className="borrow_dialog_main_2div_part_btm_left" >
                                <h4>Debt ({})</h4>
                            </div> */}

                            <div className="borrow_dialog_main_2div_part_btm_right" style={{
                                width:"100%"
                            }} >
                                <input placeholder="0.00" style={{
                                width:"86%"
                            }} value={wcollateralAmount} onChange={ (e) => setwcollateralAmount(e.target.value) } />
                                <button onClick={ () => setwcollateralAmount(totaluserSupply) } >Max</button>
                            </div>

                        </div>

                    </div>      

                    <button className="borrow_dialog_main_2div_btn" onClick={ () => HandlewCollateral() } >
                        { isLoading ? <Spin/> : `Withdraw ${analysisMarket.loan_token_symbol}` }
                    </button> 

                    
                    </>
                    
                    
                    
                    : <Spin/> }

                </div>

            </div>
        </>

    );

}

export default DappEarn;