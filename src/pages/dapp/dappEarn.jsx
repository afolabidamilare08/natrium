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

const DappEarn = () => {

    return (

        <div className="dappDashboard" >
            <DappHeader
                subTitle={""}
                title={"Earn"}
            />

            <div className="earn_body" >

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

                <div className="earn_body_foot" >

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

                            <button>Supply</button>

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

            </div>

        </div>

    );

}

export default DappEarn;