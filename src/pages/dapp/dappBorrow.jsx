import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';

const DappBorrow = () => {

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
                        <button className="borrow_dialog_top_1" >Supply</button>
                        <button className="borrow_dialog_top_2" >withdraw</button>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default DappBorrow;