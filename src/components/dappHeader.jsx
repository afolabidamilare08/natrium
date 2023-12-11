import EthImg from '../assets/eth.png';
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const DappHeader = () => {

    return (

        <div className="dappHeader" >

            <div className="dappHeader_left" >
                <RxHamburgerMenu className='dappHeader_left_ic' />
                <h4>Dashboard</h4>
                <button>Manage Your Positions</button>
            </div>

            <div className='dappHeader_right' >

                <div className='tokenChange' >

                    <img src={EthImg} alt='img' />
                    <h4>ETH</h4>
                    <FaAngleDown className='tokenChange_ic' />

                </div>

                <button className='dappHeader_right_connect' >
                    Connect Wallet
                </button>

            </div>

        </div>

    );

}

export default DappHeader;