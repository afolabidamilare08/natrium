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

                    <div className="dappDashboard_table" style={{
                        // width:"100px",
                        // overflowX:"scroll"
                    }} >

                        <div className="dappDashboard_table_top" style={{
                            // flexWrap:"wrap",
                        }} >

                            <div className="dappDashboard_table_top_market" >Market</div>
                            <div className="dappDashboard_table_top_asset" >Collateral Asset</div>
                            <div className="dappDashboard_table_top_loan" >Loan Asset</div>
                            <div className="dappDashboard_table_top_lltv" >LLTV</div>
                            <div className="dappDashboard_table_top_liquidity" >Liquidity Price</div>
                            <div className="dappDashboard_table_top_rewards" >Rate & Rewards</div>
                            {/* <div className="dappDashboard_table_top_rewards" >Market ID</div> */}

                        </div>

                        <div className="dappDashboard_table_row" style={{
                            // overflowX:"auto",
                            // flexWrap:"nowrap"
                            // justifyContent:"flex-start"
                        }} >

                            <div className="dappDashboard_table_row_market" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>
                            <div className="dappDashboard_table_row_asset" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.00 DAI</h5>
                            </div>
                            <div className="dappDashboard_table_row_loan" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.00 WETH</h5>
                            </div>
                            <div className="dappDashboard_table_row_lltv" >
                                <h5>90.00%</h5>
                            </div>
                            <div className="dappDashboard_table_row_liquidity" >
                                <h5>Infinity</h5>
                            </div>
                            <div className="dappDashboard_table_row_rewards" >
                                <h5>3.47%</h5>
                            </div>
                            {/* <div className="dappDashboard_table_row_rewards" >
                                <h5>0x3098...d5a0</h5>
                            </div> */}

                        </div>

                        <div className="dappDashboard_table_btm" >

                        </div>

                    </div>

            </div>

        </div>

    );

}

export default DappBorrow;