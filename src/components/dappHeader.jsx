import { useContext } from 'react';
import EthImg from '../assets/eth.png';
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import AppContext from '../context/Appcontext';

const DappHeader = ({
    title,
    subTitle
}) => {

    const { UpdatesideNav, closeWeb3, displayAccount, enableWeb3, isWeb3Enabled } = useContext(AppContext)

    return (

        <div className="dappHeader" >

            <div className="dappHeader_left" >
                <RxHamburgerMenu className='dappHeader_left_ic' onClick={ () => UpdatesideNav() } />
                <h4>{title}</h4>
                { subTitle === '' ? <></> : <button>{subTitle}</button> }
            </div>

            <div className='dappHeader_right' >

                <div className='tokenChange' >

                    <img src={EthImg} alt='img' />
                    <h4>ETH</h4>
                    <FaAngleDown className='tokenChange_ic' />

                </div>

                <button className='dappHeader_right_connect' onClick={ isWeb3Enabled ? closeWeb3 : enableWeb3 } style={{ cursor: 'pointer' }} >
                    { isWeb3Enabled ? displayAccount : 'Connect Wallet' }
                </button>

            </div>

        </div>

    );

}

export default DappHeader;