import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';
import { useContext } from "react";
import AppContext from "../../context/Appcontext";

const DappDashboard = () => {

    const { UpdatesideNav, closeWeb3, displayAccount, enableWeb3, isWeb3Enabled } = useContext(AppContext)

    return (

        <div className="dappDashboard" >
            <DappHeader
                subTitle={"Your Positions"}
                title={"Position"}
            />

            <div className="dappDashboard_body" >

                <div className="dappDashboard_nowallet" style={{ display: isWeb3Enabled ? 'none' : 'block' }} >

                    <h4>Sign In</h4>

                    <h6>Connect your wallet to see your positions</h6>

                    <button onClick={ isWeb3Enabled ? closeWeb3 : enableWeb3 } >
                        { isWeb3Enabled ? displayAccount : 'Connect Wallet' }
                    </button>

                </div>

                    {/* <div className="dappDashboard_colored" >
                        Earn
                    </div> */}

                    {/* <div className="dappDashboard_empty" >

                        <h6>You have no open  positions</h6>

                        <button>
                            Open New Position
                        </button>

                    </div> */}
{/* 
                    <div className="dashTable" >

                        <div className="dashTable_top" >

                            <h4 className="dashTable_top_1" >Market</h4>
                            <h4 className="dashTable_top_2" >Collateral </h4>
                            <h4 className="dashTable_top_3" >Loan Asset</h4>
                            <h4 className="dashTable_top_4" >LLTV</h4>
                            <h4 className="dashTable_top_5" >Liquidation Price</h4>
                            <h4 className="dashTable_top_5" >Current Price</h4>
                            <h4 className="dashTable_top_6" >Rate</h4>

                        </div>

                        <div className="dashTable_btm" >
                            
                            <div className="dashTable_btm_1" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>

                            <div className="dashTable_btm_2" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.001DAI</h5>
                            </div>

                            <div className="dashTable_btm_3" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.001WETH</h5>
                            </div>

                            <div className="dashTable_btm_4" >
                                <h5>90%</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_6" >
                                <h5>0.35</h5>
                            </div>

                        </div>
                        <div className="dashTable_btm" >
                            
                            <div className="dashTable_btm_1" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>

                            <div className="dashTable_btm_2" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.001DAI</h5>
                            </div>

                            <div className="dashTable_btm_3" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.001WETH</h5>
                            </div>

                            <div className="dashTable_btm_4" >
                                <h5>90%</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_6" >
                                <h5>0.35</h5>
                            </div>

                        </div>
                        <div className="dashTable_btm" >
                            
                            <div className="dashTable_btm_1" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>

                            <div className="dashTable_btm_2" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.001DAI</h5>
                            </div>

                            <div className="dashTable_btm_3" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.001WETH</h5>
                            </div>

                            <div className="dashTable_btm_4" >
                                <h5>90%</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_6" >
                                <h5>0.35</h5>
                            </div>

                        </div>
                        <div className="dashTable_btm" >
                            
                            <div className="dashTable_btm_1" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>

                            <div className="dashTable_btm_2" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.001DAI</h5>
                            </div>

                            <div className="dashTable_btm_3" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.001WETH</h5>
                            </div>

                            <div className="dashTable_btm_4" >
                                <h5>90%</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_6" >
                                <h5>0.35</h5>
                            </div>

                        </div>
                        <div className="dashTable_btm" >
                            
                            <div className="dashTable_btm_1" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>

                            <div className="dashTable_btm_2" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.001DAI</h5>
                            </div>

                            <div className="dashTable_btm_3" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.001WETH</h5>
                            </div>

                            <div className="dashTable_btm_4" >
                                <h5>90%</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_6" >
                                <h5>0.35</h5>
                            </div>

                        </div>
                        <div className="dashTable_btm" >
                            
                            <div className="dashTable_btm_1" >
                                <img src={DaiImg} alt="ing" />
                                <img src={WeiImg} alt="ing" />
                                <h5>WETH (DAI, 90%)</h5>
                            </div>

                            <div className="dashTable_btm_2" >
                                <img src={WeiImg} alt="ing" />
                                <h5>0.001DAI</h5>
                            </div>

                            <div className="dashTable_btm_3" >
                                <img src={DaiImg} alt="ing" />
                                <h5>0.001WETH</h5>
                            </div>

                            <div className="dashTable_btm_4" >
                                <h5>90%</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_5" >
                                <h5>0.0002WETH/DAI</h5>
                            </div>

                            <div className="dashTable_btm_6" >
                                <h5>0.35</h5>
                            </div>

                        </div>

                    </div>                     */}

            </div>

        </div>

    );
}

export default DappDashboard;