import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './sass/index.scss';
import './assets/fonts/fractul/Fractul-Regular.ttf'
import './assets/fonts/fractul/Fractul-SemiBold.ttf'
import './assets/fonts/fractul/Fractul-Bold.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
