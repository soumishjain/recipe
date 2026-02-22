import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './context/Context.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
    <App />
    <ToastContainer />
    </BrowserRouter>
  </Context>
)
