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
import { FaSearch, FaArrowLeft, FaExchangeAlt } from "react-icons/fa";
import { Spin, Modal } from 'antd';
import { BsBank } from "react-icons/bs";

const DappEarn = () => {

    const { sideNav, UpdatesideNav, user_account, main_contract, signer, irm_contract, market_info_contract ,oracle_contract,notification } = useContext(AppContext)

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

    const ConvertTobase256 = (unit_number) => {
        const TheNumber = Number(unit_number)/10**18
        return(TheNumber)
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

    const getMarket = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                main_contract,
                Abi.Main_contract_abi,
                mainS
            )

            const getMarketdetail = await contract.market('0xc6b6b56565ae8aba1d1efdab684a200229d84e523fb50a41431a89964058470c')

            console.log('Market - detail',getMarketdetail[0])

            let x = Number(getMarketdetail[0])

            let y = x/10**18

            console.log('Market - detail',y)

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

    const SupplyAssetUser = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const supplyAssetuserHadeler = await contract.supplyAssetsUser({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            },user_account)

            console.log('supplyAssetUser',ConvertTobase256(supplyAssetuserHadeler))

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

    const getsupplyAPY = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const getSupplyAPY = await contract.supplyAPY({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            },{
                market:'0xc6b6b56565ae8aba1d1efdab684a200229d84e523fb50a41431a89964058470c',
                totalSupplyAssets:'60000000039619031766',
                totalSupplyShares:'59999998851048650800568091',
                totalBorrowAssets:'39619031766',
                totalBorrowShares:'39595891350178177',
                lastUpdate:'1705376964',
                fee:'0'
            })

            let y = Number(getSupplyAPY) /10**18

            console.log('supply-apy',y.toString())

        }
        catch(error){
            console.log(error)
        }

    }

    const getBorrowAPY = async () => {

        try{

            const mainS = await signer()

            const contract = new ethers.Contract(
                market_info_contract,
                Abi.Market_details_abi,
                mainS
            )

            const getBorrowAPY = await contract.borrowAPY({
                loanToken:loanToken,
                collateralToken:collateralToken,
                oracle:oracle_contract,
                irm:irm_contract,
                lltv:lltv,
            },{
                market:'0xc6b6b56565ae8aba1d1efdab684a200229d84e523fb50a41431a89964058470c',
                totalSupplyAssets:'60000000039619031766',
                totalSupplyShares:'59999998851048650800568091',
                totalBorrowAssets:'39619031766',
                totalBorrowShares:'39595891350178177',
                lastUpdate:'1705376964',
                fee:'0'
            })

            let y = Number(getBorrowAPY) /10**18

            console.log('borrow-apy',y.toString())

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
                            <input type="search" placeholder="Search for markets" />
                            <button>
                                <FaSearch className="search_ic" />
                                Search
                            </button>
                        </div>


                        <div className="featured_tag" >Featured Markets</div>

                        <div className="borrowTable" style={{
                            // border:'1px solid red',
                            // margin:"1rem auto",
                            // width:"fit-content"
                        }} >

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
                    </div>

                    <button onClick={ () => getBorrowAPY() } >
                        get BorrowAPY
                    </button>

                    <button onClick={ () => getsupplyAPY() } >
                        get SupplyAPY
                    </button>

                    <button onClick={ () => getMarket() } >
                        get market details
                    </button>

                    <button onClick={ () => BorrowAssetUser() } >
                        get user borrow asset
                    </button>

                    <button onClick={ () => SupplyAssetUser() } >
                        get user supply asset
                    </button>

                    <button onClick={ () => CollateralAssetUser() } >
                        get user collateral asset
                    </button>

                    <button onClick={ () => MarketTotalBorrow() } >
                        get total market borrow
                    </button>

                    <button onClick={ () => MarketTotalSupply() } >
                        get total market supply
                    </button>

                    <button onClick={ () => userHealthFactor() } >
                        user health Factor
                    </button>

                    {/* <div className="earn_body_foot" style={{
                        justifyContent:'center'
                    }} >

                        <div className="earn_body_foot_div" >

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

                        </div>

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

                                <Link>View Vault</Link>

                            </div>

                        </div> 

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

                        </div>

                    </div>
{/* 
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
                    
                    </div> */}

                </div>

                <div className="back_drop_borrow" style={{ display: openModal ? 'block' : 'none' }} onClick={ () => setopenModal(false) } >

                </div>

                <div className="side_div_nav" style={{
                    display: openModal ? 'block' : 'none'
                }} >

                    <FaArrowLeft style={{
                        color:'white'
                    }} className="side_div_nav_back" onClick={ () => setopenModal(false) } />

                    <div className="side_div_nav_title" >
                        <img src={DaiImg} className="side_div_nav_title_left" />
                        <div className="side_div_nav_title_right" >
                            <h4>wETH</h4>
                            <h5>Wrappeth Ethereum</h5>
                        </div>
                    </div>

                    <div className="side_div_nav_tabs" >

                        <div className="side_div_nav_tabs_div" >
                            <h5>Borrow APY</h5>
                            <h6>2.2%</h6>
                        </div>

                        <div className="side_div_nav_tabs_div" >
                            <h5>Supply APY</h5>
                            <h6>1.2%</h6>
                        </div>

                    </div>

                    <h5 className="side_div_nav_more" >More Details</h5>

                    <div className="side_div_nav_token_info" >
                        <div className="side_div_nav_token_info_w" >
                            <BsBank className="sside_div_nav_token_info_w_ic" />
                        </div>
                        <div className="side_div_nav_token_info_right" >
                            <h5>Collateral Token:</h5>
                            <h4>Wrapped Etherumn</h4>
                        </div>
                    </div>

                    <div className="side_div_nav_token_info" >
                        <div className="side_div_nav_token_info_w" >
                            <FaExchangeAlt className="sside_div_nav_token_info_w_ic" />
                        </div>
                        <div className="side_div_nav_token_info_right" >
                            <h5>Loan Token:</h5>
                            <h4>DAI</h4>
                        </div>
                    </div>

                    <div className="side_div_nav_tabs" >

                        <div className="side_div_nav_tabs_div" >
                            <h5>Total Market Borrow</h5>
                            <h6>200wEth</h6>
                        </div>

                        <div className="side_div_nav_tabs_div" >
                            <h5>Total Market Borrow</h5>
                            <h6>30wEth</h6>
                        </div>

                    </div>

                    <h5 className="side_div_nav_more" >Action</h5>

                    <div className="borrow_dialog_main_2div_part" style={{
                        marginTop:'2rem'
                    }} >

                        <h4 className="borrow_dialog_main_2div_part_top" >{'4000'} {'wEth'}</h4>
                        <div className="borrow_dialog_main_2div_part_btm" >

                            {/* <div className="borrow_dialog_main_2div_part_btm_left" >
                                <h4>Debt ({})</h4>
                            </div> */}

                            <div className="borrow_dialog_main_2div_part_btm_right" style={{
                                width:"100%"
                            }} >
                                <input placeholder="0.00" style={{
                                width:"86%"
                            }} />
                                <button >Max</button>
                            </div>

                        </div>

                    </div>      

                    <button className="borrow_dialog_main_2div_btn" >
                        { isLoading ? <Spin/> : 'Supply wEth' }
                    </button>              

                    <div className="borrow_dialog_main_2div_part" style={{
                        marginTop:'2rem'
                    }} >

                        <h4 className="borrow_dialog_main_2div_part_top" >{'4000'} {'wEth'}</h4>
                        <div className="borrow_dialog_main_2div_part_btm" >

                            {/* <div className="borrow_dialog_main_2div_part_btm_left" >
                                <h4>Debt ({})</h4>
                            </div> */}

                            <div className="borrow_dialog_main_2div_part_btm_right" style={{
                                width:"100%"
                            }} >
                                <input placeholder="0.00" style={{
                                width:"86%"
                            }} />
                                <button >Max</button>
                            </div>

                        </div>

                    </div>      

                    <button className="borrow_dialog_main_2div_btn" >
                        { isLoading ? <Spin/> : 'Withdraw wEth' }
                    </button> 

                </div>

            </div>
        </>

    );

}

export default DappEarn;