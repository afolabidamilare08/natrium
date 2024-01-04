import DappHeader from "../../components/dappHeader";
import WeiImg from '../../assets/wei.png';
import DaiImg from '../../assets/dai.png';

const DappDashboard = () => {

    return (

        <div className="dappDashboard" >
            <DappHeader
                subTitle={"Manage Your Positions"}
                title={"Position"}
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

                    <div className="dashTable" >

                        <div className="dashTable_top" >

                            <h4 className="dashTable_top_1" >Market</h4>
                            <h5 className="dashTable_top_2" >Collateral </h5>

                        </div>

                    </div>                    

            </div>

        </div>

    );

}

export default DappDashboard;