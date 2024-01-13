import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import DappIndex from './pages/dapp/dappIndex.jsx'
import DappDashboard from './pages/dapp/dappDashboard.jsx'
import DappBorrow from './pages/dapp/dappBorrow.jsx'
import DappEarn from './pages/dapp/dappEarn.jsx'
import AppContext from './context/Appcontext.js'
import { useState } from 'react';
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider,   } from '@web3modal/ethers/react'



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
  const { open, close } = useWeb3Modal();

  const [ openComingSoon, setOpenComingSoon ] = useState(false)

  const { address, chainId, isConnected,   } = useWeb3ModalAccount();

  // const { signer, walletProvider } = useWeb3ModalSigner()

  const RpcUrl = 'https://arbitrum-goerli.infura.io/v3/a9999d0d4a744c9b893ae34318117d25'


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

  return (
    <AppContext.Provider value={{
      sideNav:sideNav,
      enableWeb3: () => open(),
      UpdatesideNav: () => setsideNav(!sideNav),
      closeWeb3:clearCacheData,
      isWeb3Enabled: isConnected,
      user_account: address,
      displayAccount: userWalletAddress,
      // signer:signer,
      walletProvider:useWeb3ModalProvider,
      RpcUrl:RpcUrl,
    }} >
      <Routes>
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
    </AppContext.Provider>
  )
}

export default App
