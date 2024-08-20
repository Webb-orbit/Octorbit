import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ShootingStars } from "./compos/utiles/Shooting"
import { StarsBackground } from "./compos/utiles/Starbackround"
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/configstore.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ShootingStars/>
    <StarsBackground starDensity={0.00015}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
