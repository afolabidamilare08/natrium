import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import DappIndex from './pages/dapp/dappIndex.jsx'
import DappDashboard from './pages/dapp/dappDashboard.jsx'
import DappBorrow from './pages/dapp/dappBorrow.jsx'
import DappEarn from './pages/dapp/dappEarn.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dapp' element={ <DappIndex/> } />
        <Route path='/dashboard' element={ <DappIndex
          Component={<DappDashboard/>}
        /> } />
        <Route path='/borrow' element={ <DappIndex
          Component={<DappBorrow/>}
        /> } />
        <Route path='/earn' element={ <DappIndex
          Component={<DappEarn/>}
        /> } />
      </Routes>
    </>
  )
}

export default App
