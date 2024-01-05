import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import DappIndex from './pages/dapp/dappIndex.jsx'
import DappDashboard from './pages/dapp/dappDashboard.jsx'
import DappBorrow from './pages/dapp/dappBorrow.jsx'
import DappEarn from './pages/dapp/dappEarn.jsx'
import AppContext from './context/Appcontext.js'
import { useState } from 'react'

function App() {

  const [ sideNav, setsideNav ] = useState(false)

  return (
    <AppContext.Provider value={{
      sideNav:sideNav,
      UpdatesideNav: () => setsideNav(!sideNav)
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
