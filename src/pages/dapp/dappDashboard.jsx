import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';

const DappDashboard = () => {

    return (

        <div className="dappDashboard" >
            <DappHeader/>

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

                        <div className="dappDashboard_table_btm" >

                        </div>

                    </div>

                    <div className="dappDashboard_colored" >
                        Borrow
                    </div>

                    <div className="dappDashboard_empty" >

                        {/* <h4>Sign In</h4> */}

                        <h6>You have no open  positions</h6>

                        <button>
                            Open New Position
                        </button>

                    </div>

            </div>

        </div>

    );

}

export default DappDashboard;