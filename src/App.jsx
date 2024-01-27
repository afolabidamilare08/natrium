import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import DappIndex from './pages/dapp/dappIndex.jsx'
import DappDashboard from './pages/dapp/dappDashboard.jsx'
import DappBorrow from './pages/dapp/dappBorrow.jsx'
import DappEarn from './pages/dapp/dappEarn.jsx'
import AppContext from './context/Appcontext.js'
import { useEffect, useState } from 'react';
import { BrowserProvider} from 'ethers'
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'
import { notification, Spin } from 'antd';



const projectId = '32121bc8ba9246846aca6559ee919e08'

// 2. Set chains
const chains = [11155111]

// 3. Create modal
const metadata = {
  name: 'Natruim',
  description: 'Innovative DeFi tool for secure OTC trading experience',
  url: 'https://www.natruimdapp.xyz',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains,
  projectId
})


function App() {

  const [ sideNav, setsideNav ] = useState(false)
  const { open } = useWeb3Modal();
  const { walletProvider } = useWeb3ModalProvider()
  const { address, isConnected,   } = useWeb3ModalAccount();
  const main_contract = '0x44F2b80cb371F5D6C54029550c4d22c78FE28719'
  const market_info_contract = '0xBF25F8076f095F4e7EA057A3CF7b1dC92b967c91'
  const oracle_contract = '0xF6AaDF014E01f438B8559c1A743D6b2c4f2d456E'
  const irm_contract = '0x9eD4EDF314EEC268AE5f08e1E256a21fD387D1E9'

  const reSigner = async () => {
    const provider = new BrowserProvider(walletProvider)
    const signer = await provider.getSigner()
    return signer
  }

  const [ Loading, setLoading ] = useState(true)

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (NotificationType,title,description) => {
    api[NotificationType]({
      message: title,
      description:
        description,
    });
  };

  const RpcUrl = 'https:// https://sepolia.blast.io/v3/a9999d0d4a744c9b893ae34318117d25'


  var userWalletAddress ;

  if ( address ) {
      var addressLength = address.length - 1
      userWalletAddress = `${address[0]}${address[1]}${address[2]}${address[3]}${address[4]}${address[5]}...${address[addressLength-3]}${address[addressLength-2]}${address[addressLength-1]}${address[addressLength]}`
  }else{
    userWalletAddress = null
  }


  const clearCacheData = () => {
    localStorage.clear()
    window.location.reload()
};

useEffect( () => {

  setTimeout(() => {
    setLoading(false)
  }, 6000);

}, [] )

  return (
    <AppContext.Provider value={{
      sideNav:sideNav,
      enableWeb3: () => open(),
      UpdatesideNav: () => setsideNav(!sideNav),
      notification:(NotificationType,title,description) => openNotificationWithIcon(NotificationType,title,description),
      closeWeb3:clearCacheData,
      isWeb3Enabled: isConnected,
      user_account: address,
      displayAccount: userWalletAddress,
      signer:reSigner,
      walletProvider:useWeb3ModalProvider,
      RpcUrl:RpcUrl,
      main_contract:main_contract,
      irm_contract:irm_contract,
      oracle_contract:oracle_contract,
      market_info_contract:market_info_contract
    }} >
        {contextHolder}

      { Loading ? <div style={{
        width:"100%",
        height:'100vh',
        backgroundColor:"black"
      }} ></div> : <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dapp' element={ <DappIndex/> } />
        <Route path='/dashboard' element={ <DappIndex
          Component={<DappDashboard/>}
          path={'dashboard'}
        /> } />
        <Route path='/borrow' element={ <DappIndex
          Component={<DappBorrow/>}
          path={'borrow'}
        /> } />
        <Route path='/earn' element={ <DappIndex
          Component={<DappEarn/>}
          path={'earn'}
        /> } />
      </Routes>
 }

    </AppContext.Provider>
  )
}

export default App
