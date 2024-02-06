import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import DappIndex from './pages/dapp/dappIndex.jsx'
import DappDashboard from './pages/dapp/dappDashboard.jsx'
import DappBorrow from './pages/dapp/dappBorrow.jsx'
import DappEarn from './pages/dapp/dappEarn.jsx'
import AppContext from './context/Appcontext.js'
import { useEffect, useState } from 'react';
import { BrowserProvider} from 'ethers'
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { notification, Spin, Alert } from 'antd';
import Logo from './assets/logo.png';



const projectId = '32121bc8ba9246846aca6559ee919e08'

// 2. Set chains
const chains = ['11155111']

// 3. Create modal
const metadata = {
  name: 'Natruim',
  description: 'Next-gen permissionless  primitive money market. Powered by Blast L2',
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
  // const main_contract = '0x44f2b80cb371f5d6c54029550c4d22c78fe28719'
  // const market_info_contract = '0xBF25F8076f095F4e7EA057A3CF7b1dC92b967c91'
  // const oracle_contract = '0xF6AaDF014E01f438B8559c1A743D6b2c4f2d456E'
  // const irm_contract = '0x9eD4EDF314EEC268AE5f08e1E256a21fD387D1E9'

  const main_contract = '0x4D58545e95358DFF29d4848498DB5ddF3D34353b'
  const market_info_contract = '0x77A71E11e8038E425768dd4aB7D7BBf6717E5693'
  const oracle_contract = '0x5B1b6f96360b3Ca3C7018DB4d3A59Eb8784297F1'
  const irm_contract = '0x610953a3252a19acbc0e9a5c23ADE69b55AE76e2'

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
        backgroundColor:"black",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }} >


        <div style={{
          display:'flex',
          alignItems:"center"
        }} >
          <img src={Logo} style={{
            width:'5rem',
            height:'5rem',
            marginRight:'.5rem'
          }} />
          <h5 style={{
            color:"#169570",
            fontWeight:'600',
            fontSize:'2rem'
          }} >Natrium</h5>
        </div>

        <Spin size='large' style={{
          marginTop:"1rem",
          color:"white"
        }} tip="Loading Dapp" >

{/* <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      /> */}
        </Spin>

      </div> : <Routes>
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
