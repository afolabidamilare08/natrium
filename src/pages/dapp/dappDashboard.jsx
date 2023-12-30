import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';

const DappDashboard = () => {

    return (

        <div className="dappDashboard" >
            <DappHeader
                subTitle={"Manage Your Positions"}
                title={"Dashboard"}
            />

            <div className="dappDashboard_body" >

                {/* <div className="dappDashboard_nowallet" >

                                <h4>Sign In</h4>

                                <h6>Connect your wallet to see your positions</h6>

                                <button>
                                    Connect Wallet
                                </button>

                            </div> */}

                    <div className="dappDashboard_colored" >
                        Earn
                    </div>

                    {/* <div className="dappDashboard_empty" >

                        <h6>You have no open  positions</h6>

                        <button>
                            Open New Position
                        </button>

                    </div> */}

                    <div className="dappDashboard_table" >

                        <div className="dappDashboard_table_top" >

                            <div className="dappDashboard_table_top_value" >
                                Value
                            </div>

                            <div className="dappDashboard_table_top_rate" >
                                Rate
                            </div>

                            <div className="dappDashboard_table_top_balance" >
                                Balance
                            </div>

                            <div className="dappDashboard_table_top_btn" >
                                {/* Balance */}
                            </div>

                        </div>

                        <div className="dappDashboard_table_row" >

                            <div className="dappDashboard_table_row_value" >
                                <img src={WeiImg} alt="Img" />
                                <h5>Default Goerli USDC MetaMorpho</h5>
                            </div>

                            <div className="dappDashboard_table_row_rate" >
                                <h5>0.00%</h5>
                            </div>

                            <div className="dappDashboard_table_row_balance" >
                                <img src={WeiImg} alt="Img" />
                                <h5>2.00 USDC</h5>
                            </div>

                            <div className="dappDashboard_table_row_btn" >

                                <button className="dappDashboard_table_row_btn_supply" >Supply</button>
                                <button className="dappDashboard_table_row_btn_with" >Withdraw</button>

                            </div>

                        </div>

                        <div className="dappDashboard_table_row" >

                            <div className="dappDashboard_table_row_value" >
                                <img src={WeiImg} alt="Img" />
                                <h5>Default Goerli USDC MetaMorpho</h5>
                            </div>

                            <div className="dappDashboard_table_row_rate" >
                                <h5>0.00%</h5>
                            </div>

                            <div className="dappDashboard_table_row_balance" >
                                <img src={WeiImg} alt="Img" />
                                <h5>2.00 USDC</h5>
                            </div>

                            <div className="dappDashboard_table_row_btn" >

                                <button className="dappDashboard_table_row_btn_supply" >Supply</button>
                                <button className="dappDashboard_table_row_btn_with" >Withdraw</button>

                            </div>

                        </div>

                        <div className="dappDashboard_table_row" >

                            <div className="dappDashboard_table_row_value" >
                                <img src={WeiImg} alt="Img" />
                                <h5>Default Goerli USDC MetaMorpho</h5>
                            </div>

                            <div className="dappDashboard_table_row_rate" >
                                <h5>0.00%</h5>
                            </div>

                            <div className="dappDashboard_table_row_balance" >
                                <img src={WeiImg} alt="Img" />
                                <h5>2.00 USDC</h5>
                            </div>

                            <div className="dappDashboard_table_row_btn" >

                                <button className="dappDashboard_table_row_btn_supply" >Supply</button>
                                <button className="dappDashboard_table_row_btn_with" >Withdraw</button>

                            </div>

                        </div>

                        <div className="dappDashboard_table_btm" >

                        </div>

                    </div>

                    <div className="dappDashboard_colored" style={{
                        marginTop:'6rem'
                    }} >
                        Borrow
                    </div>

                    <h5 className="scroll_toLeft" >Scroll to the right to view more ...</h5>

                    {/* <div className="dappDashboard_empty" >

                        <h6>You have no open  positions</h6>

                        <button>
                            Open New Position
                        </button>

                    </div> */}

                    <div className="dappDashboard_table" style={{
                        overflow:"auto",
                    }} >

                        <div className="dappDashboard_table_top dappTable_top" style={{
                            overflow:"auto",
                        }} >

                            <div className="dappDashboard_table_top_market" >Market</div>
                            <div className="dappDashboard_table_top_asset" >Collateral Asset</div>
                            <div className="dappDashboard_table_top_loan" >Loan Asset</div>
                            <div className="dappDashboard_table_top_lltv" >LLTV</div>
                            <div className="dappDashboard_table_top_liquidity" >Liquidity Price</div>
                            <div className="dappDashboard_table_top_rewards" >Rate & Rewards</div>

                        </div>

                        <div className="dappDashboard_table_row dappTable_row" style={{
                            overflowX:"auto",
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

                        </div>

                        <div className="dappDashboard_table_btm" >

                        </div>

                    </div>

            </div>

        </div>

    );

}

export default DappDashboard;