import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import DappIndex from './pages/dapp/dappIndex.jsx'
import DappDashboard from './pages/dapp/dappDashboard.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dapp' element={ <DappIndex/> } />
        <Route path='/dashboard' element={ <DappIndex
          Component={<DappDashboard/>}
        /> } />
      </Routes>
    </>
  )
}

export default App
